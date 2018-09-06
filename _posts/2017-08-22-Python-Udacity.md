---
layout: post
title:  "Python 编程入门 [课程] <br>Introduction to Python Programming [Course]"
author: Yuexi Tan
date:   2017-08-22 09:00:00 +1000
tags:  Note
---

Udacity course link: <https://classroom.udacity.com/courses/ud1110>

For your convenience, use [Anaconda 3](https://www.continuum.io/downloads) to install Python 3. If install python3 in anaconda2, create an environment named 'py3' (or whatever else) for Python 3 by `conda create -n py3 python=3`, then use this environment by `source activate py3`.

## Numbers and Strings

### Arithmetic Operators

```python
>>> print(3**2)   # Not '3^2'! (^: bitwise or)
9

>>> print(9 % 2)   # Modulo operation, giving remainder
1

>>> print(15 // 4)   # Integer division, rounding down even when negative
3

>>> print(-5//4)   # NOT equal to '-(5//4)'!
-2
```

### Arithmetic and Whitespace

Guidelines from [PEP 8](https://www.python.org/dev/peps/pep-0008/):

+ When you call a function like print, put the opening parenthesis straight after the name of the function like in print(8).
+ Don’t put extra spaces inside the parentheses either, it should be print(3*7).
+ If you are mixing operators with different priorities (like multiplication and subtraction), then you might like to add a space around the lower priority (in this case addition and subtraction) operator in order to make the code easier to read. For example, 1 + 2*3.
+ Don't write extremely long lines of code; they're hard to understand. People commonly limit themselves to lines that are 79 or 99 characters long. If you feel that you need to write longer lines, consider rewriting and simplifying your code.

### Integers and Floats

```python
>>> print(3/4)   # Python 3 only. In Python 2 more like '//', will print 0
0.75

>>> print(16/4)   # Result is a float
4.0

>>> 213.13   # Float

>>> 341.   # Float

>>> int(49.7)   # Integer explicitly
49

>>> int(16/4)   # Integer explicitly
4

>>> float(3520+3239)   # Float explicitly
6759.0

>>> print(0.1 + 0.1 + 0.1)   # Floats are approximations,
0.30000000000000004          # may lead to surprising results
```

### Errors

An 'Exception' is a problem that occurs whilst the code is running, but a 'Syntax Error' is a problem detected when Python checks the code before it runs it.

### Re-assign Operation

```python
>>> a += 1   # Equals to 'a = a + 1'
>>> a -= 1   # Equals to 'a = a - 1'
>>> a *= 1   # Equals to 'a = a * 1'
>>> a /= 1   # Equals to 'a = a / 1'
```

### Multiple Assignment

```python
>>> savings, salary = 514.86, 320.51
```

### Strings

```python
>>> instructor_1 = "Philip"
>>> instructor_2 = "Charlie"
>>> print(instructor_1 + instructor_2)   # Concatenate strings
PhilipCharlie

>>> len("Udacity")   # Characters in the string
7

>>> print("hippo"*3)   # Repeat the string
hippohippohippo

>>> my_string = 'abcde'
>>> print(my_string[1:3])   # Indexing and slicing
bc
>>> print(my_string[:3])
abc
>>> print(my_string[3:])
de

>>> 'abc' in my_string   # 'in' operator
True
```

### Type and Type Conversion

```python
>>> print(type(633))
int
>>> print(type("633"))
str
>>> print(type(633.0))
float
```

### String Methods

```python
>>> "charlotte hippopotamus turner".title()   # Capitalize each word
'Charlotte Hippopotamus Turner'

>>> "charlotte hippopotamus turner".islower()   # Test whether lower cases
True

>>> user_ip = "10.0.0.1"
>>> url = "/bears/koala"
>>> now = "16:20"
>>> log_message = "IP address {} accessed {} at {}".format(user_ip, url, now)
>>> print(log_message)
IP address 10.0.0.1 accessed /bears/koala at 16:20
```

[More string methods](http://docs.python.org/3/library/stdtypes.html#string-methods)

## Functions, Installation and Conditionals

### Functions

The definition of a function that calculates the volume of a cylinder:

```python
def cylinder_volume(height, radius):
    pi = 3.14159
    return height * pi * radius ** 2

"""
This is the docstrings for big chunk of comments
"""

# This is for one line only
```

### Conditionals

```python
# if, elif and else
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')

# Boolean expressions
if (not do_not_email) and (location == "USA" or location == "CAN"):
    send_email()
```

## Data Structures and Loops

### Lists

```python
>>> my_list = ['a','b','c','d','e']
>>> print(my_list[1:3])   # Indexing and slicing
['b', 'c']
>>> print(my_list[:3])
['a', 'b', 'c']
>>> print(my_list[3:])
['d', 'e']

>>> 'a' in my_list   # 'in' operator
True

>>> len(my_list)   # 'len' function
5

>>> batch_sizes = [15, 6, 89, 34, 65, 35]
>>> max(batch_sizes)   # 'max' for a number list
89
>>> max(my_list)   # 'max' for a string list, sorting alphabetically
'e'
# 'min' works similarly

>>> sorted(batch_sizes)   # 'sorted' function
[6, 15, 34, 35, 65, 89]
>>> sorted(batch_sizes, reverse=True)
[89, 65, 35, 34, 15, 6]

>>> '-'.join(my_list)   # 'join' method
'a-b-c-d-e'

>>> my_list.append('f')   # 'append' method
>>> print(my_list)
['a', 'b', 'c', 'd', 'e', 'f']
```

### Sets

```python
>>> my_list = ['a', 'a', 'b', 'c']
>>> my_set = set(my_list)
>>> my_set   # Duplicates removed
{'b', 'a', 'c'}

>>> my_set.add('d')   # 'add' method
>>> my_set
{'d', 'b', 'a', 'c'}

for letter in my_set:   # Iterate over a set
    print(letter)
```

### Tuples

Tuples are similar to lists in that they store an ordered collection of objects which can be accessed by their indexes (for example `AngkorWat[0]` and `AngkorWat[1]`). Unlike lists, tuples are *immutable*. You can't add and remove items from tuples, or sort them in place.

Why do we have tuples if they're like lists with less features? Tuples useful when you have two or more values that are so closely related that they will always be used together, like latitude and longitude coordinates. A common use for tuples is to return multiple values from a function. It's usually best to avoid using mutable default arguments.

```python
>>> AngkorWat = (13.4125, 103.866667)
>>> dimensions = 52, 40, 100   # Can be used without parentheses
>>> length, width, height = dimensions   # Or just one line:
>>> length, width, height = 52, 40, 100
```

### Dictionaries

```python
>>> elements = {'hydrogen': 1, 'helium': 2, 'carbon': 6}
>>> print(element['carbon'])
6
>>> elements['lithium'] = 3   # Add new value
>>> print(elements['lithium'])
3

>>> elements['dilithium']   # KeyError for non-existing keys
KeyError: 'dilithium'
>>> elements.get('dilithium')   # 'get' method
None
>>> elements.get('kryptonite', 'There\'s no such element!')
"There's no such element!"

for name in elements:   # Iterate over a dict
    print("name: {}, weight: {}".format(name, elements[name]))
```

### Loops

```python
for number in range(4):   # 'for' loop
    print(number)   # 0~3

card_deck = [4, 11, 8, 5, 13, 2, 8, 10]
hand = []

while sum(hand) <= 17:   # 'while' loop
    hand.append(card_deck.pop())
    if len(hand) < 3:
        continue
    else:
        break
```

## Files and Modules

### Reading from and Writing to a File

```python
f = open('/my_path/my_file.txt','r')   # Open to read
file_data = f.read()
f.close()   # Otherwise run out of handles

f = open('/my_path/my_file.txt','w')   # Open to write
# f = open('/my_path/my_file.txt','a')   # Append instead of overwrite
f.write("Hello World!")
file_data = f.read()
f.close()

with open('/my_path/my_file.txt','r') as f:   # Automatically close after use
    # file_data = f.read()   # Read the whole file
    for line in f:   # Read each line of file
        print(line.strip())   # 'strip' method to remove newline char
```

### Importing Modules

Use `import package_name`, or `from module_name import object_name`.

**Do NOT use `from module_name import *`!!**

```python
>>> import math
>>> print(math.factorial(3))   # Must add the module name
6

>>> from collections import defaultdict   # Import only one function
>>> from collections import defaultdict, namedtuple   # Multiple functions
>>> defaultdict()   # Without the module name
defaultdict(None, {})

>>> from csv import reader as csvreader   # Give function a different name
>>> import multiprocessing as mp   # Give module a shorter name
```

 Explore [the standard library](https://docs.python.org/3/library/). Most useful ones:

+ `csv`: very convenient for reading and writing csv files
+ `collections`: useful extensions of the usual data types including OrderedDict, defaultdict and namedtuple
+ `random`: generates pseudo-random numbers, shuffles sequences randomly and chooses random items
+ `string`: more functions on strings. This module also contains useful collections of letters like string.digits (a string containing all characters with are valid digits).
+ `re`: pattern-matching in strings via regular expressions
+ `math`: some standard mathematical functions
+ `os`: interacting with operating systems
+ `os.path`: submodule of os for manipulating path names
+ `sys`: work directly with the Python interpreter
+ `json`: good for reading and writing json files (good for web work)

### Installing Packages

```bash
$ pip3 install package_name
# Or, install with specified versions
$ pip3 install -r requirements.txt
# Content of requirements.txt:
beautifulsoup4==4.5.1
bs4==0.0.1
pytz==2016.7
requests==2.11.1
```

Useful third-party libraries:

+ `IPython` - A better interactive Python interpreter
+ `requests` - Provides easy to use methods to make web requests. Useful for accessing web APIs.
+ `Flask` - a lightweight framework for making web applications and APIs.
+ `Django` - A more featureful framework for making web applications. Django is particularly good for designing complex, content heavy, web applications.
+ `Beautiful Soup` - Used to parse HTML and extract information from it. Great for web scraping.
+ `pytest` - extends Python's builtin assertions and unittest module.
+ `PyYAML` - For reading and writing YAML files.
+ `NumPy` - The fundamental package for scientific computing with Python. It contains among other things a powerful N-dimensional array object and useful linear algebra capabilities.
+ `pandas` - A library containing high-performance, data structures and data analysis tools. In particular, pandas provides dataframes!
+ `matplotlib` - a 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments.
+ `ggplot` - Another 2D plotting library, based on R's ggplot2 library.
+ `Pillow` - The Python Imaging Library adds image processing capabilities to your Python interpreter.
+ `pyglet` - A cross-platform application framework intended for game development.
+ `Pygame` - A set of Python modules designed for writing games.
+ `pytz` - World Timezone Definitions for Python
