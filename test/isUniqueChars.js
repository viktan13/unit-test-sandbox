const {expect} = require('chai');

//   Уникальны ли символы в строке.
// Создайте функцию isUniqueChars которая принимает аргументом строку str  и возвращает true если строка
// содержит только уникальные символы, или false усли в строке есть повторяющиеся элементы.
// Примеры:
//   функция isUniqueChars('hero') должна возвратить true;
//   функция isUniqueChars('sword') должна возвратить true;
//   функция isUniqueChars('We will do it') должна возвратить false;
//   функция isUniqueChars('tradition') должна возвратить false;
//   функция isUniqueChars('hero is at') должна возвратить false (так как есть 2 пробела);
//   функция isUniqueChars('hi Holy') должна возвратить true (так как 'h' и 'H' разные символы);

function isUniqueChars(str) {
    const codes = new Array(128);
    for (let i = 0; i < str.length; i++) {
        const ind = str.charCodeAt(i);
        if (codes[ind]) return false;
        else codes[ind] = true;
    }
    return true;
}

it('The function "isUniqueChars" is created', function () {
    expect(isUniqueChars).to.be.a('function');
});

it('The function returns the correct result for argument "hero"', function () {
    expect(isUniqueChars('hero')).eq(true);
});

it('The function returns the correct result for argument "sword"', function () {
    expect(isUniqueChars('sword')).eq(true);
});

it('The function returns the correct result for argument "We will do it"', function () {
    expect(isUniqueChars('We will do it')).eq(false);
});

it('The function returns the correct result for argument "tradition"', function () {
    expect(isUniqueChars('tradition')).eq(false);
});

it('The function returns the correct result for argument "hero is at"', function () {
    expect(isUniqueChars('hero is at')).eq(false);
});

it('The function returns the correct result for argument "recursion"', function () {
    expect(isUniqueChars('recursion')).eq(false);
});

it('The function returns the correct result for argument "want"', function () {
    expect(isUniqueChars('want')).eq(true);
});

it('The function returns the correct result for argument "restack"', function () {
    expect(isUniqueChars('restack')).eq(true);
});

it('The function returns the correct result for an empty string', function () {
    expect(isUniqueChars('')).eq(true);
});

it('The function returns the correct result for argument "Hi!!!"', function () {
    expect(isUniqueChars('Hi!!!')).eq(false);
});

it('The function returns the correct result for argument "hi Holy"', function () {
    expect(isUniqueChars('hi Holy')).eq(true);
});