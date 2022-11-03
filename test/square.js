const {expect} = require('chai');

//RU
// Напишите функцию "square" возводит число в квадрат и далее к результату прибавляет число 2.
//
// Например,
//
//     если Вы ввели число 2, тогда в консоль должно быть выведено число 6
// если Вы ввели число 3, тогда в консоль должно быть выведено число 11
// если Вы ввели число 5, тогда в консоль должно быть выведено число 27

function square(n){
    return n * n + 2;
}

it('The function "square" is created', function () {
    expect(square).to.be.a('function');
});

it('The function creates the correct result for argument 2 ', function () {
    expect(square(2)).eq(6);
});

it('The function creates the correct result for argument 3', function () {
    expect(square(3)).eq(11);
});

it('The function creates the correct result for argument 5', function () {
    expect(square(5)).eq(27);
});

it('The function creates the correct result for argument -25', function () {
    expect(square(-25)).eq(627);
});

it('The function creates the correct result for argument 0', function () {
    expect(square(0)).eq(2);
});

it('The function creates the correct result for no arguments', function () {
    expect(square()).to.be.NaN;
});