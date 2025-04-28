// apps/server/src/index.ts
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import memberRoutes from "./routes/member";
import errorMW from "./middleware/error";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/members", memberRoutes); // ← matches client axios
app.use(errorMW);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`API ready on :${PORT}`));
