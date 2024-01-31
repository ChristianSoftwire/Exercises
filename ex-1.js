const fs = require("fs");
const { parse } = require("csv-parse");
const asyncNodefs = require("fs/promises");

const main = () => {
  getFileContents();
};

const getFileContents = async () => {
  const fileAsArray = await readFile();
  console.log(fileAsArray);
};

const readFile = async () => {
  const arrayOfRows = [];
  fs.createReadStream("./books.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", (row) => {
      arrayOfRows.push(row);
      console.log(row);
    })
    .on("end", () => {
      return arrayOfRows;
    });
  return arrayOfRows;

  // let arrayOfValues;
  // const csvAsString = await asyncNodefs.readFile(
  //   "./books.csv",
  //   "utf-8",
  //   (err, data) => {
  //     console.log("in here", data.split("/\r?\n/"));
  //     arrayOfValues = data.split("/\r?\n/");
  //     return arrayOfValues;
  //   }
  // );

  // const arrayOfRow = csvAsString.split("/\n/");

  // console.log(`value ${arrayOfRow.map((val) => console.log)}`);

  // console.log(arrayOfValues);
};

main();
