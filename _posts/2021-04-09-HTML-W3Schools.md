---
layout: post
title:  "HTML - W3Schools"
author: Yuexi Tan
date:   2021-04-09 14:00:00 +1000
tags:  Web-Devel Note
---

## Elements

| Tag | Description |
| --- | --- |
| `<html>` | Defines the root of an HTML document |
| `<body>` | Defines the document's body |
| `<h1>` to `<h6>` | Defines HTML headings |


## Attributes

Chapter Summary
- All HTML elements can have attributes
- The `href` attribute of `<a>` specifies the URL of the page the link goes to
- The `src` attribute of <img> specifies the path to the image to be displayed
- The `width` and `height` attributes of `<img>` provide size information for images
- The `alt` attribute of `<img>` provides an alternate text for an image
- The `style` attribute is used to add styles to an element, such as color, font, size, and more
- The `lang` attribute of the `<html>` tag declares the language of the Web page
- The `title` attribute defines some extra information about an element

```html
<p title="This will show up when mouse hover">some texts</p>
```

## Paragraphs

| Tag | Description |
| --- | --- |
| `<p>` | Defines a paragraph |
| `<hr>` | Defines a thematic change in the content |
| `<br>` | Inserts a single line break |
| `<pre>` | Defines pre-formatted text |

It will preserve all spaces and line breaks when the element is displayed:

```html
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
```

## Styles

Chapter Summary

- Use the `style` attribute for styling HTML elements
- Use `background-color` for background color
- Use `color` for text colors
- Use `font-family` for text fonts
- Use `font-size` for text sizes
- Use `text-align` for text alignment

## Formatting

| Tag | Description |
| --- | --- |
| `<b>` | Defines bold text |
| `<em>` | Defines emphasized text  |
| `<i>` | Defines a part of text in an alternate voice or mood |
| `<small>` | Defines smaller text |
| `<strong>` | Defines important text |
| `<sub>` | Defines subscripted text |
| `<sup>` | Defines superscripted text |
| `<ins>` | Defines inserted text |
| `<del>` | Defines deleted text |
| `<mark>` | Defines marked/highlighted text |

## Quotations

| Tag | Description |
| --- | --- |
| `<abbr>` | Defines an abbreviation or acronym |
| `<address>` | Defines contact information for the author/owner of a document |
| `<bdo>` | Defines the text direction |
| `<blockquote>` | Defines a section that is quoted from another source |
| `<cite>` | Defines the title of a work |
| `<q>` | Defines a short inline quotation |

`<blockquote>``<q>``<abbr>``<address>``<cite>``<bdo>`

Put quotation marks around "cool":

```html
<p>
I am so <q>cool</q>.
</p>
```

The text below is a quoted section, specifying that it is quoted from the URL:

```html
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>
```

Change text direction. Make the text below go right-to-left:

```html
<bdo dir="rtl">What a beautiful day!</bdo>
```

Use the global `title` attribute to show the description for the abbreviation/acronym when you mouse over the element:

```html
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```

## Comments

```html
<!-- Write your comments here -->
```

## Colors

HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.

HSL color values: In HTML, a color can be specified using hue, saturation, and lightness (HSL) in the form:

`hsl(hue, saturation, lightness)`

Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.

Lightness is also a percentage value, 0% is black, and 100% is white.


## CSS

Cascading Style Sheets (CSS) is used to format the layout of a webpage. The word cascading means that a style applied to a parent element will also apply to all children elements within the parent.

Chapter Summary

- Use the HTML style attribute for inline styling
- Use the HTML `<style>` element to define internal CSS
- Use the HTML `<link>` element to refer to an external CSS file
- Use the HTML `<head>` element to store `<style>` and `<link>` elements
- Use the CSS `color` property for text colors
- Use the CSS `font-family` property for text fonts
- Use the CSS `font-size` property for text sizes
- Use the CSS `border` property for borders
- Use the CSS `padding` property for space inside the border
- Use the CSS `margin` property for space outside the border

## Links

Chapter Summary

- Use the `<a>` element to define a link
- Use the `href` attribute to define the link address
- Use the `target` attribute to define where to open the linked document
- Use the `<img>` element (inside `<a>`) to use an image as a link
- Use the `mailto: scheme` inside the href attribute to create a link that opens the user's email program

### Link colors

```html
<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
```

### Link bookmarks

- Use the `id` attribute (id="value") to define bookmarks in a page
- Use the `href` attribute (href="#value") to link to the bookmark

## Images

| Tag | Description |
| --- | --- |
| `<img>` | Defines an image |
| `<map>` | Defines an image map |
| `<area>` | Defines a clickable area inside an image map |
| `<picture>` | Defines a container for multiple image resources |

Chapter Summary

- Use the HTML `<img>` element to define an image
- Use the HTML `src` attribute to define the URL of the image
- Use the HTML `alt` attribute to define an alternate text for an image, if it cannot be displayed
- Use the HTML `width` and `height` attributes or the CSS `width` and `height` properties (preferred) to define the size of the image
- Use the CSS `float` property to let the image float to the left or to the right

### Image map

Shapes:

- rect - defines a rectangular region
- circle - defines a circular region
- poly - defines a polygonal region
- default - defines the entire region

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```

### Background images

If you want the background image to cover the entire element, you can set the `background-size` property to `cover`.

Also, to make sure the entire element is always covered, set the `background-attachment` property to `fixed`:

This way, the background image will cover the entire element, with no stretching (the image will keep its original proportions):

```html
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
```

If you want the background image to stretch to fit the entire element, you can set the `background-size` property to `100% 100%`:

Try resizing the browser window, and you will see that the image will stretch, but always cover the entire element.

```html
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>
```

### The Picture Element

Show different images for different screen sizes:

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>
```

There are two main purposes for the <picture> element:

1. Bandwidth
- If you have a small screen or device, it is not necessary to load a large image file. The browser will use the first `<source>` element with matching attribute values, and ignore any of the following elements.

2. Format Support
- Some browsers or devices may not support all image formats. By using the `<picture>` element, you can add images of all formats, and the browser will use the first format it recognizes, and ignore any of the following elements.

The browser will use the first image format it recognizes:

```html
<picture>
  <source srcset="img_avatar.png">
  <source srcset="img_girl.jpg">
  <img src="img_beatles.gif" alt="Beatles" style="width:auto;">
</picture>
```

## Tables

Chapter Summary

- Use the HTML `<table>` element to define a table
- Use the HTML `<tr>` element to define a table row
- Use the HTML `<td>` element to define a table data
- Use the HTML `<th>` element to define a table heading
- Use the HTML `<caption>` element to define a table caption
- Use the CSS `border` property to define a border
- Use the CSS `border-collapse` property to collapse cell borders
- Use the CSS `padding` property to add padding to cells
- Use the CSS `text-align` property to align cell text
- Use the CSS `border-spacing` property to set the spacing between cells
- Use the `colspan` attribute to make a cell span many columns
- Use the `rowspan` attribute to make a cell span many rows
- Use the `id` attribute to uniquely define one table


## Block and Inline Elements

A block-level element (e.g. `<div>`):

- always starts on a new line.
- always takes up the full width available (stretches out to the left and right as far as it can).
- has a top and a bottom margin, whereas an inline element does not.

An inline element (e.g. `<span>`):

- does not start on a new line.
- only takes up as much width as necessary.

## Iframes

Chapter Summary

- The HTML `<iframe>` tag specifies an inline frame
- The `src` attribute defines the URL of the page to embed
- Always include a `title` attribute (for screen readers)
- The `height` and `width` attributes specifies the size of the iframe
- Use `border:none;` to remove the border around the iframe

## JavaScript

```html
<script>
// change content
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// change styles
document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";

// change attributes
document.getElementById("image").src = "picture.gif";
</script>

<!-- an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support scripts -->
<noscript>Sorry, your browser does not support JavaScript!</noscript>

```

## File Paths

| Path | Description |
| --- | --- |
| `<img src="picture.jpg">` | The "picture.jpg" file is located in the same folder as the current page |
| `<img src="images/picture.jpg">` | The "picture.jpg" file is located in the images folder in the current folder |
| `<img src="/images/picture.jpg">` | The "picture.jpg" file is located in the images folder at the root of the current web |
| `<img src="../picture.jpg">` | The "picture.jpg" file is located in the folder one level up from the current folder |

### Best Practice

It is best practice to use relative file paths (if possible).

When using relative file paths, your web pages will not be bound to your current base URL. All links will work on your own computer (localhost) as well as on your current public domain and your future public domains.

## Head

### `<meta>`

```html
<!-- Define the character set used: -->
<meta charset="UTF-8">

<!-- Define keywords for search engines: -->
<meta name="keywords" content="HTML, CSS, JavaScript">

<!-- Define a description of your web page: -->
<meta name="description" content="Free Web tutorials">

<!-- Define the author of a page: -->
<meta name="author" content="John Doe">

<!-- Refresh document every 30 seconds: -->
<meta http-equiv="refresh" content="30">

<!-- Setting the viewport to make your website look good on all devices: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### `<base>`

The `<base>` element specifies the base URL and/or target for all relative URLs in a page.

The `<base>` tag must have either an href or a target attribute present, or both.

There can only be one single `<base>` element in a document!

```html
<!-- Specify a default URL and a default target for all links on a page: -->
<head>
<base href="https://www.w3schools.com/" target="_blank">
</head>

<body>
<img src="images/stickman.gif" width="24" height="39" alt="Stickman">
<a href="tags/tag_base.asp">HTML base Tag</a>
</body>
```

## Layout

Semantic elements that define the different parts of a web page:

- `<header>` - Defines a header for a document or a section
- `<nav>` - Defines a set of navigation links
- `<section>` - Defines a section in a document
- `<article>` - Defines an independent, self-contained content
- `<aside>` - Defines content aside from the content (like a sidebar)
- `<footer>` - Defines a footer for a document or a section
- `<details>` - Defines additional details that the user can open and close on demand
- `<summary>` - Defines a heading for the <details> element

Layout Techniques:

- CSS framework: create your layout fast, you can use a CSS framework, like W3.CSS or Bootstrap.
- CSS float property: It is common to do entire web layouts using the CSS float property. Float is easy to learn - you just need to remember how the float and clear properties work. Disadvantages: Floating elements are tied to the document flow, which may harm the flexibility.
- CSS flexbox: ensures that elements behave predictably when the page layout must accommodate different screen sizes and different display devices.
- CSS grid: offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

## Computercode

Chapter Summary

- The `<kbd>` element defines keyboard input
- The `<samp>` element defines sample output from a computer program
- The `<code>` element defines a piece of computer code
- The `<var>` element defines a variable in programming or in a mathematical expression
- The `<pre>` element defines preformatted text

## Semantics

| Tag | Description|
| --- | --- |
| `<article>` | Defines independent, self-contained content |
| `<aside>` | Defines content aside from the page content |
| `<details>` | Defines additional details that the user can view or hide |
| `<figcaption>` | Defines a caption for a `<figure>` element |
| `<figure>` | Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| `<footer>` | Defines a footer for a document or section |
| `<header>` | Specifies a header for a document or section |
| `<main>` | Specifies the main content of a document |
| `<mark>` | Defines marked/highlighted text |
| `<nav>` | Defines navigation links |
| `<section>` | Defines a section in a document |
| `<summary>` | Defines a visible heading for a `<details>` element |
| `<time>` | Defines a date/time |

## Style Guide and Coding Conventions

### Always Declare Document Type

Always declare the document type as the first line in your document.

The correct document type for HTML is: `<!DOCTYPE html>`

### Use Lowercase Element Names and Attribute Names

HTML allows mixing uppercase and lowercase letters in element names and attribute names.

However, we recommend using lowercase names, because:

- Mixing uppercase and lowercase names looks bad: `<body>` vs `<BODY>`
- Developers normally use lowercase names
- Lowercase looks cleaner
- Lowercase is easier to write

### Close All HTML Elements

In HTML, you do not have to close all elements (for example the <p> element).

However, we strongly recommend closing all HTML elements.

### Always Quote Attribute Values

HTML allows attribute values without quotes.

However, we recommend quoting attribute values, because:

- Developers normally quote attribute values
- Quoted values are easier to read
- You MUST use quotes if the value contains spaces

### Always Specify alt, width, and height for Images

Always specify the `alt` attribute for images. This attribute is important if the image for some reason cannot be displayed.

Also, always define the `width` and `height` of images. This reduces flickering, because the browser can reserve space for the image before loading.

### Spaces and Equal Signs

HTML allows spaces around equal signs. But space-less is easier to read and groups entities better together.

### Avoid Long Code Lines

When using an HTML editor, it is NOT convenient to scroll right and left to read the HTML code.

Try to avoid too long code lines.

### Blank Lines and Indentation

Do not add blank lines, spaces, or indentations without a reason.

For readability, add blank lines to separate large or logical code blocks.

For readability, add two spaces of indentation. Do not use the tab key.

### Never Skip the `<title>` Element

The `<title>` element is required in HTML.

The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

The `<title>` element:

- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search-engine results

### Close Empty HTML Elements?

```html
<meta charset="utf-8">
<!-- or -->
<meta charset="utf-8" />
```

If you expect XML/XHTML software to access your page, keep the closing slash (/), because it is required in XML and XHTML.

### Add the lang Attribute

You should always include the `lang` attribute inside the <html> tag (e.g. `<html lang="en-us">`), to declare the language of the Web page. This is meant to assist search engines and browsers.

### Meta Data

To ensure proper interpretation and correct search engine indexing, both the language and the character encoding `<meta charset="charset">` should be defined as early as possible in an HTML document.

### HTML Comments

Short comments should be written on one line, like this:

```html
<!-- This is a comment -->
```

Comments that spans more than one line, should be written like this:

```html
<!--
  This is a long comment example. This is a long comment example.
  This is a long comment example. This is a long comment example.
-->
```

Long comments are easier to observe if they are indented with two spaces.

### Using Style Sheets

Long CSS rules should be written over multiple lines:

```html
body {
  background-color: lightgrey;
  font-family: "Arial Black", Helvetica, sans-serif;
  font-size: 16em;
  color: black;
}
```

- Place the opening bracket on the same line as the selector
- Use one space before the opening bracket
- Use two spaces of indentation
- Use semicolon after each property-value pair, including the last
- Only use quotes around values if the value contains spaces
- Place the closing bracket on a new line, without leading spaces


### Use Lower Case File Names

Some web servers (Apache, Unix) are case sensitive about file names: "london.jpg" cannot be accessed as "London.jpg".

Other web servers (Microsoft, IIS) are not case sensitive: "london.jpg" can be accessed as "London.jpg".

If you use a mix of uppercase and lowercase, you have to be aware of this.

If you move from a case-insensitive to a case-sensitive server, even small errors will break your web!

### File Extensions

HTML files should have a .html extension (.htm is allowed).

CSS files should have a .css extension.

JavaScript files should have a .js extension.

To avoid these problems, always use lowercase file names!

### Default Filenames

When a URL does not specify a filename at the end (like "https://www.w3schools.com/"), the server just adds a default filename, such as "index.html", "index.htm", "default.html", or "default.htm".

If your server is configured only with "index.html" as the default filename, your file must be named "index.html", and not "default.html".

However, servers can be configured with more than one default filename; usually you can set up as many default filenames as you want.

## Entities

Reserved characters in HTML must be replaced with character entities.

Some Useful HTML Character Entities

| Result | Description | Entity Name | Entity Number |
| --- | --- | --- | --- |
|  | non-breaking space | `&nbsp;` | `&#160;` |
| < | less than | `&lt;` | `&#60;` |
| > | greater than | `&gt;` | `&#62;` |
| & | ampersand | `&amp;` | `&#38;` |
| " | double quotation mark | `&quot;` | `&#34;` |
| ' | single quotation mark (apostrophe) | `&apos;` | `&#39;` |
| ¢ | cent | `&cent;` | `&#162;` |
| £ | pound | `&pound;` | `&#163;` |
| ¥ | yen | `&yen;` | `&#165;` |
| € | euro | `&euro;` | `&#8364;` |
| © | copyright | `&copy;` | `&#169;` |
| ® | registered trademark | `&reg;` | `&#174;` |

Combining Diacritical Marks

| Mark | Character | Construct | Result |
| --- | --- | --- | --- |
|  ̀ | a | `a&#768;` | à |
|  ́ | a | `a&#769;` | á |
|  ̂ | a | `a&#770;` | â |
|  ̃ | a | `a&#771;` | ã |

## Forms

The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

| Type | Description |
| --- | --- |
| `<input type="text">` | Displays a single-line text input field |
| `<input type="radio">` | Displays a radio button (for selecting one of many choices) |
| `<input type="checkbox">` | Displays a checkbox (for selecting zero or more of many choices) |
| `<input type="submit">` | Displays a submit button (for submitting the form) |
| `<input type="button">` | Displays a clickable button |

### The `<label>` Element

The `<label>` element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.

The `<label>` element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the `<label>` element, it toggles the radio button/checkbox.

The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

### The Name Attribute for `<input>`

Notice that each input field must have a `name` attribute to be submitted.

If the `name` attribute is omitted, the value of the input field will not be sent at all.


## Form Attributes

### `action`

The `<input type="submit">` defines a button for submitting the form data to a form-handler.

The form-handler is typically a file on the server with a script for processing input data.

The form-handler is specified in the form's `action` attribute.

Tip: If the `action` attribute is omitted, the action is set to the current page.

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

### `target`

The `target` attribute specifies where to display the response that is received after submitting the form.

| Value | Description |
| --- | --- |
| _blank | The response is displayed in a new window or tab |
| _self | The response is displayed in the current window |
| _parent | The response is displayed in the parent frame |
| _top | The response is displayed in the full body of the window |
| *framename* | The response is displayed in a named iframe |

The default value is `_self` which means that the response will open in the current window.

```html
<form action="/action_page.php" target="_blank">
```

### `method`

The `method` attribute specifies the HTTP method to be used when submitting the form data.

The form-data can be sent as URL variables (with `method="get"`) or as HTTP post transaction (with `method="post"`).

The default HTTP method when submitting form data is GET.

Notes on GET:

- Appends the form data to the URL, in name/value pairs
- NEVER use GET to send sensitive data! (the submitted form data is visible in the URL!)
- The length of a URL is limited (2048 characters)
- Useful for form submissions where a user wants to bookmark the result
- GET is good for non-secure data, like query strings in Google

Notes on POST:

- Appends the form data inside the body of the HTTP request (the submitted form data is not shown in the URL)
- POST has no size limitations, and can be used to send large amounts of data.
- Form submissions with POST cannot be bookmarked

### `autocomplete`

When `autocomplete` is on, the browser automatically complete values based on values that the user has entered before.

## Form Elements

| Tag | Description |
| --- | --- |
| `<form>` | Defines an HTML form for user input |
| `<input>` | Defines an input control |
| `<textarea>` | Defines a multiline input control (text area) |
| `<label>` | Defines a label for an <input> element |
| `<fieldset>` | Groups related elements in a form |
| `<legend>` | Defines a caption for a <fieldset> element |
| `<select>` | Defines a drop-down list |
| `<optgroup>` | Defines a group of related options in a drop-down list |
| `<option>` | Defines an option in a drop-down list |
| `<button>` | Defines a clickable button |
| `<datalist>` | Specifies a list of pre-defined options for input controls |
| `<output>` | Defines the result of a calculation |

## Input Types

- `<input type="button">`
- `<input type="checkbox">`
- `<input type="color">`
- `<input type="date">`
- `<input type="datetime-local">`
- `<input type="email">`
- `<input type="file">`
- `<input type="hidden">`
- `<input type="image">`
- `<input type="month">`
- `<input type="number">`
- `<input type="password">`
- `<input type="radio">`
- `<input type="range">`
- `<input type="reset">`
- `<input type="search">`
- `<input type="submit">`
- `<input type="tel">`
- `<input type="text">`
- `<input type="time">`
- `<input type="url">`
- `<input type="week">`

## Canvas vs SVG

Canvas:

- Resolution dependent
- No support for event handlers
- Poor text rendering capabilities
- You can save the resulting image as .png or .jpg
- Well suited for graphic-intensive games

SVG:

- Resolution independent
- Support for event handlers
- Best suited for applications with large rendering areas (Google Maps)
- Slow rendering if complex (anything that uses the DOM a lot will be slow)
- Not suited for game applications
