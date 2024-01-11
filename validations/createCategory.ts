import { z } from "zod";

export const CreateCategorySchema = z.object({
  name: z.string().min(3),
  parent: z.string().optional(),
  publishDate: z.date().optional(),
  visibility: z.string(),
});

export type CreateCategoryType = z.infer<typeof CreateCategorySchema>;

export const UpdateCategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3),
  parent: z.string().optional(),
  publishDate: z.date().optional(),
  visibility: z.string(),
})

export type UpdateCategoryType = z.infer<typeof UpdateCategorySchema>;
