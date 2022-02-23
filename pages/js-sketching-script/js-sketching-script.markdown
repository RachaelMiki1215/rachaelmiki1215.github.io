---
layout: blank
---
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" 
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" 
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" type="text/css" href="src/css/style.css">
</head>
<body>
    <div id="gridContainer">
        <div id="topbar">
            <button id="newFileButton">New</button>
            <button id="exportButton">Export</button>
        </div>
        <div id="toolContainer">
            <svg class="toolIcon" id="brushToolButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" >
                <!-- Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M224 263.3C224.2 233.3 238.4 205.2 262.4 187.2L499.1 9.605C517.7-4.353 543.6-2.965 560.7 12.9C577.7 28.76 580.8 54.54 568.2 74.07L406.5 324.1C391.3 347.7 366.6 363.2 339.3 367.1L224 263.3zM320 400C320 461.9 269.9 512 208 512H64C46.33 512 32 497.7 32 480C32 462.3 46.33 448 64 448H68.81C86.44 448 98.4 429.1 96.59 411.6C96.2 407.8 96 403.9 96 400C96 339.6 143.9 290.3 203.7 288.1L319.8 392.5C319.9 394.1 320 397.5 320 400V400z"/>
            </svg>
            <svg class="toolIcon" id="eraserToolButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!-- Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M480 416C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H150.6C133.7 480 117.4 473.3 105.4 461.3L25.37 381.3C.3786 356.3 .3786 315.7 25.37 290.7L258.7 57.37C283.7 32.38 324.3 32.38 349.3 57.37L486.6 194.7C511.6 219.7 511.6 260.3 486.6 285.3L355.9 416H480zM265.4 416L332.7 348.7L195.3 211.3L70.63 336L150.6 416L265.4 416z"/>\
            </svg>
            <!-- TODO: Code & bind action to #bucketToolButton. -->
            <svg style="display: none;" class="toolIcon" id="bucketToolButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <!-- Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M41.37 9.372C53.87-3.124 74.13-3.124 86.63 9.372L168 90.74L221.1 37.66C249.2 9.539 294.8 9.539 322.9 37.66L474.3 189.1C502.5 217.2 502.5 262.8 474.3 290.9L283.9 481.4C246.4 518.9 185.6 518.9 148.1 481.4L30.63 363.9C-6.863 326.4-6.863 265.6 30.63 228.1L122.7 135.1L41.37 54.63C28.88 42.13 28.88 21.87 41.37 9.372V9.372zM217.4 230.6L168 181.3L75.88 273.4C71.69 277.6 68.9 282.6 67.52 288H386.7L429.1 245.7C432.2 242.5 432.2 237.5 429.1 234.3L277.7 82.91C274.5 79.79 269.5 79.79 266.3 82.91L213.3 136L262.6 185.4C275.1 197.9 275.1 218.1 262.6 230.6C250.1 243.1 229.9 243.1 217.4 230.6L217.4 230.6zM448 448C448 422.8 480.6 368.4 499.2 339.3C505.3 329.9 518.7 329.9 524.8 339.3C543.4 368.4 576 422.8 576 448C576 483.3 547.3 512 512 512C476.7 512 448 483.3 448 448H448z"/>
            </svg>
        </div>
        <div id="rightContainer">
            <div id="canvasOpsContainer">
            </div>
            <div id="toolWidthContainer">
                <input id="toolWidthInput" type="number" min="1" max="100" value="10">
                <input id="toolWidthSlider" type="range" min="1" max="100" value="10">
            </div>
            <div id="colorPickerContainer">
                <!-- TODO: Create color picker widget -->
                <span id="color0" class="colorSwatch" style="background-color: lightcoral;"></span>
                <span id="color1" class="colorSwatch" style="background-color: sandybrown;"></span>
                <span id="color2" class="colorSwatch" style="background-color: lemonchiffon;"></span>
                <span id="color3" class="colorSwatch" style="background-color: yellowgreen;"></span>
                <span id="color4" class="colorSwatch" style="background-color: skyblue;"></span>
                <span id="color5" class="colorSwatch" style="background-color: orchid;"></span>
                <span id="color6" class="colorSwatch" style="background-color: black;"></span>
                <span id="color7" class="colorSwatch" style="background-color: gray;"></span>
                <span id="color7" class="colorSwatch" style="background-color: brown;"></span>
                <span id="color8" class="colorSwatch" style="background-color: white;"></span>
            </div>
            <div id="layerContainer">
                <div id="layerOpsContainer">
                    <svg class="layerOpsIcon" id="addLayerButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
                    </svg>
                    <svg class="layerOpsIcon" id="deleteLayerButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
                    </svg>
                    <svg class="layerOpsIcon" id="clearLayerButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128z"/>
                    </svg>
                </div>
                <select id="layerList" multiple>
                </select>
            </div>
        </div>
        <div id="canvasContainer">
            <div id="canvasArea">
            </div>
        </div>
    </div>
    <script src="src/js/sketch.js"></script>
</body>