const http = require("http");

const { handleUsetsRoutes } = require("./routes/usersRoutes");
const { handlePortfoliosRoutes } = require("./routes/portfoliosRoutes");

const server = http.createServer((req, res) => {
    const { url } = req;
    if (url == "/users") {
        handleUsetsRoutes(req, res);
    } else if (url == "/portfolios") {
        handlePortfoliosRoutes(req, res);
    } else {
        // Send an error message
        res.writeHead(404, { "content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "The given endpoint doesn't exists!",
            })
        );
    }
});

server.listen(3000, () => {
    console.log("The server is listening on 3000");
});
