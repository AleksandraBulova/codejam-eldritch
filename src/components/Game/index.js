import { ancientsData } from "../../utils"
import { cardsData } from "../Cards/dataCards"

export const BUTTON_CREATE_CARD_DESK = document.querySelector('.button-create_card-deck')
export const WRAPPER_GAME = document.querySelector('.wrapper_game')

const CARD_DESK = document.querySelector('.cards-deck')
const CARD = document.querySelector('.card')

BUTTON_CREATE_CARD_DESK.addEventListener('click', () => {
  CARD_DESK.classList.remove('inactive')
  CARD.classList.add('inactive')
  BUTTON_CREATE_CARD_DESK.classList.add('inactive')
  WRAPPER_GAME.classList.add('active')
  curentState()
})

const arrayCardsDeskBlue = []
const arrayCardsDeskBlueEasy = []
const arrayCardsDeskBlueNormal = []
const arrayCardsDeskBlueHard = []
const arrayCardsDeskBrown = []
const arrayCardsDeskBrownEasy = []
const arrayCardsDeskBrownNormal = []
const arrayCardsDeskBrownHard = []
const arrayCardsDeskGreen = []
const arrayCardsDeskGreenEasy = []
const arrayCardsDeskGreenNormal = []
const arrayCardsDeskGreenHard = []

for(let i = 0; i < cardsData.length; i++) {
  if(cardsData[i].color === 'blue') {
    arrayCardsDeskBlue.push( cardsData[i])
    if(cardsData[i].difficulty === 'hard') {
      arrayCardsDeskBlueHard.push( cardsData[i])
    }
    if(cardsData[i].difficulty === 'normal') {
      arrayCardsDeskBlueNormal.push( cardsData[i])
    }
    if(cardsData[i].difficulty === 'easy') {
      arrayCardsDeskBlueEasy.push( cardsData[i])
    }
  }
  if(cardsData[i].color === 'brown') {
    arrayCardsDeskBrown.push( cardsData[i])
    if(cardsData[i].difficulty === 'hard') {
      arrayCardsDeskBrownHard.push( cardsData[i])
    }
    if(cardsData[i].difficulty === 'normal') {
      arrayCardsDeskBrownNormal.push( cardsData[i])
    }
    if(cardsData[i].difficulty === 'easy') {
      arrayCardsDeskBrownEasy.push( cardsData[i])
    }
  }
  if(cardsData[i].color === 'green') {
    arrayCardsDeskGreen.push( cardsData[i])
    if(cardsData[i].difficulty === 'hard') {
      arrayCardsDeskGreenHard.push( cardsData[i])
    }
    if(cardsData[i].difficulty === 'normal') {
      arrayCardsDeskGreenNormal.push( cardsData[i])
    }
    if(cardsData[i].difficulty === 'easy') {
      arrayCardsDeskGreenEasy.push( cardsData[i])
    }
  }
}


const VERY_EASY_LEVEL = document.querySelector('.very-easy-level')
const EASY_LEVEL = document.querySelector('.easy-level')
const MEDIUM_LEVEL = document.querySelector('.medium-level')
const HIGH_LEVEL = document.querySelector('.high-level')
const VERY_HIGH_LEVEL = document.querySelector('.very-high-level')

let round1 = []
let round2 = []
let round3 = []

export const curentState = () => {

  if(VERY_EASY_LEVEL.classList.contains('active')) {
    veryEasyLevel()
  }
  if(EASY_LEVEL.classList.contains('active')) {
    easyLevel()
  }
  if(MEDIUM_LEVEL.classList.contains('active')) {
    mediumLevel()
  }
  if(HIGH_LEVEL.classList.contains('active')) {
    highLevel()
  }
  if(VERY_HIGH_LEVEL.classList.contains('active')) {
    veryHighLevel()
  }

}

let arrayGreen = []
let arrayBrown = []
let arrayBlue = []

const veryEasyLevel = () => {
  arrayGreen = [...arrayCardsDeskGreenEasy]
  while(arrayGreen.length < 6) {
    arrayGreen.push(arrayCardsDeskGreenNormal[Math.floor(Math.random() * (arrayCardsDeskGreenNormal.length))])
  }
  arrayBrown = [...arrayCardsDeskBrownEasy]
  while(arrayBrown.length < 9) {
    arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * (arrayCardsDeskBrownNormal.length))])
  }
  arrayBlue = [...arrayCardsDeskBlueEasy]

  console.log(arrayGreen, 'Зеленные')
  console.log(arrayBrown, 'Коричневые')
  console.log(arrayBlue, 'Синии')
  
  level()
}

const easyLevel = () => {
  arrayGreen = [...arrayCardsDeskGreenEasy, ...arrayCardsDeskGreenNormal]
  arrayBrown = [...arrayCardsDeskBrownEasy, ...arrayCardsDeskBrownNormal]
  arrayBlue = [...arrayCardsDeskBlueEasy, ...arrayCardsDeskBlueNormal]

  console.log(arrayGreen, 'Зеленные')
  console.log(arrayBrown, 'Коричневые')
  console.log(arrayBlue, 'Синии')

  level()
}

const mediumLevel = () => {
  arrayGreen = [...arrayCardsDeskGreen]
  arrayBrown = [...arrayCardsDeskBrown]
  arrayBlue = [...arrayCardsDeskBlue]

  console.log(arrayGreen, 'Зеленные')
  console.log(arrayBrown, 'Коричневые')
  console.log(arrayBlue, 'Синии')

  level()
}

const highLevel = () => {
  arrayGreen = [...arrayCardsDeskGreenNormal, ...arrayCardsDeskGreenHard]
  arrayBrown = [...arrayCardsDeskBrownNormal, ...arrayCardsDeskBrownHard]
  arrayBlue = [...arrayCardsDeskBlueNormal, ...arrayCardsDeskBlueHard]

  console.log(arrayGreen, 'Зеленные')
  console.log(arrayBrown, 'Коричневые')
  console.log(arrayBlue, 'Синии')

  level()
}

const veryHighLevel = () => {
  arrayGreen = [...arrayCardsDeskGreenHard]
  while(arrayGreen.length < 6) {
    arrayGreen.push(arrayCardsDeskGreenNormal[Math.floor(Math.random() * (arrayCardsDeskGreenNormal.length))])
  }
  arrayBrown = [...arrayCardsDeskBrownHard]
  while(arrayBrown.length < 9) {
    arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * (arrayCardsDeskBrownNormal.length))])
  }
  arrayBlue = [...arrayCardsDeskBlueHard]

  console.log(arrayGreen, 'Зеленные')
  console.log(arrayBrown, 'Коричневые')
  console.log(arrayBlue, 'Синии')
  
  level()
}

const level = () => {
  if(document.querySelector('.Azathoth').classList.contains('active')) {
    round1 = []
    round2 = []
    round3 = []

    document.querySelector('.dot_green1').innerHTML = ancientsData[0].firstStage.greenCards
    for(let i = 0; i < ancientsData[0].firstStage.greenCards; i++){
      round1.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown1').innerHTML = ancientsData[0].firstStage.brownCards
    for(let i = 0; i < ancientsData[0].firstStage.brownCards; i++){
      round1.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue1').innerHTML = ancientsData[0].firstStage.blueCards
    for(let i = 0; i < ancientsData[0].firstStage.blueCards; i++){
      round1.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

    document.querySelector('.dot_green2').innerHTML = ancientsData[0].secondStage.greenCards
    for(let i = 0; i < ancientsData[0].secondStage.greenCards; i++){
      round2.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown2').innerHTML = ancientsData[0].secondStage.brownCards
    for(let i = 0; i < ancientsData[0].secondStage.brownCards; i++){
      round2.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue2').innerHTML = ancientsData[0].secondStage.blueCards
    for(let i = 0; i < ancientsData[0].secondStage.blueCards; i++){
      round2.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

    document.querySelector('.dot_green3').innerHTML = ancientsData[0].thirdStage.greenCards
    for(let i = 0; i < ancientsData[0].thirdStage.greenCards; i++){
      round3.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown3').innerHTML = ancientsData[0].thirdStage.brownCards
    for(let i = 0; i < ancientsData[0].thirdStage.brownCards; i++){
      round3.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue3').innerHTML = ancientsData[0].thirdStage.blueCards
    for(let i = 0; i < ancientsData[0].thirdStage.blueCards; i++){
      round3.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }
  }

  if(document.querySelector('.Cthulthu').classList.contains('active')) {
    round1 = []
    round2 = []
    round3 = []

    document.querySelector('.dot_green1').innerHTML = ancientsData[1].firstStage.greenCards
    for(let i = 0; i < ancientsData[1].firstStage.greenCards; i++){
      round1.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown1').innerHTML = ancientsData[1].firstStage.brownCards
    for(let i = 0; i < ancientsData[1].firstStage.brownCards; i++){
      round1.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue1').innerHTML = ancientsData[1].firstStage.blueCards
    for(let i = 0; i < ancientsData[1].firstStage.blueCards; i++){
      round1.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

    document.querySelector('.dot_green2').innerHTML = ancientsData[1].secondStage.greenCards
    for(let i = 0; i < ancientsData[1].secondStage.greenCards; i++){
      round2.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown2').innerHTML = ancientsData[1].secondStage.brownCards
    for(let i = 0; i < ancientsData[1].secondStage.brownCards; i++){
      round2.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue2').innerHTML = ancientsData[1].secondStage.blueCards
    console.log(ancientsData[1].secondStage.blueCards)
    for(let i = 0; i < ancientsData[1].secondStage.blueCards; i++){
      round2.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

    document.querySelector('.dot_green3').innerHTML = ancientsData[1].thirdStage.greenCards
    for(let i = 0; i < ancientsData[1].thirdStage.greenCards; i++){
      round3.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown3').innerHTML = ancientsData[1].thirdStage.brownCards
    for(let i = 0; i < ancientsData[1].thirdStage.brownCards; i++){
      round3.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue3').innerHTML = ancientsData[1].thirdStage.blueCards
    for(let i = 0; i < ancientsData[1].thirdStage.blueCards; i++){
      round3.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

  }

  if(document.querySelector('.LogSothoth').classList.contains('active')) {
    round1 = []
    round2 = []
    round3 = []

    document.querySelector('.dot_green1').innerHTML = ancientsData[2].firstStage.greenCards
    for(let i = 0; i < ancientsData[2].firstStage.greenCards; i++){
      round1.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown1').innerHTML = ancientsData[2].firstStage.brownCards
    for(let i = 0; i < ancientsData[2].firstStage.brownCards; i++){
      round1.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue1').innerHTML = ancientsData[2].firstStage.blueCards
    for(let i = 0; i < ancientsData[2].firstStage.blueCards; i++){
      round1.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

    document.querySelector('.dot_green2').innerHTML = ancientsData[2].secondStage.greenCards
    for(let i = 0; i < ancientsData[2].secondStage.greenCards; i++){
      round2.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown2').innerHTML = ancientsData[2].secondStage.brownCards
    for(let i = 0; i < ancientsData[2].secondStage.brownCards; i++){
      round2.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue2').innerHTML = ancientsData[2].secondStage.blueCards
    for(let i = 0; i < ancientsData[2].secondStage.blueCards; i++){
      round2.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

    document.querySelector('.dot_green3').innerHTML = ancientsData[2].thirdStage.greenCards
    for(let i = 0; i < ancientsData[2].thirdStage.greenCards; i++){
      round3.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown3').innerHTML = ancientsData[2].thirdStage.brownCards
    for(let i = 0; i < ancientsData[2].thirdStage.brownCards; i++){
      round3.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue3').innerHTML = ancientsData[2].thirdStage.blueCards
    for(let i = 0; i < ancientsData[2].thirdStage.blueCards; i++){
      round3.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

  }

  if(document.querySelector('.ShubNiggurath').classList.contains('active')) {
    round1 = []
    round2 = []
    round3 = []

    document.querySelector('.dot_green1').innerHTML = ancientsData[3].firstStage.greenCards
    for(let i = 0; i < ancientsData[3].firstStage.greenCards; i++){
      round1.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown1').innerHTML = ancientsData[3].firstStage.brownCards
    for(let i = 0; i < ancientsData[2].firstStage.brownCards; i++){
      round1.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue1').innerHTML = ancientsData[3].firstStage.blueCards
    for(let i = 0; i < ancientsData[3].firstStage.blueCards; i++){
      round1.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

    document.querySelector('.dot_green2').innerHTML = ancientsData[3].secondStage.greenCards
    for(let i = 0; i < ancientsData[3].secondStage.greenCards; i++){
      round2.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown2').innerHTML = ancientsData[3].secondStage.brownCards
    for(let i = 0; i < ancientsData[3].secondStage.brownCards; i++){
      round2.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue2').innerHTML = ancientsData[3].secondStage.blueCards
    for(let i = 0; i < ancientsData[3].secondStage.blueCards; i++){
      round2.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }

    document.querySelector('.dot_green3').innerHTML = ancientsData[3].thirdStage.greenCards
    for(let i = 0; i < ancientsData[3].thirdStage.greenCards; i++){
      round3.push(arrayGreen[Math.floor(Math.random() * (arrayGreen.length))])
    }

    document.querySelector('.dot_brown3').innerHTML = ancientsData[3].thirdStage.brownCards
    for(let i = 0; i < ancientsData[3].thirdStage.brownCards; i++){
      round3.push(arrayBrown[Math.floor(Math.random() * (arrayBrown.length))])
    }

    document.querySelector('.dot_blue3').innerHTML = ancientsData[3].thirdStage.blueCards
    for(let i = 0; i < ancientsData[3].thirdStage.blueCards; i++){
      round3.push(arrayBlue[Math.floor(Math.random() * (arrayBlue.length))])
    }
  }
  console.log(round1, 'Этап1')
  console.log(round2, 'Этап2')
  console.log(round3, 'Этап3')
}

CARD_DESK.addEventListener('click', () => {
  CARD.classList.remove('inactive')
  let randomIndex = 0

  if (round1.length !== 0 ) {
    randomIndex = Math.floor(Math.random() * (round1.length))
    document.querySelector('.card').style.backgroundImage = `url(${round1[randomIndex].image})` 
    if(round1[randomIndex].color === 'green') {
      document.querySelector('.dot_green1').innerHTML -= 1 
    }
    if(round1[randomIndex].color === 'brown') {
      document.querySelector('.dot_brown1').innerHTML -= 1 
    }
    if(round1[randomIndex].color === 'blue') {
      document.querySelector('.dot_blue1').innerHTML -= 1 
    }
    round1 = round1.filter((el, i) => i !== randomIndex)
    console.log('1')
  } else if (round2.length !== 0 ) {
    randomIndex = Math.floor(Math.random() * (round2.length))
    document.querySelector('.card').style.backgroundImage = `url(${round2[randomIndex].image})` 
    if(round2[randomIndex].color === 'green') {
      document.querySelector('.dot_green2').innerHTML -= 1 
    }
    if(round2[randomIndex].color === 'brown') {
      document.querySelector('.dot_brown2').innerHTML -= 1 
    }
    if(round2[randomIndex].color === 'blue') {
      document.querySelector('.dot_blue2').innerHTML -= 1 
    }
    round2 = round2.filter((el, i) => i !== randomIndex)
    console.log('2')
  } else if (round3.length !== 0) {
    randomIndex = Math.floor(Math.random() * (round3.length))
    document.querySelector('.card').style.backgroundImage = `url(${round3[randomIndex].image})` 
    if(round3[randomIndex].color === 'green') {
      document.querySelector('.dot_green3').innerHTML -= 1 
    }
    if(round3[randomIndex].color === 'brown') {
      document.querySelector('.dot_brown3').innerHTML -= 1 
    }
    if(round3[randomIndex].color === 'blue') {
      document.querySelector('.dot_blue3').innerHTML -= 1 
    }
    round3 = round3.filter((el, i) => i !== randomIndex)
    console.log('3')
  } else {
    CARD_DESK.classList.add('inactive')
  }

})