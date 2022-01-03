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