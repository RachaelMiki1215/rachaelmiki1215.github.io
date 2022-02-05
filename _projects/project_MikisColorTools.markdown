---
type: project
layout: collection_item
id: 1
updated: "2022-01-17"
title: "MikisColorTools"
short-description: ".NET class library extending functionality of System.Drawing.Color."
keywords:
  - System.Drawing.Color
  - class library
  - .NET
language:
  - C#
source-code: 
  site: GitHub
  url: https://github.com/RachaelMiki1215/MikisColorTools
distributed:
  site: NuGet
  url: https://www.nuget.org/packages/MikisColorTools/
---

This project is a simple .NET class library providing additional functionality to the System.Drawing.Color struct, such as:
- Obtaining a Color struct from HSL (hue-saturation-lightness) and A (alpha).
- Obtaining the complementary Color struct.
- Obtaining a color scheme with N-number of evenly spaced colors, including the base selected.
- Obtaining the CMYK value of a Color.

<img src="/assets/images/MikisColorTools_01.png" alt="Source Code" style="width: 800px">

Currently, the following additions are pending:
- Obtain the relative luminance of a Color.
- Obtain the contrast ratio of a Color (+ accessibility OK/NG indicator).