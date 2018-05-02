const Project = require('../models/project');
const Task = require('../models/task');
const Op = require('sequelize').Op;

class ProjectController {

  static addProject(req, res) {
    Project.create({
      title: req.body.title,
      description: req.body.description || '',
      user_id: req.user.dataValues.id
    }).then(project => {
      res.send(project);
    }).catch(err => {
      res.send('error');
    });

    // res.send(req.user);
  }

  static getUserProjects(req, res) {
    console.log(req.headers, 'user data');
    Project.findAll({
      where: {
        user_id: req.user.dataValues.id
      }
    }).then(projects => {
      res.send(projects)
    }).catch(err => {
      res.send('error');
    });
  }

  static getTasksProject(req, res) {
    Task.findAll({
      where: {
        project_id: req.body.projectId,
        // user_id
      }
    }).then(tasks => {
      res.send(tasks)
    }).catch(err => {
      res.send('error');
    });
  }

  static addProjectDeveloper(req, res) {
    Project.findOne({
      where: {
        id: Number(req.body.project_id)
      }
    }).then(project => {
      let developer_id = Number(req.body.developer_id);
      let dev_id = project.developers_id === null ? null : JSON.parse(project.developers_id);
      if(!(dev_id instanceof Array)) {
        dev_id = [developer_id];
      } else {
        if(dev_id.indexOf(developer_id) === -1)
          dev_id.push(developer_id);
      }
      project.developers_id = JSON.stringify(dev_id);
      project.save();
      res.send(project);
    }).catch(err => {
      res.send('error');
    })
  }

  static getDevProjects(req, res) {
    console.log(req.user.dataValues.id);
    Project.findAll({
      where: {
        developers_id: {
          [Op.like]: '%,' + String(req.user.dataValues.id) + ',%',
          [Op.like]: '%[' + String(req.user.dataValues.id) + ']%',
          [Op.like]: '%,' + String(req.user.dataValues.id) + ']%'
        }
      }
    }).then(projects => {
      res.send(projects);
    }).error(err => res.send(err));
  }
}

module.exports = ProjectController;