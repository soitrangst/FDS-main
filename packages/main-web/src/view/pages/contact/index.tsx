import { useEffect } from 'react';
import * as React from 'react';

import WoW from "wow.js";

import Maps from "./map"

import hero_mini from "@assets/img/hero_mini.svg"
import { Link } from 'react-router-dom';
import { Url } from '@service/infastructural/constant';

const Contact: React.FC = () => {


    useEffect(() => {
        new WoW().init()
        
    }, [])

    return (
        <>
            <div className="bg-light">
                <div className="page-hero-section bg-image hero-mini" style={{ backgroundImage: `url(${hero_mini})` }}>
                    <div className="hero-caption">
                        <div className="container fg-white h-100">
                            <div className="row justify-content-center align-items-center text-center h-100">
                                <div className="col-lg-6">
                                    <h3 className="mb-4 fw-medium">Contact</h3>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                                            <li className="breadcrumb-item"><Link to={Url.home}>Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 my-3 wow fadeInUp">
                                <div className="card-page">
                                    <div className="row row-beam-md">
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-location-outline h3" />
                                            <p className="fg-primary fw-medium fs-vlarge">Location</p>
                                            <p className="mb-0">3 East Ridgewood Avenue Los Angeles, CA 90022</p>
                                        </div>
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-call-outline h3" />
                                            <p className="fg-primary fw-medium fs-vlarge">Contact</p>
                                            <p className="mb-1">+213 908 92034</p>
                                            <p className="mb-0">+415 123 89245</p>
                                        </div>
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i className="mai-mail-open-outline h3" />
                                            <p className="fg-primary fw-medium fs-vlarge">Email</p>
                                            <p className="mb-1">support@mobster.com</p>
                                            <p className="mb-0">support@macodeid.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 my-3 wow fadeInUp">
                                <div className="card-page">
                                    <h3 className="fw-normal">Get in touch</h3>
                                    <form method="POST" className="mt-3">
                                        <div className="form-group">
                                            <label htmlFor="name" className="fw-medium fg-grey">Fullname</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="fw-medium fg-grey">Email</label>
                                            <input type="text" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone" className="fw-medium fg-grey">Phone(optional)</label>
                                            <input type="number" className="form-control" id="phone" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message" className="fw-medium fg-grey">Message</label>
                                            <textarea rows={6} className="form-control" id="message" defaultValue={""} />
                                        </div>
                                        <p>*Your information will never be shared with any third party.</p>
                                        <div className="form-group mt-4">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7 my-3 wow fadeInUp">
                                <div className="card-page">
                                    <div className="maps-container">
                                        <Maps/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* .bg-light */}
        </>
    );
}

export default Contact;