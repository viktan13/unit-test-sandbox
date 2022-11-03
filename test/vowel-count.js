const {expect} = require("chai");


//   Подсчитать количество гласных в строке
// Напишите функцию vowel_count(str), которая принимает строку в качестве параметра и подсчитывает количество гласных в строке.
// Примеры:
//   функция vowel_count('hello') должна возвратить 2;
//   функция vowel_count('relevant') должна возвратить 3;
//   функция vowel_count('achievement') должна возвратить 5;

function vowel_count(str) {

    const vowel_list = 'aeiouAEIOU';
    let vcount = 0;

    for(var x = 0; x < str.length ; x++) {
        if (vowel_list.indexOf(str[x]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}


it('The function "vowel_count" is created ', function () {
    expect(vowel_count).to.be.a('function');
});

it('The function returns the correct result for argument "hello"', function () {
    expect(vowel_count('hello')).eq(2);
});

it('The function returns the correct result for argument "hello"', function () {
    expect(vowel_count('relevant')).eq(3);
});

it('The function returns the correct result for argument "hello"', function () {
    expect(vowel_count('achievement')).eq(5);
});

it('The function returns the correct result for argument "hello"', function () {
    expect(vowel_count('achievement')).eq(5);
});

it('The function returns the correct result for argument "reformation"', function () {
    expect(vowel_count('reformation')).eq(5);
});

it('The function returns the correct result for argument "clarification"', function () {
    expect(vowel_count('clarification')).eq(6);
});

it('The function returns the correct result for argument "56843"', function () {
    expect(vowel_count('56843')).eq(0);
});

it('The function returns the correct result for argument ""', function () {
    expect(vowel_count('')).eq(0);
});

it('The function returns the correct result for argument "Hello students of PASV"', function () {
    expect(vowel_count('Hello students of PASV')).eq(6);
});

it('The function returns the correct result for argument "You have to work hard to become an IT specialist"', function () {
    expect(vowel_count('You have to work hard to become an IT specialist')).eq(17);
});





