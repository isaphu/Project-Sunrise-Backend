module.exports = (sequelize, DataType) => {
    const post = sequelize.define("post", {
        photo: {
            type: DataType.BLOB
        },
        text: {
            type: DataType.TEXT
        },
        timestamp: {
            type: DataType.DATE
        }
    })
    post.associate = (models) => {
        post.belongsTo(models.User, { foreignKey: 'user_id'});
    }
    return post;
}