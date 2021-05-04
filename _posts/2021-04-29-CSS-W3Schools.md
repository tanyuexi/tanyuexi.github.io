---
layout: post
title:  "CSS - W3Schools"
author: Yuexi Tan
date:   2021-04-29 15:00:00 +1000
tags:  Web-Devel Note
---


## Margins

Negative values are allowed.

```css
div {
  width: 300px;
  margin: auto;  //horizontally center
  border: 1px solid red;
}
```

### Margin Collapse

Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

This does not happen on left and right margins! Only top and bottom margins!


## Paddings

Negative values are not allowed.

Use the `box-sizing` property to keep the width at 300px, no matter the amount of padding:

```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```
