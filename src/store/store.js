import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import asyncReducer from './async/asyncSlice';
import postsReducer from './posts/postsSlice';

export default configureStore({
    reducer: {
        app: appReducer,
        posts: postsReducer,
        async: asyncReducer
    }
})