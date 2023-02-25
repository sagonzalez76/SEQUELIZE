import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";



export const Project = sequelize.define('Projects', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    priority: {
        type: DataTypes.INTEGER
    },

    description: {
        type: DataTypes.STRING
    },
}, {
    // timestamps: false Borra el Created at y el Updated at de la tabla Projects en la BD, con ayuda del {{force:true}} en index.js
    timestamps: true

});


Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
})


