import { Router } from "express"
import { Validate } from "../../middlewares/validate.js"
import {
  createUserSchema,
  updateUserSchema,
  userByIdSchema,
  listUserSchema,
} from "./user.validation.js"
import userController from "./user.controller.js"
import { ErrorHandler } from "../../middlewares/errorHandler.js"

const errorHandler = new ErrorHandler();
const validateInstance = new Validate();

const router = Router();

router.use(errorHandler.errorHandler)

router.post(
  "/",
  validateInstance.validate(createUserSchema),
  userController.createUser
);

router.get(
  "/",
  validateInstance.validate(listUserSchema),
  userController.listUsers
);

router.get(
  "/:id",
  validateInstance.validate(userByIdSchema),
  userController.getUser
);

router.patch(
  "/:id",
  validateInstance.validate(updateUserSchema),
  userController.updateUser
);

router.put(
  "/:id",
  validateInstance.validate(updateUserSchema),
  userController.updateUser
);

router.delete(
  "/:id",
  validateInstance.validate(userByIdSchema),
  userController.deleteUser
);

export default router;
