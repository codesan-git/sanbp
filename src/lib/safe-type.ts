import { z } from "zod";

export const todosSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string().min(6),
  completed: z.boolean()
})

export type TodosValidationSchema = z.infer<typeof todosSchema>