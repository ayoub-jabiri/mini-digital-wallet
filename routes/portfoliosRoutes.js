const {
    getPortfolios,
    addPortfolio,
    updatePortfolio,
    deletePortfolio,
    deposit,
    withdraw,
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
    } else if (url == "/portfolios/deposit" && method == "PUT") {
        deposit(req, res);
    } else if (url == "/portfolios/withdraw" && method == "PUT") {
        withdraw(req, res);
    }
};

module.exports = { handlePortfoliosRoutes };
