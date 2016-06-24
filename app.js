// TRY OUT THE SSShapes BALL LIBRARY
// Here are a some examples

// Create a new SSShapes Circle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape1 = _SSS('circle',200,200,'#999');

// Then use these chainable methods to process the question and 
//  log the shapes's specifications in the console window.
shape1.HTMLShape($('#displayACircle'))

// Create a new SSShapes Square object. 
// (The architecture will take setting up the 'new' keyword.)
var shape2 = _SSS('square',100,100,'blue');
shape2.HTMLShape($('#displayASquare'))

// Create a new SSShapes up Triangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape3 = _SSS('triangle',100,0,'orange','up');
shape3.HTMLShape($('#displayATriangleUD'))

// Create a new SSShapes down Triangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape4 = _SSS('triangle',100,0,'purple','down');
shape4.HTMLShape($('#displayATriangleUD'))

// Create a new SSShapes left Triangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape5 = _SSS('triangle',100,0,'yellow','left');
shape5.HTMLShape($('#displayATriangleLR'))

// Create a new SSShapes right Triangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape6 = _SSS('triangle',100,0,'pink','right');
shape6.HTMLShape($('#displayATriangleLR'))

// Create a new SSShapes top left Triangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape7 = _SSS('triangle',50,0,'red','top left');
shape7.HTMLShape($('#displayATriangles1'))

// Create a new SSShapes top right Triangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape8 = _SSS('triangle',50,0,'brown','top right');
shape8.HTMLShape($('#displayATriangles3'))

// Create a new SSShapes bottom left Triangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape9 = _SSS('triangle',50,0,'brown','bottom left');
shape9.HTMLShape($('#displayATriangles2'))

// Create a new SSShapes bottom right Triangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape10 = _SSS('triangle',50,0,'red','bottom right');
shape10.HTMLShape($('#displayATriangles4'))

// Create a new SSShapes Rectangle object. 
// (The architecture will take setting up the 'new' keyword.)
var shape11 = _SSS('rectangle',150,100,'green');

// Since this shape is not in the library it will throw an error 
//  in the console but allow of shapes created after it to be generated
shape11.HTMLShape($('#displayARectangle')); 

/*
// Create a new SSShapes Square object that makes a rectangle. 
// (The architecture will take setting up the 'new' keyword.)
var shape12 = _SSS('square',150,100,'black');
shape12.HTMLShape($('#displayARectangle'));
*/

