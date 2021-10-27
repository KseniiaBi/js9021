let equal = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false
    }

    for (i = 0; i < arr1.length; i++);
    for (k = 0; k < arr2.length; k++);
    if (arr1[i] !== arr2[k]) {
        return false;
    }
    return true;
}
console.log(equal([1, 2, 3], [1, 2, 3]));

// next

let str = (strn) => {
    let totalStr = [];
    for (let i = 0; i < strn.length; i++) {
        if (strn[i] == strn[i].toUpperCase()) {
            totalStr.push(strn[i].toLowerCase());
        } else
            if (strn[i] == strn[i].toLowerCase()) {
                totalStr.push(strn[i].toUpperCase());
            }
    }

    return totalStr.join('');

};
console.log((str('КаЖдЫй ОхОтНиК')));

//=================

let nArray = (array, n) => {
    if (array.length == null)
        return false;

    if (n == null)
        return false;
    return array.reverse().slice(0, n);
}

console.log(nArray([1, 3, 5, 7, 9, 11, 13, 15, 17], 2))

//====================