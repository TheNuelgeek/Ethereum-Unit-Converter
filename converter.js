const etherBtn = document.getElementById('con-btn');
const gweiBtn = document.getElementById('con-btn2');
const weiBtn = document.getElementById('con-btn3');
let input = document.getElementById('main-input');

let firstPlaceHolder = document.getElementById('first');
let secondPlaceHolder = document.getElementById('second');
let thirdPlaceHolder = document.getElementById('third');

let firstPHeader = document.getElementById('firstH');
let secondPHeader = document.getElementById('secondH');
let thirdPHeader = document.getElementById('thirdH');


function setStorage(key, value){
    localStorage.setItem(key, value);
}

etherBtn.addEventListener('click', () => {
    
    let secondOutput = `${convert(input.value, 'ether', 'gwei')} `;
    let thirdOutput = `${convert(input.value, 'ether', 'wei')}`;

    firstPlaceHolder.textContent = input.value;
    secondPlaceHolder.textContent = secondOutput;
    thirdPlaceHolder.textContent = thirdOutput;
    
    firstPHeader.textContent = 'Ether';
    secondPHeader.textContent = 'Ether = Gwei';
    thirdPHeader.textContent = 'Ether = Wei';

    localStorage.clear();

    setStorage('firstOutput', `${input.value}`);
    setStorage('secondOutput', secondOutput);
    setStorage('thirdOutput', thirdOutput);

    setStorage('firstH', 'Ether');
    setStorage('secondH', 'Ether = Gwei');
    setStorage('thirdH', 'Ether = Wei');
});

gweiBtn.addEventListener('click', () => {
    let secondOutput = `${convert(input.value, 'gwei', 'ether')} `;
    let thirdOutput = `${convert(input.value, 'gwei', 'wei')}`;

    firstPlaceHolder.textContent = input.value;
    secondPlaceHolder.textContent = secondOutput;
    thirdPlaceHolder.textContent = thirdOutput;

    firstPHeader.textContent = 'Gwei';
    secondPHeader.textContent = 'Gwei = Ether';
    thirdPHeader.textContent = 'Gwei = Wei';

    localStorage.clear();

    setStorage('firstOutput', `${input.value}`);
    setStorage('secondOutput', secondOutput);
    setStorage('thirdOutput', thirdOutput);

    setStorage('firstH', 'Gwei');
    setStorage('secondH', 'Gwei = Ether');
    setStorage('thirdH', 'Gwei = Wei');
});

weiBtn.addEventListener('click', () => {
    let secondOutput = `${convert(input.value, 'wei', 'ether')} `;
    let thirdOutput = `${convert(input.value, 'wei', 'gwei')}`;

    firstPlaceHolder.textContent = input.value;
    secondPlaceHolder.textContent = secondOutput;
    thirdPlaceHolder.textContent = thirdOutput;

    firstPHeader.textContent = 'Wei';
    secondPHeader.textContent = 'Wei = Ether';
    thirdPHeader.textContent = 'Wei = Gwei';

    localStorage.clear();

    setStorage('firstOutput', `${input.value}`);
    setStorage('secondOutput', secondOutput);
    setStorage('thirdOutput', thirdOutput);

    setStorage('firstH', 'Wei');
    setStorage('secondH', 'Wei = Ether');
    setStorage('thirdH', 'Wei = Gwei');

});

function getItem(){
    firstPlaceHolder.textContent = localStorage.getItem('firstOutput');
    secondPlaceHolder.textContent = localStorage.getItem('secondOutput');
    thirdPlaceHolder.textContent = localStorage.getItem('thirdOutput');

    firstPHeader.textContent = localStorage.getItem('firstH');
    secondPHeader.textContent = localStorage.getItem('secondH');;
    thirdPHeader.textContent = localStorage.getItem('firstH');
}

getItem();

function convert(amount, fromUnit, toUnit) {
    if (fromUnit === 'ether') {
        if (toUnit === 'wei') {
          return Math.round(amount * 1e18);
        } else if (toUnit === 'gwei') {
          return Math.round(amount * 1e9);
        }
      } else if (fromUnit === 'gwei') {
        if (toUnit === 'wei') {
          return Math.round(amount * 1e9);
        } else if (toUnit === 'ether') {
        //   return Number(amount / 1e9).toFixed(9);
            let num = (amount / 1e9).toFixed(9);
            if (Number.isInteger(Number(num))) {
                return Number(num);
            } else {
                return Number(num).toFixed(9);
            }
        }
      } else if (fromUnit === 'wei') {
        if (toUnit === 'gwei') {
        //  return Number(amount / 1e9).toFixed(9);
            let num = (amount / 1e9).toFixed(9);
            if (Number.isInteger(Number(num))) {
                return Number(num);
            } else {
                return Number(num).toFixed(9);
            }
        
        } else if (toUnit === 'ether') {
        //   return Number(amount / 1e18).toFixed(18);
            let num = (amount / 1e18).toFixed(18);
            if (Number.isInteger(Number(num))) {
                return Number(num);
            } else {
                return Number(num).toFixed(18);
            }
        }
    }
}
