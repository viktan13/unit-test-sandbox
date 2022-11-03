const {expect} = require('chai');


// Получить тип данных
// Напишите функцию detect_data_type(value), которая принимает аргумент и возвращает тип.
//
//     Примечание. Существует шесть возможных значений, которые возвращает typeof: объект, логическое значение, функция, число, строка и неопределенное значение.
// Примеры:
//   функция detect_data_type(12) должна возвратить 'number';
//   функция detect_data_type('value') должна возвратить 'string';
//   функция detect_data_type(true) должна возвратить 'boolean';


function detect_data_type(value) {
     return typeof value;
}




it('The function "detect_data_type" is created ', function () {
    expect(detect_data_type).to.be.a('function');
});

it('The function returns the correct result for argument 35', function () {
    expect(detect_data_type(35)).eq('number');
});

it('The function returns the correct result for argument {name: \'Alice\', age: 35}', function () {
    expect(detect_data_type({name: 'Alice', age: 35})).eq('object');
});

it('The function returns the correct result for argument 12', function () {
    expect(detect_data_type(12)).eq('number');
});

it('The function returns the correct result for argument "friend"', function () {
    expect(detect_data_type('friend')).eq('string');
});

it('The function returns the correct result for argument true', function () {
    expect(detect_data_type(true)).eq('boolean');
});

it('The function returns the correct result for no arguments', function () {
    expect(detect_data_type()).eq('undefined');
});

it('The function returns the correct result for argument null', function () {
    expect(detect_data_type(null)).eq('object');
});

it('The function returns the correct result for argument NaN', function () {
    expect(detect_data_type(NaN)).eq('number');
});

it('The function returns the correct result for argument () => {})', function () {
    expect(detect_data_type(() => {})).eq('function');
});

