/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils.js
var ancientsData = [{
  name: 'azathoth',
  firstStage: {
    greenCards: 1,
    brownCards: 2,
    blueCards: 1
  },
  secondStage: {
    greenCards: 2,
    brownCards: 3,
    blueCards: 1
  },
  thirdStage: {
    greenCards: 2,
    brownCards: 4,
    blueCards: 0
  }
}, {
  name: 'cthulhu',
  firstStage: {
    greenCards: 0,
    brownCards: 2,
    blueCards: 2
  },
  secondStage: {
    greenCards: 1,
    brownCards: 3,
    blueCards: 0
  },
  thirdStage: {
    greenCards: 3,
    brownCards: 4,
    blueCards: 0
  }
}, {
  name: 'iogSothoth',
  firstStage: {
    greenCards: 0,
    brownCards: 2,
    blueCards: 1
  },
  secondStage: {
    greenCards: 2,
    brownCards: 3,
    blueCards: 1
  },
  thirdStage: {
    greenCards: 3,
    brownCards: 4,
    blueCards: 0
  }
}, {
  name: 'shubNiggurath',
  firstStage: {
    greenCards: 1,
    brownCards: 2,
    blueCards: 1
  },
  secondStage: {
    greenCards: 3,
    brownCards: 2,
    blueCards: 1
  },
  thirdStage: {
    greenCards: 2,
    brownCards: 4,
    blueCards: 0
  }
}];
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue1.png
const blue1_namespaceObject = __webpack_require__.p + "images/09c8e5eb50dc7666f1aa.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue2.png
const blue2_namespaceObject = __webpack_require__.p + "images/3cc352cdc8fade5dad4c.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue3.png
const blue3_namespaceObject = __webpack_require__.p + "images/fdd1d10ff513774eb841.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue4.png
const blue4_namespaceObject = __webpack_require__.p + "images/f09f0f715e525a0b50ec.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue5.png
const blue5_namespaceObject = __webpack_require__.p + "images/e3e8792622b0c75c78c1.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue6.png
const blue6_namespaceObject = __webpack_require__.p + "images/cf323c98a3f54632a66c.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue7.png
const blue7_namespaceObject = __webpack_require__.p + "images/4cdb1bd641372e2d0f74.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue8.png
const blue8_namespaceObject = __webpack_require__.p + "images/02a9eec68518951fc18e.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue9.png
const blue9_namespaceObject = __webpack_require__.p + "images/d3371911f8f0d84b5585.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue10.png
const blue10_namespaceObject = __webpack_require__.p + "images/c61c9f73492d8cd7027c.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue11.png
const blue11_namespaceObject = __webpack_require__.p + "images/f7e6552a92e4b878107a.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/blue/blue12.png
const blue12_namespaceObject = __webpack_require__.p + "images/204f9160083e529ab763.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown1.png
const brown1_namespaceObject = __webpack_require__.p + "images/ac85e7db9ab360fe235a.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown2.png
const brown2_namespaceObject = __webpack_require__.p + "images/c44579505d0d3ccfd7c8.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown3.png
const brown3_namespaceObject = __webpack_require__.p + "images/caababcab21e08510c27.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown4.png
const brown4_namespaceObject = __webpack_require__.p + "images/e387b64a537a0fb25c84.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown5.png
const brown5_namespaceObject = __webpack_require__.p + "images/709f87f82c146ab3189a.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown6.png
const brown6_namespaceObject = __webpack_require__.p + "images/23453f970c4a388f8b68.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown7.png
const brown7_namespaceObject = __webpack_require__.p + "images/7da5050420b14d67a481.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown8.png
const brown8_namespaceObject = __webpack_require__.p + "images/2126fcd965be3b428dca.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown9.png
const brown9_namespaceObject = __webpack_require__.p + "images/3d69a01cdd56175f304e.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown10.png
const brown10_namespaceObject = __webpack_require__.p + "images/703068f44f9153534f9c.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown11.png
const brown11_namespaceObject = __webpack_require__.p + "images/157fd0a92444cc2a245f.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown12.png
const brown12_namespaceObject = __webpack_require__.p + "images/920b1409d3f7d006e764.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown13.png
const brown13_namespaceObject = __webpack_require__.p + "images/a8d77ff5b5eaa534b968.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown14.png
const brown14_namespaceObject = __webpack_require__.p + "images/f5d21e1965d8ec808bc2.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown15.png
const brown15_namespaceObject = __webpack_require__.p + "images/036f8f91eccd0e8f9708.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown16.png
const brown16_namespaceObject = __webpack_require__.p + "images/1fd61bbd111986a0965a.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown17.png
const brown17_namespaceObject = __webpack_require__.p + "images/6a53cc04a2d6cbb63677.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown18.png
const brown18_namespaceObject = __webpack_require__.p + "images/c537bfb2cd284c9667ae.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown19.png
const brown19_namespaceObject = __webpack_require__.p + "images/199841521c55940d0d03.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown20.png
const brown20_namespaceObject = __webpack_require__.p + "images/1182a8f80bd2272b3d07.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/brown/brown21.png
const brown21_namespaceObject = __webpack_require__.p + "images/3a8e72879e11c315c59d.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green1.png
const green1_namespaceObject = __webpack_require__.p + "images/ee9218f13d2668469469.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green2.png
const green2_namespaceObject = __webpack_require__.p + "images/1a1b4da17274000ce3a8.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green3.png
const green3_namespaceObject = __webpack_require__.p + "images/24a6de1c53f0cc14bb95.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green4.png
const green4_namespaceObject = __webpack_require__.p + "images/d9d9a3dc837a4101fc61.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green5.png
const green5_namespaceObject = __webpack_require__.p + "images/0634bb414e136066d46f.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green6.png
const green6_namespaceObject = __webpack_require__.p + "images/ca07046ad17914ec04d0.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green7.png
const green7_namespaceObject = __webpack_require__.p + "images/f9d8238c6770bdc97f73.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green8.png
const green8_namespaceObject = __webpack_require__.p + "images/bc5f83ed7ced1b832494.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green9.png
const green9_namespaceObject = __webpack_require__.p + "images/bc368631ac89e5bf0891.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green10.png
const green10_namespaceObject = __webpack_require__.p + "images/766beb973fc76ac9564e.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green11.png
const green11_namespaceObject = __webpack_require__.p + "images/305fdb3b09ad909c598f.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green12.png
const green12_namespaceObject = __webpack_require__.p + "images/b786b0a5e0aaf884c27b.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green13.png
const green13_namespaceObject = __webpack_require__.p + "images/b3e3243ad3927ba66da7.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green14.png
const green14_namespaceObject = __webpack_require__.p + "images/20b6b1be80bef6932ab0.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green15.png
const green15_namespaceObject = __webpack_require__.p + "images/63677766cd3a4cea8da0.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green16.png
const green16_namespaceObject = __webpack_require__.p + "images/608e0aecaccf5ff896fb.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green17.png
const green17_namespaceObject = __webpack_require__.p + "images/0ebea1f5b536a0b85765.png";
;// CONCATENATED MODULE: ./src/assets/MythicCards/green/green18.png
const green18_namespaceObject = __webpack_require__.p + "images/268edbdc27e016d06a52.png";
;// CONCATENATED MODULE: ./src/components/Cards/dataCards.js



















































var cardsData = [{
  id: 'blue1',
  difficulty: 'hard',
  color: 'blue',
  image: blue1_namespaceObject
}, {
  id: 'blue2',
  difficulty: 'hard',
  color: 'blue',
  image: blue2_namespaceObject
}, {
  id: 'blue3',
  difficulty: 'easy',
  color: 'blue',
  image: blue3_namespaceObject
}, {
  id: 'blue4',
  difficulty: 'easy',
  color: 'blue',
  image: blue4_namespaceObject
}, {
  id: 'blue5',
  difficulty: 'easy',
  color: 'blue',
  image: blue5_namespaceObject
}, {
  id: 'blue6',
  difficulty: 'hard',
  color: 'blue',
  image: blue6_namespaceObject
}, {
  id: 'blue7',
  difficulty: 'normal',
  color: 'blue',
  image: blue7_namespaceObject
}, {
  id: 'blue8',
  difficulty: 'hard',
  color: 'blue',
  image: blue8_namespaceObject
}, {
  id: 'blue9',
  difficulty: 'normal',
  color: 'blue',
  image: blue9_namespaceObject
}, {
  id: 'blue10',
  difficulty: 'easy',
  color: 'blue',
  image: blue10_namespaceObject
}, {
  id: 'blue11',
  difficulty: 'normal',
  color: 'blue',
  image: blue11_namespaceObject
}, {
  id: 'blue12',
  difficulty: 'normal',
  color: 'blue',
  image: blue12_namespaceObject
}, {
  id: 'brown1',
  difficulty: 'normal',
  color: 'brown',
  image: brown1_namespaceObject
}, {
  id: 'brown2',
  difficulty: 'normal',
  color: 'brown',
  image: brown2_namespaceObject
}, {
  id: 'brown3',
  difficulty: 'normal',
  color: 'brown',
  image: brown3_namespaceObject
}, {
  id: 'brown4',
  difficulty: 'normal',
  color: 'brown',
  image: brown4_namespaceObject
}, {
  id: 'brown5',
  difficulty: 'normal',
  color: 'brown',
  image: brown5_namespaceObject
}, {
  id: 'brown6',
  difficulty: 'hard',
  color: 'brown',
  image: brown6_namespaceObject
}, {
  id: 'brown7',
  difficulty: 'hard',
  color: 'brown',
  image: brown7_namespaceObject
}, {
  id: 'brown8',
  difficulty: 'hard',
  color: 'brown',
  image: brown8_namespaceObject
}, {
  id: 'brown9',
  difficulty: 'hard',
  color: 'brown',
  image: brown9_namespaceObject
}, {
  id: 'brown10',
  difficulty: 'hard',
  color: 'brown',
  image: brown10_namespaceObject
}, {
  id: 'brown11',
  difficulty: 'easy',
  color: 'brown',
  image: brown11_namespaceObject
}, {
  id: 'brown12',
  difficulty: 'easy',
  color: 'brown',
  image: brown12_namespaceObject
}, {
  id: 'brown13',
  difficulty: 'easy',
  color: 'brown',
  image: brown13_namespaceObject
}, {
  id: 'brown14',
  difficulty: 'easy',
  color: 'brown',
  image: brown14_namespaceObject
}, {
  id: 'brown15',
  difficulty: 'normal',
  color: 'brown',
  image: brown15_namespaceObject
}, {
  id: 'brown16',
  difficulty: 'normal',
  color: 'brown',
  image: brown16_namespaceObject
}, {
  id: 'brown17',
  difficulty: 'normal',
  color: 'brown',
  image: brown17_namespaceObject
}, {
  id: 'brown18',
  difficulty: 'normal',
  color: 'brown',
  image: brown18_namespaceObject
}, {
  id: 'brown19',
  difficulty: 'normal',
  color: 'brown',
  image: brown19_namespaceObject
}, {
  id: 'brown20',
  difficulty: 'normal',
  color: 'brown',
  image: brown20_namespaceObject
}, {
  id: 'brown21',
  difficulty: 'easy',
  color: 'brown',
  image: brown21_namespaceObject
}, {
  id: 'green1',
  difficulty: 'easy',
  color: 'green',
  image: green1_namespaceObject
}, {
  id: 'green2',
  difficulty: 'hard',
  color: 'green',
  image: green2_namespaceObject
}, {
  id: 'green3',
  difficulty: 'hard',
  color: 'green',
  image: green3_namespaceObject
}, {
  id: 'green4',
  difficulty: 'hard',
  color: 'green',
  image: green4_namespaceObject
}, {
  id: 'green5',
  difficulty: 'hard',
  color: 'green',
  image: green5_namespaceObject
}, {
  id: 'green6',
  difficulty: 'hard',
  color: 'green',
  image: green6_namespaceObject
}, {
  id: 'green7',
  difficulty: 'normal',
  color: 'green',
  image: green7_namespaceObject
}, {
  id: 'green8',
  difficulty: 'normal',
  color: 'green',
  image: green8_namespaceObject
}, {
  id: 'green9',
  difficulty: 'normal',
  color: 'green',
  image: green9_namespaceObject
}, {
  id: 'green10',
  difficulty: 'normal',
  color: 'green',
  image: green10_namespaceObject
}, {
  id: 'green11',
  difficulty: 'normal',
  color: 'green',
  image: green11_namespaceObject
}, {
  id: 'green12',
  difficulty: 'easy',
  color: 'green',
  image: green12_namespaceObject
}, {
  id: 'green13',
  difficulty: 'normal',
  color: 'green',
  image: green13_namespaceObject
}, {
  id: 'green14',
  difficulty: 'normal',
  color: 'green',
  image: green14_namespaceObject
}, {
  id: 'green15',
  difficulty: 'normal',
  color: 'green',
  image: green15_namespaceObject
}, {
  id: 'green16',
  difficulty: 'easy',
  color: 'green',
  image: green16_namespaceObject
}, {
  id: 'green17',
  difficulty: 'easy',
  color: 'green',
  image: green17_namespaceObject
}, {
  id: 'green18',
  difficulty: 'easy',
  color: 'green',
  image: green18_namespaceObject
}];
;// CONCATENATED MODULE: ./src/components/Game/index.js


var BUTTON_CREATE_CARD_DESK = document.querySelector('.button-create_card-deck');
var WRAPPER_GAME = document.querySelector('.wrapper_game');
var CARD_DESK = document.querySelector('.cards-deck');
var CARD = document.querySelector('.card');
BUTTON_CREATE_CARD_DESK.addEventListener('click', function () {
  CARD_DESK.classList.remove('inactive');
  CARD.classList.add('inactive');
  BUTTON_CREATE_CARD_DESK.classList.add('inactive');
  WRAPPER_GAME.classList.add('active');
  curentState();
});
var arrayCardsDeskBlue = [];
var arrayCardsDeskBlueEasy = [];
var arrayCardsDeskBlueNormal = [];
var arrayCardsDeskBlueHard = [];
var arrayCardsDeskBrown = [];
var arrayCardsDeskBrownEasy = [];
var arrayCardsDeskBrownNormal = [];
var arrayCardsDeskBrownHard = [];
var arrayCardsDeskGreen = [];
var arrayCardsDeskGreenEasy = [];
var arrayCardsDeskGreenNormal = [];
var arrayCardsDeskGreenHard = [];

for (var i = 0; i < cardsData.length; i++) {
  if (cardsData[i].color === 'blue') {
    arrayCardsDeskBlue.push(cardsData[i]);

    if (cardsData[i].difficulty === 'hard') {
      arrayCardsDeskBlueHard.push(cardsData[i]);
    }

    if (cardsData[i].difficulty === 'normal') {
      arrayCardsDeskBlueNormal.push(cardsData[i]);
    }

    if (cardsData[i].difficulty === 'easy') {
      arrayCardsDeskBlueEasy.push(cardsData[i]);
    }
  }

  if (cardsData[i].color === 'brown') {
    arrayCardsDeskBrown.push(cardsData[i]);

    if (cardsData[i].difficulty === 'hard') {
      arrayCardsDeskBrownHard.push(cardsData[i]);
    }

    if (cardsData[i].difficulty === 'normal') {
      arrayCardsDeskBrownNormal.push(cardsData[i]);
    }

    if (cardsData[i].difficulty === 'easy') {
      arrayCardsDeskBrownEasy.push(cardsData[i]);
    }
  }

  if (cardsData[i].color === 'green') {
    arrayCardsDeskGreen.push(cardsData[i]);

    if (cardsData[i].difficulty === 'hard') {
      arrayCardsDeskGreenHard.push(cardsData[i]);
    }

    if (cardsData[i].difficulty === 'normal') {
      arrayCardsDeskGreenNormal.push(cardsData[i]);
    }

    if (cardsData[i].difficulty === 'easy') {
      arrayCardsDeskGreenEasy.push(cardsData[i]);
    }
  }
}

var VERY_EASY_LEVEL = document.querySelector('.very-easy-level');
var EASY_LEVEL = document.querySelector('.easy-level');
var MEDIUM_LEVEL = document.querySelector('.medium-level');
var HIGH_LEVEL = document.querySelector('.high-level');
var VERY_HIGH_LEVEL = document.querySelector('.very-high-level');
var round1 = [];
var round2 = [];
var round3 = [];
var curentState = function curentState() {
  if (VERY_EASY_LEVEL.classList.contains('active')) {
    veryEasyLevel();
  }

  if (EASY_LEVEL.classList.contains('active')) {
    easyLevel();
  }

  if (MEDIUM_LEVEL.classList.contains('active')) {
    mediumLevel();
  }

  if (HIGH_LEVEL.classList.contains('active')) {
    highLevel();
  }

  if (VERY_HIGH_LEVEL.classList.contains('active')) {
    veryHighLevel();
  }
};
var arrayGreen = [];
var arrayBrown = [];
var arrayBlue = [];

var veryEasyLevel = function veryEasyLevel() {
  arrayGreen = [].concat(arrayCardsDeskGreenEasy);
  arrayBrown = [].concat(arrayCardsDeskBrownEasy);
  arrayBlue = [].concat(arrayCardsDeskBlueEasy);
  console.log(arrayGreen, 'Зеленные');
  console.log(arrayBrown, 'Коричневые');
  console.log(arrayBlue, 'Синии');
  level();
};

var easyLevel = function easyLevel() {
  arrayGreen = [].concat(arrayCardsDeskGreenEasy, arrayCardsDeskGreenNormal);
  arrayBrown = [].concat(arrayCardsDeskBrownEasy, arrayCardsDeskBrownNormal);
  arrayBlue = [].concat(arrayCardsDeskBlueEasy, arrayCardsDeskBlueNormal);
  console.log(arrayGreen, 'Зеленные');
  console.log(arrayBrown, 'Коричневые');
  console.log(arrayBlue, 'Синии');
  level();
};

var mediumLevel = function mediumLevel() {
  arrayGreen = [].concat(arrayCardsDeskGreen);
  arrayBrown = [].concat(arrayCardsDeskBrown);
  arrayBlue = [].concat(arrayCardsDeskBlue);
  console.log(arrayGreen, 'Зеленные');
  console.log(arrayBrown, 'Коричневые');
  console.log(arrayBlue, 'Синии');
  level();
};

var highLevel = function highLevel() {
  arrayGreen = [].concat(arrayCardsDeskGreenNormal, arrayCardsDeskGreenHard);
  arrayBrown = [].concat(arrayCardsDeskBrownNormal, arrayCardsDeskBrownHard);
  arrayBlue = [].concat(arrayCardsDeskBlueNormal, arrayCardsDeskBlueHard);
  console.log(arrayGreen, 'Зеленные');
  console.log(arrayBrown, 'Коричневые');
  console.log(arrayBlue, 'Синии');
  level();
};

var veryHighLevel = function veryHighLevel() {
  arrayGreen = [].concat(arrayCardsDeskGreenHard);
  arrayBrown = [].concat(arrayCardsDeskBrownHard);
  arrayBlue = [].concat(arrayCardsDeskBlueHard);
  console.log(arrayGreen, 'Зеленные');
  console.log(arrayBrown, 'Коричневые');
  console.log(arrayBlue, 'Синии');
  level();
};

var level = function level() {
  if (document.querySelector('.Azathoth').classList.contains('active')) {
    round1 = [];
    round2 = [];
    round3 = [];

    if (VERY_EASY_LEVEL.classList.contains('active')) {
      while (arrayBrown.length < 9) {
        arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * arrayCardsDeskBrownNormal.length)]);
      }
    }

    if (VERY_HIGH_LEVEL.classList.contains('active')) {
      while (arrayBrown.length < 9) {
        arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * arrayCardsDeskBrownNormal.length)]);
      }
    }

    document.querySelector('.dot_green1').innerHTML = ancientsData[0].firstStage.greenCards;

    for (var _i = 0; _i < ancientsData[0].firstStage.greenCards; _i++) {
      round1.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown1').innerHTML = ancientsData[0].firstStage.brownCards;

    for (var _i2 = 0; _i2 < ancientsData[0].firstStage.brownCards; _i2++) {
      round1.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue1').innerHTML = ancientsData[0].firstStage.blueCards;

    for (var _i3 = 0; _i3 < ancientsData[0].firstStage.blueCards; _i3++) {
      round1.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }

    document.querySelector('.dot_green2').innerHTML = ancientsData[0].secondStage.greenCards;

    for (var _i4 = 0; _i4 < ancientsData[0].secondStage.greenCards; _i4++) {
      round2.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown2').innerHTML = ancientsData[0].secondStage.brownCards;

    for (var _i5 = 0; _i5 < ancientsData[0].secondStage.brownCards; _i5++) {
      round2.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue2').innerHTML = ancientsData[0].secondStage.blueCards;

    for (var _i6 = 0; _i6 < ancientsData[0].secondStage.blueCards; _i6++) {
      round2.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }

    document.querySelector('.dot_green3').innerHTML = ancientsData[0].thirdStage.greenCards;

    for (var _i7 = 0; _i7 < ancientsData[0].thirdStage.greenCards; _i7++) {
      round3.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown3').innerHTML = ancientsData[0].thirdStage.brownCards;

    for (var _i8 = 0; _i8 < ancientsData[0].thirdStage.brownCards; _i8++) {
      round3.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue3').innerHTML = ancientsData[0].thirdStage.blueCards;

    for (var _i9 = 0; _i9 < ancientsData[0].thirdStage.blueCards; _i9++) {
      round3.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }
  }

  if (document.querySelector('.Cthulthu').classList.contains('active')) {
    round1 = [];
    round2 = [];
    round3 = [];

    if (VERY_EASY_LEVEL.classList.contains('active')) {
      while (arrayBrown.length < 9) {
        arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * arrayCardsDeskBrownNormal.length)]);
      }
    }

    if (VERY_HIGH_LEVEL.classList.contains('active')) {
      while (arrayBrown.length < 9) {
        arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * arrayCardsDeskBrownNormal.length)]);
      }
    }

    document.querySelector('.dot_green1').innerHTML = ancientsData[1].firstStage.greenCards;

    for (var _i10 = 0; _i10 < ancientsData[1].firstStage.greenCards; _i10++) {
      round1.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown1').innerHTML = ancientsData[1].firstStage.brownCards;

    for (var _i11 = 0; _i11 < ancientsData[1].firstStage.brownCards; _i11++) {
      round1.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue1').innerHTML = ancientsData[1].firstStage.blueCards;

    for (var _i12 = 0; _i12 < ancientsData[1].firstStage.blueCards; _i12++) {
      round1.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }

    document.querySelector('.dot_green2').innerHTML = ancientsData[1].secondStage.greenCards;

    for (var _i13 = 0; _i13 < ancientsData[1].secondStage.greenCards; _i13++) {
      round2.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown2').innerHTML = ancientsData[1].secondStage.brownCards;

    for (var _i14 = 0; _i14 < ancientsData[1].secondStage.brownCards; _i14++) {
      round2.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue2').innerHTML = ancientsData[1].secondStage.blueCards;

    for (var _i15 = 0; _i15 < ancientsData[1].secondStage.blueCards; _i15++) {
      round2.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }

    document.querySelector('.dot_green3').innerHTML = ancientsData[1].thirdStage.greenCards;

    for (var _i16 = 0; _i16 < ancientsData[1].thirdStage.greenCards; _i16++) {
      round3.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown3').innerHTML = ancientsData[1].thirdStage.brownCards;

    for (var _i17 = 0; _i17 < ancientsData[1].thirdStage.brownCards; _i17++) {
      round3.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue3').innerHTML = ancientsData[1].thirdStage.blueCards;

    for (var _i18 = 0; _i18 < ancientsData[1].thirdStage.blueCards; _i18++) {
      round3.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }
  }

  if (document.querySelector('.LogSothoth').classList.contains('active')) {
    round1 = [];
    round2 = [];
    round3 = [];

    if (VERY_EASY_LEVEL.classList.contains('active')) {
      while (arrayBrown.length < 9) {
        arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * arrayCardsDeskBrownNormal.length)]);
      }
    }

    if (VERY_HIGH_LEVEL.classList.contains('active')) {
      while (arrayBrown.length < 9) {
        arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * arrayCardsDeskBrownNormal.length)]);
      }
    }

    document.querySelector('.dot_green1').innerHTML = ancientsData[2].firstStage.greenCards;

    for (var _i19 = 0; _i19 < ancientsData[2].firstStage.greenCards; _i19++) {
      round1.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown1').innerHTML = ancientsData[2].firstStage.brownCards;

    for (var _i20 = 0; _i20 < ancientsData[2].firstStage.brownCards; _i20++) {
      round1.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue1').innerHTML = ancientsData[2].firstStage.blueCards;

    for (var _i21 = 0; _i21 < ancientsData[2].firstStage.blueCards; _i21++) {
      round1.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }

    document.querySelector('.dot_green2').innerHTML = ancientsData[2].secondStage.greenCards;

    for (var _i22 = 0; _i22 < ancientsData[2].secondStage.greenCards; _i22++) {
      round2.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown2').innerHTML = ancientsData[2].secondStage.brownCards;

    for (var _i23 = 0; _i23 < ancientsData[2].secondStage.brownCards; _i23++) {
      round2.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue2').innerHTML = ancientsData[2].secondStage.blueCards;

    for (var _i24 = 0; _i24 < ancientsData[2].secondStage.blueCards; _i24++) {
      round2.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }

    document.querySelector('.dot_green3').innerHTML = ancientsData[2].thirdStage.greenCards;

    for (var _i25 = 0; _i25 < ancientsData[2].thirdStage.greenCards; _i25++) {
      round3.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown3').innerHTML = ancientsData[2].thirdStage.brownCards;

    for (var _i26 = 0; _i26 < ancientsData[2].thirdStage.brownCards; _i26++) {
      round3.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue3').innerHTML = ancientsData[2].thirdStage.blueCards;

    for (var _i27 = 0; _i27 < ancientsData[2].thirdStage.blueCards; _i27++) {
      round3.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }
  }

  if (document.querySelector('.ShubNiggurath').classList.contains('active')) {
    round1 = [];
    round2 = [];
    round3 = [];

    if (VERY_EASY_LEVEL.classList.contains('active')) {
      while (arrayGreen.length < 6) {
        arrayGreen.push(arrayCardsDeskGreenNormal[Math.floor(Math.random() * arrayCardsDeskGreenNormal.length)]);
      }

      while (arrayBrown.length < 8) {
        arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * arrayCardsDeskBrownNormal.length)]);
      }
    }

    if (VERY_HIGH_LEVEL.classList.contains('active')) {
      while (arrayGreen.length < 6) {
        arrayGreen.push(arrayCardsDeskGreenNormal[Math.floor(Math.random() * arrayCardsDeskGreenNormal.length)]);
      }

      while (arrayBrown.length < 8) {
        arrayBrown.push(arrayCardsDeskBrownNormal[Math.floor(Math.random() * arrayCardsDeskBrownNormal.length)]);
      }
    }

    document.querySelector('.dot_green1').innerHTML = ancientsData[3].firstStage.greenCards;

    for (var _i28 = 0; _i28 < ancientsData[3].firstStage.greenCards; _i28++) {
      round1.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown1').innerHTML = ancientsData[3].firstStage.brownCards;

    for (var _i29 = 0; _i29 < ancientsData[2].firstStage.brownCards; _i29++) {
      round1.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue1').innerHTML = ancientsData[3].firstStage.blueCards;

    for (var _i30 = 0; _i30 < ancientsData[3].firstStage.blueCards; _i30++) {
      round1.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }

    document.querySelector('.dot_green2').innerHTML = ancientsData[3].secondStage.greenCards;

    for (var _i31 = 0; _i31 < ancientsData[3].secondStage.greenCards; _i31++) {
      round2.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown2').innerHTML = ancientsData[3].secondStage.brownCards;

    for (var _i32 = 0; _i32 < ancientsData[3].secondStage.brownCards; _i32++) {
      round2.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue2').innerHTML = ancientsData[3].secondStage.blueCards;

    for (var _i33 = 0; _i33 < ancientsData[3].secondStage.blueCards; _i33++) {
      round2.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }

    document.querySelector('.dot_green3').innerHTML = ancientsData[3].thirdStage.greenCards;

    for (var _i34 = 0; _i34 < ancientsData[3].thirdStage.greenCards; _i34++) {
      round3.push(arrayGreen[Math.floor(Math.random() * arrayGreen.length)]);
    }

    document.querySelector('.dot_brown3').innerHTML = ancientsData[3].thirdStage.brownCards;

    for (var _i35 = 0; _i35 < ancientsData[3].thirdStage.brownCards; _i35++) {
      round3.push(arrayBrown[Math.floor(Math.random() * arrayBrown.length)]);
    }

    document.querySelector('.dot_blue3').innerHTML = ancientsData[3].thirdStage.blueCards;

    for (var _i36 = 0; _i36 < ancientsData[3].thirdStage.blueCards; _i36++) {
      round3.push(arrayBlue[Math.floor(Math.random() * arrayBlue.length)]);
    }
  }

  console.log(round1, 'Этап1');
  console.log(round2, 'Этап2');
  console.log(round3, 'Этап3');
};

CARD_DESK.addEventListener('click', function () {
  CARD.classList.remove('inactive');
  var randomIndex = 0;

  if (round1.length !== 0) {
    randomIndex = Math.floor(Math.random() * round1.length);
    document.querySelector('.card').style.backgroundImage = "url(".concat(round1[randomIndex].image, ")");

    if (round1[randomIndex].color === 'green') {
      document.querySelector('.dot_green1').innerHTML -= 1;
    }

    if (round1[randomIndex].color === 'brown') {
      document.querySelector('.dot_brown1').innerHTML -= 1;
    }

    if (round1[randomIndex].color === 'blue') {
      document.querySelector('.dot_blue1').innerHTML -= 1;
    }

    round1 = round1.filter(function (el, i) {
      return i !== randomIndex;
    });

    if (round1.length === 0) {
      document.querySelector('.raund1').classList.add('active');
    }
  } else if (round2.length !== 0) {
    randomIndex = Math.floor(Math.random() * round2.length);
    document.querySelector('.card').style.backgroundImage = "url(".concat(round2[randomIndex].image, ")");

    if (round2[randomIndex].color === 'green') {
      document.querySelector('.dot_green2').innerHTML -= 1;
    }

    if (round2[randomIndex].color === 'brown') {
      document.querySelector('.dot_brown2').innerHTML -= 1;
    }

    if (round2[randomIndex].color === 'blue') {
      document.querySelector('.dot_blue2').innerHTML -= 1;
    }

    round2 = round2.filter(function (el, i) {
      return i !== randomIndex;
    });

    if (round2.length === 0) {
      document.querySelector('.raund2').classList.add('active');
    }
  } else if (round3.length !== 0) {
    randomIndex = Math.floor(Math.random() * round3.length);
    document.querySelector('.card').style.backgroundImage = "url(".concat(round3[randomIndex].image, ")");

    if (round3[randomIndex].color === 'green') {
      document.querySelector('.dot_green3').innerHTML -= 1;
    }

    if (round3[randomIndex].color === 'brown') {
      document.querySelector('.dot_brown3').innerHTML -= 1;
    }

    if (round3[randomIndex].color === 'blue') {
      document.querySelector('.dot_blue3').innerHTML -= 1;
    }

    round3 = round3.filter(function (el, i) {
      return i !== randomIndex;
    });

    if (round3.length === 0) {
      document.querySelector('.raund3').classList.add('active');
      CARD_DESK.classList.add('inactive');
    }
  } else {
    CARD_DESK.classList.add('inactive');
  }
});
;// CONCATENATED MODULE: ./src/components/Levels/index.js


var BUTTON_LEVEL = document.querySelectorAll('.button_level');

var _loop = function _loop(i) {
  BUTTON_LEVEL[i].addEventListener('click', function () {
    BUTTON_LEVEL.forEach(function (el) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
    BUTTON_CREATE_CARD_DESK.classList.remove('inactive');
    WRAPPER_GAME.classList.remove('active');
    BUTTON_LEVEL[i].classList.add('active');
    document.querySelector('.raund1').classList.remove('active');
    document.querySelector('.raund2').classList.remove('active');
    document.querySelector('.raund3').classList.remove('active');
    ANCIENT.forEach(function (el) {
      if (el.classList.contains('active')) {
        BUTTON_CREATE_CARD_DESK.disabled = false;
        BUTTON_CREATE_CARD_DESK.classList.remove('disabled');
      }
    });
  });
};

for (var Levels_i = 0; Levels_i < BUTTON_LEVEL.length; Levels_i++) {
  _loop(Levels_i);
}
;// CONCATENATED MODULE: ./src/components/Ancients/index.js


var ANCIENT = document.querySelectorAll('.ancient');

var Ancients_loop = function _loop(i) {
  ANCIENT[i].addEventListener('click', function () {
    ANCIENT.forEach(function (el) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
    ANCIENT[i].classList.add('active');
    BUTTON_CREATE_CARD_DESK.classList.remove('inactive');
    WRAPPER_GAME.classList.remove('active');
    BUTTON_LEVEL.forEach(function (el) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
    document.querySelector('.raund1').classList.remove('active');
    document.querySelector('.raund2').classList.remove('active');
    document.querySelector('.raund3').classList.remove('active');
    BUTTON_CREATE_CARD_DESK.disabled = true;
    BUTTON_CREATE_CARD_DESK.classList.add('disabled');
  });
};

for (var Ancients_i = 0; Ancients_i < ANCIENT.length; Ancients_i++) {
  Ancients_loop(Ancients_i);
}
;// CONCATENATED MODULE: ./src/index.js




/******/ })()
;