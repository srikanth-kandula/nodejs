const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/log-file.log`, 'utf-8');
const writeStream = fs.createWriteStream(`${__dirname}/files-names-log-file.log`);

readStream.on('data', (chunk) => {
  let lines = chunk.split('\n');

  for(let line of lines) {
    console.log(`new line \n`);
    if(line.includes("GET") && line.includes(".gif")) {      
      writeStream.write(line);
    }
  }
  
});