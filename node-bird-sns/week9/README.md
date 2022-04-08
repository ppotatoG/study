## JSX(JavaScript XML)

### boxs
```js
const boxs = [
	{'data-sa': 'fade'},
	{'data-sa': 'from-right'},
	{'data-sa': 'from-top'},
	{'data-sa': 'from-bottom'},
	{'data-sa': 'from-left'},
	{'data-sa': 'flip-right'},
	{'data-sa': 'flip-top'},
	{'data-sa': 'flip-bottom'},
	{'data-sa': 'flip-left'},
	{'data-sa': 'scale'},
	{
		'data-sa': 'from-top',
		'data-sa-duration': '2500'
	},
	{
		'data-sa': 'from-bottom',
		'data-sa-delay': '1000'
	},
	{
		'data-sa': 'flip-left',
		'data-sa-once': 'false',
		'data-sa-offset': '50vw'
	},
	{
		'data-sa': 'scale',
		'data-sa-offset': '500',
		'data-sa-duration': '5000'
	},
	{
		'data-sa': 'fade',
		'data-sa-duration': '1500',
		'data-sa-delay': '500'
	},
];
```

### html
```html
<section>
    <div class="box show" data-sa="from-left">
        <pre>
            data-sa="from-left"<br>
        </pre>
    </div>
    
    <div class="box" data-sa="from-right">
        <pre>
            data-sa="from-right"<br>
        </pre>
    </div>
    
    <div class="box" data-sa="from-top">
        <pre>
            data-sa="from-top"<br>
        </pre>
    </div>
    
    <div class="box" data-sa="from-top" data-sa-duration="2500">
        <pre>
            data-sa="from-top"<br>
            data-saDuration="2500"<br>
        </pre>
    </div>

    <div class="box" data-sa="from-bottom" data-sa-delay="1000">
        <pre>
            data-sa="from-bottom"<br>
            data-saDelay="1000"<br>
        </pre>
    </div>
    
    <div class="box" data-sa="from-left" data-sa-once="false" data-sa-offset="50vw">
        <pre>
            data-sa="from-left"<br>
            data-saOnce="false"<br>
            data-saOffset="50vw"<br>
        </pre>
    </div>
    
    <div class="box" data-sa="from-right" data-sa-offset="500" data-sa-duration="5000">
        <pre>
            data-sa="from-right"<br>
            data-saOffset="500"<br>
            data-saDuration="5000"<br>
        </pre>
    </div>
    
    <div data-sa="flip-bottom" class="box" data-sa-delay="500" data-sa-duration="500">
        <pre>
            data-sa="flip-bottom"<br>
            data-saDelay="500"<br>
            data-saDuration="500"<br>
        </pre>
    </div>

</section>
```

### vanilla js
```js
boxData.forEach((data) => {
    const boxDataLists = Object.entries({...data});
    const div = document.createElement('div');
    div.classList.add('box');

    boxDataLists.map((boxDataList) => {
        let dataName = boxDataList[0].slice(5);
        if((/-/).test(dataName)) {
            dataName = dataName.split('-');
            dataName = dataName[0] + dataName[1][0].toUpperCase() + dataName[1].slice(1);
        }

        const dataValue = boxDataList[1];

        div.dataset[dataName] = dataValue;
    })
    
    const pre = document.createElement('pre');
    boxDataLists.map((boxDataList) => {
        pre.innerHTML += `${boxDataList[0]}="${boxDataList[1]}"\n`;
    })
    
    div.appendChild(pre);

    boxWrap.appendChild(div);
});
```

### JSX
```js
const box = boxs.map((box, boxIdx) => {
	return (		
		<div  
			className="box" 
			key={boxIdx}
			{...box}
		>
			<pre>
				{
					Object.entries(box).map((val) => {
						return `${val[0]}=${val[1]}\n`
					})
				}
			</pre>
		</div>
	)
});

return (
	<div className="contents">
		<section>
			{box}
		</section>
	</div>
);
```

## 번들링(Bundling)

여러 개로 흩어져 있는 파일들을 `압축`, `난독화` 등을 하여 `하나의 파일로 모아`주는 작업. 

### [webpack](https://www.npmjs.com/package/webpack)

### [rollup](https://www.npmjs.com/package/rollup)

![JavaScript 번들러로 본 조선시대 붕당의 이해](https://yozm.wishket.com/media/news/1261/image001.png)

## 트렌스파일러(Transpiler)

언어 대 언어로 `최신 문법을 레거시 문법`으로 다시 써주어 `구형 디바이스나 브라우저에서도 작동`을 할 수 있게끔 해주는 프로그램

### [Babel](https://babeljs.io/)

트렌스파일러계의 1대장으로 `제일 오래된 편`, `점유율도 높고 다른 번들러들과의 호환성도 높`음

최근 `JS 프레임워크들은 Babel을 내장하거나 기본으로 지원`하는 경우가 많다.

## 빌드(Build)