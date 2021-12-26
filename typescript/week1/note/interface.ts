interface User {
    age : number,
    name : string
};

// 변수에 인터페이스 활용
const seho : User = {
    age : 33,
    name : '세호'
};

// 함수에 인터페이스 활용
function getUser(user : User) {
    console.log(user);
};

const capt = {
    name : '캡틴',
    age : 100
};

getUser(capt); 

// 함수의 스펙에 인터페이스 활용
interface SumFuntion {
    (a : number, b : number) : number;
};

let sum : SumFuntion;
sum = function(a : number, b : number) : number {
    return a + b;
};

// 인덱싱
interface StringArray {
    [index : number] : string;
};

let arr : StringArray = ['a', 'b', 'c', 'd', 'e'];

// 딕셔너리 패턴
interface StringRegexDixtionary {
    [key : string] : RegExp;
};

let obj : StringRegexDixtionary = {
    cssFile : /\.css$/,
    jsFile : /\.js$/
};

// 인터페이스 확장
interface Person {
    name : string,
    age : number;
};

interface Developer extends Person{
    language : string;
}

let captain : Developer = {
    language: 'ts',
    age : 100,
    name : '캡틴'
}