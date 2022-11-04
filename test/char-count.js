const {expect} = require('chai');


// Подсчитать количество вхождений указанной буквы в строке
// Напишите функцию charCount, которая принимает два аргумента: строку и букву.
//     Функция должна подсчитывать количество вхождений указанной буквы в строке.
// Примеры:
//   функция charCount('abracadabra', 'a') должна возвратить 5;
//   функция charCount('reliable', 'l') должна возвратить 2;
//   функция charCount('hero', 'a') должна возвратить 0;

function charCount(str, letter) {
    let letter_Count = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count++;
        }
    }
    return letter_Count;
}


it('The function "charCount" is created ', function () {
    expect(charCount).to.be.a('function');
});

it('The function returns the correct result for arguments  (\'abracadabra\', \'a\')', function () {
    expect(charCount('abracadabra', 'a')).eq(5);
});

it('The function returns the correct result for arguments  (\'reliable\', \'l\')', function () {
    expect(charCount('reliable', 'l')).eq(2);
});

it('The function returns the correct result for arguments  (\'reference\', \'e\')', function () {
    expect(charCount('reference', 'e')).eq(4);
});

it('The function returns the correct result for arguments  (\'restaurant\', \'r\')', function () {
    expect(charCount('restaurant', 'r')).eq(2);
});

it('The function returns the correct result for arguments  (\'record was made unexpectedly\', \'e\')', function () {
    expect(charCount('record was made unexpectedly', 'e')).eq(5);
});

it('The function returns the correct result for arguments  (\'we will get it done\', \'d\')', function () {
    expect(charCount('we will get it done', 'd')).eq(1);
});

it('The function returns the correct result for arguments  (\'hero\', \'a\')', function () {
    expect(charCount('hero', 'a')).eq(0);
});

it('The function returns the correct result for arguments  (\'tradition\', \'q\')', function () {
    expect(charCount('tradition', 'q')).eq(0);
});

it('The function returns the correct result for arguments  (\'t\', \'t\')', function () {
    expect(charCount('t', 't')).eq(1);
});

