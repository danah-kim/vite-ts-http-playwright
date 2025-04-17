import { z, type ZodType } from 'zod';

import { http } from './http';

/**
 * API 메서드 타입 정의
 * GET, PUT 메서드를 포함합니다.
 */
type Method = typeof http.get | typeof http.put;

/**
 * 안전한 API 호출을 위한 팩토리 함수
 *
 * @template A - API 메서드의 매개변수 타입
 * @param method - API 호출 메서드 (get, patch, put, post, delete)
 * @returns Zod 스키마를 받는 함수를 반환합니다.
 */
const safeFactory =
  <A extends Parameters<Method>>(method: (...args: A) => ReturnType<Method>) =>
  <Z extends ZodType>(zodSchema: Z) =>
  async (...args: A): Promise<z.infer<Z>> => {
    const response = await method(...args);

    const parsed = zodSchema.safeParse(response);

    if (parsed.error) {
      throw new Error('API_TYPE_NOT_MATCH');
    }

    return parsed.data;
  };

export const safeHttp = {
  get: safeFactory(http.get),
  patch: safeFactory(http.patch),
  put: safeFactory(http.put),
  post: safeFactory(http.post),
  delete: safeFactory(http.delete),
};
