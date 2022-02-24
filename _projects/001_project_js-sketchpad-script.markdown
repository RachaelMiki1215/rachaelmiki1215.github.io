---
type: project
layout: collection_item
is-top-page: false
show-header: true
updated: "2022-01-21"
title: "js sketching script"
short-description: "Simple sketchpad coded with HTML, CSS, and Javascript."
keywords:
  - Sketch
  - Sketchpad
  - canvas
  - jQuery
language:
  - HTML
  - HTML5
  - CSS
  - JavaScript
source-code: 
  site: GitHub
  url: https://github.com/RachaelMiki1215/js-sketching-script
try-me-url: /pages/js-sketching-script/js-sketching-script.html
---

This project is a simple sketchpad coded with HTML, CSS, and Javascript, based on the **canvas** element supported in HTML5.

<iframe width="560" height="315" src="https://www.youtube.com/embed/O1NRno-5QZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Current Features
- Draw on blank canvas
- Erase drawings on canvas
- Change brush color and width
- Clear canvas
- Export canvas in .PNG format
- Layers

## Obstacles
The following obstacles and issues were encountered and resolved during development:
- Drawn lines becomming jagged
  - Use .quadraticCurveTo() method instead of lineTo method().
- Vanilla JavaScript cannot manipulate dynamically created DOM elements, and therefore cannot support layers.
  - Use jQuery.

## Updates Planned
* ~~Change canvas size when window size changes~~ (Different implementation)
* ~~Revert back to original color when returning from eraser to brush tool~~ (Complete)
* Add view of currently selected color
* ~~Save/export canvas~~ (Complete)
* ~~Change brush width~~ (Complete)
* Change brush shape
* Bucket fill tool
* ~~Layer support~~ (Complete)
* Change canvas color
* Undo operation
* Redo operation
* Add more flexible color picker (color wheel + sliders)
* Support exporting canvases with different name and format.