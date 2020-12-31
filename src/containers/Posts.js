import React, {Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {deletePost} from '../store/posts/postsSlice';
import Post from "../components/Post";
import PostForm from "../components/PostForm";

const Posts = () => {
    const posts = useSelector(state => state.posts.posts);

    return (
        <section className="posts-section bg-blue">
            <h1>My Posts</h1>

            <div className="posts">
                {posts.length ? (
                    posts.map(item => (
                        <Post className="posts__item" key={item.id} post={item} onDelete={deletePost}/>
                    ))
                ) : (
                    <p className="posts__paragraph">Еще нет постов</p>
                )}
            </div>

            <PostForm />
        </section>

    );
};

export default Posts;
