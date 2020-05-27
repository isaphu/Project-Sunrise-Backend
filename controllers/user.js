const db = require('../models');

const getAllUsers = async (req,res) => {
    const users = await db.User.findAll();

    res.send(users);
};

const getUsersById = async (req,res) => {
    const userId = Number(req.params.id);
    const targetUser = await db.users.findOne({ where: {id: userId }});

    res.send(targetUser)
};
const createNewUsers = (req,res) => {

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


