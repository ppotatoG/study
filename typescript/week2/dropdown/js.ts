interface Dropdowon<T> {
    value : T;
    selected : boolean;
};

const emails : Dropdowon<string>[] = [
    {
        value : 'naver.com',
        selected : true
    },
    {
        value : 'gmail.com',
        selected : false
    },
    {
        value : 'hanmail.net',
        selected : false
    }
];

const products : Dropdowon<number>[] = [
    {
        value : 1,
        selected : true
    },
    {
        value : 2,
        selected : false
    },
    {
        value : 3,
        selected : false
    }
];


emails.forEach(email => {
    const item = creatDropdownItem(email);
    const selectTag = document.querySelector('#eamil');
    selectTag.appendChild(item);
})

products.forEach(product => {
    const item = creatDropdownItem(product);
    const selectTag = document.querySelector('#product');
    selectTag.appendChild(item);
})

const creatDropdownItem = (item : Dropdowon<string> | Dropdowon<number>) => {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;

    return option;
}