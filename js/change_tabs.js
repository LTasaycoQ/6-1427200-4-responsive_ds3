function ModalImagen(estado) {
    if (estado == 0) {
        const ImageModal = document.getElementById("image-modal");
        ImageModal.classList.remove("hidden");

    } else {
        const ImageModal = document.getElementById("image-modal");
        ImageModal.classList.add("hidden");
    }
}