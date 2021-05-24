---
layout: post
title:  "Web Development - Udemy [Course]"
author: Yuexi Tan
date:   2021-03-07 20:00:00 +1000
tags:  Web-Devel Note
---

<img src="{{ "/images/20200429-iOS13-TheAppBrewery.png" | prepend: site.baseurl }}">

# Section 1: Front-End Web Development

## 1. What You'll Get in This Course

## 2. Syllabus Download

## 3. Bookmark the Course Resources

[Course Resources](https://www.appbrewery.co/p/web-development-course-resources/)

## 4. How to Get the Most Out of the Course

## 5. Download the 12 Rules to Learn to Code eBook

## 6. How Does the Internet Actually Work?

1. Client send domain name -> Internet Service Provider -> DNS Server

2. DNS Server convert the domain (www...) to IP address (XXX.XXX.XXX) -> client

3. Client send request to IP address through Internet Service Provider and the internet backbone.

## 7. How Do Websites Actually Work?

1. HTML file: the framework of webpage

2. CSS file: the style of webpage

3. JavaScript file: the function of webpage

## 8. What You'll Need to Get Started - Setup Your Local Web Development Environment

1. Chrome browser

2. Atom editor

[The App Brewery resources for web development](https://www.appbrewery.co/p/web-development-course-resources/)

## 9. How to Get Help When You're Stuck

1. Google or Stack Overflow

2. [MDN Web Docs](https://developer.mozilla.org/en-US/)

3. [DevDocs](https://devdocs.io)

## 10. Pathfinder


# Section 2: Introduction to HTML


## 11. Introduction to HTML

tag: <tag name>, e.g. <h1>

tags should be closed: <h1>titles</h1>

heading from big to small: <h1> to <h6>

## 12. The Anatomy of an HTML Tag

self-closing tag: <br>

## 13. What we're building - HTML Personal Site

## 14. What is The HTML Boilerplate?

## 15. How to Structure Text in HTML

use <em> and <strong> instead of <i> and <b> to emphasis

## 16. HTML Lists


## 17. HTML Image Elements


## 18. HTML Links and Anchor Tags



## 19. How to Ace this Course

# Section 3: Intermediate HTML


## 20. HTML Tables

```
<table>
  <thead>
    <th>header 1</th>
    <th>header 2</th>
  </thead>
  <tbody>
    <tr>
      <td>cell 1</td>
      <td>cell 2</td>
    </tr>
  </tbody>
  <tfoot>

  </tfoot>
</table>
```

## 21. Using HTML Tables for Layout


## 22. HTML Tables Code Challenge


## 23. How to Type Emojis


## 24. HTML Tables Solution Walkthrough


## 25. HTML Forms

```
<form>
  <label></label><br>
  <input type="text"><br>
  <input type="submit"><br>
</form>
```

## 26. Forms in Practice - Create a Contact Me Form


## Coding Exercise 1: HTML Challenge

## 27. Publish Your Website!


## 28. Tip from Angela - Habit Building with the Calendar Trick


## 29. Get Monthly Tips and Tools to Level Up as a Developer

# Section 4: Introduction to CSS


## 30. Introduction to CSS


## 31. Inline CSS

`<body style="background-color: blue;">`


## 32. A Quick Note About the Next Lesson


## 33. Internal CSS

```
<head>
  <style>
    body {
      background-color: blue;
    }
  </style>
</head>
```

Browser has a default CSS. Sometimes you need to overwrite it to get what you want.

All elements on webpage are essentially boxes.  

## 34. External CSS

```
<head>
  <link rel="stylesheet" href="/css/master.css">
</head>
```

Good looking colors: [Color Hunt](https://colorhunt.co)

## 35. How to Debug CSS Code

Chrome Developer Tools.

Style priority: inline > internal > external

## 36. The Anatomy of CSS Syntax

`selector { property: value; }`

## 37. CSS Selectors


## 38. Classes vs. Ids

ID must be unique within a page.

An element can have multiple classes (separated by space) like `<img class="class1 class2">`

```
tagName { ... }

.className { ... }

#idName { ... }

img:hover {...}  /* psudo class */
```


## 39. Tip from Angela - Dealing with Distractions


## 40. Join the Student Community


# Section 5: Intermediate CSS


## 41. What We'll Make - Stylised Personal Site


## 42. What Are Favicons?

`<link rel="icon" href="favicon.ico">`

## 43. HTML Divs


## 44. The Box Model of Website Styling


## 45. CSS Display Property

`display` property:

+ Block

+ Inline

+ Inline-Block

+ None (as if delete) vs "visibility: hidden;" (hold place but not visible)

## 46. Learn More About Web Design


## 47. CSS Static and Relative Positioning

1. Content is Everything (content decide how large an element is)

2. Order comes from Code

3. Child sits on Parent

`position` property:

+ Static

+ Relative (setting coordinates won't change other elements' position, as if giving margins to default position)

+ Absolute

+ Fixed

coordinates: top, bottom, left, right.

## 48. Absolute positioning

'Relative' to parent element

## 49. The Dark Art of Centering Elements with CSS

Block elements: set `text-align: center;` for parent element.

Others: set `margin: auto;`


## 50. Font Styling in Our Personal Site

To maximize the chance that users are viewing exactly the same style you designed:

1. Use web safe fonts.

2. Set fallbacks: `font-family: "Helvetica Hue", Helvetica, sans-serif;`

3. Link an online font: `<link href="https://..." rel="stylesheet">`

## 51. Learn More About Typography


## 52. Adding Content to Our Website


## 53. CSS Sizing

Make fonts dynamic (sized up/down by users)

1. Use % instead of px (100% = parent font size, default: 16px)

2. Use em (1em = parent font size, default: 16px)

3. Use rem (1rem = root font size: 16px)


## 54. Font Properties Challenge 1 - Change the Font Colour


## 55. Font Properties Challenge 2 - Change the Font Weight


## 56. Font Properties Challenge 3 - Change the Line Height


## 57. CSS Font Property Challenge Solutions


## 58. CSS Float and Clear

Float make things wrap around: `float: left;`.

Clear is anti-float: `clear: left;`

Use float only for wrapping texts.

## 59. CSS Challenge


## 60. Stylised Personal Site Solution Walkthrough


## 61. [Optional] Get More Practice HTML and CSS



## 62. Tip from Angela - Nothing Easy is Worth Doing!


# Section 6: Introduction to Bootstrap 4


## 63. What is Bootstrap?


## 64. Installing Bootstrap

```
<head>
  <meta charset="utf-8">
  <title>TinDog</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="css/styles.css">

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>
```

## 65. Web Design 101 - Wireframing



## 66. The Bootstrap Navigation Bar

```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a class="navbar-brand" href="">tindog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">Download</a>
      </li>
    </ul>
  </div>
</nav>
```

## 67. What We'll Make: TinDog


## 68. Download the Starting Files


## 69. Setting Up Our New Project



## 70. Bootstrap Grid Layout System

```
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns, auto equal width, stack to horizontal when screen is small
    </div>
    <div class="col-sm">
      One of three columns, auto equal width, stack to horizontal when screen is small
    </div>
    <div class="col-sm">
      One of three columns, auto equal width, stack to horizontal when screen is small
    </div>
  </div>
</div>
```

## 71. Getting Montserrat Black and other Font Weights



## 72. Adding Grid Layouts to Our Website


## 73. A Note About CSS Link Order


## 74. Bootstrap Containers

Use `.container` for a responsive pixel width or `.container-fluid` for width: 100% across all viewport and device sizes.

## 75. Bootstrap Buttons & Font Awesome

```
<button type="button" class="btn btn-dark">Dark</button>
```

<https://fontawesome.com/> for free icons.

## 76. Styling Our Website Challenges and Solutions


## 77. Bootstrap Challenge 1


## 78. Solution to Bootstrap Challenge 1


## 79. Tip from Angela - How to Deal with Procrastination




# Section 7: Intermediate Bootstrap


## 80. The Bootstrap Carousel Part 1

The carousel is a slideshow for cycling through a series of content.

## 81. The Bootstrap Carousel Part 2

```
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

## 82. Bootstrap Cards

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

```
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

## 83. The CSS Z-Index and Stacking Order

`z-index` controls the stacking order (top/bottom) of the element, only when they are set to `position: absolute // or relative, fixed`. It won't work when `position: static // default`.

## 84. Media Query Breakpoints

```css
@media print {} // when print
@media screen and (min-width: 900px)  // when on certain screen
@media (min-width: 900px) and (max-width: 1200px)
```

## 85. Bootstrap Challenge 2


## 86. Bootstrap Challenge 2 Solution


## 87. How to become a Better Programmer - Code Refactoring

1. Readability

2. Modularity

3. Efficiency

4. Length

## 88. Put it into Practice - Refactor our Website Part 1

1. Use specific class instead of tag

2. Merge same styles

## 89. Advanced CSS - Combining Selectors

Multiple selector: `h1, h2 {}` means h1 and h2 apply the same style.

Hierarchical selector: `div .class1 {}` means all class1 that are within div apply the same style.

Combined selector: `div.class1 {}` means all class1 that are on a div apply the same style.

## 90. Refactoring our Website Part 2


## 91. Advanced CSS - Selector Priority

# Section 10: Intermediate Javascript


## 125. Random Number Generation in Javascript: Building a Love Calculator

Random number: `Math.random()` returns a fraction between 0 (inclusive) and 1 (exclusive).

Round a number down to its integer part: `Math.floor(<number>)`.

## 126. Control Statements: Using If-Else Conditionals & Logic


## 127. Comparators and Equality

`===` compares the value and data type. `==` only checks values, despite they may be different data types.

## 128. Combining Comparators



## 129. Introducing the Leap Year Code



## 130. Leap Year Solution



## 131. Collections: Working with Javascript



# Section 11: The Document Object Model (DOM)


## 140. Adding Javascript to Websites

inline: `<body onload="alert('Hello');">`

internal:

```
<script type="text/javascript">
  alert("Hello");
</script>
```

external:

```
<script src="script/index.js" charset="utf-8"></script>
```

## 141. Introduction to the Document Object Model (DOM)

`document.firstElementChild.lastElementChild.innerHTML = "Angela";`

## 142. Solution to the DOM Challenge


## 143. Selecting HTML Elements with Javascript

```
document.getElementsByTagName("h1");
document.getElementsByClass("class1");
document.getElementById("title");
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".class");
document.querySelector("li a");
document.querySelectorAll("#list .item")[2].style.color = "blue";
```

## 144. Manipulating and Changing Styles of HTML Elements with Javascript


## 145. The Separation of Concerns: Structure vs Style vs Behaviour

`document.querySelector("button").classList.toggle("invisible");`

## 146. Text Manipulation and the Text Content Property

`.innerHTML` refers to everything in between the tag, while `.textContent` only the texts.

## 147. Manipulating HTML Element Attributes

```
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href","");
```

## 148. Tip from Angela - The 20 Minute Method



# Section 13: Advanced Javascript and DOM Manipulation


## 160. What We'll Make: Drum Kit


## 161. Download the Starting Files


## 162. Adding Event Listeners to a Button

`Array.forEach()` iterates the array.

## 163. Higher Order Functions and Passing Functions as Arguments


## 164. Higher Order Function Challenge Solution


## 165. How to Play Sounds on a Website


## 166. A Deeper Understanding of Javascript Objects

```
var object 1 = {
  name: "haha",
  age: 2
  pets: ["dog", "bird"]
}
```

Constructor function:

```
function BellBoy(name, age, pets){  
  this.name = name;
  this.age = age;
  this.pets = pets;
}

var bellboy1 = new BellBoy("uouo", 9, [])
```

## 167. How to Use Switch Statements in Javascript

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

## 168. Objects, their Methods and the Dot Notation


## 169. A Quick Note About the Next Lesson


## 170. Using Keyboard Event Listeners to Check for Key Presses



## 171. Understanding Callbacks and How to Respond to Events

```
document.addEventListener("keypress", respondToKey(event));
```

## 172. Adding Animation to Websites


## 173. Download the Completed Website


## 174. Tip from Angela - Dealing with Lack of Progress

# Section 14: jQuery


## 175. What is jQuery?


## 176. How to Incorporate jQuery into Websites

Download and link, or use CDN.

## 177. How Minification Works to Reduce File Size


## 178. Selecting Elements with jQuery

CSS selector in `$("")`. If there are multiple of them, all will be selected.

```
$("h1.class1")
$("#title")
$("div h1")
```

## 179. Manipulating Styles with jQuery

```
$("h1").css("color");  // get color
$("h1").css("color", "blue");  // set color
$("h1").addClass("big-title")  // add class
$("h1").removeClass("big-title")  // remove class
$("h1").addClass("big-title margin-50")  // add multiple classes

```

## 180. Manipulating Text with jQuery

```
$("h1").text("New text");  // only text
$("h1").html("<em>New text<em>");  // all things inside tag
```

## 181. Manipulating Attributes with jQuery

```
$("img").attr("src");

// attr vs css example:
$('selector').attr('style','display:inline-block');
// equals to
$('selector').css('display','inline-block');
```

## 182. Adding Event Listeners with jQuery

```
$("button").click(function(){
  //do something
});

$("button").keypress(function(event){
    console.log(event.key)
});

$("button").on("click", function(){
  //do something
});
```

## 183. Adding and Removing Elements with jQuery

```
$("button").before("<button>New Button<button>");  //add before the tag
$("button").after("<button>New Button<button>");  //add after the tag
$("button").prepend("<button>New Button<button>");  //add before the tag contents
$("button").append("<button>New Button<button>");  //add after the tag contents

$("button").remove();  //remove all buttons

```

## 184. Website Animations with jQuery

```
$("button").hide();  //as if it's removed
$("button").show();
$("button").toggle();  //toggle hide/show

$("button").fadeOut();  //reduce opacity gradually
$("button").fadeIn();  
$("button").fadeToggle();  //toggle fadeOut/fadeIn

$("button").slideUp();  //slide up to hide
$("button").slideDown();   
$("button").slideToggle();  //toggle slideUp/slideDown

$("button").animate({opacity: 0.5});  //custom animation, numeric value only

$("button").slideUp().slideDown().animate({opacity: 0.5})  //can be chained
```

## 185. Tip from Angela - Mixing Knowledge


# Section 18: Node.js


## 218. What is Node.js?


## 219. Install Node.js on Mac


## 220. Install Node.js on Windows


## 221. The Power of the Command Line and How to Use Node

In Terminal:

```
~$ node yourfile.js
```

## 222. The Node REPL (Read Evaluation Print Loops)

In Terminal:

```
~$ node
> yourcode
```

## 223. How to Use the Native Node Modules

```
const fs = require("fs");
fs.copyFileSync("file1.txt", "file2.txt");
```

## 224. The NPM Package Manager and Installing External Node Modules


## 225. Tip from Angela - Step Up to the Challenge

# Section 33: React.js


## 391. What is React?
7min

## 392. What we will make in this React module
2min

## 393. Introduction to Code Sandbox and the Structure of the Module
6min

## 394. Introduction to JSX and Babel
16min

## 395. JSX Code Practice
8min

## 396. Javascript Expressions in JSX & ES6 Template Literals
12min

## 397. Javascript Expressions in JSX Practice
9min

## 398. JSX Attributes & Styling React Elements
17min

## 399. Inline Styling for React Elements
9min

## 400. React Styling Practice
10min

## 401. React Components
16min

## 402. React Components Practice
5min

## 403. Javascript ES6 - Import, Export and Modules
11min

## 404. Javascript ES6 Import, Export and Modules Practice
4min

## 405. [Windows]​ Local Environment Setup for React Development
14min

## 406. [Mac] Local Environment Setup for React Development​
14min

## 407. Keeper App Project - Part 1 Challenge
5min

## 408. Keeper App Part 1 Solution
14min

## 409. React Props
17min

## 410. React Props Practice
13min

## 411. React DevTools
17min

## 412. Mapping Data to Components
10min

## 413. Mapping Data to Components​ Practice
18min

## 414. Javascript ES6 Map/Filter/Reduce
20min

## 415. Javascript ES6 Arrow functions
10min

## 416. Keeper App Project - Part 2
10min

## 417. React Conditional Rendering with the Ternary Operator & AND Operator
19min

## 418. Conditional Rendering Practice
7min

## 419. State in React - Declarative vs. Imperative Programming
10min

## 420. React Hooks - useState
18min

## 421. useState Hook Practice
7min

## 422. Javascript ES6 Object & Array Destructuring
18min

## 423. Javascript ​ES6 Destructuring Challenge Solution
6min

## 424. Event Handling in React
11min

## 425. React Forms
14min

## 426. Class Components vs. Functional Components
6min

## 427. Changing Complex State
20min

## 428. Changing Complex State Practice
7min

## 429. Javascript ES6 Spread Operator
11min

## 430. Javascript ES6 Spread Operator Practice
12min

## 431. Managing a Component Tree
23min

## 432. Managing a Component Tree Practice
8min

## 433. Keeper App Project - Part 3
25min

## 434. React Dependencies & Styling the Keeper App
17min

## 435. Tip from Angela - How to Build Your Own Product
