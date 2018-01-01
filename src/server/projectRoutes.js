const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/:name', controllers.getHome);

router.post('/', controllers.postHome)

module.exports = router;
