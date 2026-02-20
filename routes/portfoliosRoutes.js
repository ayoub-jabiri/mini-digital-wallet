const {
    getPortfolios,
    addPortfolio,
    updatePortfolio,
    deletePortfolio,
} = require("../controllers/portfoliosController");

const handlePortfoliosRoutes = (req, res) => {
    const { url, method } = req;

    if (url == "/portfolios" && method == "GET") {
        getPortfolios(req, res);
    } else if (url == "/portfolios" && method == "POST") {
        addPortfolio(req, res);
    } else if (url == "/portfolios" && method == "PUT") {
        updatePortfolio(req, res);
    } else if (url == "/portfolios" && method == "DELETE") {
        deletePortfolio(req, res);
    }
};

module.exports = { handlePortfoliosRoutes };
