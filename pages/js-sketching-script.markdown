---
layout: blank
---
<head>
    <link rel="stylesheet" type="text/css" href="theme.css">
</head>
<script src="sketch.js"></script>
<body onload="init()">
    <div id="content">
        <div id="gridContainer">
            <div id="leftContainer">
                <div id="colorPickerContainer">
                    <span id="color0" style="background-color: lightcoral;" onclick="changeColor(this)"></span>
                    <span id="color1" style="background-color: sandybrown;" onclick="changeColor(this)"></span>
                    <span id="color2" style="background-color: lemonchiffon;" onclick="changeColor(this)"></span>
                    <span id="color3" style="background-color: yellowgreen;" onclick="changeColor(this)"></span>
                    <span id="color4" style="background-color: skyblue;" onclick="changeColor(this)"></span>
                    <span id="color5" style="background-color: orchid;" onclick="changeColor(this)"></span>
                    <span id="color6" style="background-color: black;" onclick="changeColor(this)"></span>
                    <span id="color7" style="background-color: gray;" onclick="changeColor(this)"></span>
                    <span id="color8" style="background-color: white;" onclick="changeColor(this)"></span>
                </div>
                <div id="toolContainer">
                    <button id="brushButton" type="button" onclick="changeToBrush()">Brush</button>
                    <button id="bucketButton" type="button" onclick="">Bucket (Under Construction)</button>
                    <button id="eraserButton" type="button" onclick="changeToEraser()">Eraser</button>
                </div>
                <div id="markerWidthContainer">
                    <div id="markerWidthDisplay">10</div>
                    <input id="markerWidthSlider" type="range" min="1" max="100" value="20" onchange="changeWidth()">
                </div>
            </div>
            <div id="rightContainer">
                <div id="canvasOpsContainer">
                </div>
                <div id="layerContainer">
                    <span>(Planning to add layer functionality here later on.)</span>
                </div>
            </div>
            <div id="bottomContainer">
                <button type="button" onclick="clearCanvas()">Clear</button>
                <button type="button" onclick="exportCanvas()">Export</button>
            </div>
            <div id="canvasContainer">
                <canvas id="canvas" width="512px" height="512px"></canvas>
            </div>
        </div>
    </div>
</body>