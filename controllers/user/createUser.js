const {userService} = require('../../service');
const {passwordHashed} = require('../../helpers');
module.exports = async (req, res) => {
    try {
        const creatingData = req.body;
        const appRoot = global.appRoot;

        creatingData.password = await passwordHashed(creatingData.password);

        const userToCreate = req.body;
        const {user_id} = req.body;

        await userService.createUser(userToCreate, user_id);

        res.json('created');

    } catch (e) {
        res.status(400).json(e.message);
    }
};


