import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker/locale/tr";

const pause = (duration) => {
  return new Promise(resolve => setTimeout(resolve, duration));
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(build) {
    return {
      fetchAlbums: build.query({
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: 'Album', id : album.id };
          });
          tags.push({type: 'UsersAlbum', id: user.id});

          return tags;
        },
        query:(user) => {
          return {
            url: '/albums',
            method: 'GET',
            params: {
              userId: user.id
            }
          }
        }
      }),
      addAlbum: build.mutation({
        invalidatesTags: (result, error, user)=> {
          return [{ type: 'UsersAlbum', id: user.id}]
        },
        query:(user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            }
          }
        }
      }),
      removeAlbum: build.mutation({
        invalidatesTags: (result, error, album)=> {
          return [{ type: 'Album', id: album.id}]
        },
        query:(album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          }
        }
      })
    }
  }
})

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation
} = albumsApi;
export { albumsApi };
