import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../redux/action/Post';
import Pages from './Pages';

import "./Home.css";
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (

        <div className="products">
            <div className="Page">
                <Pages setCurrentId={setCurrentId} />
            </div>

            <div className="Form">
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </div>


        </div>
    );
};

export default Home;