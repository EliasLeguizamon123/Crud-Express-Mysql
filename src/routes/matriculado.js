const router = require('express').Router();

const matriculadoController = require('../controllers/matriculadoController');

router.get('/', matriculadoController.list);
router.post('/add', matriculadoController.save);
router.get('/update/:nro_matricula', matriculadoController.edit);
router.post('/update/:nro_matricula', matriculadoController.update);
router.get('/delete/:nro_matricula', matriculadoController.delete);

module.exports = router;
