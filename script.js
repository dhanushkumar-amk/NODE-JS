const http = require('http');const fs = require('fs');
/** do't add function parentheses because it is immediately called  */
/* creating server using node js*/

const server = http.createServer((req, res) => {
  /**understanding  request*/
  //   console.log(req.headers);

  /**Understanding response */
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title> Enter form details </title>');
    res.write('</head>');
    res.write('<body>');
    res.write(
      '<form action="/message" method="POST"> <input type="text name="message"/>  <input type="submit" value="submit"/> </form>'
    );
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  /**redirection in node js */
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log('Chunk');
      console.log(chunk);
      body.push(chunk);
    });
    /** Create file  */
    fs.writeFileSync('hello.txt', 'Hello world');

    res.setHeader('Location', '/');
    res.statusCode = 302;
    return res.end();
  }
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title> DhanushKumar </title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Hello world ! </h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();

  /** to exit the event loop using process function */
  //   process.exit();
});

server.listen(8000);

// console.log(req.url);  to see the request url
// console.log(req.method); to see the method used in request GET or Post
// console.log(req.headers); it include the important information

// res.setHeader('Content-type', 'text/html'); used to set the content type to send to the server

// res.end(); is used to end the information to server response
