const db = require('../models');

const getAllUsers = (req,res) => {
    const users = await db.User.findAll();

    res.send(users);
};

const getUsersById = async (req,res) => {
    const userId = req.params.id;
    const targetUser = await db.users.findOne({ where: {id: userId }});

};
const createNewUsers = (req,res) => {};
const editUsersById = (req,res) => {};
const deleteUsersById = (req,res) => {};

module.exports = {
    getAllUsers,
    getUsersById,
    createNewUsers,
    editUsersById,
    deleteUsersById,
};


