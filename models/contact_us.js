module.exports = (sequelize, DataType) => {
    const contact_us = sequelize.define("contact_us", {
        contact_us_id: {
            type: DataType.INTEGER
        },
        firstname: {
            type: DataType.varchar(100)
        },
        email: {
            type: DataType.varchar(100)
        },
        subject: {
            type: DataType.TEXT
        },
        details: {
            type: DataType.TEXT
        }

    })
}