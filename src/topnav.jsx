import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'reactstrap'
import {
    Link
} from "react-router-dom";
import { useState, useEffect } from 'react';
// import { Sidebar } from 'react-sidebar-ui';
import SideBar from './SideBar';

const TopNav = (props) => {






    // setIsExpanded(!isExpanded)
    // console.log(isExpanded)
    // if (isExpanded == false) {
    //     return <Fragment />
    // } else {
    //     return <SideBar style={{ opacity: 0 }} />
    // }


    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark cfa-red">
            <button onClick={props.toggleSideNav}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    )
}



export default TopNav