/* fs*/ /** reading file from file using  node js */
import {readFile} from 'node:fs';

readFile('./files/start.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
