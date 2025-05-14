const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact': 'contact.html'
  };

  // Normalize URL (remove query params, etc.)
  const urlPath = req.url.split('?')[0];

  // Determine file based on route or fallback to notfound.html
  const fileName = routes[urlPath] || 'notfound.html';

  // Resolve file path
  const filePath = path.join(__dirname, 'pages', fileName);

  // Determine proper status code
  const statusCode = routes[urlPath] ? 200 : 404;

  // Read and serve the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    } else {
      res.writeHead(statusCode, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
