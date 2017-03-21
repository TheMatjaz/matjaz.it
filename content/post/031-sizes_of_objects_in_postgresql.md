+++
draft = false
changefreq = "monthly"
highlight = true
title = "Tutorial: sizes of tables and databases in PostgreSQL"
type = "post"
priority = 0.5
categories = ["Database"]
aliases = []
weight = 0
tags = ["database", "postgresql", "table", "size", "query", "tutorial"]
lastmod = "2017-03-19T18:08:07+01:00"
date = "2017-03-19T18:08:07+01:00"
slug = "tutorial-sizes-of-tables-and-databases-in-postgresql"
description = "How big are PostgreSQL tables in terms of rows and disk space? Here are some queries to get their sizes."

+++

How big are PostgreSQL tables in terms of rows and disk space? Here are some
queries to get their sizes.


## Number of rows of a table

The correct but also low-performance solution is to count all rows in a table 
with a query such as:

```sql
SELECT count(*)
  FROM table_to_count;
```

When the table becomes large, the count takes a lot of time to run and the less
significant digits may have no useful meaning. E.g. the difference between
3384012984 and 3384012841. It's hard even to see it.

The approximate but also very fast solution requires one simple check of the
system table `pg_stat_user_tables` containing statistical data on the table we
want the amount of rows of. The stats include a column with an estimation of the
number of live rows the table contains.

```sql
SELECT schemaname,
       relname,
       n_live_tup 
  FROM pg_stat_user_tables 
 WHERE schemaname = current_schema
 ORDER BY n_live_tup DESC;
```

Taken from [Stackoverflow](http://stackoverflow.com/a/2611745).



## On-disk size 

The most useful functions to obtain the on-disk sizes for various objects are:

```sql
pg_database_size(database_name)
pg_relation_size(table_name)
pg_column_size(column_name)
```

For better human readability, all those can be enclosed in the
`pg_size_pretty()` function to get kB/MB/GB instead of bytes.


## Putting it all together

Let's merge what we know so far into one query for database sizes and one for
table sizes. The queries are **very useful as views**.


### Size of all PostgreSQL databases

The following query calculates how much space the PostgreSQL database cluster
occupies on your disk and a grand total as last line.

```sql
SELECT pg_database.datname
           AS database_name,
       pg_database_size(pg_database.datname)
           AS database_size_bytes,
       pg_size_pretty(pg_database_size(pg_database.datname))
           AS database_size
  FROM pg_database
 UNION ALL
SELECT 'TOTAL'
           AS database_name,
       sum(pg_database_size(pg_database.datname))
           AS database_size_bytes,
       pg_size_pretty(sum(pg_database_size(pg_database.datname)))
           AS database_size
  FROM pg_database
 ORDER BY database_size_bytes ASC;
```

Inspired by [Stackoverflow](http://stackoverflow.com/a/18907188).


#### Example result

```
 database_name | database_size_bytes | database_size
---------------+---------------------+---------------
 template0     |             7111172 | 6945 kB
 template1     |             7233708 | 7064 kB
 postgres      |             7250092 | 7080 kB
 db1           |             7307436 | 7136 kB
 db2           |             7315628 | 7144 kB
 money         |             8052908 | 7864 kB
 testing       |             8143020 | 7952 kB
 matjaz        |            12984492 | 12 MB
 work          |            16572588 | 16 MB
 another_db    |            32669868 | 31 MB
 TOTAL         |           114640912 | 109 MB
```


### Size of all tables in a schema, with row counts

Here is a nice query that shows the sizes of each table and its related objects
([TOAST data](https://www.postgresql.org/docs/current/static/storage-toast.html),
indices) for humans, including the number of rows and the sum of all sizes.

The number of rows is taken from the stats of the table, to make it faster.

```sql
SELECT stats.relname
           AS table,
       pg_size_pretty(pg_relation_size(statsio.relid))
           AS table_size,
       pg_size_pretty(pg_total_relation_size(statsio.relid) 
           - pg_relation_size(statsio.relid))
           AS related_objects_size,
       pg_size_pretty(pg_total_relation_size(statsio.relid))
           AS total_table_size,
       stats.n_live_tup
           AS live_rows
  FROM pg_catalog.pg_statio_user_tables AS statsio
  JOIN pg_stat_user_tables AS stats
 USING (relname)
 WHERE stats.schemaname = current_schema  -- Replace with any schema name
 UNION ALL
SELECT 'TOTAL'
           AS table,
       pg_size_pretty(sum(pg_relation_size(statsio.relid)))
           AS table_size,
       pg_size_pretty(sum(pg_total_relation_size(statsio.relid) 
           - pg_relation_size(statsio.relid)))
           AS related_objects_size,
       pg_size_pretty(sum(pg_total_relation_size(statsio.relid)))
           AS total_table_size,
       sum(stats.n_live_tup)
           AS live_rows
  FROM pg_catalog.pg_statio_user_tables AS statsio
  JOIN pg_stat_user_tables AS stats
 USING (relname)
 WHERE stats.schemaname = current_schema  -- Replace with any schema name
 ORDER BY live_rows ASC;
```

Inspired by [wiki-bsse.ethz.ch](https://wiki-bsse.ethz.ch/display/ITDOC/Check+size+of+tables+and+objects+in+PostgreSQL+database).


#### Example result

```
       table      | table_size | related_objects_size | total_table_size | live_rows
------------------+------------+----------------------+------------------+-----------
 users            | 25 kB      | 24 kB                | 49 kB            |       100
 authors          | 60 kB      | 24 kB                | 84 kB            |       120
 books            | 800 kB     | 8192 bytes           | 8992 kB          |       500
 authors_of_books | 1000 kB    | 8192 bytes           | 9192 kB          |       800
 TOTAL            | 1885 kB    | 64 kB                | 1949 kB          |      1520
```


## Improve the accuracy of the estimations

Over time the live rows counter may shift more and more away from the true
value. Running `ANALYZE table_name` updates the stats to the current situation.

When it comes to table and database sizes, deletes and updates of the tuples
make the table grow larger for a very simple reason: it's easier (faster) to
occupy more space, leaving empty sections in it after a deletion which can be
then reused. To make a table compact again, the command `VACUUM table_name` has
to be used.

The commands may also be combined into `VACUUM ANALYZE table_name` or even into
`VACUUM FULL ANALYZE` which will run on all tables in a database, at the expense
of requiring an exclusive lock of the table.
