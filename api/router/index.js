let express = require('express');
let passport = require('passport');
const User = require('../models/user');
const router = express.Router();
const UserController = require('../controllers/UserController');
const LolController = require('../controllers/LolController');
const ProjectController = require('../controllers/ProjectController');
const TaskController = require('../controllers/TaskController');
const CommentController = require('../controllers/CommentController');

router.post('/test', UserController.test);
router.post('/testlol', LolController.test);
router.post('/register', UserController.register)

router.get('/user',
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json(req.user);
  })

router.post('/addProject',
  passport.authenticate('bearer', { session: false }),
  ProjectController.addProject
);

router.post('/getUserProjects',
  passport.authenticate('bearer', { session: false }),
  ProjectController.getUserProjects
);

router.post('/addTask',
  passport.authenticate('bearer', { session: false }),
  TaskController.addTask
);

router.post('/setStatusTask',
  passport.authenticate('bearer', { session: false }),
  TaskController.setStatusTask
);

router.post('/getTasksProject',
  passport.authenticate('bearer', { session: false }),
  ProjectController.getTasksProject
);

router.post('/addProjectDeveloper',
  passport.authenticate('bearer', { session: false }),
  ProjectController.addProjectDeveloper
);

router.post('/searchDeveloper',
  passport.authenticate('bearer', { session: false }),
  UserController.searchDeveloper
);

router.post('/addComment',
  passport.authenticate('bearer', { session: false }),
  CommentController.addComment
);

router.post('/deleteComment',
  passport.authenticate('bearer', { session: false }),
  CommentController.deleteComment
);

router.post('/updateComment',
  passport.authenticate('bearer', { session: false }),
  CommentController.updateComment
);




module.exports = router;