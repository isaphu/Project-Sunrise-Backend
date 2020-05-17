module.exports = (sequelize, DataType) => {
    const user = sequelize.define("user", {
        user_id: {
            type: DataType.INTEGER
        },
        firstname: {
            type: DataType.varchar(100)
        },
        lastname: {
            type: DataType.varchar(100)
        },
        email: {
            type: DataType.varchar(100)
        },
        password: {
            type: DataType.varchar(100)
        },
        status: {
            type: DataType.BOOLEAN
        }
    })
}