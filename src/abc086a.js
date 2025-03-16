// https://atcoder.jp/contests/abs/tasks/abc086_a

// the number of input lines
const line_num = 1;

// main procedure
function main(input) {
    const lines = input.trim().split("\n");
    const [a, b] = lines[0].split(" ").map(Number);
    if (a * b % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
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
