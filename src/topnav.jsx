import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'reactstrap'
import {
    Link
} from "react-router-dom";

const TopNav = (props) => {

    return (
        <Fragment>
            {/* <pre>{JSON.stringify(context, '', 2)} </pre> */}
            <nav className="sb-topnav navbar navbar-expand navbar-dark cfa-red">
                <Button color="#cf1b41" className="btn btn-md order-1 order-lg-0 mr-auto btn-cfa-red text-white" onClick={props.toggleSideNav}>
                    <FontAwesomeIcon style={{ position: "absolute", left: "10px", top: "20px" }} icon={faBars} onClick={props.toggleSideNav} />
                </Button>
                {/* <Link className="navbar-brand" to="/">Rapid Response</Link> */}
                <FontAwesomeIcon icon={faUser} /> &nbsp;<span>Profile</span>

                {/* {resuser && resuser.hasOwnProperty('user') &&
                    <Link className="navbar-brand" to="/login"
                        onClick={handleSignout}>Sign Out</Link>} */}
                {/* Navbar Search */}
                {/* <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form> */}
                {/* <!-- Navbar--> */}
                {/* <ul class="navbar-nav ml-auto ml-md-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#">Settings</a>
                        <a class="dropdown-item" href="#">Activity Log</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul> */}
            </nav>
        </Fragment>
    )
}

export default TopNav