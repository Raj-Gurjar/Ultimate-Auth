const userData = require('../models/user.model');
const cloudinary = require('cloudinary').v2;


exports.localFileUpload = async (req, res) => {

    try {
        const file = req.files.myfile;
        console.log("file ", file);

        let path = __dirname + '/files/' + Date.now() + '.' + file.name.split('.')[1];
        console.log("Path ", path);


        file.mv(path, (error) => {
            console.log(error);
        });

        res.json({
            success: true,
            message: "Local File Uploaded Successfully",
        });

    } catch (error) {
        console.log(error);
    }
}


function isFileTypeSupported(type, supportImageType) {
    return supportImageType.includes(type);
}

async function uploadFileCloudinary(file, folder) {
    const options = { folder };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {

    try {

        console.log("inside imageUpload");

        const file = req.files.imageFile;

        console.log("file ", file);


        const supportImageType = ['jpeg', 'png', 'jpg', 'svg'];
        const fileType = file.name.split('.')[1].toLowerCase();

        console.log("FileType", fileType);




        if (!isFileTypeSupported(fileType, supportImageType)) {
            return res.status(400).json({
                success: false,
                message: "Image Formate not Supported"
            })
        }

        console.log("before res");

        const response = await uploadFileCloudinary(file, "Ulti-Auth");

        console.log(response);

        const fileData = await userData.create({
            profilePic: response.secure_url
        })

        res.json({
            success: true,
            imageUrl:response.secure_url,
            message: "Image uploaded to Cloudinary"
        })
    }
    catch (error) {
        console.log(error);

        res.status(400).json({
            success: false,
            message: "Something wrong in ImageUploader cntrlr"
        })
    }
}