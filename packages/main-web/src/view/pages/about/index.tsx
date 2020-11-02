import * as React from 'react';


import hero_mini from "@assets/img/hero_mini.svg"
import person_1 from "@assets/img/person/person_1.png"
import person_2 from "@assets/img/person/person_2.png"
import person_3 from "@assets/img/person/person_3.png"
import alter_sport from "@assets/img/clients/alter_sport.png"
import cleaning_service from "@assets/img/clients/cleaning_service.png"
import creative_photo from "@assets/img/clients/creative_photo.png"
import global_tv from "@assets/img/clients/global_tv.png"
import net_sport_tv from "@assets/img/clients/net_sport_tv.png"
import news_digital_tv from "@assets/img/clients/news_digital_tv.png"
import spa_beauty from "@assets/img/clients/spa_beauty.png"
import trivier_group from "@assets/img/clients/trivier_group.png"
import { Link } from 'react-router-dom';
import { Url } from '@service/infastructural/constant';

const About: React.FC = () => {
  return (
    <main className="bg-light">

      <div className="page-hero-section bg-image hero-mini" style={{ backgroundImage: `url(${hero_mini})` }}>
        <div className="hero-caption">
          <div className="container fg-white h-100">
            <div className="row justify-content-center align-items-center text-center h-100">
              <div className="col-lg-6">
                <h3 className="mb-4 fw-medium">About Us</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                    <li className="breadcrumb-item"><Link to={Url.home}>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">About</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/*  */}
      <div className="page-section pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card-page">
                <h5 className="fg-primary">Stories</h5>
                <hr />
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                {/* Video */}
                <div className="text-center py-5">
                  <embed className="embed-video" src="https://www.youtube.com/embed/k1D0_wFlXgo?list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX" />
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="card-page mt-3">
                <h5 className="fg-primary">Meet Our Teams</h5>
                <hr />
                <div className="row justify-content-center">
                  <div className="col-lg-3 py-3">
                    <div className="team-item">
                      <div className="team-avatar">
                        <img src={person_1} alt="" />
                      </div>
                      <h5 className="team-name">Sugar Elliot</h5>
                      <span className="fg-gray fs-small">Creative Director</span>
                    </div>
                  </div>
                  <div className="col-lg-3 py-3">
                    <div className="team-item">
                      <div className="team-avatar">
                        <img src={person_2} alt="" />
                      </div>
                      <h5 className="team-name">John Doe</h5>
                      <span className="fg-gray fs-small">UI/UX Designer</span>
                    </div>
                  </div>
                  <div className="col-lg-3 py-3">
                    <div className="team-item">
                      <div className="team-avatar">
                        <img src={person_3} alt="" />
                      </div>
                      <h5 className="team-name">Ellysa</h5>
                      <span className="fg-gray fs-small">Product Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-page mt-3">
                <h5 className="fg-primary">Partners</h5>
                <hr />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center align-items-center mt-5">
                  <div className="p-3">
                    <div className="img-place client-img">
                      <img src={alter_sport} alt="" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="img-place client-img">
                      <img src={cleaning_service} alt="" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="img-place client-img">
                      <img src={creative_photo} alt="" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="img-place client-img">
                      <img src={global_tv} alt="" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="img-place client-img">
                      <img src={net_sport_tv} alt="" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="img-place client-img">
                      <img src={news_digital_tv} alt="" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="img-place client-img">
                      <img src={spa_beauty} alt="" />
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="img-place client-img">
                      <img src={trivier_group} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    // 
    
  );
}

export default About;