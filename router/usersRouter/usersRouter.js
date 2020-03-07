const router = require('express').Router();
const {user} = require('../../controllers');
const {user: userMiddleware} = require('../../middleware');

const {userService} = require('../../service');

router.post('/signup',userMiddleware.checkUserValidityMiddleware,user.createUser);

router.post('/login',userMiddleware.checkUserLoginMiddleware,user.loginUser );

router.get('/findAllUser/:user_id',userMiddleware.checkIsUserPresentMiddleware,user.getUserById);

router.get('/findAllUser', user.findAllUser);

module.exports = router;
