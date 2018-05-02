const Task = require('../models/task');

class TaskController {

  static addTask(req, res) {
    Task.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.user.dataValues.id,
      project_id: Number(req.body.projectId)
    }).then(task => {
      res.send(task)
    }).catch(err => {
      res.send('error');
    });
  }

  static setStatusTask(req, res) {
    Task.findById(Number(req.body.task_id))
      .then(task => {
        task.status = String(req.body.status);
        task.save();
        res.send(task);
      }).catch(err => {
      res.send('error');
    });
  }

  static setDeveloperTask(req, res) {
    Task.findById(Number(req.body.task_id))
      .then(task => {
        task.developer_id = Number(req.body.developer_id);
        task.save();
        res.send(task);
      }).catch(err => {
      res.send('error');
    });
  }
}


module.exports = TaskController;