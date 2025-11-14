// ****************************************************************
// Joez Image Gallery with Modal
// joez-image-modal.js

// Only run if a .gallery container exists on the page
if (document.querySelector('.gallery')) {
    // Inject all CSS via JavaScript
    (function() {
        const css = `
            /* Custom CSS for image modal sizing */
            .modal-dialog {
                max-width: none !important;
                width: auto !important;
                margin: 1.75rem auto;
            }
            .modal-content {
                border: none;
                border-radius: 0;
                background: transparent;
                box-shadow: none;
                position: relative;
            }
            .modal-body {
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 90vh;
            }
            .image-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 100%;
            }
            .modal-body img {
                max-width: 100%;
                max-height: 90vh;
                width: auto;
                height: auto;
                border-radius: 0.5rem 0.5rem 0 0;
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            }
            .footer-container {
                background: white;
                width: 100%;
                border-radius: 0 0 0.5rem 0.5rem;
                padding: 0.5rem 1rem;
                display: flex;
                align-items: center;
                height: 4rem;
            }
            /* Optional: Style for trigger images */
            .modal-trigger {
                cursor: pointer;
                transition: transform 0.2s ease;
            }
            .modal-trigger:hover {
                transform: scale(1.05);
            }
            /* Ensure backdrop click closes modal */
            .modal {
                backdrop-filter: blur(0);
            }
            .footer-container .btn-close {
                filter: none;
                opacity: 0.5;
            }
            .footer-container .btn-close:hover {
                opacity: 0.8;
            }
            /* Make <img> elements act like hyperlinks when hovered (except modal image) */
            img:not(#modalImage):hover {
                cursor: pointer;
                opacity: 0.8; /* Subtle fade for hover feedback, mimicking link hover */
            }
        `;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    })();

    // Dynamically create the image modal and append it to the body
    (function() {
        const modalHTML = `
            <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true" data-bs-backdrop="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="image-container">
                                <img id="modalImage" src="" alt="Modal Image" loading="eager">
                                <div class="footer-container">
                                    <h3 id="modalAltText" class="flex-grow-1 text-center"></h3>
                                    <button type="button" class="btn-close me-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = modalHTML;
        document.body.appendChild(modalDiv.firstElementChild);
    })();

    // Dynamic image loading, alt text, and click-to-close outside image
    const imageModal = document.getElementById('imageModal');
    const modalContent = imageModal.querySelector('.modal-content');
    const imageContainer = imageModal.querySelector('.image-container');
    const modalImage = document.getElementById('modalImage');
    const modalAltText = document.getElementById('modalAltText');

    imageModal.addEventListener('show.bs.modal', function (event) {
        const trigger = event.relatedTarget;
        const altText = trigger.alt || '';
        modalImage.src = trigger.src;
        modalImage.alt = altText;
        modalAltText.textContent = altText;
    });

    // Fix for aria-hidden warning: Blur active element before hiding to prevent focus retention
    imageModal.addEventListener('hide.bs.modal', function () {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    });

    // Close if click outside the image container
    modalContent.addEventListener('click', function(e) {
        if (!imageContainer.contains(e.target)) {
            const modal = bootstrap.Modal.getInstance(imageModal);
            if (modal) modal.hide();
        }
    });

    imageContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}
// ****************************************************************
