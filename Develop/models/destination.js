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

        Destination.hasMany(models.Activities, {
            onDelete: "cascade"
            // hooks: true
        });
    };
    return Destination;


};