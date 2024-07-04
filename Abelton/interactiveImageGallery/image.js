const images = ["/images/Concert1.webp","/images/Music.webp","/images/concert2.jpg"];
let currentImageIndex = 0;


function showImage(index) {
    const imageContainer = document.getElementById('image-container');
    const imageElement = document.createElement('img');
    imageElement.src = images[index];
    imageElement.alt = `Image ${index + 1}`;
    imageElement.onload = function() {
        imageContainer.innerHTML = ''; // Clear previous image
        imageContainer.appendChild(imageElement);
        imageContainer.style.display = 'block'; // Show container after image loaded
    };
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initial display
showImage(currentImageIndex);