import { z } from "zod";

export const CreateCategorySchema = z.object({
  icon: z.string().url().optional(),
  name: z.string().min(3),
  parent: z.string().optional(),
  publishDate: z.date().optional(),
  visibility: z.string(),
});

export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = z.object({
  icon: z.string().url().optional(),
  id: z.string().uuid(),
  name: z.string().min(3),
  parent: z.string().optional(),
  publishDate: z.date().optional(),
  visibility: z.string(),
});

export type UpdateCategoryType = z.infer<typeof UpdateCategorySchema>;
