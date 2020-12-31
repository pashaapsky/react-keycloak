import {createSlice} from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [
            {
                id: 1,
                title: "title",
                body: "body",
                userId: 5
            }
        ]
    },
    reducers: {
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(item => item.id !== action.payload)
        }
    }
});


export const {addPost, deletePost} = postsSlice.actions;

export default postsSlice.reducer;