// https://atcoder.jp/contests/abc394/tasks/abc392_a

// the number of input lines

const abc392a = (input: string) => {
    const lines = input.trim().split("\n");
    const alist = lines[0].split(" ").map(Number);
    // aをソート
    alist.sort((a, b) => a - b);
    if(alist[0]*alist[1]==alist[2]){
        console.log("Yes");
    }else{
        console.log("No");
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
        abc392a(inputLines.join("\n"));
    }
});
