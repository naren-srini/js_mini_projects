// Creating a user controller for sending sample data from backend to frontend

exports.userController = (req, res) => {
    res.json({
        userList: ["User A", "User B"]
    })
}
