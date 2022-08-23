const BUTTON_CREATE_CARD_DESK = document.querySelector('.button-create_card-deck')
const CARD_DECK_DIAGRAM = document.querySelector('.card-deck-diagram')

BUTTON_CREATE_CARD_DESK.addEventListener('click', () => {
  BUTTON_CREATE_CARD_DESK.classList.add('inactive')
  CARD_DECK_DIAGRAM.classList.add('active')
})