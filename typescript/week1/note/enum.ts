enum shoes {
    Nike = '나이키',
    Adidas = '아디다스'
};

let myShoes = shoes.Nike;

console.log(myShoes);


// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer : Answer) {
    if(answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if(answer === Answer.No){
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);