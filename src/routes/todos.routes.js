//importar el router de express
const { Router } = require('express');
const {getAllTodo, getTodosById, createTodo, updateTodo, deleteTodo, getTodoWithCategories} = require('../controllers/todos.controller');

const router = Router(); //enrutador

router.get('/todos', getAllTodo);

router.get('/todos/:id', getTodosById);

router.get('/todos/:id/categories', getTodoWithCategories);

router.post('/todos', createTodo);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);


module.exports = router; //para que podamos usarlo en nuestro app.json 
//aqui exportamos el userRouter en app.js