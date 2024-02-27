const userData = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        const { firstName, middleName, lastName, email, userName, password, confPassword, dob, gender, phoneNo, country, address, securityQue, securityAns, tnc} = req.body;

        const response = await userData.create({
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

        res.status(200).json({
            success: true,
            data: response,
            message: "Entry done"
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            data: 'internal error',
            message: error.message
        });
    }
};
