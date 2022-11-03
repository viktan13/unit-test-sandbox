const {expect} = require('chai');

//
// Найти элементы массива, которые больше указанного числа
// Напишите функцию biggerElements, которая принимает массив чисел и число в качестве аргументов и возвращает элементы массива,
//     которые больше указанного числа.
// Примеры:
//   функция biggerElements([14, 45, 4, 31, 64, 10], 18) должна возвратить [45,31,64];
//   функция biggerElements([14, 9, 4, 18, 65, 12, 33, 25], 25) должна возвратить [65,33];
//   функция biggerElements([11, 25, 13, 18, 78, 12, 41, 25, 16, 88, 92, 33], 12) должна возвратить [25, 13, 18, 78,41, 25, 16, 88, 92, 33];
//   функция biggerElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 10) должна возвратить [];

function biggerElements(arr, n){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > n) res.push(arr[i]);
    }
    return res;
}

it('The function "biggerElements" is created', function () {
    expect(biggerElements).to.be.a('function');
});

it('The function returns the correct result for arguments ([14, 45, 4, 31, 64, 10], 18)', function () {
    expect(biggerElements([14, 45, 4, 31, 64, 10], 18)).eql([45,31,64]);
});


it('The function returns the correct result for arguments ([18, 68, 4, 31, 53, 81], 70)', function () {
    expect(biggerElements([18, 68, 4, 31, 53, 81], 70)).eql([81]);
});

it('The function returns the correct result for arguments ([14, 9, 4, 18, 65, 12, 33, 25], 25)', function () {
    expect(biggerElements([14, 9, 4, 18, 65, 12, 33, 25], 25)).eql([65,33]);
});

it('The function returns the correct result for arguments ([11, 25, 13, 18, 78, 12, 41, 25, 16, 88, 92, 33], 12)', function () {
    expect(biggerElements([11, 25, 13, 18, 78, 12, 41, 25, 16, 88, 92, 33], 12)).eql([25, 13, 18, 78,41, 25, 16, 88, 92, 33]);
});

it('The function returns the correct result for arguments ([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)', function () {
    expect(biggerElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).eql([6, 7, 8, 9]);
});

it('The function returns the correct result for arguments ([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)', function () {
    expect(biggerElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).eql([]);
});

it('The function returns the correct result for arguments ([14, 9, 4, 18, 65, 12, 33, 25], 70)', function () {
    expect(biggerElements([14, 9, 4, 18, 65, 12, 33, 25], 70)).eql([]);
});