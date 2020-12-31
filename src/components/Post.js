import React from 'react';
import {useDispatch} from "react-redux";

const Post = ({className, post, onDelete}) => {
    const dispatch = useDispatch();

    return (
        <div className={`${className} post`}>
            <div className="post__attributes">
                <p className="post__attr">
                    <strong>ID: </strong>
                    {post.id}
                </p>

                <p className="post__attr">
                    <strong>TITLE: </strong>
                    {post.title}
                </p>
                <p className="post__attr">
                    <strong>BODY: </strong>
                    {post.body}
                </p>

                <p className="post__attr">
                    <strong>USER_ID: </strong>
                    {post.userId}
                </p>
            </div>

            <button className="btn btn--post-delete" onClick={() => dispatch(onDelete(post.id))}>x</button>
        </div>
    );
};

export default Post;
