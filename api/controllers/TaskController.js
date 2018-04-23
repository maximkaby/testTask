const Task = require('../models/task');

class TaskController {

  static addTask(req, res) {
    Task.create({
      title: 'foo',
      description: req.body.description,
      user_id: req.user.dataValues.id,
      project_id: Number(req.body.project_id)
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
}


module.exports = TaskController;