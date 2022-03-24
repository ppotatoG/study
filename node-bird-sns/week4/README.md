# Redux 연동하기
> 더미데이터와 포스트폼 만들기 ~ 게시글 해시태그 링크로 만들기

## 강의 내용

### npm
```
$ npm i react-slick
```

### 정규식 Playground

[regexr.com](https://regexr.com/)

## 문제 

### 더미데이터 안그려짐

<details>
<summary>.Meta 추가</summary>

<div markdown="1">

```js
<Card
 // ...
/>

<Card.Meta
 // ...
/>
```

</div>
</details>


### Check the render method of `PostCard`.

댓글 아이콘 눌렀을 때 에러 메세지

<details>
<summary>import 변경</summary>

<div markdown="1">

아래 내용 주석처리하면 에러 X

아래 내용 중 문제 있는거임!
```js
<CommentForm post={post}/>
  <List
      header={`${post.Comments.length}의 댓글`}
      itemLayout="horizontal"
      dataSource={post.Comments}
      renderItem={(item) => {
          <li>
              <Comment 
                  author={item.User.nickname}
                  avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                  content={item.content}
              />
          </li>
      }}
  />
```

```js
import PropTypes from 'prop-types';

import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Popover } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined, List, Comment } from '@ant-design/icons';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import Avatar from 'antd/lib/avatar/avatar';
```

```js
import PropTypes from 'prop-types';

import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined} from '@ant-design/icons';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
```

</div>
</details>

### 사진 더보기 클릭 시 이벤트 없음

<details>
<summary>괄호 추가</summary>

<div markdown="1">

```js
const ImagesZoom = ( images, onClose ) => {
```

```js
const ImagesZoom = ({ images, onClose }) => {
```

</div>
</details>