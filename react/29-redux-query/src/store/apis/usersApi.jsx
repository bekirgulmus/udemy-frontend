import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker/locale/tr";

const pause = (duration) => {
  return new Promise(resolve => setTimeout(resolve, duration));
}

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(build) {
    return {
      fetchUsers: build.query({
        providesTags:['User'],
        query:() => {
          return {
            url: '/users',
            method: 'GET'
          }
        }
      }),
      addUser: build.mutation({
        invalidatesTags: () => {
          return [{type: 'User'}]
        },
        query:() => {
          return {
            url: '/users',
            method: 'POST',
            body: {
              name: faker.person.fullName(),
            }
          }
        }
      }),
      removeUser: build.mutation({
        invalidatesTags: () => {
          return [{type: 'User'}]
        },
        query:(user) => {
          return {
            url: `/users/${user.id}`,
            method: 'DELETE',
          }
        }
      })
    }
  }
})

export const {
  useFetchUsersQuery,
  useAddUserMutation,
  useRemoveUserMutation
} = usersApi;
export { usersApi };
