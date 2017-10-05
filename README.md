# ![Logo](Alien.png "Alien.css")

Alien.css is a collection of some of the best styles that i've made, helping make styles with a good (and lazy) way to add styles to HTML elements.<br>
Now using [normalize.css](https://github.com/necolas/normalize.css "normalize.css") to make it works in all browsers. The normalize.css code is already included in the Alien.css.


## Auto setup with AJAX

1. Setup a config file written in JSON, name it as `AlienConfig.json` and put it in the same folder of your HTML file. The setup file must be like this:
    ```json
    {
        "AlienPath": "YourPathToAlien.css/",
        "AlienAnimations": true,
        "AlienButtons": true,
        "AlienMisc": true,
        "AlienPositions": true
    }
    ```

    * `AlienPath` is where `Alien.css` is located with all your files.

    * `AlienAnimations` tell that animations will be used.

    * `AlienButtons` tell that buttons will be used.

    * `AlienMisc` tell that miscellaneous will be used.

    * `AlienPositions` tell that positioning will be used.

    * If a dependencie don't be used, remove it from the JSON file or set it to `false`.


2. Put the following code line inside the `<head>` tag before any style:

    * `<script type="text/javascript" src="YourPathToAlien.css/Alien.js"></script>`

    * This script will execute when the window loads and put all dependencies in the HTML file based in the JSON file.

## Setup by hand

1. Put the following code line inside the `<head>` tag before any style:

    * `<link rel="stylesheet" type="text/css" href="Alien.css">`

2. Put the needed stylesheets of Alien.css in you HTML file.


## Dependencies

None.


## Why use this?

To have less pain when making styles and learn how to make some useful and modern css styles.

## To do

+ Make a documentation  

## Version
0.3

# Thanks to Nicolas Gallagher and Jonathan Neal by normalize.css!


