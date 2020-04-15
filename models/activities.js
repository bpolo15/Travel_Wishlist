module.exports = function(sequelize, Datatypes){
    const Activities = sequelize.define("Activities", {

        activity: Datatypes.STRING,
        picture: Datatypes.STRING,

    })

    Activities.associate = function(models){
        Activities.belongsTo(models.Destination, {
            foreignKey: {
                allowNull: false
            }
             
        });

        Activities.hasMany(models.Notes, {
            onDelete: 'cascade'
        });
        Activities.hasMany(models.Resources, {
            onDelete: 'cascade'
        });
    };
    return Activities;


};