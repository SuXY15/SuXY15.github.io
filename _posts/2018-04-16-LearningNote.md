---
layout:      post
title:       Html 学习笔记——与 Markdown 相对应
excerpt:     Scripts and HtmlElements of Html
tags:
  - Html
  - Markdown
  - Learning
modify_date: 2018-04-21
---

## LearningNote
### Scripts
#### Higlights

```
<link rel="stylesheet" href="http://yandex.st/highlightjs/8.0/styles/solarized_dark.min.css">
<script src="http://yandex.st/highlightjs/8.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
```

#### Tex

```
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default"></script>
```

### HtmlElements
#### ImageSrc
![](https://raw.githubusercontent.com/SuXY15/MyPic/master/sss.ico){:height="100px" width="100px"}

```
![](https://raw.githubusercontent.com/SuXY15/MyPic/master/sss.ico){:height="100px" width="100px"}
```

<img align="center" src="https://raw.githubusercontent.com/SuXY15/MyPic/master/sss.ico" width="100" height="100" /> 

```
<img align="center" src="https://raw.githubusercontent.com/SuXY15/MyPic/master/sss.ico" width="100" height="100" /> 
```

#### Link
<a href="http://www.w3school.com.cn">This is a link By Html</a>

```
<a href="http://www.w3school.com.cn">This is a link By Html</a>
```

[This is a link By Markdown](http://www.w3school.com.cn)

```
[This is a link By Markdown](http://www.w3school.com.cn)
```

#### Align
<h1 align="center">This is H1 for center </h1>
<h2 align="center">This is H2 for center </h2>
<h3 align="center">This is H3 for center </h3>
<h4 align="center">This is H4 for center </h4>
<h5 align="center">This is H5 for center </h5>
<h6 align="center">This is H6 for center </h6>

#### Background

```
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta http-equiv="Content-Language" content="zh-cn" />
<body bgcolor="gray">
```


```
<body style="background-color:PowderBlue;">
<!--here is not listed for this page's using style!-->
```

#### TextStyle

+ TextColor
<p style="font-family:verdana;color:red">This text is in Verdana and red</p>
<p style="font-family:times;color:green">This text is in Times and green</p>

```
<p style="font-family:verdana;color:red">This text is in Verdana and red</p>
<p style="font-family:times;color:green">This text is in Times and green</p>
```

+ TextSize

<p style="font-size:30px">This text is 30 pixels high</p>

```
<p style="font-size:30px">This text is 30 pixels high</p>
```

+ TextBackground

<h4 style="background-color:red;text-align:center">This is a heading</h4>
<p style="background-color:green;color:Yellow">This is a paragraph.</p>

```
<h4 style="background-color:red;text-align:center">This is a heading</h4>
<p style="background-color:green;color:Yellow">This is a paragraph.</p>
```

+ TextFormat

<b>     This text is bold</b> <br />
<strong>This text is strong</strong> <br />
<big>   This text is big</big> <br />
<em>    This text is emphasized</em> <br />
<i>     This text is italic</i> <br />
<small> This text is small</small> <br />
        This text contains <sub>subscript</sub><br />
        This text contains <sup>superscript</sup>

```
<b>     This text is bold</b> <br />
<strong>This text is strong</strong> <br />
<big>   This text is big</big> <br />
<em>    This text is emphasized</em> <br />
<i>     This text is italic</i> <br />
<small> This text is small</small> <br />
        This text contains <sub>subscript</sub><br />
        This text contains <sup>superscript</sup>
```