const taskService = require('../services/taskService');
const { validateTaskCreation, validateTaskUpdate } = require('../utils/validateTask');

const parseTaskId = (value) => Number.parseInt(value, 10);

const listTasks = (req, res) => {
  res.status(200).json(taskService.listTasks());
};

const getTask = (req, res) => {
  const id = parseTaskId(req.params.id);
  const task = taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({ message: 'Tâche introuvable.' });
  }

  return res.status(200).json(task);
};

const createTask = (req, res) => {
  const validationErrors = validateTaskCreation(req.body);

  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  const task = taskService.createTask({
    title: req.body.title.trim(),
    description: req.body.description ? req.body.description.trim() : '',
    completed: req.body.completed ?? false
  });

  return res.status(201).json(task);
};

const updateTask = (req, res) => {
  const id = parseTaskId(req.params.id);
  const validationErrors = validateTaskUpdate(req.body);

  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  const task = taskService.updateTask(id, {
    title: req.body.title !== undefined ? req.body.title.trim() : undefined,
    description: req.body.description !== undefined ? req.body.description.trim() : undefined,
    completed: req.body.completed
  });

  if (!task) {
    return res.status(404).json({ message: 'Tâche introuvable.' });
  }

  return res.status(200).json(task);
};

const deleteTask = (req, res) => {
  const id = parseTaskId(req.params.id);
  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Tâche introuvable.' });
  }

  return res.status(204).send();
};

module.exports = {
  listTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
