//Spinner refactored

let initialTime = 0;
let input = "| / - \ | / - \ |";

for (let char of input) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, initialTime += 200);
}

setTimeout(() => {
  console.log('\n');
}, initialTime);



//pair programming with Jess.