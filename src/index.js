import app from "./app.js";
import { sequelize } from "./database/database.js";
// import { Project } from "./models/Project.js";
// import { Task } from "./models/Task.js";


async function main() {
    try {
        // await sequelize.authenticate();
        await sequelize.sync({force:false}); 
        //Se usa para forzar la creacion de una nueva tabla, aun cuando esta ya existe
        // model sincronization en Sequealize docs
        // await sequelize.sync();

        console.log('Connection has been established successfully.'); app.listen(4000)
        console.log('Server is listening on port', 4000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main();


