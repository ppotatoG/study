# week1

## 0. npm VS yarn

~~저는 에러처리가 너무 힘들어 곧 `yarn`으로 갈아탈 예정입니다ㅠㅠ~~

[npm과 yarn](https://velog.io/@kysung95/%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D-npm%EA%B3%BC-yarn)

[yarn, npm 혼용](https://okky.kr/articles/874006)

## 1. gatsby install
```
$ npm install -g gatsby-cli
```

## 2. 테마 선택
[Gatsby Starter Library](https://www.gatsbyjs.com/starters/)
[본인 사용 테마](https://www.gatsbyjs.com/starters/bagseye/koop-blog)

## 3. gatsby 실행
```
// gatsby 실행 
$ gatsby develop
```

## 4. git remote 연결

> git repo 생성 후 gatsby 설치시 최상위로 깔리지 않는 문제

다운로드 후 gatsby 폴더 이름을 `깃닉네임.github.io`로 변경 후 remote 변경

```
$ git remote add origin https://github.com/[사용자이름]/[repository이름].git
```
[Git 원격 저장소 연결하기](https://velog.io/@jeongm/git-remote-repository-connect)

## 5. build branch 생성

1. 형상관리를 위한 (history 확인 등) branch `master, main, ...`;
2. 배포를 위한 build branch `deploy`;

```
// 브랜치 목록 확인
$ git branch -v

// deploy 브랜치 생성
$ git branch deploy
```

## 6. build
```
$ npm i gh-pages
$ npm run deploy
```