

import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = ()=> {


    return(
        <div className="dashboard">

            <div className="sidebar">
                <Link to='/'><h2>Dash Board</h2></Link>

                <Link to={'users'}>Users</Link>
                <Link to={'products'}>Products</Link>

            </div>

            <div className="content">
                <Outlet/>
            </div>
            
        </div>
    )
}

export default DashBoard