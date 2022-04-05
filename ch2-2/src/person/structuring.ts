import {ICompany, IPerson} from "./IPerson_ICompany"

let jack: IPerson = {name: 'Jack', age: 32},
    jane: IPerson = {name: 'Jane', age:32}

console.log(jack)
console.log(jane)


let apple: ICompany = {name: 'Apple Computer, Inc', age: 43},
    ms: ICompany = {name: 'Microsoft', age: 44}

console.log(apple)
console.log(ms)
