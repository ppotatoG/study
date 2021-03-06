# Hello, Next.js

## 강의 내용 

### npm 

```
npm init
npm i next
npm i prop-types
npm i eslint -D
npm i eslint-plugin-import -D
npm i eslint-plugin-react-hooks -D
```

## 문제

### 같은 커맨드, 다른 dependencies

<details>
<summary>2주차에 node_modules 전부 지우고 다시 install</summary>

<div markdown="1">

```json
{
  "name": "react-nodebird-front",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "next"
  },
  "author": "sohyun",
  "license": "ISC",
  "dependencies": {
    "9": "^0.0.1",
    "next": "^12.0.7"
  }
}
```

```json
{
  "name": "react-nodebird-front",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "next"
  },
  "author": "sohyun",
  "license": "ISC",
  "dependencies": {
    "next": "^9.4.4"
  }
}
```

</div>

</details>

### npm prop-types

<details>
<summary>오타 확인 후 해결 ( •́ ̯•̀ )</summary>

<div markdown="1">

```
PS D:\2021\NodeBirdSNS\front> npm i prop-types
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: react-nodebird-front@1.0.0
npm ERR! Found: next@12.0.7
npm ERR! node_modules/next
npm ERR!   next@"^9.4.4" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! next@"^9.4.4" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: react@16.14.0
npm ERR! node_modules/react
npm ERR!   peer react@"^16.6.0" from next@9.5.5
npm ERR!   node_modules/next
npm ERR!     next@"^9.4.4" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\User\AppData\Local\npm-cache\eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\User\AppData\Local\npm-cache\_logs\2022-01-10T14_00_24_612Z-debug-0.log
```
```
$ npm install --save prop-types
```
```
$ npm prop-types --force
```
</div>
</details>


---

### 컴포넌트 스타일링

scss와 BEM을 활용한 react component style

[SASS BEM](https://nykim.work/15)

[다양한 방식의 리액트 컴포넌트 스타일링 방식](https://velog.io/@velopert/react-component-styling)

## 나중에 알아볼 내용

### server 

npm server, jekyll server 실행 시 같은 주소?

```
$ bundle install
$ bundle exec jekyll serve
```