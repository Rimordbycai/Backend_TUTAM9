const pool = require('../database/pgDatabase');

exports.getAllTodos = async () => {
  const result = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
  return result.rows;
};

exports.createTodo = async (title, description) => {
  const result = await pool.query(
    'INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  return result.rows[0];
};

exports.updateTodo = async (id, title, description) => {
  const result = await pool.query(
    'UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *',
    [title, description, id]
  );
  return result.rows[0];
};

exports.updateTodoStatus = async (id, completed) => {
  const result = await pool.query(
    'UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *',
    [completed, id]
  );
  return result.rows[0];
};

exports.deleteTodoById = async (id) => {
  const result = await pool.query(
    'DELETE FROM todos WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
};
