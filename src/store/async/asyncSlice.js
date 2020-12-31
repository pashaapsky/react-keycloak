import {createSlice} from "@reduxjs/toolkit";
import {setError} from "../appSlice";
import axios from "axios";

const asyncSlice = createSlice({
    name: "async",
    initialState: {
        posts: [],
        loading: false,
    },
    reducers: {
        addAsyncPosts: (state, action) => {
            state.posts = [...state.posts, ...action.payload]
        },
        deleteAsyncPost: (state, action) => {
            state.posts = state.posts.filter(item => item.id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
});

export const {addAsyncPosts, setLoading, deleteAsyncPost, endLoading} = asyncSlice.actions;

export const loadAsyncPosts = () => async dispatch => {
    try {
        dispatch(setLoading(true));

        await new Promise(function (resolve, reject) {
            setTimeout(() => resolve(), 2000);
        });

        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(res => res.data);

        console.log('posts', posts);

        if (posts) {
            dispatch(addAsyncPosts(posts));
            dispatch(setLoading(false));
        }
    } catch (e) {
        console.error(e.message);
        dispatch(setError(e.message));
        dispatch(setLoading(false));
    }
};


export default asyncSlice.reducer;