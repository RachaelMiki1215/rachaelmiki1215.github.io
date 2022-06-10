---
type: bio
layout: collection_item
title: About Author
show-in-nav: false
is-top-page: false
show-header: false
keywords:
  - About
  - Author
---

<style>
    .gridWrapper {
        display: grid;
        grid-gap: 5px;
    }

    .profDesc {
        grid-column: 1
    }

    .profImg {
        display: block;
    }

    .profImg img {
        object-fit: contain;
        align-self: start;
    }

    @media screen and (min-width: 800px) {
        .gridWrapper {
            grid-template-columns: 500px 300px;
            grid-template-rows: 300px;
        }

        .profDesc {
            grid-row: 1;
        }

        .profImg {
            grid-row: 1;
            grid-column: 2;
        }
    }

    @media screen and (max-width: 799px) {
        .gridWrapper {
            grid-template-columns: auto;
            grid-template-rows: auto auto;
        }

        .profDesc {
            grid-row: 1;
        }

        .profImg {
            grid-row: 2;
            grid-column: 1;
        }
    }
</style>

{% assign gitHubUser="RachaelMiki1215" %}

<div class="gridWrapper">
    <div class="profDesc">
        <p>
            Hello, thank you for visiting my page.
        </p>
        <p>
            My name is <strong><u>RachaelMiki1215</u></strong>.
            <br> I am a self-taught coding/programming hobbyist.
        </p>
        <p>
            Currently, I mostly work with C# and HTML/CSS/Javascript.
            <br> (And as you see here by this subpar website, I'm really struggling with web development.)
        </p>
        <p>
            I've created this page to showcase my projects.
        </p>
    </div>
    <div class="profImg">
        {% avatar {{ gitHubUser }} size=300 %}
    </div>
</div>



