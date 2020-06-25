// นำข้อมูลจาก models ที่เราเขียนเข้ามา
const db = require('../models');
//ใช้ bcrypt เพื่อ hash password 
const bcrypt = require('bcryptjs');


const getAllUsers = async (req, res) => {
    const users = await db.User.findAll();

    res.send(users);
};

const getUsersById = async (req, res) => {
    const user_id = Number(req.params.id);
    const targetUser = await db.users.findOne({ where: { id: user_id } });

    res.send(targetUser);
};
const createNewUsers = async (req, res) => {
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    
    const user = await db.User.findOne({
        where: { email: userEmail} 
    })

    if (user) {
        res.status(400).send('Email is already registered!')
    } else {
        let salt = bcrypt.genSaltSync(12)
        let hashPassword = bcrypt.hashSync(
            userPassword, salt
        )
        const newUser = await db.User.create({
            firstname: firstName,
            lastname: lastName,
            email: userEmail,
            password: hashPassword,
        })
        res.status(201).send(newUser);
    }
 
};
const editUsersById = async (req, res) => {
    const user_id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    await db.User.update({
        firstname: firstName,
        lastname: lastName,
        email: userEmail,
        password: userPassword,
    }, {
        where: { id: user_id }
    })

    res.status(200).send({ message: `User ID: ${user_id} has been updated` });
};

const deleteUsersById = async (req, res) => {
    const user_id = req.params.id;

    await db.User.destroy({ where: { id: user_id } });
    
    res.status(204).send();
};


module.exports = {
    getAllUsers,
    getUsersById,
    createNewUsers,
    editUsersById,
    deleteUsersById,
};
