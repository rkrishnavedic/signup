const express = require('express');
const router = express.Router();

const signUpTemplateCopy = require('../models/signupmodels')

const bcrypt = require('bcrypt');

router.post('/signup', async (request, response)=>{

    const encryptPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(request.body.password, encryptPassword);
    
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:securePassword,
    })

    signedUpUser.save()
            .then(data =>{
                response.json(data);
            })
            .catch(error=>{
                response.json(error);
            })
})

module.exports = router;