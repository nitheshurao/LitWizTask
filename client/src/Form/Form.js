import React, { useState, useEffect } from 'react'
import './Form.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';


import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';


import { createPost, updatePost } from "../redux/action/Post";




const Form = ({ currentId, setCurrentId }) => {

    const [product, setProduct] = useState({
        title: '', description: '', file: '', tag: '', meta: '', detail: ''
    })
    const dispatch = useDispatch();

    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const clear = () => {
        setCurrentId(0);
        setProduct({ title: '', description: '', file: '', tag: '', meta: '', detail: '' });
    };
    useEffect(() => {
        if (post) setProduct(post);
    }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (currentId === 0) {
            // dispatch(createPost(product));
            dispatch(createPost({ ...product }));
            clear();
        } else {
            dispatch(updatePost(currentId, product));
            clear();
        }

        // dispatch(createPost(product));

        // clear();

        // console.log(product)


    };





    return (
        <div className="Formm">

            {/* <div className="headers">
                <h1>Add New </h1>

            </div> */}



            <div className="product">
                <h1>Add New </h1>
                <form autoComplete="off" noValidate
                    onSubmit={handleSubmit}>

                    <h3 className="label" > Title</h3>
                    <div className="pName">

                        <input
                            type="text" placeholder="Enter title here"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({ ...product, title: e.target.value })
                            }}
                        />
                    </div>



                    <div className="pName">

                        <div class="file-upload-wrapper" data-text="Select your file!">
                            <h>Add Media Files

                            </h>
                            <VerticalAlignTopIcon />
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setProduct({ ...product, file: base64 })
                                    // console.log(postData.selectedFiles)
                                }
                            />







                        </div>

                    </div>


                    <h3> Details  </h3>

                    <div className="pName1">

                        <input type="text" placeholder="Enter details "
                            value={product.meta}
                            onChange={(e) => {
                                setProduct({ ...product, meta: e.target.value })
                            }}
                        />
                        <div className="pName1">
                            <textarea className="textarea" placeholder="Write detais.."
                                value={product.detail}
                                onChange={(e) => {
                                    setProduct({ ...product, detail: e.target.value })
                                }}


                            ></textarea>

                        </div>
                    </div>

                    <button
                        class="s_btn"

                        type="submit" fullWidth> Submit</button>

                </form>

            </div>


        </div >
    )
}

export default Form
