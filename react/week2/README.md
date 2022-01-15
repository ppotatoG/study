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

```
npm i next@9
```

```
npm ERR! Cannot read properties of null (reading 'pickAlgorithm')

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\User\AppData\Local\npm-cache\_logs\2022-01-15T08_01_14_535Z-debug-0.log
```

```
npm cache clear --force
```