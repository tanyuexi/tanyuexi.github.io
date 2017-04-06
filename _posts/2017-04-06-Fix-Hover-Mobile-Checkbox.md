---
layout: post
title:  "如何利用复选框解决移动设备的鼠标悬停问题 <br>How to Fix the ':hover' Problem on Mobile Devices with Checkbox"
author: Yuexi Tan
date:   2017-04-06 18:00:00 +0800
tags:  Web-Devel
---

<img src="{{ "/images/20170406-MouseHover-300x300.jpg" | prepend: site.baseurl }}">

## Do NOT use :hover selector any more! <br>不要再用 :hover 选择器了！

According to the 'mobile-first' design principle, I strongly recommend you not to use :hover selector on your website. Because if you do use it for mobile devices, you can still switch things on, but when you touch somewhere else they won't go away. <br>
根据“移动优先”的设计原则，我强烈建议你不要再在网站中使用 :hover 选择器。因为如果在移动设备上用了这个选择器，你仍能触发事件，但无法通过触碰其他地方令它们消失。

The classic usage of :hover. On desktop, when hover the pointer over "Example 1", the background will become yellow. When the pointer leaves, the background color disappears. On mobile devices, however, the yellow color will stay. <br>
经典的 :hover 用法。在桌面端，当指针悬停在“Example 1”上时，背景变为黄色。当指针移开时，黄色消失。然而在移动端，黄色将持续存在。

<style>
a#ex1:hover {
  background-color: yellow;
}
</style>
<a id="ex1"> Example 1 </a>

```html
<!-- html -->

<a id="ex1"> Example 1 </a>

<!-- css -->

a#ex1:hover {
  background-color: yellow;
}
```

## The solution can be pure CSS <br>仅用 CSS 就能解决这个问题

There are many solutions described in other posts, such as using [jQuery](https://cmsdk.com/jquery/jquery-hoverclick-on-desktop-and-mobile-devices.html). The one based on CSS only is by using the checkbox. Result shown below. Whether on desktops or mobile devices, you can toggle the background color by clicking on "Example 2". <br>
其他帖子描述了许多解决方案，比如利用 [jQuery](https://cmsdk.com/jquery/jquery-hoverclick-on-desktop-and-mobile-devices.html)。仅用 CSS 的办法是利用复选框，效果如下。无论是在桌面端还是移动端，你都可以通过单击“Example 2”来切换背景颜色。

<style>
input#ex2:checked + label {
  background-color: yellow;
}
</style>
<input type="checkbox" id="ex2" hidden>
<label for="ex2">
  <a> Example 2 </a>
</label>

```html
<!-- html -->

<input type="checkbox" id="ex2" hidden>
<label for="ex2">
  <a> Example 2 </a>
</label>

<!-- css -->

input#ex2:checked + label {
  background-color: yellow;
}
```
