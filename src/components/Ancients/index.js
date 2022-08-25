import { BUTTON_CREATE_CARD_DESK, WRAPPER_GAME } from "../Game"
import { BUTTON_LEVEL } from "../Levels"

export const ANCIENT = document.querySelectorAll('.ancient')

for(let i = 0; i < ANCIENT.length; i++) {
  ANCIENT[i].addEventListener('click', () => {
    ANCIENT.forEach(el => {
      if(el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })
    ANCIENT[i].classList.add('active')
    BUTTON_CREATE_CARD_DESK.classList.remove('inactive')
    WRAPPER_GAME.classList.remove('active')
    BUTTON_LEVEL.forEach(el => {
      if(el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })
    document.querySelector('.raund1').classList.remove('active')
    document.querySelector('.raund2').classList.remove('active')
    document.querySelector('.raund3').classList.remove('active')
    BUTTON_CREATE_CARD_DESK.disabled = true
    BUTTON_CREATE_CARD_DESK.classList.add('disabled')
  })
}



