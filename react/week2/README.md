# antd 사용해 SNS 화면 만들기

## 1주차 에러 해결

### npm downgrade

node v12.17.0
- v16.13.1

**npm 6.14.5**
- 8.3.0
```
npm install -g npm@version
npm install -g npm@6.14.5
```

```
npm ERR! code EINVAL
npm ERR! EINVAL: invalid argument, read

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\User\AppData\Roaming\npm-cache\_logs\2022-01-15T07_51_58_087Z-debug.log
```

## [Cannot read properties of null (reading 'pickAlgorithm')](https://stackoverflow.com/questions/69567381/getting-cannot-read-property-pickalgorithm-of-null-error-in-react-native)

`npm i next@9`시 error
```
npm i next@9
```

`npm ERR! Cannot read properties of null (reading 'pickAlgorithm')`

// pickAlgorithm에서 속성을 읽을 수 없다?.....

`A complete log of this run can be found in`

// 뒤로 오는 경로에서 해당 에러를 찾을 수 있다??

```
npm ERR! Cannot read properties of null (reading 'pickAlgorithm')

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\User\AppData\Local\npm-cache\_logs\2022-01-15T08_01_14_535Z-debug-0.log
```

캐시 지우는 커맨드?
```
npm cache clear --force
```

--- 

## npm 

```
npm i antd styled-components @ant-design/icons
```

[ant.design](https://ant.design/)

## _app 

페이지들 중 공통으로 사용되는것들을.. 처리... 일괄?? 공통사용??

## expected a string or class/function

```
Server Error
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
```

[expected a string or class/function 리액트 에러](https://velog.io/@sunysty/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%97%90%EB%9F%AC)

### `_app.js` 전부 다 공통

### `AppLayout` 일부만 공통

## `useState` is not defined
![Server Error](../img/220117.png)  

import useState 로 해결

```
import React, {useState, useCallback, useMemo} from 'react';
```

## TypeError: Cannot read properties of undefined (reading 'REACT_APP_SC_ATTR')

[인프런 질문하기](https://www.inflearn.com/questions/406378?re_comment_id=162512)


이거 해도 안됨

```js
const SearchInput = styled(Input.Search)`
    verticalAlign: 'middle';
`;
```
```js
const SearchInput = styled(Input.Search)`
   vertical-align: middle;
`;
```

`styled-components`랑 연관된거 싹 다 지우니까 돌아감


### 1. styled 형식 변경, 에러 그대로

### 2. json 다른사람걸로 다시 install했는데 여전함

### 3. 띄어쓰기에 따라 에러 문구가 달라짐?
- json "styled-components": "^5.2.0" 버전 맞추니까 에러 문구 동일해짐....??

### 4. npm add -D babel-plugin-styled-components?

[next.js styled-componsnts 스타일 적용 전에 렌더되는 에러 해결법](https://kyounghwan01.github.io/blog/React/next/styled-components-render-error/)


## 함수안에 파라미터 넘기기

```js
const LoginForm = ({setIsLoggedIn}) => {
    // code
}
```

```js
const LoginForm = (setIsLoggedIn) => {
    // code
}
```

## 외워야 할 것

1. SSR VS CSR
2. NEXT 동작 원리
3. 코드 스플리팅 흐름(데이터, 요청 흐름)

### Failed to compile

```
./pages/signup.js
Error: error: Duplicate binding
  
   |
17 |     const onChangePasswordCheck = useCallback((e) => {
   |           ^^^^^^^^^^^^^^^^^^^^^
   |
note: onChangePasswordCheck was declared at here
  
   |
15 |     const [passwordCheck, onChangePasswordCheck] = useState('');
   |                           ^^^^^^^^^^^^^^
```
This error occurred during the build process and can only be dismissed by fixing the error.