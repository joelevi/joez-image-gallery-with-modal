# joez-image-gallery-with-modal
# Image Modal Gallery

## Description
Lightweight JS module for Bootstrap-powered image modals. Dynamically creates HTML, styles, and interactions for click-to-enlarge galleries in `.gallery` containers.

## Dependencies
 - [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-blue?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 - [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-blueviolet?style=flat-square)](https://getbootstrap.com/)

## Features

- Dynamic modal injection (no HTML needed).
- Loads `src`/`alt` from triggers; centered view with alt footer.
- Hover: Pointer + opacity on triggers (excludes modal image).
- Close: Click outside image, backdrop, or button.
- Optimized: Activates only with `.gallery`; eager loading; ARIA focus fix.
- Styling: Modern shadows, responsive sizing.
- Bootstrap 5 compatible.

## Concise HTML

```html
<div class="gallery">
  <img src="image1.jpg" alt="Sunset" class="modal-trigger img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal">
  <img src="image2.jpg" alt="Mountains" class="modal-trigger img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal">
</div>
