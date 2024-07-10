import React from "react";
import Navbar from "./../navbar/Navbar";
import "./Gallery.css"
import Footer from "../footer/Footer";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <main className="main main-gallery">
        <section class="section-box mt-30">
        <h2 className="text-center">TOP DESTINATIONS</h2>
          <div class="container">
            <div class="row mt-40">
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
              <div className="card-image-top hover-up">
                  <div className="image imageOne mb-0">
                    <img
                      src="https://i.ytimg.com/vi/5es73zyKtwo/maxresdefault.jpg" // Multan
                      alt=""
                      style={{ height: "100%" }}
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Multan</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageTwo mb-0">
                    <img
                      src="https://i.redd.it/rnec2kmryav21.jpg" // Lahore
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Lahore</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageThree mb-0">
                    <img
                      src="https://i1.wp.com/www.travelwideflightsuk.co.uk/News/wp-content/uploads/2018/03/faisal-mosque.jpg?w=1024&ssl=1" // Islamabad
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Islamabad</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageFour mb-0">
                    <img
                      src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/08/Mazar-e-Quaid-D-14-08-640x400.jpg" // Karachi
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Karachi</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageFive mb-0">
                    <img
                      src="https://sayr.com.pk/uploads/images/image_750x_63c13600e90d5.jpg" // Skurdu
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Skurdu</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageSix mb-0">
                    <img
                      src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-5-37-1024x640.jpg" // Swat
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Swat</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageOne mb-0">
                    <img
                      src="http://media.cntraveller.in/wp-content/uploads/2014/02/Hyderabad3-Alamy-D9K7KC.jpg" // Hyderabad
                      alt=""
                      style={{height:'100%'}}
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Hyderabad</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageTwo mb-0">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/94/3a/7d/outdoor-pool.jpg?w=900&h=-1&s=1" // Mardan
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Mardan</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageThree mb-0">
                    <img
                      src="https://media-cdn.tripadvisor.com/media/photo-s/0f/d0/de/42/mughal-mahal-hotel-nightt.jpg" // Gujarnawala
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Gujarnawala</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageFour mb-0">
                    <img
                      src="https://blog.bridals.pk/wp-content/uploads/2017/11/ilyasi-mosque.jpg" // Abbottabad
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Abbottabad</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageFive mb-0">
                    <img
                      src="https://res.cloudinary.com/raastay/images/w_1024,h_683,c_scale/f_auto,q_auto/v1657126294/Hanna-Lake-Raasty-1-1/Hanna-Lake-Raasty-1-1-1024x683.jpg?_i=AA" // Quetta
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Quetta</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <div class="image imageSix mb-0">
                    <img
                      src="http://1.bp.blogspot.com/-hMg2BFbKnE8/Vs8nwDHHEZI/AAAAAAAAAho/CCfFPUUbOPw/s1600/5648829ac6847.jpg" // Sialkot
                      alt=""
                    />
                    <div className="overlay">
                      <h3 className="overlay-text">Sialkot</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Gallery;
