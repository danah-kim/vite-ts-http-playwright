import { z } from 'zod';

export const ApiSuccessResponse = <T>() => z.custom<T>();

export type ApiResponse<T = unknown> = z.infer<ReturnType<typeof ApiSuccessResponse<T>>> | ApiFailureResponse;

export interface ApiFailureResponse {
  message: 'FAILURE';
  code: null;
  data: null;
  errors: z.infer<typeof ErrorSchema>;
}

export const ErrorSchema = z.object({
  code: z.number(),
  message: z.string(),
});

export type ErrorType = z.infer<typeof ErrorSchema>;
