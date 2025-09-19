import http from 'http';

//@ A simple http server listening on port 8000
// const port = 8000;
const port = process.env.PORT || 9000;
const server = http.createServer((req, res) => {  

  //@ Exploring the request object
  console.log(req.url); 
  console.log(req.method); 
  console.log(req.url); 
  // res.write('Hello, World!');
  // res.end("Hello World!"); // Ends the response process.
  // Generally the stream is ended automatically after the response is sent.

  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;
  // res.end('<h1>Hello World!</h1>')

  // res.writeHead(500, {'Content-Type': 'application/json'});
  // res.end(JSON.stringify({message: "Internal Server Error"}));

  // res.writeHead(200, JSON.stringify({message: "Success"}));
  // res.end();
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1> Using nodemon by command npm start</h1>')
})

server.listen(port, () =>{
  console.log(`Server is listening on port ${port}`);
})

