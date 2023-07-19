import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../schemas/task.schema.js";
import {
  getLists,
  getList,
  createList,
  updateList,
  deleteList,
} from "../controllers/list.controller.js";
import {
  createListSchema,
  updateListSchema,
} from "../schemas/list.schema.js";

const router = Router();

// Tasks Routes
router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put(
  "/tasks/:id",
  authRequired,
  validateSchema(updateTaskSchema),
  updateTask
);

// Lists Routes
router.get("/lists", authRequired, getLists);
router.get("/lists/:id", authRequired, getList);
router.post(
  "/lists",
  authRequired,
  validateSchema(createListSchema),
  createList
);
router.put(
  "/lists/:id",
  authRequired,
  validateSchema(updateListSchema),
  updateList
);
router.delete("/lists/:id", authRequired, deleteList);

export default router;
