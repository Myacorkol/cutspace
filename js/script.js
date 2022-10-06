
console.log("hello");

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
//Когда Input находится в фокусе, добавляем класс form__active к к форме
//Когда фокус с инпута пропадает, тогда у формы забираем класс form__active
console.log(form);
console.log(input);
input.addEventListener('focus', function () {
    form.classList.add('form--active')
});

input.addEventListener('blur', function(){
    form.classList.remove('form--active')
});
