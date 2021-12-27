let todoItems = [
    {id: 0, title: '역량평가 작성', done: false},
    {id: 1, title: '영스타 모바일 이벤트 페이지 이전', done: false},
    {id: 2, title: '개발3팀 주간업무 보드글 작성', done: false},
    {id: 3, title: '1월 연차 사용 전결', done: false},
    {id: 4, title: '변호사 신규 이벤트 페이지', done: true},
    {id: 5, title: '중국어 메인 개편', done: true},
];

const addList = (item) => {
    let className;
    let status;
    
    if(item.done === false) {
      className = 'wrap_box';
      status = 'done'
    }
    if(item.done === true) {
        className = 'wrap_box-done';
        status = 'todo'
    }
    
    let parentEl = document.querySelector(`.${className}`);
  
    // list > i
    const i = document.createElement('i');
    i.className = `fas fa-check ${className}__ico`
      
    // list > p
    const p = document.createElement('p');
    p.className = `${className}__text`
    p.innerText = item.title;
  
    // list > button
    const button = document.createElement('button');
    button.className = `${className}__button`
    button.innerText = status;
  
    
    // list
    const li = document.createElement('li');
    li.className = `${className}__list`
    li.appendChild(i);
    li.appendChild(p);
    li.appendChild(button);
  
    parentEl.appendChild(li);
}

(() => {
    todoItems.forEach((item) => {
        addList(item)
    })
})()

window.addEventListener('click', (e) => {
    // 타겟이 버튼일 떄
    if(e.target.nodeName === 'BUTTON') {
        // 버튼이 눌린 앨리먼트의 타이틀
        const title = e.target.previousSibling.innerText;

        // title 갖고있는 배열 내 객체
        const item = todoItems.find(val => val.title === title);

        // item의 done을 변경
        item.done = item.done === true ? false : true;

        // removeChild(item);
        const itemParent = e.target.parentNode.parentNode;
        const itemEl = e.target.parentNode;

        itemParent.removeChild(itemEl);

        addList(item);
    }
})