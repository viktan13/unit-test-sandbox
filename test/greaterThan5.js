const {expect} = require('chai');

//RU
// Напишите функцию "greaterThan5", которая бы принимала аргументом одно число и возвращала:
//
//     true, если число больше 5
// и false, если число меньше 5

// Примеры:
//   функция greaterThan5(3) должна возвратить false;
//   функция greaterThan5(10) должна возвратить true;
//   функция greaterThan5(5) должна возвратить false;

function greaterThan5(n){
    return n > 5;
}

it('Function "greaterThan5" is created', function () {
    expect(greaterThan5).to.be.a('function');
});

it('The function returns the correct result for argument 3', function () {
    expect(greaterThan5(3)).eq(false);
});

it('The function returns the correct result for argument 10', function () {
    expect(greaterThan5(10)).eq(true);
});

it('The function returns the correct result for argument 5', function () {
    expect(greaterThan5(5)).eq(false);
});

it('The function returns the correct result for argument -256', function () {
    expect(greaterThan5(-256)).eq(false);
});

it('The function returns the correct result for argument -10', function () {
    expect(greaterThan5(-10)).eq(false);
});

it('The function returns the correct result for argument 0', function () {
    expect(greaterThan5(0)).eq(false);
});