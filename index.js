var fs = require('fs');

//create a file named mdata.txt:
fs.writeFile('data.txt','1st content', function (err) {
    if (err) throw err;
    console.log('written');
  });


  fs.appendFile('data.txt','2nd content', function (err) {
    if (err) throw err;
    console.log('updated');
  });