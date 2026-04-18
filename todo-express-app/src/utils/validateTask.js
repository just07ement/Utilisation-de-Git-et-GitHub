const validateTaskCreation = (payload) => {
  const errors = [];

  if (!payload || typeof payload !== 'object') {
    errors.push('Le corps de la requête doit être un objet JSON.');
    return errors;
  }

  if (!payload.title || typeof payload.title !== 'string' || payload.title.trim().length === 0) {
    errors.push('Le champ "title" est requis et doit être une chaîne non vide.');
  }

  if (payload.description !== undefined && typeof payload.description !== 'string') {
    errors.push('Le champ "description" doit être une chaîne de caractères.');
  }

  if (payload.completed !== undefined && typeof payload.completed !== 'boolean') {
    errors.push('Le champ "completed" doit être un booléen.');
  }

  return errors;
};

const validateTaskUpdate = (payload) => {
  const errors = [];

  if (!payload || typeof payload !== 'object') {
    errors.push('Le corps de la requête doit être un objet JSON.');
    return errors;
  }

  if (Object.keys(payload).length === 0) {
    errors.push('Le corps de la requête est vide.');
  }

  if (payload.title !== undefined && (typeof payload.title !== 'string' || payload.title.trim().length === 0)) {
    errors.push('Si présent, le champ "title" doit être une chaîne non vide.');
  }

  if (payload.description !== undefined && typeof payload.description !== 'string') {
    errors.push('Si présent, le champ "description" doit être une chaîne.');
  }

  if (payload.completed !== undefined && typeof payload.completed !== 'boolean') {
    errors.push('Si présent, le champ "completed" doit être un booléen.');
  }

  return errors;
};

module.exports = {
  validateTaskCreation,
  validateTaskUpdate
};
