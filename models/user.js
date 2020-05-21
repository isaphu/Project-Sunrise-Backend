module.exports = (sequelize, DataType) => {
    const user = sequelize.define("user", {
        user_id: {
            type: DataType.INTEGER
        },
        firstname: {
            type: DataType.STRING(150)
        },
        lastname: {
            type: DataType.STRING(150)
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
    user.associate = (models) => {
        user.hasMany(models.contact_us, { foreignKey: 'user_id'});
        user.hasMany(models.login, { foreignKey: 'user_id'});
        user.hasMany(models.post, { foreignKey: 'user_id'});
    }
    return user;
}