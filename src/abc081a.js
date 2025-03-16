// https://atcoder.jp/contests/abs/tasks/abc081_a

// the number of input lines
const line_num = 1;

function main(input) {
    const lines = input.trim().split("\n");
    const s = lines[0]

    // count "1" from s
    const count = s.split("").filter(c => c === "1").length;
    console.log(count);
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
