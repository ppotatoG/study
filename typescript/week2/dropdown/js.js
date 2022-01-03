;
var emails = [
    {
        value: 'naver.com',
        selected: true
    },
    {
        value: 'gmail.com',
        selected: false
    },
    {
        value: 'hanmail.net',
        selected: false
    }
];
var products = [
    {
        value: 1,
        selected: true
    },
    {
        value: 2,
        selected: false
    },
    {
        value: 3,
        selected: false
    }
];
emails.forEach(function (email) {
    var item = creatDropdownItem(email);
    var selectTag = document.querySelector('#eamil');
    selectTag.appendChild(item);
});
products.forEach(function (product) {
    var item = creatDropdownItem(product);
    var selectTag = document.querySelector('#product');
    selectTag.appendChild(item);
});
var creatDropdownItem = function (item) {
    var option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
};
