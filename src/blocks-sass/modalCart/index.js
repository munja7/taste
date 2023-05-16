import "./modalCart.sass";

export const modal = () => {
    const modal = document.querySelector('.modal-overlay');
    const closeModal = document.querySelector('.modal__close');

    modal.style.display = "block";

    closeModal.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}