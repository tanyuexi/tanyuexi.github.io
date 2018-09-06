---
layout: post
title:  "数据分析 SQL 基础 [课程] <br>SQL for Data Analysis [Course]"
author: Yuexi Tan
date:   2018-06-28 10:00:00 +1000
tags:   Note
---

<img src="{{ "/images/20180628-SQL-Course-331x198.png" | prepend: site.baseurl }}">

Course source: Udacity - <https://www.udacity.com/course/sql-for-data-analysis--ud198>




## Statements

**SELECT ... FROM ...** shows part/all of data in a table.

**LIMIT** limits reading to the first few rows.

**ORDER BY ... [DESC]** sort rows by column(s).

**WHERE** filters rows by column.

*Examples:*

```sql
SELECT colname FROM tablename;


SELECT colname
FROM tablename;   /* white spaces allowed in commands */


SELECT colname1, colname2    /* select multiple columns */
FROM tablename;


SELECT *     /* select all columns */
FROM tablename
LIMIT 10;   /* only first 10 rows */


SELECT *
FROM tablename
ORDER BY colname   /* sort rows ascending by column */
LIMIT 10;


SELECT *
FROM tablename
ORDER BY colname DESC   /* sort rows descending by column */
LIMIT 10;


SELECT *
FROM tablename
ORDER BY colname1 DESC, colname2   /* sort rows asc./desc. by multiple columns */
LIMIT 10;


SELECT *
FROM tablename
WHERE colname1 >= 100  /* only select rows with numerical colname1 >= 100 */
LIMIT 10;


SELECT *
FROM tablename
WHERE colname1 = 'Yes'  /* only select rows with non-numerical colname1 'Yes' */
LIMIT 10;


SELECT id, account_id,
       poster_amt_usd/(standard_amt_usd + gloss_amt_usd) AS post_per
FROM orders;   /* arithmetic operation and results put in a new column */
```




## Logical Operators

**LIKE** - This allows you to perform operations similar to using **WHERE** and **=**, but for cases when you might not know exactly what you are looking for.

**IN** - This allows you to perform operations similar to using **WHERE** and **=**, but for more than one condition.

**NOT** - This is used with **IN** and **LIKE** to select all of the rows NOT LIKE or NOT IN a certain condition.

**AND** & **BETWEEN** - These allow you to combine operations where all combined conditions must be true.

**OR** - This allow you to combine operations where at least one of the combined conditions must be true.

*Examples:*

```sql
SELECT *
FROM demo.web_events_full
WHERE ref_url LIKE '%google%';   /* % means any characters of any length */


SELECT *
FROM demo.web_events_full
WHERE ref_url NOT LIKE '%google%';   /* NOT LIKE */


SELECT *
FROM tablename
WHERE name IN ('string1','string2');  /* contains any of the strings */


SELECT *
FROM tablename
WHERE name IN ('string1','string2');  /* NOT IN */


SELECT *
FROM tablename
WHERE id IN (100, 121);  /* contains any of the numbers */


SELECT *
FROM web_events
WHERE channel IN ('organic', 'adwords') AND
      occurred_at BETWEEN '2016-01-01' AND '2017-01-01'
ORDER BY occurred_at DESC;
/* While BETWEEN is generally inclusive of endpoints,
   it assumes the time is at 00:00:00 (i.e. midnight) for dates */


SELECT *
FROM accounts
WHERE (name LIKE 'C%' OR name LIKE 'W%')
          AND ((primary_poc LIKE '%ana%' OR primary_poc LIKE '%Ana%')
          AND primary_poc NOT LIKE '%eana%');
/* Use parentheses to assure the order of operation */
```




## SQL Coding Conventions

+ Capitalizing commands, leave everything else lowercase.

+ Avoid spaces in table and variable names.

+ White spaces are ignored in commands.

+ SQL isn't case sensitive.

+ Best to put semicolons at the end of Statements.

+ The order of the key words does matter!




## Database Normalization

There are essentially three ideas that are aimed at database normalization:

+ Are the tables storing logical groupings of the data?

+ Can I make changes in a single location, rather than in many tables for the same information?

+ Can I access and manipulate data quickly and efficiently?

This is discussed in detail [here](http://sqlmag.com/database-performance-tuning/sql-design-why-you-need-database-normalization).



## JOIN

The whole goal of **JOIN** statements is to allow us to pull from more than one table at a time.
An Entity-Relationship Diagram (ERD) shows the relationships between tables:

<img src="{{ "/images/20180628-SQL-ERD-812x560.png" | prepend: site.baseurl }}">

The **PK** here stands for primary key.
This is the first column in each of our tables that has a unique value for every row.
A foreign key (**FK**) is when we see a primary key in another table.

*Examples:*

```sql
SELECT orders.*
FROM orders   /* table from which to pull data */
JOIN accounts   /* table to merge */
ON orders.account_id = accounts.id;   /* how to merge */
/* Notice this result is the same as if you switched the tables in the FROM and
   JOIN. Additionally, which side of the = a column is listed doesn't matter. */


SELECT orders.standard_qty, orders.gloss_qty,
      orders.poster_qty,  accounts.website,
      accounts.primary_poc
FROM orders
JOIN accounts
ON orders.account_id = accounts.id
/* Notice that we need to specify every table a column comes from in the
   SELECT statement. */
```
