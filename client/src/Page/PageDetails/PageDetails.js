import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import './PageDetails.css'


const PageDetails = (props) => {
    console.log(props)

    const { _id, title, file, file1, file2, description, detail } = props.location.state.post
    const dispatch = useDispatch();





    return (
        <div className="det">


            <div class="row">


                <div className=''>



                    <div class="col-6 col-s-12 ">

                        <div class="asides">
                            <div className="de-img co-s-i co-i ">
                                <img className="co-s-i "
                                    src={file || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />







                            </div>

                        </div>

                    </div>



                    <div class="col-6 col-s-12">


                        <div class="asidse">
                            <h>{title}</h>
                            <h3>{detail}</h3>
                            <h></h>
                            <p>{description}

                            </p>
                            <div className="de-img-op">


                                <p>{description}

                                </p>
                            </div>
                            <div className="de-btn-op">
                                <Link to="/Pages">

                                    <button>Pages</button></Link>
                            </div>
                        </div>


                    </div>






                </div>

            </div>



        </div >
    )
}

export default PageDetails
