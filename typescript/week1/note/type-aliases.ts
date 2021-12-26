type _Person = {
    name : string,
    age : number
}

let sohyun : _Person = {
    name : '소현',
    age : 30
}

type MyString = string;
let str : MyString = 'hello';

type Todo = {id : string; title : string; done : boolean;};
function getTodo(todo : Todo) {}