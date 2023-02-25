import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
    // throw new Error('Project Failed')   Lanza un error creado por nosotros mismos
    try {
        // throw new Error('Query Failed')
        const projects = await Project.findAll()
        // console.log(projects)
        // res.send('projects')
        res.json(projects)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}


export const getProject = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findOne({
            where: {
                id
            }
        });
        if (!project) return res.status(404).json({ message: 'Project does not exist' })
        res.json(project)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}


export const createProject = async (req, res) => {
    const { name, priority, description } = req.body

    try {
        const newProject = await Project.create({
            name,
            description,
            priority
        })
        // console.log(newProject);

        // res.send('creating projects')
        res.json(newProject);
    }
    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const updateProject = async (req, res) => {

    try {
        const { id } = req.params;

        const { name, priority, description } = req.body


        const project = await Project.findByPk(id)
        project.name = name
        project.priority = priority
        project.description = description

        await project.save()
        res.json({ project })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }



    // console.log(project);
    // res.send('Updating')
    // console.log(id, req.body);
    // res.send('Updating Project')
}


export const deleteProject = async (req, res) => {

    try {
        const { id } = req.params
        await Project.destroy({
            where: {
                id
            }
        })
        // console.log(req.params.id);
        // res.send('Deleting Project')
        // console.log(req.params.id);
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const getProjectTasks = async (req, res) => {
    const { id } = req.params
    const tasks = await Task.findAll({
        where: { projectId: id }
    })
    res.json(tasks)







}



