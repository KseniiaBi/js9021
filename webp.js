const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
// установить пакеты imagemin и imagemin-webp

console.log("starting converting images to webp");

imagemin(["./img/*.{jpg,png}"], {
  destination: ".dist/img/",
  plugins: [
    imageminWebp({
        quality: 80
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});

// для запуска нужно в консоли запустить выполнение файла  node webp.js

// *** можно похимичить и экспортировать функцию в свой галпфайл и вызывать ее оттуда