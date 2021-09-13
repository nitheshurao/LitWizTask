
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Page from './Pagee/Page';
import './Pages.css';





const Pages = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    console.log(posts)

    return (
        !posts.length ? <CircularProgress /> : (

            <div className="product">
                {
                    posts.map((post) => (


                        <Page post={post} setCurrentId={setCurrentId} />

                    ))
                }
            </div>

        )
    );
};

export default Pages;