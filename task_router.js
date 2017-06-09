const express = require('express');
const cors = require('cors');
const tc = require('./task_controller');
const router = express.Router();

router.options('*', cors());
router.use(cors());

router.get('/', tc.get);
router.post('/', tc.add);
router.patch('/:id', tc.patch);
router.delete('/:id', tc.delete);
router.put('/:id', tc.complete);

module.exports = router;