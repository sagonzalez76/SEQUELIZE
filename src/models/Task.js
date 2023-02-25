import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Task = sequelize.define('Tasks', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING
    },

    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

}, {
    // timestamps: false Borra el Created at y el Updated at de la tabla Projects en la BD, con ayuda del {{force:true}} en index.js
    timestamps: false

})