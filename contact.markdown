---
layout: default
title: Contact
permalink: /contact/
show-in-nav: true
nav-display-order: 5
is-top-page: true
keywords:
  - Contact
---

<style>
    form * {
        display: block;
    }

    label, input[type="submit"] {
        margin-top: 10px;
    }

    input[type="text"], textarea {
        width: 300px;
    }
</style>

<!-- Using Formspree as GitHub pages does not support any dynamic components (e.g. PHP). -->
<form action="https://formspree.io/f/mayvqely" method="POST">
    <label for="senderName">Name</label>
    <input type="text" name="senderName" placeholder="Your name..." required>

    <label for="senderEmailAddress">Email Address (Optional)</label>
    <input type="text" name="senderEmailAddress" placeholder="Your email address...">    

    <label for="messageSubject">Subject</label>
    <input type="text" name="messageSubject" placeholder="Subject..." required>    

    <label for="message">Message:</label>
    <textarea name="message" placeholder="What's up?" required style="height: 150px; resize: vertical;"></textarea>

    <input type="submit" value="Send">
</form>