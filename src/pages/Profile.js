import React, {Fragment} from 'react';
import Header from "../containers/Header";
import Posts from "../containers/Posts";
import AsyncPosts from "../containers/AsyncPosts";
import "../scss/post.scss"

const Profile = () => {
    return (
        <Fragment>
            <Header/>

            <div className="fixed-container">
                <Posts />
                <AsyncPosts />
            </div>
        </Fragment>
    );
};

export default Profile;
