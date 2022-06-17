---
type: bio
layout: collection_item
title: Resume
show-in-nav: false
is-top-page: false
show-header: false
keywords:
  - About
  - Author
  - Resume
---

<style>

    main {
        word-wrap: break-word;
        font-size: smaller;
    }

    ul {
        margin-top: 0px;
        margin-bottom: 0px;
        list-style-type: square;
    }

    #profImgNameSection {
        text-align: center;
        align-content: center;
    }
    #profImg {
        width: 250px;
        height: 250px;
        margin: auto;
        border-radius: 50%;
        background-image: url("/assets/images/resume_photo.png");
        background-size: 150%;
        background-position: 0% 40%;
        transform: rotate(10deg);
    }

    #qrCodeSection {
        text-align: center;
        align-content: center;
        position: relative;
    }
    #qrCodeSection>hr {
        margin: auto;
    }
    #qrCodeSection #pageQRCode {
        position: relative;
        margin: 35px auto 10px;
        width: 230px;
        height: 230px;
        border-radius: 30px;
    }
    #qrCodeSection #qrCodeSpeechBubble {
        transform: scale(0.9);
        z-index: 2;
        position: absolute;
        top: 10px;
        left: 0;
    }

    .projectParams {
        background-color: none;
        border-radius: 0px;
        margin-top: 0px;
        margin-bottom: 5px;
        font-size: smaller;
    }
    .projectParams dt {
        display: list-item;
        list-style-type: square;
        list-style-position: inside;
        float: left;
        clear: left;
        font-weight: bold;
    }
    .projectParams dt::after {
        content: ":  ";
        margin-right: 5px;
    }

    .skillDict {
        display: list-item;
        list-style-type: none;
        list-style-position: outside;
        margin: 0;
    }
    .skillDict>li {
        display: block;
        box-sizing: border-box;
        margin: 5px 0px;
        padding: 5px 10px;
        background-color: lightcoral;
        width: 0%;
        position: relative;
    }
    .skillDict>li, .skillLevel {
        border-radius: 10px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    .skillName {
        text-align: right;
        color: #202020;
    }
    .skillLevel {
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgb(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        margin-top: auto;
        margin-bottom: auto;
        opacity: 0%;
        transition: 0.3s;
    }
    .skillLevel::after {
        content: "/5"
    }

    .skillDict>li:hover .skillLevel {
        opacity: 100%;
    }

    .gridWrapper {
        display: grid;
        grid-gap: 10px;
        width: 100%;
    }

    .section1, .section2, .section3 {
        background-color: #202020;
        border-radius: 20px;
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
    }

    .socialsList, .hobbiesList {
        list-style-type: none;
        margin: 0;
    }
    .socialsList>li, .hobbiesList>li {
        margin: 5px 0px;
        padding: 5px;
        transition: 0.3s;
        border-radius: 5px;
        font-size: 0.9rem;
    }
    .socialsList>li:hover {
        background-color: lightcoral;
        cursor: pointer;
    }

    .item {
        margin-left: 20px;
    }

    .sectionItem p {
        margin-top: 5px;
    }

    .print {
        display: none;
    }

    @media screen and (min-width: 1300px) {
        .gridWrapper {
            grid-template-columns: 300px auto 250px;
            grid-template-rows: auto;
        }

        .section1 {
            grid-column: 1;
            grid-row: 1;
        }

        .section2 {
            grid-column: 2;
            grid-row: 1;
        }

        .section3 {
            grid-column: 3;
            grid-row: 1;
        }
    }

    @media screen and (max-width: 1299px) {
        .gridWrapper {
            grid-template-columns: 300px auto;
            grid-template-rows: auto auto;
        }

        .section1 {
            grid-column: 1;
            grid-row: 1 / span 2;
        }

        .section2 {
            grid-column: 2;
            grid-row: 1;
        }

        .section3 {
            grid-column: 2;
            grid-row: 2;
        }
    }

    @media screen and (max-width: 799px) {
        .gridWrapper {
            grid-template-columns: auto;
            grid-template-rows: auto auto auto;
        }

        .section1 {
            grid-column: 1;
            grid-row: 1;
        }

        .section2 {
            grid-column: 1;
            grid-row: 2;
        }

        .section3 {
            grid-column: 1;
            grid-row: 3;
        }
    }

    @media print {
        * {
            color: black;
            font-size: 0.8rem;
        }
        h1, h2, h3, h4, h5, h6, i {
            color: #d87575;
        }

        body {
            background-color: transparent;
        }

        main {
            margin: 0;
        }

        #titleArea, header, footer, navbar, #menu-hamburger, #sub-navbar, #search-button, #search-box, .no-print {
            display: none; 
        }

        .print {
            display: block;
        }

        main {
            position: relative;
            margin-top: 0;
            top: 0;
            left: 0;
        }

        hr {
            border-color: white;
            margin: 10px 0;
        }

        #profImg {
            width: 200px;
            height: 200px;
        }

        .gridWrapper {
            grid-template-columns: 250px auto;
            grid-template-rows: auto auto;
        }
        .section1 {
            grid-column: 1;
            grid-row: 1 / span 2;
        }
        .section2 {
            grid-column: 2;
            grid-row: 1;
        }
        .section3 {
            grid-column: 2;
            grid-row: 2;
        }

        .section1, .section2, .section3 {
            background-color: #ffe7e7;
            padding: 5px;
            border-radius: 10px;
        }

        .socialsList>li, .hobbiesList>li {
            margin: 0;
            padding: 2px;
            transition: 0.3s;
            border-radius: 5px;
            font-size: 0.9rem;
        }

        .skillDict>li {
            padding: 2px 5px;
            background-color: #d87575;
        }
        .skillName {
            color: white;
        }
    }
</style>

<div class="gridWrapper">
    <div class="section1">
        <div id="profImgNameSection">
            <div id="profImg">
            </div>
            <h3>Rachael Buxton</h3>
            <h5>Software System Engineer</h5>
        </div>
        <hr>
        <div id="socialsSection">
            <div class="collapseTitle">
                <h4>Contacts & Socials</h4>
                <div class="arrow"></div>
            </div>
            <ul class="socialsList collapseSection">
                <li>
                    <a href="/contact/" target="_blank">
                        <span>
                            <i class="fas fa-envelope"></i>
                            rachaelbuxton1215@gmail.com
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                        <span>
                            <i class="fas fa-globe-americas"></i>
                            https://rachaelmiki1215.github.io/
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RachaelMiki1215" target="_blank">
                        <span>
                            <i class="fab fa-github"></i>
                            https://github.com/RachaelMiki1215
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rachael-buxton" target="_blank">
                        <span>
                            <i class="fab fa-linkedin-in"></i>
                            https://www.linkedin.com/in/rachael-buxton
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/RachaelMiki1215" target="_blank">
                        <span>
                            <i class="fab fa-twitter"></i>
                            https://twitter.com/RachaelMiki1215
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <hr>
        <div id="educationSection">
            <div class="collapseTitle">
                <h4>Education</h4>
                <div class="arrow"></div>
            </div>
            <div class="collapseSection">
                <h5>Bachelors of Science in Physics</h5>
                <div class="item">
                    University of Texas at Dallas, Richardson, TX
                </div>
            </div>
        </div>
        <hr>
        <div id="hobbiesInterestsSection">
            <div class="collapseTitle">
                <h4>Hobbies / Interests</h4>
                <div class="arrow"></div>
            </div>
            <ul class="hobbiesList collapseSection">
                <li>
                    <i class="fa fa-solid fa-code"></i>
                    Coding / Programming
                </li>
                <li>
                    <i class="fa fa-solid fa-pencil"></i>
                    Drawing
                </li>
            </ul>
        </div>
        <div id="qrCodeSection" class="print">
            <hr>
            <img src="/assets/images/pixel-speech-bubble.png" id="qrCodeSpeechBubble" />
            <a href="https://rachaelmiki1215.github.io/about/bio/resume" target="_blank">
                <img id="pageQRCode" src="/assets/images/ResumeQRCode.png" />
            </a>
        </div>
    </div>
    <div class="section2">
        <div id="workExperienceSection">
            <div class="collapseTitle">
                <h4>Work Experience</h4>
                <div class="arrow"></div>
            </div>
            <div class="collapseSection">
                <h5>Software System Engineer</h5>
                <div class="item">
                    <h6>TSG U.S.A., Inc. • Jan 2018 ~ Present</h6>
                    Assigned to Panasonic and Toyota for Infotainment System OEM development support.
                    <h6>Responsibilities</h6>
                    <ul>
                        <li>Organized OEM-server interface confirmation event and vehicle evaluation</li>
                        <li class="no-print">Supported publication and review of UI screen/transition specifications.</li>
                    </ul>
                    <h6>Accomplishments</h6>
                    <ul>
                        <li>Provided 4mo early start from initial development schedule by completing OEM-server interface confirmation.</li>
                        <li>Automated vehicle evaluation scheduling and record-keeping. Reduced 50% of coordination time.</li>
                        <li>Created macros to aid publication of UI specifications. Reduced 10% of required time.</li>
                    </ul>
                </div>
                <h5>Freelancer - Data Analysis / Coding</h5>
                <div class="item">
                    <h6>Fiverr • Nov 2021 ~ Present</h6>
                    Working on various code/script development and Microsoft Excel formula revision requests.
                    <h6>Accomplishments</h6>
                    <ul>
                        <li>Completed request for web crawler development.</li>
                        <li class="no-print">Supported troubleshooting Microsoft Excel formulas.</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr>
        <div id="projectsSection">
            <div class="collapseTitle">
                <h4>Projects</h4>
                <div class="arrow"></div>
            </div>
            <div class="collapseSection">
                <h5>Work</h5>
                <div class="item">
                    <h6>Vehicle Reservation System</h6>
                    System for testing teams to view details of, check availability and reserve test vehicles.
                    <dl class="projectParams">
                        <dt>Languages/Platforms Used</dt>
                        <dd>MS Power Apps, MS Power Automate, MS SharePoint</dd>
                    </dl>
                </div>
                <h5>Personal</h5>
                <div class="item">
                    <div style="display: flex; flex-direction: row; align-items: center;">
                        <h6>Simple Employee Database Management Website</h6>
                        <a href="https://github.com/RachaelMiki1215/SSquaredEnterprisesPersonnelSystem-NodeJs-Example" 
                        class="srcCodeButton no-print" target="_blank"></a>
                        <a href="https://ssquaredenterprisespersonnelsystem-nodejs-example.azurewebsites.net/" class="demoButton no-print" target="_blank"></a>
                    </div>
                    Simple example of employee database management website using NodeJS.
                    <dl class="projectParams">
                        <dt>Languages/Platforms Used</dt>
                        <dd>JavaScript (JQuery, NodeJS)</dd>
                    </dl>
                </div>
                <div class="item">
                    <div style="display: flex; flex-direction: row; align-items: center;">
                        <h6>Color Methods .NET Class Library</h6>
                        <a href="https://github.com/RachaelMiki1215/MikisColorTools" 
                        class="srcCodeButton no-print" target="_blank"></a>
                    </div>
                    C# .NET class library extending functionality of System.Drawing.Color struct.
                    <dl class="projectParams">
                        <dt>Languages/Platforms Used</dt>
                        <dd>C#</dd>
                    </dl>
                </div>
                <div class="item no-print">
                    <div style="display: flex; flex-direction: row; align-items: center;">
                        <h6>Portfolio Website</h6>
                        <a href="https://github.com/RachaelMiki1215/rachaelmiki1215.github.io" 
                        class="srcCodeButton no-print" target="_blank"></a>
                        <a href="https://rachaelmiki1215.github.io/" 
                        class="demoButton no-print" target="_blank"></a>
                    </div>
                    Website to showcase my projects created using HTML/CSS/JS on top of GitHub Pages with Jekyll.
                    <dl class="projectParams">
                        <dt>Languages/Platforms Used</dt>
                        <dd>HTML, CSS, Javascript</dd>
                    </dl>
                </div>
                <div class="item no-print">
                    <div style="display: flex; flex-direction: row; align-items: center;">
                        <h6>Javascript Sketching Tool</h6>
                        <a href="https://github.com/RachaelMiki1215/js-sketching-script" 
                        class="srcCodeButton" target="_blank"></a>
                        <a href="https://rachaelmiki1215.github.io/pages/js-sketching-script/js-sketching-script.html" 
                        class="demoButton no-print" target="_blank"></a>
                    </div>
                    Sketching tool created using HTML5 canvas element with JavaScript.
                    <dl class="projectParams">
                        <dt>Languages/Platforms Used</dt>
                        <dd>HTML, CSS, Javascript</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
    <div class="section3">
        <div id="skillSection">
            <h4>Skills</h4>
            <div class="collapseTitle">
                <h5>Technical</h5>
                <div class="arrow"></div>
            </div>
            <ul class="skillDict collapseSection">
                <li>
                    <div class="skillName">C#</div>
                    <div class="skillLevel">3</div>
                </li>
                <li>
                    <div class="skillName">T-SQL</div>
                    <div class="skillLevel">2</div>
                </li>
                <li>
                    <div class="skillName">VBA</div>
                    <div class="skillLevel">4</div>
                </li>
                <li>
                    <div class="skillName">HTML</div>
                    <div class="skillLevel">5</div>
                </li>
                <li>
                    <div class="skillName">JavaScript</div>
                    <div class="skillLevel">3</div>
                </li>
                <li>
                    <div class="skillName">CSS</div>
                    <div class="skillLevel">4</div>
                </li>
                <li>
                    <div class="skillName">Microsoft Power Platform</div>
                    <div class="skillLevel">4</div>
                </li>
            </ul>
            <div class="collapseTitle">
                <h5>Project Management</h5>
                <div class="arrow"></div>
            </div>
            <ul class="skillDict collapseSection">
                <li>
                    <div class="skillName">Jira</div>
                    <div class="skillLevel">4</div>
                </li>
                <li>
                    <div class="skillName">Confluence</div>
                    <div class="skillLevel">4</div>
                </li>
            </ul>
            <div class="collapseTitle">
                <h5>Language</h5>
                <div class="arrow"></div>
            </div>
            <ul class="skillDict collapseSection">
                <li>
                    <div class="skillName">English</div>
                    <div class="skillLevel">5</div>
                </li>
                <li>
                    <div class="skillName">Japanese</div>
                    <div class="skillLevel">5</div>
                </li>
            </ul>
        </div>
    </div>
</div>
<script src="/assets/js/resume.js"></script>