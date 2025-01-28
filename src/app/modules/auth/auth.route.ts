import express from "express";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router.post("/register", AuthControllers.registerUser);
router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationShcema),
  AuthControllers.loginUser
);

export const AuthRoutes = router;
