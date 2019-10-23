const {createServer} = require("http");
const {createReadStream} = require("fs");

const sendFile = (response, status, type, filepath) => {
    response.writeHead(status, {"Content-Type": type});
    createReadStream(filepath).pipe(response);
};

createServer((request, response) => {
    switch (request.url) {
        case "/":
            return sendFile(response, 200, "text/html", "./CSS 3 test.html");
        case "/CSS%203%20test.css":
            return sendFile(response, 200, "text/css", "./CSS 3 test.css");
        case "/dsIII.jpg":
            return sendFile(response, 200, "img/jpg", "./dsIII.jpg");
    }
}).listen(8080);