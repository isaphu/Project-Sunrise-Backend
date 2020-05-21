module.exports = (sequelize, DataType) => {
    const post = sequelize.define("post", {
        post_id: {
            type: DataType.INTEGER
        }, 
        photo: {
            type: DataType.BLOB
        },
        text: {
            type: DataType.text
        },
        timestamp: {
            type: DataType.DATE
        }
    })
    post.associate = (models) => {
        post.belongsTo(models.user)
    }
    return post;
}