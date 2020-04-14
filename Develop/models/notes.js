module.exports = function(sequelize, Datatypes){
    const Notes = sequelize.define("Notes", {

        note: Datatypes.STRING,

    })

    Notes.associate = function(models){
        Notes.belongsTo(models.Activities, {
            foreignKey: {
                allowNull: false,
            }
        });

    };
    return Notes;


};