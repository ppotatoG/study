# antd 사용해 SNS 화면 만들기

## npm
redux-wrapper(**version 6**)
```
$ npm i next-redux-wrapper
$ npm i react-redux
```

## rootReducer

(이전상태, 액션) => 다음상태

## Expected the root reducer to be a function. Instead, received: 'undefined'
Server Error
Error: Expected the root reducer to be a function. Instead, received: 'undefined'

This error happened while generating the page. Any console logs will be displayed in the terminal window.
Source
store\configureStore.js (7:30) @ configureStore

```
   5 | 
   6 | const configureStore = () => {
>  7 |     const store = createStore(reducer);
     |                              ^
   8 |     return store;
   9 | };
  10 | 
```
Show collapsed frames