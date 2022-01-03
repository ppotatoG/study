const emails = [
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

const products = [
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

const creatDropdownItem = (item : {value : string | number, selected : boolean}) => {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;

    return option
}

emails.forEach((email) => {
    const item = creatDropdownItem(email);
    const selectTag = document.querySelector('#eamil');
    selectTag.appendChild(item);
})

products.forEach((product) => {
    const item = creatDropdownItem(product);
    const selectTag = document.querySelector('#product');
    selectTag.appendChild(item);
})