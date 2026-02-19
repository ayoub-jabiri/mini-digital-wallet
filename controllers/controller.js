const controllers = {
    defaultMsg(req, res) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify([1, 2, 3, 4, 6]));
    },
};

module.exports = controllers;
