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

let arr1 = [1, 2, 3, 7, 8, 9, 13];
let arr2 = [4, 5, 6, 10, 11, 12];
let arr3 = [];
for (let i = 0; i < arr1.length; i++)
    for (let k = 0; k < arr2.length; k++) {
        if (i == k) {
            arr3.push(arr1[i] + arr2[k])
        }
    }

console.log(arr3)

//========


let addA = (size, value) => Array.apply(null, Array(size)).map(() => value
);
console.log(addA(3, 'a'));
///====

let union = array => new Set(array);
console.log(union([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7], [7, 'z', 7, 'z', 3, 5, 9, 7], 7, 'z', 7, 'z', 3, 5, 9, 7))