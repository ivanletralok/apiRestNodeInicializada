const { Router } = require('express');
const { getuser, putuser, postuser, deleteuser } = require('../controller/users');

const router = Router();

router.get('/', getuser);
router.put('/:id', putuser)
router.post('/', postuser)
router.delete('/:id', deleteuser)

module.exports = router;