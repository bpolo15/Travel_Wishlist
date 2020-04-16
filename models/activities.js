module.exports = function(sequelize, Datatypes){
    const Activities = sequelize.define("Activities", {

        activity: Datatypes.STRING,
        picture: Datatypes.STRING,

    })

    Activities.associate = function(models){
        Activities.belongsTo(models.Destination, {
            foreignKey: {
<<<<<<< HEAD:Develop/models/activities.js
                allowNull: false,
                // onDelete: "cascade"
=======
                allowNull: false
>>>>>>> 25febf10eaccdfe802844b86a36d703360cf886e:models/activities.js
            }
             
        });

        Activities.hasMany(models.Notes, {
<<<<<<< HEAD:Develop/models/activities.js
            onDelete: "cascade"
 
=======
            onDelete: 'cascade'
>>>>>>> 25febf10eaccdfe802844b86a36d703360cf886e:models/activities.js
        });
        Activities.hasMany(models.Resources, {
            onDelete: 'cascade'
        });
    };
    return Activities;


};