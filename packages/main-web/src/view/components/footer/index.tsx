import * as React from 'react';


const Footer:React.FC = ()=> {
    return (
        <div className="page-footer-section bg-dark fg-white">
        <div className="container">
          <div className="row mb-5 py-3">
            <div className="col-sm-6 col-lg-2 py-3">
              <h5 className="mb-3">Pages</h5>
              <ul className="menu-link">
                <li><a href="#" >Features</a></li>
                <li><a href="#" >Customers</a></li>
                <li><a href="#" >Pricing</a></li>
                <li><a href="#" >GDPR</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 py-3">
              <h5 className="mb-3">Company</h5>
              <ul className="menu-link">
                <li><a href="#" >About</a></li>
                <li><a href="#" >Team</a></li>
                <li><a href="#" >Leadership</a></li>
                <li><a href="#" >Careers</a></li>
                <li><a href="#" >HIRING!</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              <h5 className="mb-3">Contact</h5>
              <ul className="menu-link">
                <li><a href="#" >Contact Us</a></li>
                <li><a href="#" >Office Location</a></li>
                <li><a href="#" >hello@mobster.com</a></li>
                <li><a href="#" >support@macodeid.com</a></li>
                <li><a href="#" >+808 11233 900</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 py-3">
              <h5 className="mb-3">Subscribe</h5>
              <p>Get some offers, news, or update features of application</p>
              <form method="POST">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Your email.." />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary"><span className="mai-send" /></button>
                  </div>
                </div>
              </form>
              {/* Social Media Button */}
              <div className="mt-4">
                <a href="#" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-facebook" /></a>
                <a href="#" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-twitter" /></a>
                <a href="#" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-instagram" /></a>
                <a href="#" className="btn btn-fab btn-primary fg-white"><span className="mai-logo-google" /></a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 py-2">
              <img src="../assets/favicon-light.png" alt="" width={40} />
              {/* Please don't remove or modify the credits below */}
              <p className="d-inline-block ml-2">Copyright © <a href="https://www.macodeid.com/" className="fg-white fw-medium">MACode ID</a>. All rights reserved</p>
            </div>
            <div className="col-12 col-md-6 py-2">
              <ul className="nav justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link">Terms of Use</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Privacy Policy</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;