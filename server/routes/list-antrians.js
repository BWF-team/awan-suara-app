let express = require('express')
let router = express.Router()
let Controller = require('../controllers/listController')

/* GET home page. */
router.post('/list', Controller.addList );

router.get('/list', Controller.getList);

router.get('/list/:id', Controller.getListById)
//
router.put('/list/:_id', Controller.updateList);

router.delete('/list/:_id', Controller.deleteList);

module.exports = router;
