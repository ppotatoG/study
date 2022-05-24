# 2주차
> 15 상태 끌어올리기 ~ 24 github pages 로 1차 배포

## uesState 

```js
const [counter, setCounter] = React.useState(1);
// [사용할 값(변수?), 구성되어 변경될 값(함수?] = (초기값)
```

## js [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### 구문
> arr.map(callback(currentValue[, index[, array]])[, thisArg])

### 매개변수
`callback`

새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.

`currentValue`

처리할 현재 요소.

`index Optional`

처리할 현재 요소의 인덱스.

`array Optional`

map()을 호출한 배열.

`thisArg Optional`

callback을 실행할 때 this로 사용되는 값

### for, foreach 등 중복문과 다른 점

1. `map`은 원본배열 변경 X
2. 배열의 모든값에 대해 특성 수행 필요할 경우 `map`이 효율적

[[JavaScript] map,forEach 자바스크립트
출처: https://ipex.tistory.com/entry/JavaScript-mapforEachreduce-자바스크립트 [깍돌이:티스토리]](https://ipex.tistory.com/entry/JavaScript-mapforEachreduce-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)

## [구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[JS | 유용한 ES6 문법! 구조 분해 할당 & 펼침 연산자](https://velog.io/@imzzuu/JS)

## [EventTarget.addEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)

## [toUpperCase()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

[text-transform](https://www.codingfactory.net/10656)