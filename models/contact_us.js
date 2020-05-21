module.exports = (sequelize, DataType) => {
    const contact_us = sequelize.define("contact_us", {
        contact_us_id: {
            type: DataType.INTEGER
        },
        firstname: {
            type: DataType.STRING(150)
        },
        email: {
            type: DataType.STRING(150)
        },
        subject: {
            type: DataType.TEXT
        },
        details: {
            type: DataType.TEXT
        }

    })
    contact_us.associate = (models) => {
        contact_us.belongsTo(models.user)
    }
    return contact_us;
}