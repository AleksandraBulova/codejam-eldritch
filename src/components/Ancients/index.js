const AZATHOTH = document.querySelector('.Azathoth')
const CTHULTHU = document.querySelector('.Cthulthu')
const LOG_SOTHOTH = document.querySelector('.LogSothoth')
const SHUB_NIGGURATH = document.querySelector('.ShubNiggurath')
const ANCIENT = document.querySelectorAll('.ancient')

for(let i = 0; i < ANCIENT.length; i++) {
  ANCIENT[i].addEventListener('click', () => {
    ANCIENT.forEach(el => {
      if(el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })
    ANCIENT[i].classList.add('active')
  })
}
