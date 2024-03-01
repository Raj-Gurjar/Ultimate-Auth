const userData = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res) => {
    try {
        const { isAdmin, firstName, middleName, lastName, email, userName, password, confPassword, dob, gender, phoneNo, country, address, securityQue, securityAns, tnc } = req.body;

        console.log('sign up data:', req.body);

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long.",
            });
        }
        const checkUser = await userData.findOne({ email });
        const checkUserName = await userData.findOne({ userName })

        if (checkUserName) {
            return res.status(400).json({
                success: false,
                message: "UserName already exists!",
            });
        }
        if (checkUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists!",
            });
        }

        const response = await userData.create({
            isAdmin,
            firstName,
            middleName,
            lastName,
            email,
            userName,
            password,
            confPassword,
            dob,
            gender,
            phoneNo,
            country,
            address,
            securityQue,
            securityAns,
            tnc
        });

        return res.status(200).json({
            success: true,
            data: response,
            message: "Entry done"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            data: 'internal error',
            message: error.message
        });
    }

};
exports.logIn = async (req, res) => {

    console.log('log in data: ', req.body);

    try {
        const { isAdmin, userName, password } = req.body;

        if (!userName || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Please Enter Email and PassWord!'
                });
        }

        const checkUser = await userData.findOne({
            userName,
            isAdmin,
            password
        });

        if (!checkUser) {

            return res.status(400).json({
                success: false,
                message: "Invalid userName or password",
            });
        }
        // const isPasswordValid = await bcrypt.compare(password, userData.password);
        if (checkUser) {
            console.log('LogIn Succf');
            return res.status(200).json({
                success: true,
                // data: response,
                message: "LogIn Successful",

                // userData:user,
            });

        }
        else {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password!",
            });

        }
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'internal error in login',
            message: error.message
        });
    }

};


