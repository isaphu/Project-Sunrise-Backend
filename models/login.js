module.exports = (sequelize, DataType) => {
    const login = sequelize.define("login", {
        login_id: {
            type: DataType.INTEGER
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