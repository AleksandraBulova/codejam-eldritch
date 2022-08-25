import { ANCIENT } from "../Ancients"
import { BUTTON_CREATE_CARD_DESK, WRAPPER_GAME } from "../Game"

export const BUTTON_LEVEL = document.querySelectorAll('.button_level')

for(let i = 0; i < BUTTON_LEVEL.length; i++) {
  BUTTON_LEVEL[i].addEventListener('click', () => {
    BUTTON_LEVEL.forEach(el => {
      if(el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })
    BUTTON_CREATE_CARD_DESK.classList.remove('inactive')
    WRAPPER_GAME.classList.remove('active')
    BUTTON_LEVEL[i].classList.add('active')
    document.querySelector('.raund1').classList.remove('active')
    document.querySelector('.raund2').classList.remove('active')
    document.querySelector('.raund3').classList.remove('active')
    ANCIENT.forEach(el => {
      if(el.classList.contains('active')) {
        BUTTON_CREATE_CARD_DESK.disabled = false
        BUTTON_CREATE_CARD_DESK.classList.remove('disabled')
      }
    })
  })
}
