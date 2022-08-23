VERY_EASY_LEVEL = document.querySelector('.very-easy-level')
EASY_LEVEL = document.querySelector('.easy-level')
AVERAGE_LEVEL = document.querySelector('.average level')
HIGH_LEVE = document.querySelector('.high-level')
VERY_HIGH_LEVEL = document.querySelectorAll('.very-high-level')
BUTTON_LEVEL = document.querySelectorAll('.button_level')

for(let i = 0; i < BUTTON_LEVEL.length; i++) {
  BUTTON_LEVEL[i].addEventListener('click', () => {
    BUTTON_LEVEL.forEach(el => {
      if(el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })
    BUTTON_LEVEL[i].classList.add('active')
  })
}
