import { useEffect } from 'react';
import * as React from 'react';

import WOW from 'wow.js';

import hero1 from "@assets/img/bg_hero_1.svg";
import app_preview from "@assets/img/app_preview_1.png";
import alter_sport from "@assets/img/clients/alter_sport.png";
import cleaning_service from "@assets/img/clients/cleaning_service.png";
import creative_photo from "@assets/img/clients/creative_photo.png";
import global_tv from "@assets/img/clients/global_tv.png";

import pattern_1 from "@assets/img/pattern_1.svg";
import app_preview_2 from "@assets/img/app_preview_2.png";
import app_preview_3 from "@assets/img/app_preview_3.png";


import rocket from "@assets/img/icons/rocket.svg";
import testimony from "@assets/img/icons/testimony.svg";
import promotion from "@assets/img/icons/promotion.svg";
import coins from "@assets/img/icons/coins.svg";
import support from "@assets/img/icons/support.svg";
import laptop from "@assets/img/icons/laptop.svg";

import pattern_2 from "@assets/img/pattern_2.svg";

import bg_testimonials from "@assets/img/bg_testimonials.jpg";
import illustration_contact from "@assets/img/illustration_contact.svg";

const Home: React.FC = () => {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, [])

    return (
        <>
            <div className="page-hero-section bg-image hero-home-1" style={{ backgroundImage: `url(${hero1})` }}>
                <div className="hero-caption pt-5">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-lg-6 wow fadeInUp">
                                <div className="badge mb-2"><span className="icon mr-1"><span className="mai-globe" /></span> #2 Editor Choice App of 2020</div>
                                <h1 className="mb-4">Manage your Finance easier</h1>
                                <p className="mb-4">Mobster has features to view and manage <br />
                  our finances, such as transfer, and statistics.</p>
                                <a href="#" className="btn btn-primary rounded-pill">Get App Now</a>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                                <div className="img-place mobile-preview shadow floating-animate">
                                    <img src={app_preview} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clients */}
            <div className="page-section mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 py-3 wow zoomIn">
                            <div className="img-place client-img">
                                <img src={alter_sport} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3 wow zoomIn">
                            <div className="img-place client-img">
                                <img src={cleaning_service} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3 wow zoomIn">
                            <div className="img-place client-img">
                                <img src={creative_photo} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-3 wow zoomIn">
                            <div className="img-place client-img">
                                <img src={global_tv} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End clients */}

            <div className="position-realive bg-image" style={{ backgroundImage: `url(${pattern_1})` }}>
                <div className="page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 py-3">
                                <div className="img-place mobile-preview shadow wow zoomIn">
                                    <img src={app_preview_2} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 py-3 mt-lg-5">
                                <div className="iconic-list">
                                    <div className="iconic-item wow fadeInUp">
                                        <div className="iconic-md iconic-text bg-warning fg-white rounded-circle">
                                            <span className="mai-cube" />
                                        </div>
                                        <div className="iconic-content">
                                            <h5>Powerful Features</h5>
                                            <p className="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                        </div>
                                    </div>
                                    <div className="iconic-item wow fadeInUp">
                                        <div className="iconic-md iconic-text bg-info fg-white rounded-circle">
                                            <span className="mai-shield" />
                                        </div>
                                        <div className="iconic-content">
                                            <h5>Fully Secured</h5>
                                            <p className="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                        </div>
                                    </div>
                                    <div className="iconic-item wow fadeInUp">
                                        <div className="iconic-md iconic-text bg-indigo fg-white rounded-circle">
                                            <span className="mai-desktop-outline" />
                                        </div>
                                        <div className="iconic-content">
                                            <h5>Easy Monitoring</h5>
                                            <p className="fs-small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
                                <h1 className="mb-4">Ecommerce business opperate easilly</h1>
                                <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, molestiae, perspiciatis laboriosam quia placeat recusandae repudiandae corrupti similique delectus, aliquam commodi possimus eveniet optio magnam quis vel. Reiciendis, fuga excepturi.</p>
                                <a href="#" className="btn btn-outline-primary rounded-pill">How it works</a>
                            </div>
                            <div className="col-lg-5 py-3">
                                <div className="img-place mobile-preview shadow wow zoomIn">
                                    <img src={app_preview_3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* why FDS ? */}

            <div className="page-section bg-dark fg-white">
                <div className="container">
                    <h1 className="text-center">Why Choose Mobster</h1>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6 col-lg-3 py-3">
                            <div className="card card-body border-0 bg-transparent text-center wow zoomIn">
                                <div className="mb-3">
                                    <img src={rocket} alt="" />
                                </div>
                                <p className="fs-large">Very Fast</p>
                                <p className="fs-small fg-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 py-3">
                            <div className="card card-body border-0 bg-transparent text-center wow zoomIn" data-wow-delay="200ms">
                                <div className="mb-3">
                                    <img src={testimony} alt="" />
                                </div>
                                <p className="fs-large">Happy Client</p>
                                <p className="fs-small fg-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 py-3">
                            <div className="card card-body border-0 bg-transparent text-center wow zoomIn" data-wow-delay="400ms">
                                <div className="mb-3">
                                    <img src={promotion} alt="" />
                                </div>
                                <p className="fs-large">Free Ads</p>
                                <p className="fs-small fg-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 py-3">
                            <div className="card card-body border-0 bg-transparent text-center wow zoomIn" data-wow-delay="600ms">
                                <div className="mb-3">
                                    <img src={coins} alt="" />
                                </div>
                                <p className="fs-large">Save Money</p>
                                <p className="fs-small fg-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 py-3">
                            <div className="card card-body border-0 bg-transparent text-center wow zoomIn" data-wow-delay="800ms">
                                <div className="mb-3">
                                    <img src={support} alt="" />
                                </div>
                                <p className="fs-large">24/7 Support</p>
                                <p className="fs-small fg-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 py-3">
                            <div className="card card-body border-0 bg-transparent text-center wow zoomIn" data-wow-delay="1000ms">
                                <div className="mb-3">
                                    <img src={laptop} alt="" />
                                </div>
                                <p className="fs-large">Full Features</p>
                                <p className="fs-small fg-grey">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End why FDS ? */}

            <div className="page-section bg-image" style={{ backgroundImage: `url(${pattern_2})` }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0 wow fadeInUp">
                            <h1 className="mb-4">Pricing Plan</h1>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores inventore maxime ipsa eligendi quibusdam velit maiores adipisci odit, exercitationem cumque iusto at debitis reiciendis a, ipsum aliquam reprehenderit. Sed, delectus.</p>
                            <a href="#" className="btn btn-gradient btn-split-icon rounded-pill">
                                <span className="icon mai-call-outline" /> Custom Plan
              </a>
                        </div>
                        <div className="col-lg-7">
                            <div className="pricing-table">
                                <div className="pricing-item active wow zoomIn">
                                    <div className="pricing-header">
                                        <h5>Business Plan</h5>
                                        <h1 className="fw-normal">$49.00</h1>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="theme-list">
                                            <li className="list-item">Push Notification</li>
                                            <li className="list-item">Unlimited Bandwith</li>
                                            <li className="list-item">Realtime Database</li>
                                            <li className="list-item">Monthly Backup</li>
                                            <li className="list-item">24/7 Support</li>
                                        </ul>
                                    </div>
                                    <button className="btn btn-dark">Choose Plan</button>
                                </div>
                                <div className="pricing-item wow zoomIn" data-wow-delay="200ms">
                                    <div className="pricing-header">
                                        <h5>Starter Plan</h5>
                                        <h1 className="fw-normal">$24.00</h1>
                                    </div>
                                    <div className="pricing-body">
                                        <ul className="theme-list">
                                            <li className="list-item">Push Notification</li>
                                            <li className="list-item">Unlimited Bandwith</li>
                                            <li className="list-item">Realtime Database</li>
                                            <li className="list-item">Monthly Backup</li>
                                            <li className="list-item">24/7 Support</li>
                                        </ul>
                                    </div>
                                    <button className="btn btn-dark">Choose Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section bg-image bg-image-overlay-dark" style={{ backgroundImage: `url(${bg_testimonials})` }}>
                <div className="container fg-white">
                    <div className="row">
                        <div className="col-md-8 col-lg-6 offset-lg-1 wow fadeInUp">
                            <h2 className="mb-5 fg-white fw-normal">Customer Stories</h2>
                            <p className="fs-large font-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptates facere explicabo! Rerum necessitatibus cum qui veritatis reprehenderit, neque sapiente consequatur atque eaque molestias, est, quod totam quo laudantium ratione.</p>
                            <p className="fs-large fg-grey fw-medium mb-5">John Doe, UI Designer</p>
                            <a href="#" className="btn btn-outline-light rounded-pill">Read Stories <span className="mai-chevron-forward" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 py-3 mb-5 mb-lg-0">
                            <div className="img-place w-lg-75 wow zoomIn">
                                <img src={illustration_contact} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 py-3">
                            <h1 className="wow fadeInUp">Need a help? <br />
                Don&apos;t worry just contact us</h1>
                            <form method="POST" className="mt-5">
                                <div className="form-group wow fadeInUp">
                                    <label htmlFor="name" className="fw-medium fg-grey">Fullname</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group wow fadeInUp">
                                    <label htmlFor="email" className="fw-medium fg-grey">Email</label>
                                    <input type="text" className="form-control" id="email" />
                                </div>
                                <div className="form-group wow fadeInUp">
                                    <label htmlFor="message" className="fw-medium fg-grey">Message</label>
                                    <textarea rows={6} className="form-control" id="message" defaultValue={""} />
                                </div>
                                <div className="form-group mt-4 wow fadeInUp">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};




export default Home;
