let person: object = {name: 'Jack', age: 32}
// console.log(person.name)  // error TS2339: Property 'name' does not exist on type 'object'.

console.log((<{name: string}>person).name)

