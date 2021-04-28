const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay')
const btn = document.querySelector('.btns')
const closeBtn = document.querySelector('.closeBtn')

overlay.addEventListener('click', () => {
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
})

btn.addEventListener('click', () => {
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
    overlay.classList.toggle('active')
})