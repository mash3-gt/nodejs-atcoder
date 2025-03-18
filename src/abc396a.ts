// https://atcoder.jp/contests/abc394/tasks/abc396_a

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

(globalThis as any).inputLines = []; // グローバルスコープに明示的に紐づける

process.stdin.on("data", (chunk) => {
    const line_num = 2; // change according to the question
    (globalThis as any).inputLines.push(...chunk.toString().trim().split("\n"));
    if ((globalThis as any).inputLines.length >= line_num) {
        process.stdin.pause();
        abc396a((globalThis as any).inputLines.join("\n"));
    }
});