import { IpcNetConnectOpts } from "net"

export default interface IPerson {
    name: string
    age: number
}

// let good: IPerson = {name : 'Jack', age : 23 }

// let bad1: IPerson = {name : 'Jack'}    // age 속성이 없으므로 오류
// let bad2: IPerson = {age : 23 }        // name 속성이 없으므로 오류
// let bad3: IPerson = {}                 // name과 age속성이 없으므로 오류
// let bad4: IPerson = {name : 'Jack', age : 23, etc : true } // etc 속성이 있어서 오류