import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: ["http://localhost:3000"], // allow Next.js frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
