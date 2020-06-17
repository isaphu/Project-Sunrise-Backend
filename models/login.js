module.exports = (sequelize, DataType) => {
    const login = sequelize.define("login", {
        email: {
            type: DataType.STRING(150)
        },
        password: {
            type: DataType.STRING(150)
        },
        status: {
            type: DataType.BOOLEAN
        }
    })
    login.associate = (models) => {
        login.belongsTo(models.User, { foreignKey: 'user_id'});
    }
    return login;
}