const {expect} = require('chai');


// Подсчитать количество вхождений указанной буквы в строке
// Напишите функцию charCount, которая принимает два аргумента: строку и букву.
//     Функция должна подсчитывать количество вхождений указанной буквы в строке.
// Примеры:
//   функция charCount('abracadabra', 'a') должна возвратить 5;
//   функция charCount('reliable', 'l') должна возвратить 2;
//   функция charCount('hero', 'a') должна возвратить 0;

function char_count(str, letter) {
    let letter_Count = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count++;
        }
    }
    return letter_Count;
}


it('The function "char_count" is created ', function () {
    expect(char_count).to.be.a('function');
});

it('The function returns the correct result for arguments  (\'abracadabra\', \'a\')', function () {
    expect(char_count('abracadabra', 'a')).eq(5);
});

it('The function returns the correct result for arguments  (\'reliable\', \'l\')', function () {
    expect(char_count('reliable', 'l')).eq(2);
});

it('The function returns the correct result for arguments  (\'reference\', \'e\')', function () {
    expect(char_count('reference', 'e')).eq(4);
});

it('The function returns the correct result for arguments  (\'restaurant\', \'r\')', function () {
    expect(char_count('restaurant', 'r')).eq(2);
});

it('The function returns the correct result for arguments  (\'record was made unexpectedly\', \'e\')', function () {
    expect(char_count('record was made unexpectedly', 'e')).eq(5);
});

it('The function returns the correct result for arguments  (\'we will get it done\', \'d\')', function () {
    expect(char_count('we will get it done', 'd')).eq(1);
});

it('The function returns the correct result for arguments  (\'hero\', \'a\')', function () {
    expect(char_count('hero', 'a')).eq(0);
});

it('The function returns the correct result for arguments  (\'tradition\', \'q\')', function () {
    expect(char_count('tradition', 'q')).eq(0);
});

it('The function returns the correct result for arguments  (\'t\', \'t\')', function () {
    expect(char_count('t', 't')).eq(1);
});

