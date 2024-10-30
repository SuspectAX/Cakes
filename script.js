let currentIndex = 0;
const photos = document.querySelectorAll('.photo');
const totalPhotos = photos.length;

// Show only 7 photos initially
const showPhotos = () => {
    photos.forEach((photo, index) => {
        if (index === currentIndex) {
            photo.classList.add('active');
        } else {
            photo.classList.remove('active');
        }
    });
};

// Slide photos from right to left with fade in/out
const slidePhotos = () => {
    currentIndex = (currentIndex + 1) % totalPhotos; // Wrap around
    showPhotos();
};

// Initialize
showPhotos();
setInterval(slidePhotos, 3000); // Change every 3 seconds
