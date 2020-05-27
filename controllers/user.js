const db = require('../models');

const getAllUsers = async (req,res) => {
    const users = await db.User.findAll();

    res.send(users);
};

const getUsersById = async (req,res) => {
    const user_id = Number(req.params.id);
    const targetUser = await db.users.findOne({ where: {id: user_id }});

    res.send(targetUser);
};
const createNewUsers = async (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastname;
    const userEmail = req.body.email;
    const userPassword = Number(req.body.password);

    const newUser = await db.User.create({
        firstname: firstName,
        lastname: lastName,
        email: userEmail,
        password: userPassword,
    })
    res.status(201).send(newUser);
};
const editUsersById = (req,res) => {

};
const deleteUsersById = (req,res) => {
    
};

module.exports = {
    getAllUsers,
    getUsersById,
    createNewUsers,
    editUsersById,
    deleteUsersById,
};


