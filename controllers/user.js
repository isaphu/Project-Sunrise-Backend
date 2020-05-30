const db = require('../models');

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
const editUsersById = (req, res) => {
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

const deleteUsersById = (req, res) => {
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


