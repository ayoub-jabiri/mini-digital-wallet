const { defaultMsg } = require("../controllers/controller");

const handleRoutes = (req, res) => {
    const { url, method } = req;

    if (url == "/" && method == "GET") {
        defaultMsg(req, res);
    }
};

module.exports = { handleRoutes };
