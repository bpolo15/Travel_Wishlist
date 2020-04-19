module.exports = function(sequelize, Datatypes){
    const Activities = sequelize.define("Activities", {

        activity: Datatypes.STRING,
        picture: Datatypes.STRING,
        note: Datatypes.STRING,
        resource: Datatypes.STRING,
        description: Datatypes.STRING

    })

    Activities.associate = function(models){
        Activities.belongsTo(models.Destination, {
            foreignKey: {
                allowNull: false,
            }
             
        });

    };
    return Activities;


};