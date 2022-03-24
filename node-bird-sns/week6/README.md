# Redux-saga 연동하기
> take, take 시리즈, throttle 알아보기 ~ take, take 시리즈, throttle 알아보기

## 강의 내용

### npm
```
$ npm i -D babel-eslint eslint-config-airbnb eslint-plugin-import
$ npm i -D eslint-plugin-react-hooks
$ npm i -D eslint-plugin-jsx-a11y
$ npm i shortid
$ npm i immer
```

### `while take` 동기

### `takeEvery` 비동기

### `takeLatest` 마지막

동시에 로딩중일 때 마지막것만 적용

응답을 취소? 뒷단에서 처리를 해줘야한다?

중복된 데이터에 대한 처리를 서버쪽에서 뭐.....

### `takeLeading` 처음

### 쓰로틀링

마시막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록

### 디바운싱

연이어 호출되는 함수들 중 마지막 함수(또는 제일 처음)만 호출하도록


### saga가 호출해서 필요 없다?

SuccessAction

FailureAction

### data flow

### Expected indentation of 2 spaces but found 4.eslint

```
$ npm install --save-dev eslint-config-prettier
```

```
"extends": [
    "airbnb",
    "some-other-config-you-use", 
    "prettier" 
  ],
```

[[ESLint & Prettier] expected indentation of 2 spaces but found 4.](https://interacting.tistory.com/143)

### npm audit fix --force?

```
PS D:\작업\sohyun\NodeBirdSNS\front> npm i faker
up to date, audited 523 packages in 2s
81 packages are looking for funding
  run `npm fund` for details
4 vulnerabilities (2 moderate, 2 high)
To address issues that do not require attention, run:
  npm audit fix
To address all issues (including breaking changes), run:
  npm audit fix --force
Run `npm audit` for details.
```

### antd

```js
import 'antd/dist/antd.css';
```
