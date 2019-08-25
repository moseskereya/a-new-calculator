const btnValue = document.querySelectorAll('#special');
const screenDisplay = document.querySelector('.screen');
const Equal = document.querySelector('.equal-btn')
const clearItems = document.querySelector('#delete')
const numbPercent = document.querySelector('#percent')
const squareNum = document.querySelector('#square');
const clearSingle = document.querySelector('#clear-1')
const halfByone = document.querySelector('#devide-1');
const rootNum = document.querySelector('#root')

for (let i = 0; i < btnValue.length; i++){
    btnValue[i].addEventListener('click', function (){
    let number = btnValue[i].getAttribute('data-num');
    screenDisplay.value += number
    })
    }

    Equal.addEventListener('click', function (){
        if(screenDisplay.value === ''){
            alert = "input is empty"
        } else{
        let value = eval(screenDisplay.value);
        screenDisplay.value = value;
        }
    })

    rootNum.addEventListener('click', function(){
     const newValue = Math.sqrt(screenDisplay.value);
     screenDisplay.value = newValue;
    })

halfByone.addEventListener('click', function(){
let counter = 1;
screenDisplay.value = counter / screenDisplay.value ;
})

 clearItems.addEventListener('click', function(){
        screenDisplay.value = '';
    })

squareNum.addEventListener('click', function(){
    screenDisplay.value *= screenDisplay.value
})

clearSingle.addEventListener('click', function(){
  screenDisplay.value = 0;
})

numbPercent.addEventListener('click', function(){
    let randNum = (screenDisplay.value / 100 ) * 1
    screenDisplay.value = randNum;
    console.log(randNum);
  })
