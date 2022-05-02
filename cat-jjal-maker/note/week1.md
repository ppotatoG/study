# 1주차
> ~ 14 useState로 상태 만들기

## react 시작하기

기존 알던 방법

```js
npx create-react-app `my-app(react 프로젝트 이름)`
```

- 리액트 동그라미가 빙글빙글 돌아가는 페이지 생성
- 필요 없는 파일, 소스를 삭제하는게 좀 오래걸림(번거로움)
- 삭제 하는 과정에서 마주치는 오류를 통해 대강 어떻게 돌아가는지 파악 가능

새로 알게된 내용

```html
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script src="like_button.js"></script>
```
```js
// ... 복사했던 스타터 코드 ...

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
```

- npx creat하는 시간, node_modules 다운받는 시간 생각하면 훨씬 빠름
- 바벨, node서버 실행 등 생각하면 번거로움
- 아마 간단하게 돌릴 때, 기초 시작할 때 사용하면 좋을 듯