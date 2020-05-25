const db = require('../models');

const getAllUsers = (req,res) => {
    const users = await db.User.findAll();

    res.send(users);
};
const getUsersById = (req,res) => {};
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


