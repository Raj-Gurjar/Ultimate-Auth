const userData = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
    try {
        const usersAllData = await userData.find({});
        res.json({ success: true, data: usersAllData });
        console.log('all user data :', usersAllData);
    }
    catch (error) {
        res.status(500).json({ success: false, error: error });
        console.log('Error in getting all user data');

    }

};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const getUserById = await userData.findById({ _id: userId });


        if (!getUserById) {
            return res.status(404).json({
                success: false,
                message: "No Data Found with Given ld",
            })
        }

        //data for given id FOUND
        res.status(200).json({
            success: true,
            data: this.getUserById,
            message: `User ${id} data successfully fetched`,
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error in user by id'
        })
    }
}
