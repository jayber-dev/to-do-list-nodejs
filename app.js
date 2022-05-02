const fs = require('fs');
const http = require('http');
const path = require('path');
const nstatic = require('node-static')

const hostname = '127.0.0.1';
const port = 5000;

function servePages(route) {
    return fs.createReadStream(route)
}

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.setHeader('content-type', 'text/html');
        const htmlFile = servePages('html/index.html');
        console.log(req.url)
        htmlFile.pipe(res);

    } else if (req.url === "/css/index.css") {
        res.setHeader('content-type', 'text/css');
        const cssFile = servePages("css/index.css");
        console.log(req.url)
        cssFile.pipe(res);
    }
    // } else if (req.url !== '/') {
    //     res.setHeader('content-type', 'text/html');
    //     const notFoundFile = servePages('html/404.html')
    //     notFoundFile.pipe(res)
    //     console.log('im here HTML');
    // } else if (req.url === "/css/notFound.css") {
    //     console.log(req.url)
    //     res.setHeader('content-type', 'text/css');
    //     console.log('im here Css')
    //     const notFoundCss = servePages('/css/notFound.css')
    //     notFoundCss.pipe(res)
    // }


});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});