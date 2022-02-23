# 백엔드 노드 서버 구축하기
> 노드로 서버 구동하기 ~ 노드로 서버 구동하기

## 강의 내용

### npm
```
$ npm init
$ npm i express
```

### node 실행하기

기존 front/ `npm run dev`

`node 파일명`

### http://localhost:3065/api/post

```js
app.get('/api/post', (req, res) => {
    res.end('hello api/post')
})
```

### get

```js
app.get // 가져오다
app.post // 생성하다
app.put // 전체 수정
app.delete // 제거
app.patch // 부분 수정
app.options // 찔러보기(요청 보내면 받아줄거야?;)
app.head // 헤더만 가져보기(헤더/바디(본문))
```

### require

프론트에서는 웹팩이 `import`, `export`를 `require`, `module.exports`로 바꿔준다

node는 웹팩 사용 X

```js
// a
import PropTypes from 'prop-types';  

const CommentForm = () => {
  // code ...
};

// b
export default CommentForm;
```

```js
// a
const express = require('express');

const router = express.Router();

// b
module.exports = router;
```

### [7.2 MySQL 설치하기](https://thebook.io/080229/ch07/02/)