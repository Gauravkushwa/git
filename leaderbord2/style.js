let buttons = document.querySelectorAll('button');
let input = document.getElementById('inputbox');
let min = document.getElementById('min');
let max = document.getElementById('max');
let enter = document.getElementById('enter');
empty = "";
array = Array.from(buttons);
buttons.forEach(buttons => {
    buttons.addEventListener('click',(e) => {
       empty += e.target.innerHTML;
       input.value = empty
    })
})
enter.addEventListener('click', function()
{
    if(input.value < '43'){
        min.innerHTML = input.value;
    }
    else if(input.value > '2019'){
        max.innerHTML = input.value;
    }
    else{
        (max.innerHTML == '2019')&&(min.innerHTML == min.innerHTML)
    }
})