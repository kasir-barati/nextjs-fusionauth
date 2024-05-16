import { createApi } from '@reduxjs/toolkit/query/react';
import { createBaseQuery } from './create-base-query.api';

const baseQuery = createBaseQuery(process.env.NEXT_PUBLIC_BACKEND_BASE_URL!);
const reducerPath = 'authApi';
const tagTypes: string[] = [];

export const authApi = createApi({
  baseQuery,
  reducerPath,
  tagTypes: tagTypes,
  endpoints(build) {
    return {
      signUp: build.mutation<any, any>({
        query(body) {
          return {
            url: 'auth/register',
            method: 'POST',
            body,
          };
        },
      }),
    };
  },
});
export const { useSignUpMutation } = authApi;
