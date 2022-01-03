// 함수
var logText = function (text) {
    console.log(text);
    return text;
};
var str = logText('하잉');
var number = logText(3);
;
var obj = {
    value: 'hi',
    selected: true
};
// 타입 제한
var logTextLength = function (text) {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
};
logTextLength(['hi', 'abc']);
var logTextLength2 = function (text) {
    text.length;
    return text;
};
logTextLength2('10');
;
var getShoppingItemOption = function (itemOption) {
    return itemOption;
};
// error
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
