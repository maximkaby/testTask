const Comment = require('../models/comment');

class CommentController {

  static addComment(req, res) {
    Comment.create({
      message: req.body.message,
      user_id: Number(req.body.user_id),
      task_id: Number(req.body.task_id)
    }).then(comment => {
      res.send(comment);
    }).catch(err => {
      res.send('error');
    });
  }

  static deleteComment(req, res) {
    Comment.findById(Number(req.body.comment_id))
      .then(comment => {
        comment.destroy();
        res.send(comment);
      })
      .catch(err => {
        res.send('error');
      })
  }

  static updateComment(req, res) {
    Comment.findById(Number(req.body.comment_id))
      .then(comment => {
        comment.message = req.body.new_message;
        comment.save();
        res.send(comment);
      })
      .catch(err => {
        res.send('error');
      })
  }

  static getComments(req, res) {
    Comment.findAll({
      where: {
        task_id: Number(req.body.task_id),
        user_id: req.user.dataValues.id
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }).then(comments => {
      res.send(comments);
    }).then(err => {
      res.send('error');
    })
  }


}

module.exports = CommentController;