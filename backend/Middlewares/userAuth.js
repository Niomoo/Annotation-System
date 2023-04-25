const express = require("express");
const db = require("../Models");
const User = db.users;
const valicateUser = async (req, res, next) => {
    try {
        const username = await User.findOne({
            where: {
                userName: req.body.userName,
            },
        });
        if (username) {
            return res.json(409).send("username already taken");
        }
        
        const emailcheck = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (emailcheck) {
            return res.json(409).send("email already taken");
        }
        next();
    } 
    catch (error) {
        console.log(error);
    }
};

//exporting module
module.exports = {
    valicateUser,
};