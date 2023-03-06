# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

| Screenshots                                               |
| --------------------------------------------------------- | -------------------------------------------- |
| ![Desktop Screenshot](/screenshot.png) Desktop Screenshot | ![Mobile Screenshot](/mobile-screenshot.png) |

### Links

- Solution URL: [My Solution](https://your-solution-url.com)
- Live Site URL: [Github Pages](https://delanohendrix.github.io/FAQ-Accordion-Card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass
- Javascript

### What I learned

I'm pretty proud of how I handled building the accordion in HTML. The way I decided to break it down allowed me to clearly know what each part needed to do and what it was meant to do. This was also my first time using SASS on a project and I believe I caught onto it fairly quickly. I did need to lookup the limits on how far I should nest classes (Before I took it too far), but other than that it was an enjoyable experience.

```html
<section class="content">
  <h1>FAQ</h1>
  <div class="accordion" id="accordion">
    <div class="accordion-item">
      <p class="accordion-heading">
        How many team members can I invite?
        <img src="images/icon-arrow-down.svg" />
      </p>
      <div class="accordion-body">
        <p>
          You can invite up to 2 additional users on the Free plan. There is no limit on team
          members for the Premium plan.
        </p>
      </div>
      <div class="divider"></div>
    </div>
  </div>
</section>
```

### Continued development

I would like to practice using SASS more, as well as continue to learn Javascript.

### Useful resources

- [How to build an accordion with JavaScript](https://www.itzami.com/blog/how-to-build-an-accordion-with-javascript) - This blog post was crucial to my learning of how to implement the functionality of the accordion component in javascript.
- [CSS Reference](https://cssreference.io/) - This site helped me by refreshing me on the usage of various css attributes and properties.

## Author

- Frontend Mentor - [@delanohendrix](https://www.frontendmentor.io/profile/delanohendrix)

## Acknowledgments

My orginal appoach to handling the images and the shadows quickly fell apart and became a headache. Seer Studio's [video](https://www.youtube.com/watch?v=mLZGpEHgOO8) on the challenge really helped me get passed that hurdle.
