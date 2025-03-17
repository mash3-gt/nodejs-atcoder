process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    const s = lines[0];
    let ans = "";
    for (let i = 0; s.length - 1; i++) {
        if (s[i] == " ") {
            ans += "_"
        } else {
            ans += s[i]
        }
    }
    console.log(ans);
});