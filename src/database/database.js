import Sequelize from "sequelize";

export const sequelize = new Sequelize('sory', 'postgres', '0000', {

    host: 'localhost',
    dialect: 'postgres'

})