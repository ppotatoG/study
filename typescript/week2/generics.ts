// 함수
const logText = <T extends{}>(text : T) : T => {
    console.log(text);
    return text;
}

const str = logText<string>('하잉');
const number = logText<number>(3);

// 인터페이스
interface Dropdowon<T> {
    value : T;
    selected : boolean;
};

const obj : Dropdowon<string> = {
    value : 'hi',
    selected : true
};

// 타입 제한
const logTextLength = <T extends{}>(text : T[]) : T[] => {
    console.log(text.length);
    text.forEach(text => {
        console.log(text);
    })
    return text;
}

logTextLength<string>(['hi', 'abc']);

// 정의된 타입으로 타입 제한
interface LengthType {
    length : number;
}

const logTextLength2 = <T extends LengthType>(text : T) : T => {
    text.length;
    return text;
}

logTextLength2('10');

// keyof으로 타입 제한
interface ShoppingItem {
    name : string,
    price : number,
    stock : number
};

const getShoppingItemOption = <T extends keyof ShoppingItem>(itemOption : T) : T => {
    return itemOption;
}

// error
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption('name');
