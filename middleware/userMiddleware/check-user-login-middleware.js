const { userService } = require('../../service');
const { tokinazer } = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const {email, password } = req.body;

        const checkLoginUser = await userService.authUser(email, password);

        if (!checkLoginUser) {
            throw new Error('Incorrect data')
        }

        const token = tokinazer(checkLoginUser.dataValues);

        res.json(token);
        next();


    } catch (e) {
        res.status(400).json(e.message);
    }
};
