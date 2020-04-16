module.exports = function(sequelize, Datatypes){
    const Destination = sequelize.define("Destination", {

        location: Datatypes.STRING,
        picture: Datatypes.STRING

    })
 
    Destination.associate = function(models){
        Destination.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

<<<<<<< HEAD:Develop/models/destination.js
        // Destination.hasMany(models.Activities, {
        //     onDelete: "cascade"
        // });
=======
        Destination.hasMany(models.Activities, {
            onDelete: "cascade"
            // hooks: true
        });
>>>>>>> 25febf10eaccdfe802844b86a36d703360cf886e:models/destination.js
    };
    return Destination;


};