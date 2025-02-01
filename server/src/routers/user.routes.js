import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUserById,
  getAllUsersAdmin,
} from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/register", registerUser); // ✅ ⚡
userRouter.post("/login", loginUser); // ✅ ⚡
userRouter.post("/logout", authenticateToken, logoutUser); // ✅ ⚡

userRouter.get("/profile", authenticateToken, getUserProfile); // ✅ ⚡
userRouter.patch("/profile/update", authenticateToken, updateUserProfile); // ✅ ⚡
userRouter.get("/users", authenticateToken, getAllUsers); // ✅  ⚡
userRouter.delete("/users/:id", authenticateToken, deleteUserById); // ✅ ⚡

userRouter.get("/admin/users", authenticateToken, getAllUsersAdmin);

export default userRouter;

// ✅  Student Test
// ❌  Student Test

// ⚡ Recruiter Test
// ⚠️ Recruiter Test
