// TODO: import module bila dibutuhkan di sini
const fs = require('fs')

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (callback) => {
  const wordData = []
  console.log(file1, file2, file3);
  fs.readFile(file1, (err, data) => {
    if (err) return callback(new Error(err), null)
    let word = (JSON.parse(data)).message

    if (word.split(" ").length < 2) {
      return callback(`Ada kata yang kurang dari 2`, null)
    }
    wordData.push(word.split(" ")[1])
    fs.readFile(file2, (err, data) => {
      if (err) return callback(new Error(err), null)
      let word = JSON.parse(data)[0].message

      if (word.split(" ").length < 2) {
        return callback(`Ada kata yang kurang dari 2`, null)
      }
      wordData.push(word.split(" ")[1])
      fs.readFile(file3, (err, data) => {
        if (err) return callback(new Error(err), null)
        let word = JSON.parse(data)[0].data.message

        if (word.split(" ").length < 2) {
          return callback(`Ada kata yang kurang dari 2`, null)
        }
        wordData.push(word.split(" ")[1])
        return callback(null, wordData)
      })
    })
  })
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
