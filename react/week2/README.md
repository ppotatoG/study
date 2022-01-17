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

### [Cannot read properties of null (reading 'pickAlgorithm')](https://stackoverflow.com/questions/69567381/getting-cannot-read-property-pickalgorithm-of-null-error-in-react-native)

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

### npm 

```
npm i antd styled-components @ant-design/icons
```

[ant.design](https://ant.design/)

### _app 

페이지들 중 공통으로 사용되는것들을.. 처리... 일괄?? 공통사용??

### expected a string or class/function

```
Server Error
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
```

[expected a string or class/function 리액트 에러](https://velog.io/@sunysty/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%97%90%EB%9F%AC)

### `_app.js` 전부 다 공통

### `AppLayout` 일부만 공통

### `useState` is not defined
![Server Error](../img/220117.png)  