const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    console.log(pathname)
    if (pathname.startsWith('/.well-known')) {
      const filePath = path.join(process.cwd(), pathname.substring(1));
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(fileContent);
        return;
      } catch (error) {
        console.error(error);
        res.writeHead(404);
        res.end('Not Found');
        return;
      }
    }
    handle(req, res, parsedUrl);
  }).listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});