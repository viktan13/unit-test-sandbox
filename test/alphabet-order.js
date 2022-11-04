const {expect} = require('chai');

// Вернуть переданную строку с буквами в алфавитном порядке
// Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.
// В аргумент будут передани только маленькие букви
//
//     Пример строки: 'alphabetical'
//
// Ожидаемый результат: 'aaabcehillpt'

function alphabetOrder(str) {

    return str.split('').sort().join('');

}

it('The function "alphabetOrder" is created', function () {
    expect(alphabetOrder).to.be.a('function');
});

it('The functions returns the correct result for argument "alphabetical" ', function () {
    expect(alphabetOrder('alphabetical')).eq('aaabcehillpt');
});

it('The functions returns the correct result for argument "correlation" ', function () {
    expect(alphabetOrder('correlation')).eq('aceilnoorrt');
});

it('The functions returns the correct result for argument "z" ', function () {
    expect(alphabetOrder('z')).eq('z');
});

it('The functions returns the correct result for argument "hello world" ', function () {
    expect(alphabetOrder('hello world')).eq(' dehllloorw');
});

it('The functions returns the correct result for argument "abracadabra" ', function () {
    expect(alphabetOrder('abracadabra')).eq('aaaaabbcdrr');
});

it('The functions returns the correct result for argument "reintegration" ', function () {
    expect(alphabetOrder('reintegration')).eq('aeegiinnorrtt');
});

it('The functions returns the correct result for argument "relevant" ', function () {
    expect(alphabetOrder('relevant')).eq('aeelnrtv');
});

it('The functions returns the correct result for argument "relevant" ', function () {
    expect(alphabetOrder('')).eq('');
});

