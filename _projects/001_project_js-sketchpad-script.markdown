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
language:
  - HTML
  - HTML5
  - CSS
  - Javascript
source-code: 
  site: GitHub
  url: https://github.com/RachaelMiki1215/js-sketching-script
try-me-url: /pages/js-sketching-script.html
---

This project is a simple sketchpad coded with HTML, CSS, and Javascript, based on the **canvas** element supported in HTML5.  
At present ({{ page.updated }}), the following features exist:
- Draw on blank canvas
- Erase drawings on canvas
- Change brush color and width
- Clear canvas
- Export canvas in .PNG format.

<img src="/assets/images/js-sketching-script_01.gif" alt="Sketch in Action" style="width: 500px">
<img src="/assets/images/js-sketching-script_02.gif" alt="Sketch in Action" style="width: 500px">

## Obstacles
The following obstacles and issues were encountered and resolved during development:
* Drawn lines becomming jagged
  * Use .quadraticCurveTo() method instead of lineTo method().

## Updates Planned
The following additions are planned in the future:
* ~~Change canvas size when window size changes~~ (Different implementation)
* ~~Revert back to original color when returning from eraser to brush tool~~ (Complete)
* Add view of currently selected color
* ~~Save/export canvas~~ (Complete)
* ~~Change brush width~~ (Complete)
* Change brush shape
* Bucket fill tool
* Layer support
* Change canvas color
* Undo operation
* Redo operation
* Add more flexible color picker (color wheel + sliders)
* Support exporting canvases with different name and format.