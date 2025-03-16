// https://atcoder.jp/contests/practice/tasks/practice_1

// the number of input lines
const line_num = 3;

function main(input) {
  const lines = input.trim().split("\n");
  const a = Number(lines[0]);
  const [b, c] = lines[1].split(" ").map(Number);
  const s = lines[2];

  console.log(`${a + b + c} ${s}`);
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
