# Shapes Reflection

In this assignment, I used the bounding box with points relating to x, y, w, and h to create a shape. The shape that I made was a rocketship with yellow flames being expelled from the end of the rocket. I found using a bounding box is very helpful for creating shapes, as we can use specific x and y values for our points within a bounding box, which I found to make it easier to plan the shape in p5js. A major challenge for me was creating a rectangle using points. At first, I had used vertexes within the beginShape and endShape commands. But when I attempted to use the "fill" command on the shape, I found that p5js only created triangles instead of rectangles(see below). I resolved the issue by creating 4 triangles to form the shape of a rectangle, which I could then fill with the desired color. I'm proud of how I worked around this challenge. Although I believe there may be other ways to solve this problem, I used a common point (which cannot be seen, but is noted in the sketch) as the center of the rectangle.

## Example of Issue
<img width="837" alt="Ex of issue" src="https://github.com/user-attachments/assets/08d59f59-cfc9-43b3-9526-46836154237a">

## Sketch
![Drawing Sept26 2](https://github.com/user-attachments/assets/c893c446-c099-4bd8-96ab-b8378a124145)
