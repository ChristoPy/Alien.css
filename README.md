# ![Logo](Alien.png "Alien.css")

Alien.css is a collection of some of the best styles that i've made, helping make styles with a good (and lazy) way to add styles to HTML elements.<br>
Now using [normalize.css](https://github.com/necolas/normalize.css "normalize.css") to make it works in all browsers. The normalize.css code is already included in the Alien.css.

## Usage

Put the following code line inside the `<head>` tag before any style:

`<link rel="stylesheet" type="text/css" href="Alien.css">`


## Dependencies

None.


## Examples

Background color:
```html
<div class="Blue">
    Hello World!
</div>
```


Text color:
```html
<div class="RedText">
    I'm red!
</div>
```


Header:
```html
<div class="Header Blue">
    <div class="HeaderTitle WhiteText">
        Some Title
    </div>
</div>
```


Menu:
```html
<div class="LeftSideMenu Red WhiteText">
    <div class="LeftSideMenuItem">One Item</div>
</div>
```


Section:
```html
<div class="SectionTitle">Section One</div>
<div class="SectionSubtitle">Some Description</div>
```


Revealer (accordeon):
```html
<div>
    <div class="RevealerHeader">
        <div class="RevealerOpener">+</div>
        Some Title
    </div>
    <div class="RevealerContent">
        Some content!
    </div>
</div>
```


Separator:
```html
<p>Hello, world!</p>
<div class="HorizontalSeparator"></div>
<p>Hello, world! (again)</p>
```

Cursor:
```html
<div class="NormalCursor NoTextSelect">
    <a href="www.somesite.com">Click Me!</a>
</div>
```


Border:
```html
<div class="Header Blue BottomWhiteThinStrip">
    <div class="HeaderTitle WhiteText">
        Header with a white border in the bottom!
    </div>
</div>
```


Float:
```html
<div class="Blue Middle">
    I'm in the middle of the screen!
</div>
```


Position:
```html
<div class="TopRight">
    I'm in the top right corner of the screen!
</div>
```


Animation:
```html
<div class="FadingInAnimation">
    I'm going but I'll be back!<br>
    And I'll keep doing this forever!
</div>
```

## Why use this?

To have less pain when making styles and learn how to make some useful and modern css styles.

## To do

+ Add more examples here  
+ Make a documentation  
+ Add buttons, inputs, etc...  
+ Add more cursors changes  

## Version
0.1

# Thanks to Nicolas Gallagher and Jonathan Neal by normalize.css!


