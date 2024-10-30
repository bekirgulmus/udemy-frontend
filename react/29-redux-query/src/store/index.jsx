import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/usersApi.jsx";
import { albumsApi } from "./apis/albumsApi.jsx";
import { photosApi } from "./apis/photosApi.jsx";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath] : usersApi.reducer,
        [albumsApi.reducerPath] : albumsApi.reducer,
        [photosApi.reducerPath] : photosApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware)
})

setupListeners(store.dispatch);

export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} from './apis/photosApi.jsx'

export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} from './apis/albumsApi.jsx'

export {
    useFetchUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation
} from './apis/usersApi.jsx'
