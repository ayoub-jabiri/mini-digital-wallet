const {
    controllers: { getUsers, addUser, updateUser, deleteUser },
} = require("../controllers/usersController");

const handleUsetsRoutes = (req, res) => {
    const { url, method } = req;

    if (url == "/users" && method == "GET") {
        getUsers(req, res);
    } else if (url == "/users" && method == "POST") {
        addUser(req, res);
    } else if (url == "/users" && method == "PUT") {
        updateUser(req, res);
    } else if (url == "/users" && method == "DELETE") {
        deleteUser(req, res);
    }
};

module.exports = { handleUsetsRoutes };
