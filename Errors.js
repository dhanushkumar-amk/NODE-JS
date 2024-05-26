/** types of errors */

/** syntax error */
/* run time error error */
/** logical error */

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello world');
});
server.listen(3000);
