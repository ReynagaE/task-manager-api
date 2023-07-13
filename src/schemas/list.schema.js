import { z } from "zod";

export const createListSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
});

export const updateListSchema = z.object({
  title: z.string().optional(),
});