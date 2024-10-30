let currentIndex = 0;
const photos = document.querySelectorAll('.photo');
const totalPhotos = photos.length;

// Show only 7 photos initially
const showPhotos = () => {
    photos.forEach((photo, index) => {
        if (index >= currentIndex && index < currentIndex + 7) {
            photo.classList.add('active');
        } else {
            photo.classList.remove('active');
        }
    });
};

// Slide photos to the left
const slidePhotos = () => {
    currentIndex = (currentIndex + 1) % (totalPhotos - 6); // Wrap around
    showPhotos();
};

// Initialize
showPhotos();
setInterval(slidePhotos, 3000); // Change every 3 seconds
