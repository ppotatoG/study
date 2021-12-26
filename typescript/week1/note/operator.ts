function logMessage(value : string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    } 
    if(typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);


interface _Developer {
    name : string;
    skill : string;
};

interface Person {
    name : string;
    age : number;
};

// function askSomeone(someone : _Developer | Person) {
//     // someone.name;
// }
// askSomeone({name : '디벨로퍼', skill : '웹 개발'});
// askSomeone({name : '캡틴', age : 100});


function askSomeone(someone : _Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}

askSomeone({name : '디벨로퍼', skill : '웹 개발', age : 34});