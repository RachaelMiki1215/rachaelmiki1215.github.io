---
layout: default
title: Attributes
permalink: /attributes/
show-in-nav: true
nav-display-order: 6

attributes:
  - name: digital geometric Font
    file: /assets/fonts/DigitalgeometricBold-z8gPL.otf
    type: font
    css-font: titleFont
    img: ''
    link: https://www.fontspace.com/digital-geometric-font-f62002
    comment: An awesome looking font for site title.
  - name: Jekyll Avatar
    file: ''
    type: plugin
    css-font: ''
    img: ''
    link: https://github.com/jekyll/jekyll-avatar
    comment: Plugin to pull GitHub profile image.
  - name: Formspree
    file: ''
    type: service
    css-font: ''
    img: ''
    link: https://formspree.io/
    comment: Service which allows submitting forms in static websites like GitHub Pages.
  - name: "Favicon"
    file: "/assets/icons/favicon-16x16.png"
    type: icon
    css-font: ''
    img: "/assets/icons/favicon-16x16.png"
    link: https://www.websiteplanet.com/webtools/favicon-generator/
    comment: A quick, easy, and good-looking favicon.
  - name: "Font Awesome"
    file: ''
    type: service
    css-font: ''
    img: ''
    link: https://fontawesome.com/
    comment: Service providing icon sets and toolkits which are easy to integrate in a website.
---
<style>
  .itemDisplayGrid {
    display: grid;
  }

  .itemDescriptionList {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
  }

  .itemDisplayGrid, .itemDescriptionList {
    margin-bottom: 20px;
  }

  .itemDisplay {
    grid-column: 1;
    grid-row: 1;
    background-color: #303030;
    border-radius: 10px;
    display: flex;
    height: 100%;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
  }

  @media screen and (max-width: 1000000px) {
    .itemDisplayGrid {
      grid-template-columns: 200px 1fr;
      grid-template-rows: auto;
    }

    .itemDescriptionList {
      grid-column: 2;
      grid-row: 1;          
    }

    .itemDisplay {
      width: 100%;
      padding: auto;
    }
  }

  @media screen and (max-width: 600px) {
    .itemDisplayGrid {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
    }

    .itemDescriptionList {
      grid-column: 1;
      grid-row: 2;          
    }

    .itemDisplay {
      width: 200px;
      height: 50px;
    }
  }
</style>

{%- assign content-types=page.attributes | map: "type" | uniq | sort -%}

{%- for content-type in content-types -%}
  <h2>{{ content-type | capitalize }}</h2>
  {%- assign items=page.attributes | where: "type", content-type | sort: "name" -%}
  {%- for item in items -%}
    {%- case item.type -%}
      {%- when "font", "icon" -%}
        <div class="itemDisplayGrid">
          <div class="itemDisplay">
            {%- case item.type -%}
              {%- when "font" -%}
                <span style="font-family: {{ item.css-font }}">Lorem Ipsum</span>
              {%- when "icon" -%}
                <img src="{{ item.img }}" height=32 />
            {%- endcase -%}
          </div>
          <div class="itemDescriptionList">
            <h4>{{ item.name }}</h4>
            <div>{{ item.comment }}</div>
            <div>Link: <a href="{{ item.link }}" target="_blank">{{ item.link }}</a></div>
          </div>
        </div>
      {%- when "plugin", "service" -%}
        <div class="itemDescriptionList">
          <h4>{{ item.name }}</h4>
          <div>{{ item.comment }}</div>
          <div>Link: <a href="{{ item.link }}" target="_blank">{{ item.link }}</a></div>
        </div>
    {%- endcase -%}
  {%- endfor -%}
{%- endfor -%}