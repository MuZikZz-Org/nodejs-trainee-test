// Import required modules
const http = require('http');

// Define a simple HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
