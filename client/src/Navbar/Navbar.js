import React, { useState } from 'react'
import './Navbar.css'


import { Link } from "react-router-dom"


const Navbar = (props) => {


    return (
        <div>
            <div className="n_hed ">
                <>
                    <Link to="/panel"><h5>Panel</h5></Link>
                </>

                <Link to="/Pages"><h5>Pages</h5></Link>



            </div>
          
            <Link to="/Pages"><h5>Pages</h5></Link>
        </div>


    )
}

export default Navbar
