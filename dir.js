/** to create a directory using node */
const fs = require('fs');
fs.mkdir('./new', (err) => {
  if (err) throw err;
  console.log('directory created');
});
