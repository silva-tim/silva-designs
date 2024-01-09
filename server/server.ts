import "dotenv/config";
import express from "express";
import pg from "pg";

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get("/api/details/:productId", async (req, res, next) => {
  const productId = Number(req.params.productId);
});
