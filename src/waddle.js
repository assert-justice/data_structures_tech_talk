const {exec} = require('child_process');
const fs = require('fs');

const testOutput = './src/__tests__/output';
const watchDir = './src';
const testCommand = 'npm run test';

function colorMd(src, str, color){
    const newStr = `<span style=color:${color}>${str}</span>`;
    return src.split(str).join(newStr);
}

function toCode(str){
    return '```\n' + str + '\n```';
}

function modifyMd(src){
    if(src.startsWith('PASS')){
        for (const str of ['PASS','√']) {
            src = colorMd(src, str, 'green');
        }
        return src.split('\n').join('<br>\n');
    }
    const res = [];
    const groups = [[]];
    const lines = src.split('\n');//.map(s=>s.trim());
    for (const line of lines) {
        if(line.trim().length === 0) groups.push([]);
        else groups[groups.length-1].push(line);
    }
    groups.pop();
    groups.pop();
    const tail = groups.pop();
    groups.reverse();
    let head = groups.pop();
    head = head.join('\n<br>');
    for (const str of ['FAIL','×']) {
        head = colorMd(head, str, 'red');
    }
    for (const str of ['PASS','√']) {
        head = colorMd(head, str, 'green');
    }
    // head = '## ' + head;
    res.push(head);
    while(groups.length > 5){
        const title = groups.pop()[0];
        const expect = '`' + groups.pop()[0] + '`';
        const entries = groups.pop().map(s=>'- ' + s.trim()).join('\n');
        const summary = toCode(groups.pop().join('\n'));
        const testLine = '`' + groups.pop()[0] + '`';
        res.push(title, expect, entries, summary, testLine);
    }
    res.push(tail.slice(0,5).join('<br>\n'));

    let text = res.join('\n\n');
    // text = text.split('\n').join('<br>\n');

    // const bad = ['FAIL','×'];
    // const good = ['PASS', '√'];
    // for (const str of bad) {
    //     src = colorMd(src, str, 'red');
    // }
    // for (const str of good) {
    //     src = colorMd(src, str, 'green');
    // }
    // determine blocks 
    return text;// '```\n' + src + '\n```\n';
}
function runTests(){
    exec(`${testCommand} 2>${testOutput}.txt`, (err, stdout, stderr)=>{
        const outputTxt = fs.readFileSync(testOutput + '.txt', {encoding: 'utf-8'});
        const outputMd = modifyMd(outputTxt);
        fs.writeFileSync(testOutput + '.md', outputMd);
    });
}

function main(args){
    const watch = args.length > 0 && args[0] === '--watch';
    runTests();
    if(watch){
        fs.watch(watchDir, ()=>{
            runTests();
        });
    }
}

main(process.argv.slice(2));