// https://atcoder.jp/contests/abc394/tasks/abc394_a

// the number of input lines
const line_num = 1;

function main(input) {
    const lines = input.trim().split("\n");
    const s = lines[0];

    // sを一文字ずつ取り出して、2を結合して出力
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "2") ans += s[i];
    }
    console.log(ans);
}

// Don't edit below this line
process.stdin.setEncoding("utf8");

let inputLines = [];
process.stdin.on("data", (chunk) => {
    inputLines.push(...chunk.trim().split("\n"));
    if (inputLines.length >= line_num) {
        process.stdin.pause();
        main(inputLines.join("\n"));
    }
});
