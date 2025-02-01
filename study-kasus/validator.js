import readline from 'readline';
import fs from 'fs';
import validator from 'validator';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
----=(Celamat datang di apk PINJOEL kami)=---
`);

rl.question('Nama: ', (nama) => {
  rl.question('Umur: ', (umur) => {
    rl.question('Email: ', (email) => {
      rl.question('No HP: ', (noHp) => {
        if (!validator.isInt(umur) || !validator.isEmail(email) || !validator.isMobilePhone(noHp, 'id-ID')) {
          console.log('Input tidak valid!');
          rl.close();
          return;
        }

        const contact = { nama, umur, email, noHp };
        const contacts = JSON.parse(fs.readFileSync('contacts.json', 'utf-8'));
        contacts.push(contact);
        fs.writeFileSync('contacts.json', JSON.stringify(contacts));
        console.log('Data sukses di simpan ngab!!');
        rl.close();
      });
    });
  });
});
