var fs = require("fs");
var { exec } = require("child_process");

const command = "npm run compile";

function handleRun() {
  console.log(`File changed, running ${command}`);
  exec(command, function (err, stdout, stderr) {
    console.log(stdout);
    if (err) {
      console.log(err);
      return;
    }
  });
}

fs.watch("src/index.ts", function (eventType) {
  handleRun();
});
