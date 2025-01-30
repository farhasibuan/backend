//  const readline = require('readline');

//  const rl = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout
//  });

//  rl.question('Masukkan nama anda: ', (name) => {
//      rl.question('Berapa umur anda: ', (umur) => {
//          rl.question('Gender ?: ', (gender) => {
//      console.log(`Samsul ${name}, 19${umur}, [L / P]${gender}`);
   
//      console.log(`Terimakasih ${name}, usia anda adalah ${umur}`);
//      });
//      rl.close();
//  });
//  });

// QUIZ readline

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama anda: ', (name) => {
    rl.question('Berapa umur anda: ', (umur) => {
        rl.question('Gender ?:[l/P]', (gender) => {
            if (umur < 18) {
                umur = 'Anak"'
            } else {
                umur = 'Dewasa'
            }
    console.log(`Samsul ${name}, 19${umur}, [L / P]${gender}`);
    rl.close();
})
})
})


