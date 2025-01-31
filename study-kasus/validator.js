const readline = require('readline');
const validator = require('validator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validateName(name) {
  return name.trim().length > 0;
}

function validateAge(age) {
  return !isNaN(age) && age > 0 && age < 150;
}

function validateEmail(email) {
  return validator.isEmail(email);
}

rl.question('Masukkan nama Anda: ', (name) => {
  if (validateName(name)) {
    rl.question('Masukkan usia Anda: ', (age) => {
      if (validateAge(age)) {
        rl.question('Masukkan email Anda: ', (email) => {
          if (validateEmail(email)) {
            console.log(`Nama: ${name}`);
            console.log(`Usia: ${age}`);
            console.log(`Email: ${email}`);
            rl.close();
          } else {
            console.log('Email tidak valid.');
            rl.close();
          }
        });
      } else {
        console.log('Usia tidak valid.');
        rl.close();
      }
    });
  } else {
    console.log('Nama tidak valid.');
    rl.close();
  }
});
