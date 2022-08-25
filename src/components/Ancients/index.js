import { BUTTON_CREATE_CARD_DESK, WRAPPER_GAME } from "../Game"
import { BUTTON_LEVEL } from "../Levels"

const ANCIENT = document.querySelectorAll('.ancient')

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
  })
}



