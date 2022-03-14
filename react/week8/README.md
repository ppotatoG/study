# 백엔드 노드 서버 구축하기
> 회원가입 구현하기 ~ 로그인 문제 해결하기

## 강의 내용

### npm
```
$ npm i bcrypt
$ npm i cors
$ npm i passport
$ npm i passport-local
$ npm i express-session
$ npm i cookie-parser
$ npm i dotenv
```

### error

200 성공
300 리다이렉트
400 클라이언트 에러
500 서버 에러

### cors

```js
res.setHeader('Accese-Control-Allow-Origin', '*');
```

### db include

```js
attributes: ['id', 'nickname', 'email']
```

```js
attributes: {
    exclude: ['password']
},
```