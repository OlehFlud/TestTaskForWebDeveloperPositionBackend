module.exports = (sequelize,DataTypes) =>{
    const User = sequelize.define('User', {


        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }

    },{
        tableName: 'users',
        timestamps: false
    });


    return User;

};
