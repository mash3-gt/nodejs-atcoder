// https://atcoder.jp/contests/abc394/tasks/abc394_a

const abc394a = (input: string) => {
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

(globalThis as any).inputLines = []; // グローバルスコープに明示的に紐づける

process.stdin.on("data", (chunk) => {
    const line_num = 1; // change according to the question
    (globalThis as any).inputLines.push(...chunk.toString().trim().split("\n"));
    if ((globalThis as any).inputLines.length >= line_num) {
        process.stdin.pause();
        abc394a((globalThis as any).inputLines.join("\n"));
    }
});