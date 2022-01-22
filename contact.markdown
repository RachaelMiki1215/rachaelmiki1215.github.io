---
layout: default
title: Contact
permalink: /contact/
show-in-nav: true
nav-display-order: 4
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
    <label for="senderName">Your Name</label>
    <input type="text" name="senderName" placeholder="Your name..." required>

    <label for="senderEmailAddress">Your Email Address (Optional)</label>
    <input type="text" name="senderEmailAddress" placeholder="Your email address...">    

    <label for="messageSubject">Subject</label>
    <input type="text" name="messageSubject" placeholder="Subject..." required>    

    <label for="message">Message:</label>
    <textarea name="message" placeholder="What's up?" required style="height: 200px; resize: vertical;"></textarea>

    <input type="submit" value="Send">
</form>