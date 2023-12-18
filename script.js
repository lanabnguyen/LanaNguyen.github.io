document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('.carousel-image');
        let imageIndex = 0;

        carousel.querySelector('.prev-button').addEventListener('click', function() {
            imageIndex = (imageIndex > 0) ? imageIndex - 1 : images.length - 1;
            updateCarousel(imagesContainer, images, imageIndex);
        });

        carousel.querySelector('.next-button').addEventListener('click', function() {
            imageIndex = (imageIndex < images.length - 1) ? imageIndex + 1 : 0;
            updateCarousel(imagesContainer, images, imageIndex);
        });
    });

    function updateCarousel(container, images, index) {
        const imageWidth = images[0].clientWidth;
        container.style.transform = `translateX(-${index * imageWidth}px)`;
    }
});

function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = element.getElementsByTagName("img")[0].src;
}

function closeModal(event) {
    // Only close if the modal itself (not the image) was clicked
    if (event.target.className === "modal") {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
}
