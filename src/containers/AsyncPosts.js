import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "../components/Post";
import {deleteAsyncPost, loadAsyncPosts} from "../store/async/asyncSlice";

const AsyncPosts = () => {
    const asyncPosts = useSelector(state => state.async.posts);
    const loading = useSelector(state => state.async.loading);

    const dispatch = useDispatch();

    return (
        <section className="async-posts-section bg-blue">
            <h1>Async Posts</h1>

            {loading && <div>Loading ....</div>}

            {asyncPosts.length ? (
                <div className="async-posts ">
                    {asyncPosts.map(item => (
                        <Post className="async-posts__item" key={item.id} post={item} onDelete={deleteAsyncPost}/>
                    ))}
                </div>
            ) : (
                <Fragment>
                    <p>Посты еще не загружены</p>

                    <button onClick={() => dispatch(loadAsyncPosts())}>Загрузить посты</button>
                </Fragment>
            )}
        </section>
    );
};

export default AsyncPosts;
