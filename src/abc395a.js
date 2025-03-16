// https://atcoder.jp/contests/abc395/tasks/abc395_a

// the number of input lines
const line_num = 2;

function main(input) {
    const lines = input.trim().split("\n");
    const n = Number(lines[0]);
    const a = lines[1].split(" ").map(Number);

    // check a is simple increasing
    let isSimpleIncreasing = true;
    for (let i = 0; i < n - 1; i++) {
        if (a[i] >= a[i + 1]) {
            isSimpleIncreasing = false;
            break;
        }
    }

    if (isSimpleIncreasing) {
        console.log("Yes");
    } else {
        console.log("No");
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
