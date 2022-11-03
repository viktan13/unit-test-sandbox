const {expect} = require('chai');

//RU
//Напишите функцию с именем min, которая принимает 2 числа и возвращает минимальное по значению число.
// Примеры:
//   функция min(7, 12) должна возвратить 7;
//   функция min(10, 1) должна возвратить 1;
//   функция min(92, 35) должна возвратить 35;

function min(n1, n2){
    if(n1 < n2) return n1;
    else return n2;
}

it('The function "min" is created ', function () {
    expect(min).to.be.a('function');
});

it('The function returns the correct result for arguments 7 and 12 ', function () {
    expect(min(7, 12)).eq(7);
});

it('The function return the correct result for arguments 10 and 1 ', function () {
    expect(min(10, 1)).eq(1);
});

it('The function returns the correct result for arguments 92, 35 ', function () {
    expect(min(92, 35)).eq(35);
});

it('The function returns the correct result for 33 and -20 ', function () {
    expect(min(33, -20)).eq(-20);
});

it('The function returns the correct result for arguments -88 and -352 ', function () {
    expect(min(-88, -352)).eq(-352);
});

it('The function returns the correct result for arguments 25 and 0 ', function () {
    expect(min(25, 0)).eq(0);
});

it('The function returns the correct result for arguments 125 and 125 ', function () {
    expect(min(125, 125)).eq(125);
});

it('The function returns the correct result for arguments 0 and 0 ', function () {
    expect(min(0, 0)).eq(0);
});