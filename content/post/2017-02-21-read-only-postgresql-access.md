+++
type = "post"
draft = false
title = "Tutorial: read-only PostgreSQL user"
categories = ["Database"]
weight = 0
description = "PostgreSQL is installed, the tables are planned or already created. Now how do I create a read-only user that can access one/some/all tables in a schema but not UPDATE, INSERT or DELETE anything?"
slug = "tutorial-read-only-postgresql-user"
highlight = true
date = "2017-02-21T21:15:23+01:00"
changefreq = "monthly"
aliases = []
lastmod = "2017-02-21T21:15:23+01:00"
priority = 0.5
tags = ["database", "postgresql", "read-only", "user"]

+++

PostgreSQL is installed, the tables are planned or already created. Now how do I
create a read-only user that can access one/some/all tables and views in a
schema but not `UPDATE`, `INSERT` or `DELETE` anything?

In this example I will suppose all the tables are in the schema called
`example_schema` which is part of the database `example_db`. The used PostgreSQL
version is 9.6.


### A note about the `public` schema

If possible use the `public` schema only for stuff that is truly shared with
everything else. Placing the tables and other objects in another schema (or many
other schemas) is a better practice.

Examples of what could stay in the `public` schema: enums for the names of the
months or days in a week, pure functions (a.k.a. `IMMUTABLE` in the PostgreSQL
lingo) not related to any data set, such as one that counts the elements in
an array of integers.


### Search path fix

Before even starting let's fix the search path so we can avoid inserting
the schema name for every query.

{{< code sql >}}
ALTER ROLE some_username
  SET search_path
   TO example_schema, public;
      -- For only one role.
      
ALTER DATABASE example_db
  SET search_path
   TO example_schema, public;
      -- For all users when they connect to the database.
      -- I prefer this one, less administration when new roles are created.
{{< /code >}}


### Create a user for `example_schema` with read-only access

{{< code sql >}}
CREATE ROLE readonly_user
       WITH LOGIN
       ENCRYPTED PASSWORD 'placeAVeryLongPasswordHereWith30+Characters';
       -- Obvious note 1: don't use *this* password.
       -- Obvious note 2: don't store this command into version control.
       
 GRANT CONNECT
    ON DATABASE example_db
    TO readonly_user;
       -- The user can now connect to example_db.
       -- Used in addition to any restrictions from pg_hba.conf.

 GRANT USAGE
    ON SCHEMA example_schema
    TO readonly_user;
       -- The user can now list the objects within the schema.
       -- Otherwise the client tools display an empty schema.
       
 GRANT USAGE
    ON ALL SEQUENCES  -- Alternatively: ON SEQUENCE seq1, seq2, seq3 ...
    IN SCHEMA example_schema
    TO readonly_user;
       -- The user can now see the current values (`currval`) and the next
       -- value (`nextval`) of all the sequences in the schema.
       
 GRANT SELECT
    ON ALL TABLES  -- Alternatively: ON TABLE table1, view1, table2 ...
    IN SCHEMA example_schema
    TO readonly_user;
       -- The user can now SELECT all tables and all views in the schema.
{{< /code >}}


### Grant the same permissions for newly created tables

The above granted permissions work only for the current status of the schema. If
a new table or new view `new_relation` is created, the `readonly_user` will not
be able to query it. The same commands have to be exceuted again `ON TABLE
new_relation` or `ON ALL TABLES`.

Alternatively we can store the setting in the database so that all new objects
should a read-only default permission level for our `readonly_user` on their
generation.

{{< code sql >}}
ALTER DEFAULT PRIVILEGES
   IN SCHEMA example_name
GRANT SELECT
   ON TABLES  -- without the ALL keyword, GRANTs also to views
   TO readonly_user;
   
ALTER DEFAULT PRIVILEGES
   IN SCHEMA example_name
GRANT USAGE
   ON SEQUENCES  -- without the ALL keyword
   TO readonly_user;
{{< /code >}}

### Final note

Now no matter what this user does, it will not be able to change anything in the
database. Be aware it can still read everything it was given permission for.
**Double check that you are blocking the confidential data anyway**.

Hint 1: consider creating views and running `GRANT SELECT` only on those views
instead of on the tables if required. A query to perform exactly that on _all_
views in a schema could be found on
[Chris West's blog](http://cwestblog.com/2012/07/17/postgresql-granting-access-to-all-view/).

Hint 2: with an equivalent approach `INSERT`-only or `DELETE`-only or
`UPDATE`/`UPSERT`-only users can be created as well.

Hint 3: [SQL Style Guide](http://www.sqlstyle.guide/) by Simon Holywell is a 
good resource when it comes to SQL formatting.
