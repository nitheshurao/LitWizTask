import React from 'react'
import './Page.css';
import { CardMedia } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DeleteIcon from '@material-ui/icons/Delete'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/action/Post'
import { Link } from "react-router-dom";
const Page = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();


    console.log(post)
    const { _id, title, file, file1, file2, description, detail } = post;
    return (
        <div className="head">

            <div className="h-de"> <h1>{title} </h1>
                <button className="btn" onClick={() => dispatch(deletePost(_id),
                    console.log("delte" + _id))}
                >
                    <DeleteIcon fontSize="small" />
                </button>


                <button onClick={() => setCurrentId(_id)} className="btn">  <MoreHorizIcon fontSize="default" /></button>

            </div>


            <Link
                to={{ pathname: `/product/${_id}`, state: { post: post } }}
            >
                <div className="image">
                    {/* <CardMedia image={post.file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} /> */}   <img src={post.file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />

                </div>

            </Link>

            <div className="h-de-2"> <h>{description}</h><h>{detail} </h>
            </div>


        </div >
    )
}

export default Page
