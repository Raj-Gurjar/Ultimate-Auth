require("dotenv").config();
const cors = require("cors");


const express = require("express");

const app = express();

const PORT = process.env.PORT || 5001;

//body parser
app.use(express.json());
app.use("*", cors());

const userRoutes = require('./routes/user');

app.use("/api/user",userRoutes);

app.listen(PORT, () =>
{
 console.log('Server is Listening on Port: ' + PORT);
});

const dbConnect = require("./config/database");
dbConnect();

app.get('/', (req,res) =>
{
    res.send("hello dsd");
})

