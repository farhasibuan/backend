const fs = require('fs');

const files = ['tes1.txt', 'tes2.txt', 'tes3.txt'];
const content = 'Halo';

if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}


files.forEach((file) => {
    try {
        fs.writeFileSync(`data/${file}`, content);
        console.log(`file ${file} telah dibuat`);
    } catch (error) {
        
    }
});
