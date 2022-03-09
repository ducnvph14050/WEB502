//vd1:
//function sum(a: number, b:number){
//   return a+b;
//}
//const result = sum(10, 20)
//console.log(result);
//vd2:
// let number1: number = 5;
// let number2: number = 2.8;
// let phrase: string = 'Result is';
// let permit: boolean = true;

// const result = number1 + number2;
// if (permit) {
//     console.log(phrase +  result);
// } else{
//     console.log('Not show result');
// }
//vd3:
type TPerson = {
    id: number;
    name: string;
    age: number;
    status?: boolean;
}
const person: TPerson = {
    id: 1,
    name: "Duc",
    age: 21
}
const persons: TPerson[] = [
    {id: 1, name:"Duc", age:21,status:true},
    {id: 2, name:"Duc", age:20,status:true},
]
console.log(persons);


