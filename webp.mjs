import imagemin from 'imagemin';
const imageminWebp = require("imagemin-webp");
// установить пакеты imagemin и imagemin-webp

console.log("starting converting images to webp");

(async () => {
    await imagemin(['images/*.{jpg,png}'], 'build/images', {
        use: [
            imageminWebp({quality: 50})
        ]
    });
 
    console.log('Images optimized');
})();

// для запуска нужно в консоли запустить выполнение файла  node webp.js

// *** можно похимичить и экспортировать функцию в свой галпфайл и вызывать ее оттуда