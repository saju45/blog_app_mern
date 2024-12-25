import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connect from "./connection/connection.js";
import adminRouter from "./routes/admin.js";
import blogRouter from "./routes/blog.js";
import categoryRouter from "./routes/category.js";
import userRouter from "./routes/userRoute.js";
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
dotenv.config();

// routes
app.use("/blog", blogRouter);
app.use("/users", userRouter);

// admin routes
app.use("/admin", adminRouter);
app.use("/category", categoryRouter);

// connect to MongoDB
await connect();

// port
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
