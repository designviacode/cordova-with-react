var fs = require("fs");
var rimRaf = require("rimraf");
var chalk = require("chalk");
var exec = require("child_process").exec;
var path = require("path");

exec("npm run build", (error, stdout, stderr) => {
  error !== null && console.log("exec error: " + error);

  rimRaf("www", response => {
    fs.rename("build", "www", err => {
      if (err) throw err;

      console.log(
        chalk.green.bold(" [*] ") +
          "successfully renamed " +
          chalk.green.bold("build") +
          " directory to " +
          chalk.green.bold("www")
      );
      console.log("");
    });
  });
});
