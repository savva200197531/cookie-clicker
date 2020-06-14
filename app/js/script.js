const cookie = document.querySelector('.cookie-img');
scoreTemplate = document.querySelector('#score');
let score = scoreTemplate.content.querySelector('.score-number');
score.innerHTML = localStorage.getItem('count');
const shop = document.querySelector('.shop');
t = document.querySelector('#shop-menu');
const shopClose = document.querySelector('.shop-close');
const upgrades = t.content.querySelector('.upgrades');
const newGameButton = document.querySelector('.refresh');
let int;

class gameMain {

  constructor() {

  }

  checker() {
    switch (localStorage.getItem('int')) {
      case '6':
        int = '6';
        localStorage.setItem('int', int);
        break;
      case '5':
        int = '5';
        localStorage.setItem('int', int);
        break;
      case '4':
        int = '4';
        localStorage.setItem('int', int);
        break;
      case '3':
        int = '3';
        localStorage.setItem('int', int);
        break;
      case '2':
        int = '2';
        localStorage.setItem('int', int);
        break;
      case '1':
        int = '1';
        localStorage.setItem('int', int);
        break;
      case 'undefined':
        int = '1';
        localStorage.setItem('int', int);
        break;
      case 'null':
        int = '1';
        localStorage.setItem('int', int);
        break;
      default:
        int = '1';
        localStorage.setItem('int', int);
        console.error('something went wrong!!!');
    }
  }

  newGame() {
    localStorage.clear();
  }

  timeUpgrade() {
    let time = '30000';
    localStorage.setItem('time', time);
    console.log(localStorage.getItem('time'));
  }

  counter() {
    if (window.localStorage) {
      let value = localStorage.getItem('count');
      let newValue = isFinite(value) ? parseInt(value) + parseInt(localStorage.getItem('int')) : 0;
      localStorage.setItem('count', newValue);
      score.innerHTML = `<span>${ localStorage.getItem('count') }</span>`;
    }
  }

  passiveCount() {
    setInterval(() => {
      let newValue = localStorage.getItem('count');
    }, localStorage.getItem('time'));
  }

  openShop() {
    shop.addEventListener('click', function () {
      document.body.appendChild(t.content);
      upgrades.classList.remove('hidden');
    });

    shopClose.addEventListener('click', function () {
      upgrades.classList.add('hidden');
    });
  }

  shopBlock() {
    let int = localStorage.getItem('int');
    switch (int) {
      case '1':
        t.content.querySelector('.upgrade1').disabled = false;
        break;
      case '2':
        t.content.querySelector('.upgrade1').disabled = true;
        break;
      case '3':
        t.content.querySelector('.upgrade1').disabled = true;
        t.content.querySelector('.upgrade2').disabled = true;
        break;
      case '4':
        t.content.querySelector('.upgrade1').disabled = true;
        t.content.querySelector('.upgrade2').disabled = true;
        t.content.querySelector('.upgrade3').disabled = true;
        break;
      case '5':
        t.content.querySelector('.upgrade1').disabled = true;
        t.content.querySelector('.upgrade2').disabled = true;
        t.content.querySelector('.upgrade3').disabled = true;
        t.content.querySelector('.upgrade4').disabled = true;
        break;
      case '6':
        t.content.querySelector('.upgrade1').disabled = true;
        t.content.querySelector('.upgrade2').disabled = true;
        t.content.querySelector('.upgrade3').disabled = true;
        t.content.querySelector('.upgrade4').disabled = true;
        t.content.querySelector('.upgrade5').disabled = true;
        break;
      default:
    }
  }

  cookieAnimation() {
    cookie.addEventListener('mousedown', () => {
      cookie.classList.add('shrink');
    });
    cookie.addEventListener('mouseup', () => {
      cookie.classList.remove('shrink');
    });
  }

  upgradesShop() {
    const allBtns = t.content.querySelectorAll('button');
    const btnsArr = Array.prototype.slice.call(allBtns);


    function checkButtons(e) {
      switch (e.target.classList.value) {
        case 'upgrade1':
          if (score.innerText >= 10) {

            console.log('up1');
            let int = '2';
            localStorage.setItem('int', int);

            // score
            let oldValue = localStorage.getItem('count');
            let newValue = oldValue - 10;

            localStorage.setItem('count', newValue);
            score.innerHTML = newValue;
            this.disabled = true;
          }
          break;
        case 'upgrade2':

          if (score.innerText >= 100) {

            console.log('up2');
            let int = '3';
            localStorage.setItem('int', int);

            // score
            let oldValue = localStorage.getItem('count');
            let newValue = oldValue - 100;
            localStorage.setItem('count', newValue);
            score.innerHTML = newValue;
            this.disabled = true;
          }
          break;
        case 'upgrade3':

          if (score.innerText >= 300) {


            console.log('up3');
            let int = '4';
            localStorage.setItem('int', int);
            // score
            let oldValue = localStorage.getItem('count');
            let newValue = oldValue - 300;
            localStorage.setItem('count', newValue);
            score.innerHTML = newValue;
            this.disabled = true;
          }
          break;
        case 'upgrade4':

          if (score.innerText >= 1000) {
            console.log('up4');
            let int = '5';
            localStorage.setItem('int', int);
            // score
            let oldValue = localStorage.getItem('count');
            let newValue = oldValue - 1000;
            localStorage.setItem('count', newValue);
            score.innerHTML = newValue;
            this.disabled = true;
          }
          break;
        case 'upgrade5':

          if (score.innerText >= 3000) {
            console.log('up5');
            let int = '6';
            localStorage.setItem('int', int);
            // score
            let oldValue = localStorage.getItem('count');
            let newValue = oldValue - 3000;
            localStorage.setItem('count', newValue);
            score.innerHTML = newValue;
            this.disabled = true;
          }
          break;
        default:
          console.error('something went wrong!');
      }
    }

    btnsArr.forEach(btn => {
      btn.addEventListener('click', checkButtons);
    })

  }


}

document.body.prepend(scoreTemplate.content);


gameMain.prototype.cookieAnimation();
gameMain.prototype.shopBlock();
gameMain.prototype.checker();
gameMain.prototype.upgradesShop();
gameMain.prototype.passiveCount();
gameMain.prototype.timeUpgrade();
gameMain.prototype.openShop();
newGameButton.addEventListener('click', gameMain.prototype.newGame);
newGameButton.addEventListener('click', gameMain.prototype.shopBlock);
cookie.addEventListener('click', gameMain.prototype.checker);
cookie.addEventListener('click', gameMain.prototype.counter);






