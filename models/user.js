module.exports = (sequelize, DataType) => {
    const user = sequelize.define("user", {
        user_id: {
            type: DataType.INTEGER
        },
        firstname: {
            type: DataType.varchar(150)
        },
        lastname: {
            type: DataType.varchar(150)
        },
        email: {
            type: DataType.varchar(150)
        },
        password: {
            type: DataType.varchar(150)
        },
        status: {
            type: DataType.BOOLEAN
        }
    })
    user.associate = (models) => {
        user.hasMany(models.contact_us, {user_id})
        user.hasMany(models.login, {user_id})
        user.hasMany(models.post, {user_id}) 
    }
    return user;
}