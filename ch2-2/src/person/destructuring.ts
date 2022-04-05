import {IPerson} from "./IPerson_ICompany"

let jack: IPerson = {name: 'Jack', age: 32}

let {name, age} = jack

console.log(`name: ${name}, age : ${age}`)


// 순서가 이상하면 어떻게 될까? => 순서상관없음!
// let {age, name} = jack

// console.log(`age : ${age}, name: ${name}`)


// 비구조화할 때 변수명이 IPerson에 있는 속성과 다르다면? => 오류남 "'IPerson' 형식에 'names' 속성이 없습니다.ts(2339)"
// let {names, age} = jack
// console.log(`age : ${age}, names: ${names}`)
