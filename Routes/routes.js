const express = require('express')
const router = express.Router()
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController');
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const multerconfig = require('../Middlewares/multerMiddleware');

// Route for register
router.post('/register',userController.register)
// Route for login
router.post('/login',userController.login)
//route for addd project
router.post('/addproject',jwtMiddleware,multerconfig.single('projectImage'), projectController.addProjects)
//get home projects
router.get('/home-projects',projectController.getHomeProjects)
//get all projects
router.get('/all-projects',jwtMiddleware,projectController.getAllprojects)
//getuser projects
router.get('/user-projects',jwtMiddleware,projectController.getUserprojects)


module.exports = router