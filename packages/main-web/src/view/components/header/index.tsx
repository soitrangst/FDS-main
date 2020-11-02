import * as React from "react";

import { useLocation,Link } from 'react-router-dom'

import logo from "@assets/logo/favicon.png"
import { Url } from "@service/infastructural/constant";


const Header: React.FC = () => {

    const location = useLocation().pathname;

    const checkNav = location === Url.home ? "ml-lg-5" : "link-center"
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-floating">
            <div className="container">
                <Link className="navbar-brand" to={Url.home}>
                    <img src={logo} alt="" width={40} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className={`navbar-nav mt-3 mt-lg-0 ${checkNav}`}>
                        <li className={`nav-item ${location=== Url.home ? "active" : "" }`}>
                        <Link className="nav-link" to={Url.home}>Home</Link>
                        </li>
                        <li className={`nav-item ${location=== Url.application ? "active" : "" }`}>
                        <Link className="nav-link" to={Url.application}>Application</Link>
                        </li>
                        <li className={`nav-item ${location=== Url.about ? "active" : "" }`}>
                            <Link className="nav-link" to={Url.about}>About</Link>
                        </li>
                        <li className={`nav-item ${location=== Url.news ? "active" : "" }`}>
                            <Link className="nav-link" to={Url.news}>What&apos;s New</Link>
                        </li>
                        <li className={`nav-item ${location=== Url.contact ? "active" : "" }`}>
                            <Link className="nav-link" to={Url.contact}>Contact</Link>
                        </li>
                    </ul>
                    <div className="ml-auto my-2 my-lg-0">
                        <button className="btn btn-dark rounded-pill">Download Now</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;