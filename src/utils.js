export const ancientsData = [
  {
    name: 'azathoth',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    name: 'cthulhu',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    name: 'iogSothoth',
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    name: 'shubNiggurath',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]

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