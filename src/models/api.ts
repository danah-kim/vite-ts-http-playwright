import { z } from 'zod';

export const APIResponse = <T>() => z.custom<T>();

export const ErrorSchema = z.object({
  code: z.number(),
  message: z.string(),
});

export type ErrorType = z.infer<typeof ErrorSchema>;
