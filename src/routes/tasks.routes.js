import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, deleteTask, updateTask } from "../controllers/tasks.controller.js";
import { createTaskSchema } from "../schemas/task.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createList, getLists, getList, updateList, deleteList } from "../controllers/list.controller.js";
import { createListSchema, updateListSchema } from "../schemas/list.schema.js";

const router = Router();

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask);
router.delete('/tasks/:id', authRequired, deleteTask);
router.put('/tasks/:id', authRequired, updateTask);

router.get('/lists', authRequired, getLists);
router.get('/lists/:id', authRequired, getList);
router.post('/lists', authRequired, validateSchema(createListSchema), createList);
router.put('/lists/:id', authRequired, validateSchema(updateListSchema), updateList);
router.delete('/lists/:id', authRequired, deleteList);

export default router;
