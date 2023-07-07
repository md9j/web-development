/* 
Tasks:
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([{
    message: "Enter the URL:", 
    name: "URL",
    /* add another question to get user desired img type and name for QR img */
  },])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    /* change to save/mod file to server to track all qr's generated */
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
console.log("QR couldn't be rendered in the current environment");} 
else {
      console.log("Something else went wrong, better luck on the next one");
    }
  });