const {exec} = require('child_process');
const fs = require('fs');

const testOutput = './src/__tests__/output';
const testCommand = 'npm run test';

exec(`${testCommand} 2>${testOutput}.txt`, (err, stdout, stderr)=>{
    const outputTxt = fs.readFileSync(testOutput + '.txt', {encoding: 'utf-8'});
    const outputMd = '```\n' + outputTxt + '\n```\n';
    fs.writeFileSync(testOutput + '.md', outputMd);
});