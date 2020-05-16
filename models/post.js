module.exports = (sequelize, DataType) => {
    const post = sequelize.define("post", {
        post_id: {
            type: DataType.INTEGER
        }, 
        
    })
}