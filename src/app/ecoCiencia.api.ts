import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { IUser, IPost, IComment } from "../interfaces/index.ts";

export const ecoCienciaApi = createApi({
  reducerPath: "ecoCienciaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    // User endpoint
    getAllUsers: builder.query<IUser[], void>({
      query: () => "/user/",
    }),
    getUserById: builder.query<IUser, string>({
      query: (_id) => `/user/${_id}`,
    }),
    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (user) => ({
        url: "/user/create",
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation<IUser, Partial<IUser>>({
      query: (user) => ({
        url: `/user/update/${user._id}`,
        method: "PUT",
        body: user,
      }),
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          ecoCienciaApi.util.updateQueryData(
            "getUserById",
            _id || "",
            (draft) => {
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    // Post endpoint
    getAllPosts: builder.query<IPost[], void>({
      query: () => "/post/",
    }),
    getPostById: builder.query<IPost, string>({
      query: (_id) => `/post/${_id}`,
    }),
    getPostsByUserId: builder.query<IPost[], string>({
      query: (_id) => `/post/user/${_id}`,
    }),
    createPost: builder.mutation<IPost, Partial<IPost>>({
      query: (post) => ({
        url: "/post/create",
        method: "POST",
        body: post,
      }),
    }),
    updatePost: builder.mutation<IPost, Partial<IPost>>({
      query: (post) => ({
        url: `/post/update/${post._id}`,
        method: "PUT",
        body: post,
      }),
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          ecoCienciaApi.util.updateQueryData(
            "getPostById",
            _id || "",
            (draft) => {
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deletePost: builder.mutation<object, string>({
      query: (_id) => ({
        url: `/post/delete/${_id}`,
        method: "DELETE",
      }),
    }),

    // Comment endpoint
    getAllComments: builder.query<IComment[], void>({
      query: () => "/comment/",
    }),
    getCommentById: builder.query<IComment, string>({
      query: (_id) => `/comment/${_id}`,
    }),
    getCommentsByUserId: builder.query<IComment[], string>({
      query: (_id) => `/comment/user/${_id}`,
    }),
    getCommentsByPostId: builder.query<IComment[], string>({
      query: (_id) => `/comment/post/${_id}`,
    }),
    createComment: builder.mutation<IComment, Partial<IComment>>({
      query: (comment) => ({
        url: "/comment/create",
        method: "POST",
        body: comment,
      }),
    }),
    updateComment: builder.mutation<IComment, Partial<IComment>>({
      query: (comment) => ({
        url: `/comment/update/${comment._id}`,
        method: "PUT",
        body: comment,
      }),
      async onQueryStarted({ _id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          ecoCienciaApi.util.updateQueryData(
            "getCommentById",
            _id || "",
            (draft) => {
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteComment: builder.mutation<object, string>({
      query: (_id) => ({
        url: `/comment/delete/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
