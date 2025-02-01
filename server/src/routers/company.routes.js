import { Router } from "express";
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getMyCompanies,
  getMyCompanyById,
} from "../controllers/company.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const companyRouter = Router();

companyRouter.get("/companies", getAllCompanies); //  🌍  
companyRouter.get("/companies/:id", getCompanyById); //  🌍  

companyRouter.post("/register", authenticateToken, createCompany); // ⚡
companyRouter.get("/my/companies", authenticateToken, getMyCompanies); // ⚡
companyRouter.get("/my/companies/:id", authenticateToken, getMyCompanyById); // ⚡
companyRouter.patch("/companies/:id", authenticateToken, updateCompanyById); // ⚡
companyRouter.delete("/companies/:id", authenticateToken, deleteCompanyById); // ⚡

export default companyRouter;

// ✅  Student Test
// ❌  Student Test

// ⚡ Recruiter Test
// ⚠️ Recruiter Test

// 🌍 Public Test
