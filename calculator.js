let screen = document.getElementById('display');

let nine = document.getElementById('nine');
nine.addEventListener('click',function(){
    let value1 = nine.value;
    screen.value += value1; 
})

let eight = document.getElementById('eight');
eight.addEventListener('click',function(){
    let value1 = eight.value;
    screen.value += value1;
})

let seven = document.getElementById('seven');
seven.addEventListener('click',function(){
    let value1 = seven.value;
    screen.value += value1;
})

let divide = document.getElementById('divide');
divide.addEventListener('click',function(){
    let value1 = divide.value;
    screen.value += value1;
})

let six = document.getElementById('six');
six.addEventListener('click',function(){
    let value1 = six.value;
    screen.value += value1;
})

let five = document.getElementById('five');
five.addEventListener('click',function(){
    let value1 = five.value;
    screen.value += value1;
})

let four = document.getElementById('four');
four.addEventListener('click',function(){
    let value1 = four.value;
    screen.value += value1;
})

let multi = document.getElementById('multi');
multi.addEventListener('click',function(){
    let value1 = multi.value;
    screen.value += value1;
})

let three = document.getElementById('three');
three.addEventListener('click',function(){
    let value1 = three.value;
    screen.value += value1;
})

let two = document.getElementById('two');
two.addEventListener('click',function(){
    let value1 = two.value;
    screen.value += value1;
})

let one = document.getElementById('one');
one.addEventListener('click',function(){
    let value1 = one.value;
    screen.value += value1;
})

let plus = document.getElementById('plus');
plus.addEventListener('click',function(){
    let value1 = plus.value;
    screen.value += value1;
})

let dot = document.getElementById('dot');
dot.addEventListener('click',function(){
    let value1 = dot.value;
    screen.value += value1;
})

let zero = document.getElementById('zero');
zero.addEventListener('click',function(){
    let value1 = zero.value;
    screen.value += value1;
})

let minus = document.getElementById('minus');
minus.addEventListener('click',function(){
    let value1 = minus.value;
    screen.value += value1;
})

let clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    screen.value = "";
})


let equal = document.getElementById('equal');
equal.addEventListener('click',function(){
    screen.value = eval(screen.value);
})

