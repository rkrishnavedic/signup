const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { request } = require('express');
const cors = require('cors');

const routesUrls = require('./routes/routes');


dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,()=>{
    console.log('DB connected!');
})

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);

app.listen(4000, ()=> console.log('server is up and running!'));

