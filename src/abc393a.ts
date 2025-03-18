// https://atcoder.jp/contests/abc394/tasks/abc393_a

const abc393a = (input: string) => {
    const lines = input.trim().split("\n");
    const [s1, s2] = lines[0].split(" ")

    if (s1 == "sick" && s2 == "sick") {
        console.log(1);
    }
    else if (s1 == "sick" && s2 == "fine") {
        console.log(2);
    }
    else if (s1 == "fine" && s2 == "sick") {
        console.log(3)
    }
    else {
        console.log(4);
    }
}

// Don't edit below this line
process.stdin.setEncoding("utf8");

(globalThis as any).inputLines = []; // グローバルスコープに明示的に紐づける

process.stdin.on("data", (chunk) => {
    const line_num = 1; // change according to the question
    (globalThis as any).inputLines.push(...chunk.toString().trim().split("\n"));
    if ((globalThis as any).inputLines.length >= line_num) {
        process.stdin.pause();
        abc393a((globalThis as any).inputLines.join("\n"));
    }
});