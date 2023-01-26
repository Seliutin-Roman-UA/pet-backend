const express = require('express');
const userControl = require('./controllers.js');
const { checkUser } = require('../middleware/usermiddleware.js');




const router = express.Router();


router.post('/signup', userControl.userRegistration);

router.get('/verify/:verificationEmailToken', userControl.verificateEmailToken);

router.post('/verify', userControl.verificateEmail);

router.get('/login', userControl.userLogin);

router.get('/current', checkUser, userControl.getInfoCurrentUser);

router.patch('/update', checkUser, userControl.updateSubscription);



module.exports = router;
