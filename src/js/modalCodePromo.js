export default function modalCodePromo() {
    const modal = document.querySelector('.modal-code-promo');
    const closeButton = modal.querySelector('.close-button');
    const openButton = document.querySelector('.btn-code-promo');
    const overlay = modal.querySelector('.overlay');

    openButton.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
}