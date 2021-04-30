const fs = require("fs");
console.log(fs);

fs.writeFileSync("./contents/demo.txt", "node is awesome$$");
fs.appendFileSync("./contents/demo.txt", ". We are learning it!");
fs.rename("./contents/demo.txt", "./contents/newDemo.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("renamed successfully");
  }
});
fs.readFile("./contents/newDemo.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("before");
fs.readFile("./contents/newDemo.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    fs.appendFile("./contents/newDemo.txt", "enjoy!", (error) => {
      if (error) {
        console.log(error);
      }
    });
    fs.readFile("./contents/newDemo.txt", "utf-8", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});
console.log("after");

fs.unlink("./contents/newDemo.txt", (error)=> {
    if(error){
        console.log(error);
    }
    console.log("deleted successfully");
})
