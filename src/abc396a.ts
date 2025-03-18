// https://atcoder.jp/contests/abc394/tasks/abc396_a

// the number of input lines

const abc396a = (input: string) => {
    const lines = input.trim().split("\n");
    const n = Number(lines[0])
    const ai = lines[1].split(" ").map(Number)
    // 
    let count = 0
    let now = ai[0]
    for (let i = 1; i < n; i++) {
        if (ai[i] === now) {
            count += 1
        } else {
            count = 0
            now = ai[i]
        }
        if (count === 2) {
            console.log("Yes")
            return
        }
    }
    console.log("No")
}

// Don't edit below this line
process.stdin.setEncoding("utf8");

let inputLines: string[] = [];
process.stdin.on("data", (chunk) => {
    const line_num = 2; // change according to the question
    inputLines.push(...chunk.toString().trim().split("\n"));
    if (inputLines.length >= line_num) {
        process.stdin.pause();
        abc396a(inputLines.join("\n"));
    }
});
