const tasks = [];
let nextId = 1;

const listTasks = () => tasks;

const getTaskById = (id) => tasks.find((task) => task.id === id);

const createTask = ({ title, description = '', completed = false }) => {
  const newTask = {
    id: nextId++,
    title,
    description,
    completed,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, updatedFields) => {
  const task = getTaskById(id);

  if (!task) {
    return null;
  }

  if (updatedFields.title !== undefined) {
    task.title = updatedFields.title;
  }

  if (updatedFields.description !== undefined) {
    task.description = updatedFields.description;
  }

  if (updatedFields.completed !== undefined) {
    task.completed = updatedFields.completed;
  }

  return task;
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return false;
  }

  tasks.splice(taskIndex, 1);
  return true;
};

module.exports = {
  listTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
