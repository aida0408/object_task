// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
// function task1(array1,array2){
//     return array1.map((item, idx) => item + array2[idx])
// }
//
// console.log(task1([2,4,5], [2,4,5]))

// function task1(arr1, arr2){
//     return [arr1[0] + arr2[0], arr1[1] + arr2[1]]
// }
//
// console.log(task1([1, 1], [1, 1]))

//Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два

// function task2(array){
//     return array.map((item) => item * 2)
// }
//
// console.log(task2([2, 4, 7, 8]))

// Напишите функцию, которая принимает массив объектов с полем id. Например [[{id: '100'}, {id: 2}]] и возвращает массив этих id

// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <h1>{number}</h1>

// function task4(arr){
//     return arr.map((item) => `<h1>${item}</h1>`)
// }
//
// console.log(task4([1, 2]))
// console.log(task4(["Roma"]))

// const task4 = (array) => array.map((item) => `<h1>${item}</h1>`)
//
// console.log(task4([1, 2]))
// console.log(task4(["Roma"]))

// const task4 = (array) => array.map((item, idx) => `<h${idx + 1}>${item}</h${idx + 1}>`)
// console.log(task4([1,2]))
// console.log(task4(["Roma", "Dima", "Sasha"]))

// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// const task5 = (array) => {
//     return array.filter((item) => {
//         return item.length % 2 === 0
//     })
//
// }
// console.log(task5( ['ab','abc','abcd']))
// console.log(task5(['abc','abcde']))

// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка

// const task6 = (num) => num.map(num => num * 2).filter(num => num % 10 === 0)
//
//
// console.log(task6([1,2,3,7,10,5]))


//Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true

// function task7(str){
//     return str.filter((item) => item === true)
// }
// console.log(task7( [true,false,true,true]))
// console.log(task7( [true,false]))

// const task7 = str => str.filter((item) => item === true)
// console.log(task7( [true,false,true,true]))
// console.log(task7( [true,false]))

// Напишите функцию, которая принимает массив значений в т.ч и значения undefined и возвращает массив только без значений undefined
// function task8 (str) {
//     return str.map((item) => item === true, false)
//
// }
//
// console.log(task8[true, false, true,true, undefined, true, undefined])
// console.log(task8[undefined, true, undefined])

// let age = 88
// if (age >= 10 && age <= 20){
//     console.log(`Mne ${age} let`)
// }else if (age % 10 === 1){
//     console.log(`Mne ${age} god`)
// }else if (age % 10 >= 2 && age % 10 <= 4){
//     console.log(`Mne ${age} goda`)
// }else {
//     console.log(`Mne ${age} let`)
// }
// let num = '321'
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2])
// console.log(sum)