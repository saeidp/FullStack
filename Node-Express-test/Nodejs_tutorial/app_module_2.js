// work with folder
// to remove a folder that folder should be empty

const fs = require("fs");
// fs.mkdir("tutorial", err => {
//   if (err) console.log(err);
//   else console.log("folder successfulyy created");
// });

// fs.mkdir("tutorial", err => {
//   if (err) console.log(err);
//   else
//     fs.rmdir("tutorial", err => {
//       if (err) console.log(err);
//       else {
//         console.log("successfully deleted the folder");
//       }
//     });
// });

// fs.mkdir("tutorial", err => {
//   if (err) console.log(err);
//   else {
//     fs.writeFile("./tutorial/example.txt", "123", err => {
//       if (err) console.log(err);
//       else {
//         console.log("successfully created file");
//       }
//     });
//   }
// });

// delete multiple files
fs.readdir("Example", (err, files) => {
  if (err) console.log(err);
  else {
    //console.log(files);
    for (let file of files) {
      fs.unlink("./example/" + file, err => {
        if (err) console.log(err);
        else {
          console.log("successfully deleted file");
        }
      });
    }
  }
});
