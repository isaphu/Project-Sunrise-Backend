const db = require('../models');

const getAllUsers = async (req,res) => {
    const users = await db.User.findAll();

    res.send(users);
};

const getUsersById = async (req,res) => {
    const userId = Number(req.params.id);
    const targetUser = await db.users.findOne({ where: {id: user_id }});

    res.send(targetUser);
};
const createNewUsers = (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastname;
    const email = req.body.email;
    const password = Number(req.body.password);
    

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


