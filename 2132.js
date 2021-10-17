let goods = [
    {
        name: 'Cup',
        price: 99,
    },
    {
        name: 'Plate small',
        price: 119
    },
    {
        name: 'Black Tea',
        price: 159
    },
    {
        name: 'Drip coffee Bag',
        price: 30,
    },
    {
        name: 'Tea bomb',
        price: 19
    }
];


function sortGoods(a, prop, param) {
    let arr = a.slice(); // копируем массив
    arr.sort(function (a, b) {
        if (a[prop] > b[prop] && a[param] > b[param]) {
            return 1;
        }
        else if (a[prop] < b[prop] && a[param] > b[param]) {
            return -1;
        }
        else {
            return 0;
        }
    });
    console.log(arr);
}
sortGoods(goods, 'name', 'price');
