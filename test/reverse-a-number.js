const {expect} = require('chai');

//  Переверните число задом наперед
// Напишите функцию "reverseANumber", которая переворачивает число.
// Примеры:
//   функция reverseANumber(356) должна возвратить 653;
//   функция reverseANumber(1568) должна возвратить 8651;
//   функция reverseANumber(258961) должна возвратить 169852;

function reverseANumber(n) {
    n = n + "";
    return +(n.split("").reverse().join(""));
}

it('The function "reverseANumber" is created', function () {
    expect(reverseANumber).to.be.a('function');
});

it('The function returns the correct result for argument 356 ', function () {
    expect(reverseANumber(356)).eq(653);
});

it('The function returns the correct result for argument 1568 ', function () {
    expect(reverseANumber(1568)).eq(8651);
});

it('The function returns the correct result for argument 258961 ', function () {
    expect(reverseANumber(258961)).eq(169852);
});

it('The function returns the correct result for argument 0 ', function () {
    expect(reverseANumber(0)).eq(0);
});

it('The function returns the correct result for argument -5869 ', function () {
    expect(reverseANumber(-5869)).to.be.NaN;
});

it('The function returns the correct result for argument 5897653497531 ', function () {
    expect(reverseANumber(5897653497531)).eq(1357943567985);
});

it('The function returns the correct result for argument 981681671685251683488', () => {
    expect(reverseANumber(98168167168525)).eq(52586176186189)
})

it('The function returns the correct result for argument 8973581', () => {
    expect(reverseANumber(8973581)).eq(1853798)
})

