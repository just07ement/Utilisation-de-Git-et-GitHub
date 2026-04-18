const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', taskController.listTasks);
router.get('/:id(\\d+)', taskController.getTask);
router.post('/', taskController.createTask);
router.put('/:id(\\d+)', taskController.updateTask);
router.delete('/:id(\\d+)', taskController.deleteTask);

module.exports = router;
