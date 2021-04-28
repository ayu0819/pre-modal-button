const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay')

const modalToggle = () => {
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
}

overlay.addEventListener('click', () => {
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
})