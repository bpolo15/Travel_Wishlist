module.exports = function(sequelize, Datatypes){
    const Resources = sequelize.define("Resources", {

        resource: Datatypes.STRING,
        description: Datatypes.STRING,

    })

    Resources.associate = function(models){
        Resources.belongsTo(models.Activities, {
            foreignKey: {
                allowNull: false,
            }
        });
    };
    return Resources;


};