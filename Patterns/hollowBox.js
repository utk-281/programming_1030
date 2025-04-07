function hollowBox(rows) {
  for (let i = 0; i < rows; i++) {
    let str = "";
    for (let j = 0; j < rows; j++) {
      if (i == 0 || i == rows - 1 || j == 0 || j == rows - 1) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    console.log(str.trim());
  }
}

hollowBox(5);
console.log("==========================");
hollowBox(4);

function hollowBox1(rows) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (i == 0 || i == rows - 1 || j == 0 || j == rows - 1) process.stdout.write("* ");
      else process.stdout.write("  ");
    }
    console.log();
  }
}
