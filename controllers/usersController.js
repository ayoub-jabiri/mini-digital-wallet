const users = [];

const controllers = {
    getUsers(req, res) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(users));
    },
    addUser(req, res) {
        req.on("data", (data) => {
            const user = JSON.parse(data.toString());

            // Check if the user id is already taken
            let check = users.filter((us) => us.id == user.id);

            if (check.length == 0) {
                // Add the new user to the users
                users.push(user);

                // Send a success message
                res.writeHead(200, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The user has been added successfully!",
                    })
                );
            } else {
                // Send a success message
                res.writeHead(404, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The given id has been already taken!",
                    })
                );
            }
        });
    },
    updateUser(req, res) {
        req.on("data", (data) => {
            const user = JSON.parse(data.toString());

            // Check if the user id is already taken
            let userIndex = users.findIndex((us) => us.id == user.id);

            if (userIndex >= 0) {
                // Update the user name
                users[userIndex].name = user.name;

                // Send a success message
                res.writeHead(200, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The user name has been updated successfully!",
                    })
                );
            } else {
                // Send a success message
                res.writeHead(404, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The user is not registered yet!",
                    })
                );
            }
        });
    },
    deleteUser(req, res) {
        req.on("data", (data) => {
            const user = JSON.parse(data.toString());

            // Check if the user id is already taken
            let userIndex = users.findIndex((us) => us.id == user.id);

            if (userIndex >= 0) {
                // Delete the user
                users.splice(userIndex, 1);

                // Send a success message
                res.writeHead(200, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The user has been deleted successfully!",
                    })
                );
            } else {
                // Send a success message
                res.writeHead(404, { "content-type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "The user is not registered yet!",
                    })
                );
            }
        });
    },
};

module.exports = controllers;
