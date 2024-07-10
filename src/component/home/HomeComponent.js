import React from "react";
import china from "../../web-assets/china.jpg";
import "./HomeComponent.css";
import ChatB from "../chatbot/ChatB";

const HomeComponent = () => {
  return (
    <>
      <main className="main">
        <section className="section-box">
          <div className="banner-hero hero-2" id="home-bg">
            <div className="banner-inner">
              <div className="block-banner">
                <h1
                  className="text-42 color-white wow animate__animated animate__fadeInUp discover"
                  style={{ fontSize: "52px" }}
                >
                  <br className="d-none d-lg-block " />
                  Journey into Unforgettable Experiences
                </h1>
                <div
                  className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  Uncover the beauty of diverse destinations with our tailored
                  travel options. Whether you crave a tropical escape or a
                  cultural immersion, we have the perfect adventure waiting for
                  you.
                </div>
              </div>
              <div className="mt-60">
                <div className="row">
                  <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                    <div className="d-inline-block text-start">
                      <h4 className="color-white">
                        <span className="count">265</span>
                        <span> K+</span>
                      </h4>
                      <p className="font-sm color-text-mutted">Users</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                    <div className="d-inline-block text-start">
                      <h4 className="color-white">
                        <span className="count">200</span>
                        <span> +</span>
                      </h4>
                      <p className="font-sm color-text-mutted">Agents</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                    <div className="d-inline-block text-start">
                      <h4 className="color-white">
                        <span className="count">300</span>
                        <span> +</span>
                      </h4>
                      <p className="font-sm color-text-mutted">Brokers</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                    <div className="d-inline-block text-start">
                      <h4 className="color-white">
                        <span className="count">100</span>
                        <span> +</span>
                      </h4>
                      <p className="font-sm color-text-mutted">
                        Daily Contracts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-box mt-70 mb-40">
          <div class="container">
            <div class="text-start">
              <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp text-center">
                POPULAR DESTINATIONS
              </h2>
              <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp text-center">
                Popular destinations captivate travelers with their vibrant
                cultures, stunning landscapes, and unforgettable experiences
              </p>
            </div>
            <div class="mt-70">
              <div class="row">
                <div class="col-lg-4">
                  <div class="box-step step-1">
                    <h1 class="number-element">
                      <img
                        src="https://lh3.googleusercontent.com/-IAUTMSXFPEc/VurjZieLpcI/AAAAAAAADmQ/Ux27qQhoVzQ/s0/Skardu-2016-03-17%25252012%25253A16%25253A13.726173.jpg"
                        style={{ borderRadius: "50%", height: "100%" }}
                        alt="skurdu"
                      />
                    </h1>
                    <h4 class="mb-20">
                      Skardu
                      <br class="d-none d-lg-block" />
                      (SD)
                    </h4>
                    <p class="font-lg color-text-paragraph-2">
                      Skardu, in Gilgit-Baltistan,is
                      <br class="d-none d-lg-block" />
                      famous for its stunning mountain scenery.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="box-step step-2">
                    <h1 class="number-element">
                      <img
                        src="https://prestinetravels.com/wp-content/uploads/2021/06/Harnoi-Abbottabad-Pakistan.jpg"
                        style={{ borderRadius: "50%", height: "100%" }}
                        alt="Abbottabad"
                      />
                    </h1>
                    <h4 class="mb-20">
                      Abbottabad
                      <br class="d-none d-lg-block" />
                      (AB)
                    </h4>
                    <p class="font-lg color-text-paragraph-2">
                      Abbottabad, in northern Pakistan,
                      <br class="d-none d-lg-block" />
                      is known for its picturesque beauty .
                    </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="box-step">
                    <h1 class="number-element">
                      <img
                        src="https://i0.wp.com/unusualplaces.org/wp-content/uploads/2018/11/kasmir.jpg"
                        style={{ borderRadius: "50%", height: "100%" }}
                        alt="Kashmir"
                      />
                    </h1>
                    <h4 class="mb-20">
                      Kashmir
                      <br class="d-none d-lg-block" />
                      (KM)
                    </h4>
                    <p class="font-lg color-text-paragraph-2">
                      Kashmir, in the Himalayas, is renowned
                      <br class="d-none d-lg-block" />
                      for its breathtaking landscapes .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-box mt-50">
          <div class="container">
            <div class="text-center">
              <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">
                FIND BEST DESTINATIONS
              </h2>
              <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                Find the best destinations for unforgettable travel experiences
                and breathtaking adventures.
              </p>
            </div>
          </div>
          <div class="container">
            <div class="row mt-50">
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageOne">
                    <img
                      src="https://i.ytimg.com/vi/5es73zyKtwo/maxresdefault.jpg" // Multan
                      alt=""
                      style={{ height: "100%" }}
                    />
                      <span class="lbl-hot">Trending</span>
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      <h5>Multan</h5>
                    </a>
                    {/* <div class="row">
                      <div class="col-lg-6 col-6">
                        <span class="text-14 color-text-paragraph-2">
                          5 Cities
                        </span>
                      </div>
                      <div class="col-lg-6 col-6 text-end">
                        <span class="color-text-paragraph-2 text-14">
                          120 Destinies
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageTwo">
                    <img
                      src="https://i.redd.it/rnec2kmryav21.jpg" // Lahore
                      alt=""
                    />
                      <span class="lbl-hot">Trending</span>
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      <h5>Lahore</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageThree">
                    <img
                      src="https://i1.wp.com/www.travelwideflightsuk.co.uk/News/wp-content/uploads/2018/03/faisal-mosque.jpg?w=1024&ssl=1" // Islamabad
                      alt=""
                    />
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      <h5>Islamabad</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageFour">
                    <img
                      src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/08/Mazar-e-Quaid-D-14-08-640x400.jpg" // Karachi
                      alt=""
                    />
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      <h5>Karachi , Sindh</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageFive">
                    <img
                      src="https://sayr.com.pk/uploads/images/image_750x_63c13600e90d5.jpg" // Skardu
                      alt=""
                    />
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      <h5>Skardu</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageSix">
                    <img
                      src="https://www.zameen.com/blog/wp-content/uploads/2019/07/image-5-37-1024x640.jpg" // Swat
                      alt=""
                    />
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      <h5>Swat</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ChatB />
    </>
  );
};

export default HomeComponent;
