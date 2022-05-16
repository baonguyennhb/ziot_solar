var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + './public'));

var controller = require('../controllers/user.controller');
// var validate = require('../validate/user.validate');
// var middleware = require('../middlewares/auth.middleware');

router.get('/add', controller.add);
router.post('/add', controller.postAdd);

router.get('/edit/:id', controller.getEdit);
router.post('/edit/:id', controller.postEdit);

router.get('/delete/:id', controller.getDelete);




module.exports = router;
