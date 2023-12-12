import { Router } from "express";
import { createTodo, deleteTodo, getOneTodo, getTodos, newTodoValidation, updateTodo } from "../features/todos";

const router: Router = Router()

router.get('/todos', getTodos)
router.get('/todos/:id', getOneTodo)

router.post('/todos', newTodoValidation, createTodo)

router.put('/todos/:id', newTodoValidation, updateTodo)

router.delete('/todos/:id', deleteTodo)

export default router