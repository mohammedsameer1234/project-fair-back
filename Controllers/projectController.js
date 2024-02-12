const projects = require('../Models/projectModel')

exports.addProjects= async (req,res)=>{
    console.log("Inside Add Project  API");
    const {title,overview,language,github,website} = req.body
    const projectImage = req.file.filename
    const userId =req.payload
    //console.log(title,overview,language,github,website,projectImage,userId);
    
    try{
        const existingProject = await projects.findOne({github})
        if (existingProject){
            res.status(406).json("project alredy exists....try anothe one")
        }else{
            const newProject = new projects({
                title,overview,language,github,website,projectImage,userId
            })
             await newProject.save()
             res.status(200).json(newProject)
        }
    }catch(err){
             res.status(401).json(err)
    }
}
//get home page projects
exports.getHomeProjects = async (req,res)=>{
    try{
        const allProjects = await projects.find().limit(3)
        res.status(200).json(allProjects)
    }catch{
        res.status(401).json(err)
    }
}

//get all projects

exports.getAllprojects = async (req,res)=>{
    try{
        const allProjects = await projects.find()
        res.status(200).json(allProjects)
    }catch(err){
        res.status(401).json(err)
    }
}

//get user projects

exports.getUserprojects = async (req,res)=>{
    const userId = req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(err)
    }
}