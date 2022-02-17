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
//
// const task3 = (array) => {
//     return array.reduce((acc, rec) => {
//         return acc.concat(rec.id)
//     },[])
//
// }
// console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]))
// console.log(task3([{id: true}]))
//
// const array = [34, 55]
// const value = 77
//
// console.log(array.concat(value))
// console.log([...array, value])

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

// const task7 = (array) => {
//     return array.filter((item) =>{
//         return item
//     })
// }
// console.log(task7( [true,false,true,true]))
// console.log(task7( [true,false]))

// const task7 = array => array.filter((item) => item)
// console.log(task7( [true,false,true,true]))
// console.log(task7( [true,false]))

// Напишите функцию, которая принимает массив значений в т.ч и значения undefined и возвращает массив только без значений undefined
// function task8 (array) {
//     return array.filter((item) => item !== undefined)
// }
//
// console.log(task8( [true, false, true,true, undefined, false, true, undefined]))
// console.log(task8( [undefined, true, undefined]))

// const task8 = array => array.filter((item) => item !== undefined)
// console.log(task8( [true, false, true,true, undefined, false, true, undefined]))
// console.log(task8( [undefined, true, undefined]))

// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
//
// function task9 (array){
//     return array.reduce((acc, rec) => {
//        return acc + rec
//     },0)
// }
//
// console.log(task9([1,2,3,4,5]))
// console.log(task9([2, 11, 5]))
//
// const exam = (array) => array.reduce((acc, rec) => acc + rec.length, 0)
// console.log(exam(['Ivan','Boris','Micheil','Zoya']))

// const task3 = (array) => {
//     return array.reduce((acc, rec) =>{
//         if (typeof rec.id === 'string'){
//             return [...acc, rec.id]
//         }
//         return acc
//     },[])
// }
// const task3 = (array) => {
//     return array.filter((item) => typeof item.id === 'string').map (item => item.id)
// }
//
// console.log(task3([{id:'Dasha'},{id:'Dima'},{id:'Misha'},{id:4},{id:true}]))

// const a = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
// const res = a.split(" ").filter((item) => {
//     return item.length < 6
// }).join(" ")
//
// console.log(res)

// const name = ['Roma', "Farhad", 'Aiganysh', 'Ayday', 'Dastan']
//
// const res = name.map((el) =>{
//     return el.length
// })
// console.log(res)

// const num2 = (array) => {
//     return array.filter((el, idx)=>{
//         return array.indexOf(el) === idx
//     })
// }
// console.log(num2([1,2,3,4,2,7,1]))

// Напишите функцию, которая принимает массив булевых значений и возвращает результат логического И над ними. Использовать reduce

// const task1 = array =>{

    // console.log("no")
//     return array.reduce((acc, item) =>{
//         if (acc [item] === undefined){
//             return {...acc, [item]: 1}
//         }
//         return {...acc,[item]: acc [item] + 1}
//
//     },{})
//
// }
// const task1 = array => {
//     return array.reduce((acc,item)=>{
//         if(acc [item] === undefined){
//             return {...acc,[item]: 1}
//         }
//         return {...acc, [item]: acc [item] +1}
//
//
//     },{})
// }
// console.log(task1(['a','b','c','b','c','a', 'a']))
// const task1 = array =>{
//     return array.reduce((acc, item)=>{
//         if(acc [item] === undefined){
//             return {...acc, [item]: 1}
//         }
//         return {...acc,[item]: acc [item] + 1}
//     },{})
//
// }
// console.log(task1(['a','b','c','b','c','a', 'a']))
// const task1 = (array1, array2) => {
//     return array1.filter((item) => array2.includes(item))
// }
// console.log(task1([1,2,3,4,3,5], [1,12,3,8,5]))








//Povtorenie

function task11(exam, project){
    if(exam > 90 || project >10){
        return 100
    }else if (exam > 75 && project >= 5){
        return 90
    }else if (exam >50 && project >= 2){
        return 75
    }return 0

}

console.log(task11(100, 12))
console.log(task11(99, 0))
console.log(task11(10, 15))
console.log(task11(85, 5))
console.log(task11(55, 3))
console.log(task11(55, 0))
console.log(task11(20, 2))
// function task10 (a, b, c, d){
//     return Math.min(a, b, c, d)
// }
//
// console.log(task10(12, 2, 35,5))

// function task9 (num){
//     return num.toString().length
// }
//
// console.log(task9(987))
//
// function task09 (num){
//     return String(num).length
// }
//
// console.log(task09(54))

// function task7 (num){
//     return Math.sqrt(num)
//
// }
//
// console.log(task7(9))

// function task6 (str){
//     return str[str.length-1]
// }
//
// console.log(task6('Hello everyone'))
// console.log(task6('Hello'))
// console.log(task6('Hello world'))



// function task5 (num){
//     return num % 5 === 0
// }
//
// console.log(task5(8))
// console.log(task5(25))
// function task4 (a, b){
//     if(a > b){
//         return `${a} bolshe ${b}`
//     }else if(a < b){
//         return `${a} menshe ${b}`
//     }return "oni ravny"
// }
//
// console.log(task4(7 , 8))
// console.log(task4(7 , 7))
// console.log(task4(7 , 6))

// function task3 (value){
//     return typeof value
// }
//
// console.log(task3("tramp"))
// console.log(task3("789"))
// console.log(task3(765))

// function square (num1, num2){
//     return num1 * num2
// }
//
// console.log(square(7, 3))



// let str = "lorem ipsum"
// if (str.includes("a")){
//     console.log('yes')
// }else{
//     console.log('no')
// }
//
// let str1 = 'IT Dubai'
// if(str1.includes('a')){
//     console.log('yes')
// }else{
//     console.log('no')
// }
//
// let str2 = "Moscow"
// if (str2.includes("a")){
//     console.log('yes')
// }else {
//     console.log('no')
// }
//
// let str3 = "Bishkek"
// if(str3.includes('k')){
//     console.log('yes')
// }else {
//     console.log('no')
// }
// let str4 = 'Tokmok'
// if(str4.includes('o')){
//     console.log('yes')
// }else{

// function pol (num){
//     return num * num
// }
//
// console.log(pol(5))
// console.log(pol(34))
// console.log(pol(44))
//



// function greeting (name){
//     return `Hello ${name}!`
//
// }
//
// console.log(greeting('Vera'))
// console.log(greeting('Fara'))
// console.log(greeting('Dima'))

// function checkNumber (num){
//     if (num > 0){
//         return 'positive'
//     }else if( num < 0 ){
//         return "negative"
//     }
// }
//
// console.log(checkNumber(8))
// console.log(checkNumber(-7))

// function checkSymbol(str){
//     if(str.includes("a")){
//         return 'yes'
//     }
//     return "no"
// }
//
// console.log(checkSymbol("Astana"))
// console.log(checkSymbol("Moskow"))
//
//



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

