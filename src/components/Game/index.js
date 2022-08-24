import { ancientsData } from "../../utils"
import { cardsData } from "../Cards/dataCards"

export const BUTTON_CREATE_CARD_DESK = document.querySelector('.button-create_card-deck')
export const WRAPPER_GAME = document.querySelector('.wrapper_game')

BUTTON_CREATE_CARD_DESK.addEventListener('click', () => {
  BUTTON_CREATE_CARD_DESK.classList.add('inactive')
  WRAPPER_GAME.classList.add('active')
  curentState()
})

const arrayCardsDeskBlue = []
const arrayCardsDeskBrown = []
const arrayCardsDeskGreen = []

for(let i = 0; i < cardsData.length; i++) {
  if(cardsData[i].color === 'blue') {
    arrayCardsDeskBlue.push( cardsData[i].image)
  }
  if(cardsData[i].color === 'brown') {
    arrayCardsDeskBrown.push( cardsData[i].image)
  }
  if(cardsData[i].color === 'green') {
    arrayCardsDeskGreen.push( cardsData[i].image)
  }
}

const arrayGame = []

export const curentState = () => {
  if(document.querySelector('.Azathoth').classList.contains('active')) {
    document.querySelector('.dot_green1').innerHTML = ancientsData[0].firstStage.greenCards
    document.querySelector('.dot_brown1').innerHTML = ancientsData[0].firstStage.brownCards
    document.querySelector('.dot_blue1').innerHTML = ancientsData[0].firstStage.blueCards
    document.querySelector('.dot_green2').innerHTML = ancientsData[0].secondStage.greenCards
    document.querySelector('.dot_brown2').innerHTML = ancientsData[0].secondStage.brownCards
    document.querySelector('.dot_blue2').innerHTML = ancientsData[0].secondStage.blueCards
    document.querySelector('.dot_green3').innerHTML = ancientsData[0].thirdStage.greenCards
    document.querySelector('.dot_brown3').innerHTML = ancientsData[0].thirdStage.brownCards
    document.querySelector('.dot_blue3').innerHTML = ancientsData[0].thirdStage.blueCards
  }
  if(document.querySelector('.Cthulthu').classList.contains('active')) {
    document.querySelector('.dot_green1').innerHTML = ancientsData[1].firstStage.greenCards
    document.querySelector('.dot_brown1').innerHTML = ancientsData[1].firstStage.brownCards
    document.querySelector('.dot_blue1').innerHTML = ancientsData[1].firstStage.blueCards
    document.querySelector('.dot_green2').innerHTML = ancientsData[1].secondStage.greenCards
    document.querySelector('.dot_brown2').innerHTML = ancientsData[1].secondStage.brownCards
    document.querySelector('.dot_blue2').innerHTML = ancientsData[1].secondStage.blueCards
    document.querySelector('.dot_green3').innerHTML = ancientsData[1].thirdStage.greenCards
    document.querySelector('.dot_brown3').innerHTML = ancientsData[1].thirdStage.brownCards
    document.querySelector('.dot_blue3').innerHTML = ancientsData[1].thirdStage.blueCards
  }
  if(document.querySelector('.LogSothoth').classList.contains('active')) {
    document.querySelector('.dot_green1').innerHTML = ancientsData[2].firstStage.greenCards
    document.querySelector('.dot_brown1').innerHTML = ancientsData[2].firstStage.brownCards
    document.querySelector('.dot_blue1').innerHTML = ancientsData[2].firstStage.blueCards
    document.querySelector('.dot_green2').innerHTML = ancientsData[2].secondStage.greenCards
    document.querySelector('.dot_brown2').innerHTML = ancientsData[2].secondStage.brownCards
    document.querySelector('.dot_blue2').innerHTML = ancientsData[2].secondStage.blueCards
    document.querySelector('.dot_green3').innerHTML = ancientsData[2].thirdStage.greenCards
    document.querySelector('.dot_brown3').innerHTML = ancientsData[2].thirdStage.brownCards
    document.querySelector('.dot_blue3').innerHTML = ancientsData[2].thirdStage.blueCards
  }
  if(document.querySelector('.ShubNiggurath').classList.contains('active')) {
    document.querySelector('.dot_green1').innerHTML = ancientsData[3].firstStage.greenCards
    document.querySelector('.dot_brown1').innerHTML = ancientsData[3].firstStage.brownCards
    document.querySelector('.dot_blue1').innerHTML = ancientsData[3].firstStage.blueCards
    document.querySelector('.dot_green2').innerHTML = ancientsData[3].secondStage.greenCards
    document.querySelector('.dot_brown2').innerHTML = ancientsData[3].secondStage.brownCards
    document.querySelector('.dot_blue2').innerHTML = ancientsData[3].secondStage.blueCards
    document.querySelector('.dot_green3').innerHTML = ancientsData[3].thirdStage.greenCards
    document.querySelector('.dot_brown3').innerHTML = ancientsData[3].thirdStage.brownCards
    document.querySelector('.dot_blue3').innerHTML = ancientsData[3].thirdStage.blueCards
  }
}



document.querySelector('.card').style.backgroundImage = `url(${arrayCardsDeskBlue[0]})`



