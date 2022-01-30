# antd 사용해 SNS 화면 만들기

## npm
redux-wrapper(**version 6**)
```
$ npm i next-redux-wrapper
$ npm i react-redux
$ npm i redux-devtools-extension
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

```js
import { reducer } from '../reducers';
import reducer from '../reducers';
```

## vsc eslint 빨간줄 해결

### (JSX attribute) style?: React.CSSProperties
```
'React' must be in scope when using JSXeslintreact/react-in-jsx-scope
(JSX attribute) style?: React.CSSProperties
```

```js
{
    "rules": {
      "react/react-in-jsx-scope": "off"
    }
}
```

### ts(6133)
```
'onSubmit'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.ts(6133)
'onSubmit' is assigned a value but never used.eslintno-unused-vars
```

모든 빨간줄을 표시하지 않음?
```js
{
    "javascript.validate.enable": false
}
```

## imagePaths error

Unhandled Runtime Error
TypeError: Cannot read properties of undefined (reading 'map')

Source

 ```
 components\PostForm.js (47:28) @ postForm

   45 | 
   46 |             <div>
> 47 |                 {imagePaths.map((val) => {
      |                            ^
   48 |                     <div key={val} style={{ display: 'inline-block' }}>
   49 |                         <img src={val} style={{ width: '200px' }} alt={val} />
   50 |                         <div>
  ```

## imageInput

Unhandled Runtime Error
TypeError: imageInput.current.click is not a function

Source
```
components\PostForm.js (23:27) @ eval

  21 | 
  22 |     const onClickImageUpload = useCallback(() => {
> 23 |         imageInput.current.click();
     |                           ^
  24 |     }, [imageInput.current]);
  25 | 
  26 |     return (
```