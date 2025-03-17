// https://atcoder.jp/contests/abc394/tasks/abc391_a

// the number of input lines

const abc391a = (input: string) => {
    const lines = input.trim().split("\n");
    const d = lines[0]
    // 
    let ans = ""
    for (let i = 0; i < d.length; i++) {
        if (d[i] == "E") {
            ans += "W"
        } else if (d[i] == "W") {
            ans += "E"
        }
        else if (d[i] == "S") {
            ans += "N"
        } else {
            ans += "S"
        }
    }
    console.log(ans);
}

// Don't edit below this line
process.stdin.setEncoding("utf8");

process.stdin.on("data", (chunk) => {
    const line_num = 1; // change according to the question
    let inputLines: string[] = [];
    inputLines.push(...chunk.toString().trim().split("\n"));
    if (inputLines.length >= line_num) {
        process.stdin.pause();
        abc391a(inputLines.join("\n"));
    }
});
