const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/', controllers.getAllProjects);

router.post('/', controllers.postHome)

module.exports = router;
