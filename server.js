const http = require("http");

const { handleRoutes } = require("./routes/usersRoutes");

const server = http.createServer((req, res) => {
    handleRoutes(req, res);
});

server.listen(3000, () => {
    console.log("The server is listening on 3000");
});
