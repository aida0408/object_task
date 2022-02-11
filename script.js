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
const task5 = (array) => {

}
console.log(task5([abcd, ads, asdff,ab]))
console.log(task5([abc, ad, asdf,ab]))


// const task6 = (array) => {
//     return array.filter((item) => {
//         return item.length
//     })
// }



// function task7 (num){
//     return num.map(num => num * 2).filter(num => num % 10 === 0)
// }
//
// console.log( task7([1,2,3,7,10,5]))