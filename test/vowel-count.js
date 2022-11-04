const {expect} = require("chai");


//   Подсчитать количество гласных в строке
// Напишите функцию vowelCount(str), которая принимает строку в качестве параметра и подсчитывает количество гласных в строке.
// Примеры:
//   функция vowelCount('hello') должна возвратить 2;
//   функция vowelCount('relevant') должна возвратить 3;
//   функция vowelCount('achievement') должна возвратить 5;

function vowelCount(str) {

    const vowel_list = 'aeiouAEIOU';
    let vcount = 0;

    for(var x = 0; x < str.length ; x++) {
        if (vowel_list.indexOf(str[x]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}


it('The function "vowelCount" is created ', function () {
    expect(vowelCount).to.be.a('function');
});

it('The function returns the correct result for argument "hello"', function () {
    expect(vowelCount('hello')).eq(2);
});

it('The function returns the correct result for argument "hello"', function () {
    expect(vowelCount('relevant')).eq(3);
});

it('The function returns the correct result for argument "hello"', function () {
    expect(vowelCount('achievement')).eq(5);
});

it('The function returns the correct result for argument "hello"', function () {
    expect(vowelCount('achievement')).eq(5);
});

it('The function returns the correct result for argument "reformation"', function () {
    expect(vowelCount('reformation')).eq(5);
});

it('The function returns the correct result for argument "clarification"', function () {
    expect(vowelCount('clarification')).eq(6);
});

it('The function returns the correct result for argument "56843"', function () {
    expect(vowelCount('56843')).eq(0);
});

it('The function returns the correct result for argument ""', function () {
    expect(vowelCount('')).eq(0);
});

it('The function returns the correct result for argument "Hello students of PASV"', function () {
    expect(vowelCount('Hello students of PASV')).eq(6);
});

it('The function returns the correct result for argument "You have to work hard to become an IT specialist"', function () {
    expect(vowelCount('You have to work hard to become an IT specialist')).eq(17);
});





