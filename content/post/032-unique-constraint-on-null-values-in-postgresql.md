+++
lastmod = "2017-03-21T20:49:27+01:00"
description = "Distinguishing between NULL values is impossible, as per SQL standard. These are my favorite workarounds for one and multiple columns."
aliases = []
tags = ["database", "postgresql", "null", "unique", "tutorial"]
priority = 0.5
changefreq = "monthly"
slug = "tutorial-unique-constraint-on-null-values-in-postgresql"
draft = false
weight = 0
categories = ["Database"]
type = "post"
title = "Tutorial: UNIQUE constraint on NULL values in PostgreSQL"
date = "2017-03-21T20:49:27+01:00"
highlight = true

+++

Distinguishing between `NULL` values is impossible,
[as per SQL standard](https://en.wikipedia.org/wiki/Null_(SQL)#Comparisons_with_NULL_and_the_three-valued_logic_.283VL.29). These are my favorite workarounds for one and multiple columns.

There is a long discussion on why nullable columns with a `UNIQUE` constraint
can contain multiple `NULL` values. The short version is that `NULL` represents
missing information and comparing a field with missing information with another
makes no sense. Just like comparing two pictures to see if they one the copy of
the other without them existing in the first place.


## Unique nullable column with at most one `NULL`

Let's assume there is an example table as the following:

```sql
CREATE TABLE unique_nulls (
       identifier     SERIAL  PRIMARY KEY,
       nullable_value INTEGER
);
```

Our desire is to place a `UNIQUE` constraint on the `nullable_value` that would
also distinguish between `NULL` values. The end result should be that only one
`NULL` value is allowed in the `nullable_value` column.

To do that, we add two unique partial indices, one for `NOT NULL` values and one
for the `NULL` case on an expression using the `coalesce` function.

```sql
CREATE UNIQUE INDEX unique_nullable_value_when_not_null
    ON unique_nulls
       (nullable_value)
 WHERE nullable_value IS NOT NULL;
CREATE UNIQUE INDEX unique_nullable_value_when_null
    ON unique_nulls
       (coalesce(nullable_value, 0))
 WHERE nullable_value IS NULL;
```

Please note that this solution does not rewrite the `NULL` value in the table
into the default value of the coalesce function, it only uses it for comparison.

Let's test!

```sql
INSERT INTO unique_nulls
            (nullable_value)
VALUES (1), (2), (NULL);

SELECT *
  FROM unique_nulls;
  
--  identifier | nullable_value
-- ------------+----------------
--           1 |              1
--           2 |              2
--           3 |           NULL

INSERT INTO unique_nulls
       (nullable_value)
VALUES (1);
-- Fails as expected: 1 is already inserted.

INSERT INTO unique_nulls
       (nullable_value)
VALUES (NULL);
-- Fails as expected: NULL is already inserted.
```


## Multi-column unique constraint with one nullable column

Let's assume there is an example table as the following:

```sql
CREATE TABLE unique_nulls_multicolumn (
       identifier     SERIAL  PRIMARY KEY,
       a              INTEGER NOT NULL,
       b              INTEGER NOT NULL,
       nullable_value INTEGER
);
```

Now we want to is to place a constraint like `UNIQUE (a, b, nullable_value)`
that would again also distinguish between `NULL` values. The end result should
be that only one tuple `(a_value, b_value, NULL)` is allowed.

We can obtain it with a similar approach as above. Since we have multiple
columns, there is no need to use the `coalesce` function in this case.

```sql
CREATE UNIQUE INDEX unique_a_b_when_not_null
    ON unique_nulls_multicolumn
       (a, b, nullable_value)
 WHERE nullable_value IS NOT NULL;
CREATE UNIQUE INDEX unique_a_b_when_null
    ON unique_nulls_multicolumn
       (a, b)
 WHERE nullable_value IS NULL;
```

Algorithm taken from
[Stackoverflow](http://stackoverflow.com/a/8289253/5292928).

Let's test!

```sql
INSERT INTO unique_nulls_multicolumn
       (a, b, nullable_value)
VALUES (1, 2, 3), 
       (1, 2, 4),
       (1, 2, NULL),
       (1, 3, NULL);

SELECT *
  FROM unique_nulls_multicolumn;

--  identifier | a | b | nullable_value
-- ------------+---+---+----------------
--           1 | 1 | 2 |              3
--           2 | 1 | 2 |              4
--           3 | 1 | 2 |           NULL
--           4 | 1 | 3 |           NULL

INSERT INTO unique_nulls_multicolumn
       (a, b, nullable_value)
VALUES (1, 2, 3);
-- Fails as expected: (1, 2, 3) is already inserted.

INSERT INTO unique_nulls_multicolumn
       (a, b)
VALUES (1, 2);
-- Fails as expected: (1, 2, NULL) is already inserted.
-- It does not conflict with (1, 2, 3) or (1, 2, 4).
```


### Single-index alternative

Please note, [as mentioned here](http://stackoverflow.com/a/8289327/5292928),
that a single-index solution with `coalesce` could also be used, but it requires
a default value for the `coalesce` function that is **outside the domain** of
the nullable column.

For example, if we suppose that the `nullable_value` does not contain negative
values, we can simplify the indices:

```sql
 ALTER TABLE unique_nulls_multicolumn
   ADD CONSTRAINT non_negative_nullable_value
            CHECK (nullable_value >= 0);

  DROP INDEX unique_a_b_when_not_null;
  DROP INDEX unique_a_b_when_null;
CREATE UNIQUE INDEX unique_multicolumns
    ON unique_nulls_multicolumn
       (a, b, coalesce(nullable_value, -1));
```
