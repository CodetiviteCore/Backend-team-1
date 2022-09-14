const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

const {userController} = controllers
const {signUp} = userController
router.post('signMeUp',signUp)

module.exports = router;