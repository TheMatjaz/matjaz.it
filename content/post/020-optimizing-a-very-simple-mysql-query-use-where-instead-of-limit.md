+++
aliases      = []
categories   = ["Sysadmin"]
date         = "2016-04-02T12:03:33+00:00"
description  = "A friend had problems with MySQL because it was not using an existing index for a query. A huge number of queries were rebuild into one which was 4000x faster than each of the previous ones."
draft        = false
highlight    = true
lastmod      = "2016-07-08T13:58:39+02:00"
slug         = "optimizing-a-very-simple-mysql-query-use-where-instead-of-limit"
tags         = ["Software", "MySQL", "Database", "Query"]
title        = "Optimizing a very simple MySQL query: use WHERE instead of LIMIT"
type         = "post"
weight       = 0
+++

A friend of mine has a net of sensors in his production plant and a web-based
administration panel to visualize the data and to operate some control
systems. This website runs on a Raspberry Pi 2 which also hosts the MySQL
database used to store all the data from the sensors.

Long story short, apparently the SQL queries used to get the information to
render the dynamic web page were really slow (except when using the MySQL cache)
and the page took a lot of time to load. So we performed an optimization
process.

The sensors are queried each minute and a new row in the database with the data
from all sensor is inserted. The table with the sensors data has this format:

```sql
CREATE TABLE sensors (
    instant timestamp NOT NULL PRIMARY KEY DEFAULT now()
  , sensor1 real
  , sensor2 real
  , sensor3 real
  -- And so on for many sensors
    );

CREATE INDEX idx_sensors_timestamp
    ON sensors(instant);
```
    
The website had to perform a relatively simple SQL query, explained in words:

> Get the average of the values of the last 5 minutes of `sensor1`. Same for the
> values between 5 and 10 minutes ago. Same for all sensors.


## Old query, slow

This query does the job for `sensor1` but takes 4-5 seconds to complete. And it
is for just one of the many sensors! Analysis showed it had to perform a
full-table scan each time because of the `ORDER BY`, so we decided to **take
advantage of the index on the `instant` column**.

```sql
SELECT (
    SELECT avg(tempTable.sensor1)
        FROM (
            SELECT sensor1
                FROM sensors
                ORDER BY instant DESC
                LIMIT 5,10
        ) tempTable
    ) AS fiveToTenMins,
    (SELECT avg(tempTable.sensor1)
        FROM (
            SELECT sensor1
                FROM sensors
                ORDER BY instant DESC
                LIMIT 0,5
        ) tempTable
    ) AS zeroToFiveMins;
```


## New optimized query

Since the `instant` column is the time and we want the rows from the last 10
minutes, a simple `WHERE` clause gets just those and the index on `instant`
allows a fast retrieval of just those.

So this query does the exact same thing, but for all sensors and takes less than
a millisecond to complete. **More than 4000 times faster**.

```sql
SELECT avg(sensor1)
    ,  avg(sensor2)
    ,  avg(sensor3)
    -- And so on for many sensors
    FROM sensors
    WHERE instant BETWEEN timestampadd(minute,-10,now()) AND timestampadd(minute,-5,now())
    -- instants between 10 minutes ago from now and 5 minutes ago from now
UNION
SELECT avg(sensor1)
    ,  avg(sensor2)
    ,  avg(sensor3)
    -- And so on for many sensors
    FROM sensors
    WHERE instant BETWEEN timestampadd(minute,-5,now()) AND now();
    -- instants between 5 minutes ago from now and, well... now
```
    
