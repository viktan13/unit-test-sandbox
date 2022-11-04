const {expect} = require('chai');


// Получить тип данных
// Напишите функцию detectDataType(value), которая принимает аргумент и возвращает тип.
//
//     Примечание. Существует шесть возможных значений, которые возвращает typeof: объект, логическое значение, функция, число, строка и неопределенное значение.
// Примеры:
//   функция detectDataType(12) должна возвратить 'number';
//   функция detectDataType('value') должна возвратить 'string';
//   функция detectDataType(true) должна возвратить 'boolean';


function detectDataType(value) {
     return typeof value;
}




it('The function "detectDataType" is created ', function () {
    expect(detectDataType).to.be.a('function');
});

it('The function returns the correct result for argument 35', function () {
    expect(detectDataType(35)).eq('number');
});

it('The function returns the correct result for argument {name: \'Alice\', age: 35}', function () {
    expect(detectDataType({name: 'Alice', age: 35})).eq('object');
});

it('The function returns the correct result for argument 12', function () {
    expect(detectDataType(12)).eq('number');
});

it('The function returns the correct result for argument "friend"', function () {
    expect(detectDataType('friend')).eq('string');
});

it('The function returns the correct result for argument true', function () {
    expect(detectDataType(true)).eq('boolean');
});

it('The function returns the correct result for no arguments', function () {
    expect(detectDataType()).eq('undefined');
});

it('The function returns the correct result for argument null', function () {
    expect(detectDataType(null)).eq('object');
});

it('The function returns the correct result for argument NaN', function () {
    expect(detectDataType(NaN)).eq('number');
});

it('The function returns the correct result for argument () => {})', function () {
    expect(detectDataType(() => {})).eq('function');
});

