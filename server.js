const http = require("http");

const { handleRoutes } = require("./routes/routes");

const server = http.createServer((req, res) => {
    console.log(req);

    handleRoutes(req, res);
});

server.listen(3000);

console.log("The server is listening on 3000");
