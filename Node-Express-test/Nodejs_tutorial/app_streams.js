// Readable and writable streams. You can read and chunk by chunk
const fs = require("fs");
// const readStream = fs.createReadStream("./example.txt", "utf8");
// const writeStream = fs.createWriteStream("example2.txt");
// readStream.on("data", chunk => {
//   //console.log(chunk);
//   writeStream.write(chunk);
// });
// If the file is large then readFile will fail because of the buffer
//size
//using theis approach you can read large files beacause it
// uses small buffer but reads in chunk

// a simpler way
// const readStream = fs.createReadStream("./example.txt", "utf8");
// const writeStream = fs.createWriteStream("example2.txt");
// readStream.pipe(writeStream);

// compress version of read stream
// const zlib = require("zlib");
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream("./example.txt", "utf8");
// const writeStream = fs.createWriteStream("example2.txt.gz");
// readStream.pipe(gzip).pipe(writeStream);

//unzip
// const zlib = require("zlib");
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream("./example2.txt.gz");
// const writeStream = fs.createWriteStream("uncompressed.txt");
// readStream.pipe(gunzip).pipe(writeStream);
