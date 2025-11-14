# Joez Image Gallery with Modal&trade;

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
  <img src="image1.jpg" alt="Sunset" class="modal-trigger img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal" loading="auto" />
  <img src="image2.jpg" alt="Mountains" class="modal-trigger img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal" loading="auto" />
</div>
```


## Full HTML Page

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Joez Image Gallery with Modal&trade;</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
  <h1><a href="https://amzn.to/481TqkN" target="_blank" rel="noopener">Joez</a> Image Gallery with Modal&trade;</h1>

  <div class="container my-5">
    <div class="gallery row">
      <div class="col-md-4 mb-3">
        <img src="https://via.placeholder.com/300x200?text=Image+1" alt="Image 1" class="modal-trigger img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal" loading="auto" />
      </div>
      <div class="col-md-4 mb-3">
        <img src="https://via.placeholder.com/300x200?text=Image+2" alt="Image 2" class="modal-trigger img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal" loading="auto" />
      </div>
      <div class="col-md-4 mb-3">
        <img src="https://via.placeholder.com/300x200?text=Image+3" alt="Image 3" class="modal-trigger img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal" loading="auto" />
      </div>
    </div>
  </div>

  <p>If you like this, and want to <a href="https://amzn.to/481TqkN" target="_blank" rel="noopener">help Joe</a>, consider shopping through <a href="https://amzn.to/481TqkN" target="_blank" rel="noopener">his link</a>. It doesn't cost you anything extra, and he gets a (small) commission on whatever you buy. </p>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="image-modal.js"></script>
</body>
</html>
```
