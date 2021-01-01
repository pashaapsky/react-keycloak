import React, {Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {clearError} from '../store/appSlice';
import "../scss/error.scss";

const Error = () => {
    const errors = useSelector(state => state.app.errors);

    const dispatch = useDispatch();

    const handleClose = (event) => {
        dispatch(clearError());
    };

    return errors ? (
            <div className="error">
                <div className="error__title">
                    <strong>Error</strong>
                    {errors}
                </div>

                <button className="btn " onClick={handleClose}>x</button>
            </div>
    ) : null;
};

export default Error;
