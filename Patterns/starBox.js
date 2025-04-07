function starBox(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j < rows; j++) {
      str += "*  ";
    }
    console.log(str.trim());
  }
}

starBox(5);

console.log("==========================");

function starBox1(rows) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
starBox1(7);
