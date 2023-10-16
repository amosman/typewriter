const sentence = "hello there from lighthouse labs";
const charArray = sentence.split("");
for (let [index, char] of charArray.entries()) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
    if (index === charArray.length - 1) {
      process.stdout.write("\n");
    } 
  }, index * 50)
}
