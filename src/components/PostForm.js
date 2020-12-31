import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addPost} from "../store/posts/postsSlice";

const PostForm = () => {
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        // if (!body.trim() && !title.trim()) {
        //     return
        // }

        let newPost = {
            id: Number(new Date()),
            title,
            body,
            userId: 5
        };

        dispatch(addPost(newPost));

        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={title} name="title" placeholder="title" onChange={(e) => setTitle(e.target.value)}
            />

            <input type="text" value={body} name="body" placeholder="body"
                   onChange={(e) => setBody(e.target.value)}
            />

            <button type="submit">Добавить пост</button>
        </form>
    );
};

export default PostForm;
