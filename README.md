# SSShapes mini Javascript library
------------

A mini Javascript library that creates the basic shapes: circle, square, and triangle in your HTML5 code. It is supported by JQuery to handle the DOM-specific operations. The CSS code is borrowed from https://css-tricks.com/examples/ShapesOfCSS/

------------
To use this library you need to create a container element to display the shape (ie, div, p, span, or heading 'H1, H2...'elements will do the trick). Be sure to give the HTML element(s) an 'id' attribute which will be used in setup of the SSShapes object in your JS file (check out the app.js file).

This object can be called using the 'SSShapes' or '_SSS' keywords. Then use the 'HTMLShape(...)' method to pass the container's id to the object.  

A SSShapes object constructor call looks something like this:          

** _SSS('shape-name',dimension1,dimension2,'color-name-or-hex-number','direction-OPTIONAL') **

The SSShapes.js is commented so check it out for more details but here are a few things to note.

- This library was created with the intention of using a Javascript best practices. For instance, SSShapes' methods are placed in the Prototype object to conserve memory space as well as using regular expressions to 'scrub' submitted questions for processing. 
- There are three shapes methods but as you see in the app.js file, you can create a 8 types of triangles from an up triange to a bottom right triangle if you enter a direction. 

This mini library definitely can be further reworked and expanded so enjoy!

