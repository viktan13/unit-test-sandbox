const {expect} = require('chai');

// Преобразование суммы в монеты.
//     Напишите функцию amountCoins для преобразования суммы в монеты.
//
//     Пример функции : amountCoins(96, [25, 10, 5, 2,1])
//
// Здесь 96 - сумма, а 25, 10, 5, 2, 1 - монеты.
//
//     Вывод : [25,25,25,10,10,1]

function amountCoins(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            let left = (amount - coins[0]);
            return [coins[0]].concat(amountCoins(left, coins));
        } else {
            coins.shift();
            return amountCoins(amount, coins);
        }
    }
}



it('The function "amount_coins" is created', function () {
    expect(amountCoins).to.be.a('function');
});

it('The function returns the correct result for arguments  96, [25, 10, 5, 2,1]', function () {
    expect(amountCoins(96, [25, 10, 5, 2,1])).eql([ 25, 25, 25, 10, 10, 1 ])
});

it('The function returns the correct result for arguments  96, [25, 10, 5, 2,1]', function () {
    expect(amountCoins(82, [25, 10, 5, 2,1])).eql([ 25, 25, 25, 5, 2 ])
});

it('The function returns the correct result for arguments  96, [25, 10, 5, 2,1]', function () {
    expect(amountCoins(42, [25, 10, 5, 2,1])).eql([ 25, 10, 5, 2 ])
});

it('The function returns the correct result for arguments  23, [25, 10, 5, 1]', function () {
    expect(amountCoins(23, [25, 10, 5, 1])).eql([ 10, 10, 1, 1, 1 ])
});

it('The function returns the correct result for arguments  58, [25, 10, 5, 1]', function () {
    expect(amountCoins(58, [25, 10, 5, 1])).eql([ 25, 25, 5, 1, 1, 1 ])
});

it('The function returns the correct result for arguments  1, [25, 10, 5, 1]', function () {
    expect(amountCoins(1, [25, 10, 5, 1])).eql([ 1 ])
});

it('The function returns the correct result for arguments  0, [25, 10, 5, 1]', function () {
    expect(amountCoins(0, [25, 10, 5, 1])).eql([])
});

it('The function returns the correct result for arguments  0, []', function () {
    expect(amountCoins(0, [])).eql([])
});;