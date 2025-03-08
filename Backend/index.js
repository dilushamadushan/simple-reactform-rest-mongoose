const express = require('express');
const app = express();
const cors = require('cors');
const request = require('./middleware/request');
const mongoose = require('mongoose');
const userModel = require('./models/user');

app.use(cors());
//app.use(request);
app.use(express.json());

app.get('/request', (req, res) => {
    res.send('Success');
})

app.post('/request', async (req, res) => {
    try{
        const { username, password } = req.body
        const newUser = await userModel.create({
            username: username,
            password: password
        });
        res.json({
            message: "Registration Successful",
            user: newUser,
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            message: "Registration Failed"
        });
    }
});

app.listen(3000, async () => {
    try{
        await mongoose.connect('mongodb+srv://dbUser:p8NyvEQn9Ijaaaul@cluster0.aytj5.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Database connected Successfully');
    } catch(error){
        console.log("Error connecting to database");
    }
})