let fs = require('fs'),
    path = require('path')

module.exports = {
    handleRequest (req, socket, head) {
        let filePath = '.' + req.url;
        if (filePath == './')
            filePath = './index.html';

        let extname = path.extname(filePath);
        let contentType = 'text/html';
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
            case '.wav':
                contentType = 'audio/wav';
                break;
        }

        fs.readFile(filePath, function(error, content) {
            if (error) {
                if(error.code == 'ENOENT'){
                    socket.writeHead(404, {});
                    socket.end('404 - Not Found', 'utf-8');
                }
                else {
                    socket.writeHead(500);
                    socket.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                    socket.end();
                }
            }
            else {
                socket.writeHead(200, { 'Content-Type': contentType });
                socket.end(content, 'utf-8');
            }
        });
    }
}