require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

//body parser
app.use(express.json());


const userRoutes = require('./routes/user');

app.use("/api/v1",userRoutes);

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

