module.exports = (sequelize, DataType) => {
    const contact_us = sequelize.define("contact_us", {
        contact_us_id: {
            type: DataType.INTEGER
        },
        
    })
}