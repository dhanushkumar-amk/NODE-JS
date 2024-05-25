/* fs*/ /** reading file from file using  node js */ const {
  error,
} = require('console');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'start.txt'),
      'utf8'
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'subscribe.txt'),
      'hi my name is dhanushkumar'
    );
    console.log('write complete');
  } catch (err) {
    console.error(err);
  }
};
fileOps();

/** to creating the files using node js */

fs.appendFile(
  path.join(__dirname, 'files', 'Append.txt'),
  'Hello world  my name is dhanushkumar!',
  (err) => {
    if (err) throw err;
    console.log('append complete');
  }
);

fs.rename(
  path.join(__dirname, 'files', 'append.txt'),
  path.join(__dirname, 'files', 'Rename.txt'),
  (err) => {
    if (err) throw err;
    console.log('Rename complete');
  }
);

/** update the file */

/** PROCESS  for error handling it is a in build function in node js */

process.on('uncaughtException', (err) => {
  console.log(`There was an uncaught error ${err}`);
  process.exit(1);
});
