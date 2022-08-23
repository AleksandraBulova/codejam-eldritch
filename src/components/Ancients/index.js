AZATHOTH = document.querySelector('.Azathoth')
CTHULTHU = document.querySelector('.Cthulthu')
LOG_SOTHOTH = document.querySelector('.LogSothoth')
SHUB_NIGGURATH = document.querySelector('.ShubNiggurath')
ANCIENT = document.querySelectorAll('.ancient')

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
