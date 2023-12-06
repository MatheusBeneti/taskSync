const express = require('express');
const router = express.Router();  

const userAccountController = require('../controllers/userAccountPageController');
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/loginController');
const checkAuth = require('../controllers/checkAuthController');
const teamsController = require('../controllers/teamsController');

router.get('/', loginController)
router.get('/home',checkAuth, homeController);
router.get('/teams',checkAuth, teamsController);
router.get('/account',checkAuth, userAccountController);


module.exports = router;  


