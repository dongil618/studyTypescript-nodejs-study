// 선택 속성 구문 : 있어도되고 없어도 되는 속성을 만들고 싶을때
// 사용법은 콜론(:) 앞쪽에 물음표(?)를 붙여줌.

interface IPerson2 {
    name: string
    age: number
    etc?: boolean
}


let good1:IPerson2 = {name:'Jack', age:32}
let good2:IPerson2 = {name:'Jane', age:25, etc:true}