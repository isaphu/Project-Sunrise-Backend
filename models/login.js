module.exports = (sequelize, DataType) => {
    const login = sequelize.define("login", {
        login_id: {
            type: DataType.INTEGER
        },
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
        login.belongsTo(models.user)
    }
    return login;
}