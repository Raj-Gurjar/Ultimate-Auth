require("dotenv").config();
const cors = require("cors");


const express = require("express");

const app = express();

const PORT = process.env.PORT || 5001;

//body parser
app.use(express.json());
app.use("*", cors());

//file upload
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));


const dbConnect = require("./config/database");
dbConnect();

const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();


app.get('/', (req, res) => {
    res.send("hello dsd");
})

const userRoutes = require('./routes/user');
const fileRoutes = require('./routes/files');

app.use("/api/user", userRoutes);
app.use("/api/files", fileRoutes);

app.listen(PORT, () => {
    console.log('Server is Listening on Port: ' + PORT);
});
