let decrease  = document.querySelector('.decrease')
let reset  = document.querySelector('.reset')
let increase  = document.querySelector('.increase')
let number = document.querySelector('span')

let value = 0

decrease.addEventListener('click', ()=> {
    value--
    number.textContent = value
    number.style.color = 'red'
})

reset.addEventListener('click', ()=> {
    value = 0
    number.textContent = value
})

increase.addEventListener('click', ()=> {
    value++
    number.textContent = value
    number.style.color = 'red'
})


