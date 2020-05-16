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
}