const express = require('express');
const router = express.Router();

const {signUp,logIn} = require('../controllers/user');
const {getAllUsers,getUserById} = require('../controllers/getUser');


router.post('/signup',signUp);
router.post('/logIn',logIn);
router.get('/getAllUsers',getAllUsers);
router.get('/getUser/:id',getUserById);



module.exports = router;