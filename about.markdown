---
layout: default
title: About
permalink: /about/
show-in-nav: true
nav-display-order: 2
---

{% assign gitHubUser="RachaelMiki1215" %}

<style>
    .content-grid {
        width: 1000px;
        height: 500px;
        display: grid;
        grid-template-columns: 5fr 4fr;
        grid-template-rows: 50px 80px 1fr;
    }

    .role {
        grid-column: 1;
        grid-row: 1;
        font-size: 18pt;
    }

    .name {
        grid-column: 1;
        grid-row: 2;
        font-family: titleFont;
        font-size: 24pt;
    }

    .description {
        grid-column: 1;
        grid-row: 3;
        p {
            margin-bottom: 20px;
            line-height: 1.5;
        }
    }

    .prof-img {
        grid-column: 2;
        grid-row: 1 / span 3;
        img {
            object-fit: cover;
        }
    }
</style>

<div class="content-grid">
    <div class="role">Author</div>
    <div class="name">RachaelMiki1215</div>
    <div class="description">
        <p>
            Hello, thank you for visiting my page.
        </p>
        <p>
            My name is <strong>RachaelMiki1215.</strong>
            <br>I am a self-taught coding/programming hobbyist.
            <br>Currently, I mostly work with C#.
            <br>(And as you see here by this subpar website, I'm really struggling with web development.)
        </p>
        <p>
            I've created this page to showcase my projects.
        </p>
    </div>
    <div class="prof-img">
        {% avatar {{ gitHubUser }} size=430 %}
    </div>
</div>
