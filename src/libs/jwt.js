import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const createAccessToken = (payload) => {
  return jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" });
};