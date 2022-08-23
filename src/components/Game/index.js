import { curentState } from "../../utils"

export const BUTTON_CREATE_CARD_DESK = document.querySelector('.button-create_card-deck')
export const WRAPPER_GAME = document.querySelector('.wrapper_game')

BUTTON_CREATE_CARD_DESK.addEventListener('click', () => {
  BUTTON_CREATE_CARD_DESK.classList.add('inactive')
  WRAPPER_GAME.classList.add('active')
  curentState()
})

