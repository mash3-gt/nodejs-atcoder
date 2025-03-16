// https://atcoder.jp/contests/abc394/tasks/abc393_a

// the number of input lines

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

process.stdin.on("data", (chunk) => {
    const line_num = 1; // change according to the question
    let inputLines: string[] = [];
    inputLines.push(...chunk.toString().trim().split("\n"));
    if (inputLines.length >= line_num) {
        process.stdin.pause();
        abc393a(inputLines.join("\n"));
    }
});
