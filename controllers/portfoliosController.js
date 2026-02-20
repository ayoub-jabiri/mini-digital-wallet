const portfolios = [
    {
        id: 1,
        user_id: 1,
        name: "portfolio",
        sold: 0,
    },
];

const { users } = require("./usersController");

const controllers = {
    getPortfolios(req, res) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(portfolios));
    },
    addPortfolio(req, res) {
        req.on("data", (data) => {
            const portfolio = JSON.parse(data.toString());

            // Check if the portfolio id is already taken
            let portfolioCheck = portfolios.filter(
                (po) => po.id == portfolio.id
            );
            if (portfolioCheck.length == 0) {
                // Check if the portfolio is registered
                let userCheck = users.filter(
                    (us) => us.id == portfolio.user_id
                );
                if (userCheck.length > 0) {
                    // Add the new portfolio to the portfolio
                    portfolios.push(portfolio);

                    // Send a success message
                    res.writeHead(201, { "content-type": "application/json" });
                    res.end(
                        JSON.stringify({
                            message:
                                "The portfolio has been added successfully!",
                        })
                    );
                } else {
                    // Send an error message
                    res.writeHead(404, { "content-type": "application/json" });
                    res.end(
                        JSON.stringify({
                            message:
                                "The user who is associated with the portfolio is not registered yet!",
                        })
                    );
                }
            } else {
                // Send an error message
                res.writeHead(404, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The given id has been already taken!",
                    })
                );
            }
        });
    },
    updatePortfolio(req, res) {
        req.on("data", (data) => {
            const portfolio = JSON.parse(data.toString());

            // Check if the portfolio id is already taken
            let portfolioIndex = portfolios.findIndex(
                (po) => po.id == portfolio.id
            );

            if (portfolioIndex >= 0) {
                // Update the portfolio name
                portfolios[portfolioIndex].name = portfolio.name;

                // Send a success message
                res.writeHead(200, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message:
                            "The portfolio name has been updated successfully!",
                    })
                );
            } else {
                // Send an error message
                res.writeHead(404, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The portfolio is not registered yet!",
                    })
                );
            }
        });
    },
    deletePortfolio(req, res) {
        req.on("data", (data) => {
            const portfolio = JSON.parse(data.toString());

            // Check if the portfolio id is already taken
            let portfolioIndex = portfolios.findIndex(
                (us) => us.id == portfolio.id
            );

            if (portfolioIndex >= 0) {
                // Delete the portfolio
                portfolios.splice(portfolioIndex, 1);

                // Send a success message
                res.writeHead(200, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The portfolio has been deleted successfully!",
                    })
                );
            } else {
                // Send an error message
                res.writeHead(404, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The portfolio is not registered yet!",
                    })
                );
            }
        });
    },
    deposit(req, res) {
        req.on("data", (data) => {
            const portfolio = JSON.parse(data.toString());

            // Check if the portfolio id is already taken
            let portfolioIndex = portfolios.findIndex(
                (po) => po.id == portfolio.id
            );

            if (portfolioIndex >= 0) {
                // Update the portfolio name
                portfolios[portfolioIndex].sold = portfolio.sold;

                // Send a success message
                res.writeHead(200, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message:
                            "The portfolio sold has been deposited successfully!",
                    })
                );
            } else {
                // Send an error message
                res.writeHead(404, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The portfolio is not registered yet!",
                    })
                );
            }
        });
    },
    withdraw(req, res) {
        req.on("data", (data) => {
            const portfolio = JSON.parse(data.toString());

            // Check if the portfolio id is already taken
            let portfolioIndex = portfolios.findIndex(
                (po) => po.id == portfolio.id
            );

            if (portfolioIndex >= 0) {
                const currentSold = portfolios[portfolioIndex].sold;

                // Check if the sold after the withdraw can be positif
                if (currentSold - portfolio.sold >= 0) {
                    // Update the portfolio name
                    portfolios[portfolioIndex].sold -= portfolio.sold;

                    // Send a success message
                    res.writeHead(200, { "content-type": "application/json" });
                    res.end(
                        JSON.stringify({
                            message:
                                "The portfolio sold has been withdrawn successfully!",
                        })
                    );
                } else {
                    // Send an error message
                    res.writeHead(404, { "content-type": "application/json" });
                    res.end(
                        JSON.stringify({
                            message:
                                "The operation can't be completed due to that the sold must stay always >= 0",
                        })
                    );
                }
            } else {
                // Send an error message
                res.writeHead(404, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The portfolio is not registered yet!",
                    })
                );
            }
        });
    },
};

module.exports = controllers;
