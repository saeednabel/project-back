const express  = require('express');

const {signUp} = require('../controllers/userController');

const router = express.Router();


router.post('/signUp', signUp);


module.exports = router;