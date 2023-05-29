import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  //  name
  reducerPath: "api",
  // configure queries
  baseQuery: fetchBaseQuery({
    // json-server url
    baseUrl: "http://localhost:3004",
  }),
  endpoints: (builder) => ({
    // http requests
    getTasks: builder.query({
      query: () => "/tasks",
      // Tag to name this function
      providesTags: ["Task"],
      // once our function returns our data, we can transform them - sorting
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      // calling tha function named with Task tag - reloading
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      // calling tha function named with Task tag - reloading
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PUT",
        body: task,
      }),
      // calling tha function named with Task tag - reloading
      invalidatesTags: ["Task"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = apiSlice;
