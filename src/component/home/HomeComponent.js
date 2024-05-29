import React from "react";
import unitedState from "../../web-assets/us.jpg";
import china from "../../web-assets/china.jpg";
import germany from "../../web-assets/germany.jpg";
import "./HomeComponent.css";

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

        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>

        <section class="section-box mt-70 mb-40">
          <div class="container">
            <div class="text-start">
              <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp text-center">
                Top Destinations
              </h2>
              <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp text-center">
                From the iconic landmarks of the United States and China to the
                vibrant cultures of India and Brazil
              </p>
            </div>
            <div class="mt-70">
              <div class="row">
                <div class="col-lg-4">
                  <div class="box-step step-1">
                    <h1 class="number-element">
                      <img src={unitedState} alt="unitedState" />
                    </h1>
                    <h4 class="mb-20">
                      United State
                      <br class="d-none d-lg-block" />
                      (US)
                    </h4>
                    <p class="font-lg color-text-paragraph-2">
                      Lorem ipsum dolor sit amet,
                      <br class="d-none d-lg-block" />
                      consectetur adipisicing elit, sed do{" "}
                    </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="box-step step-2">
                    <h1 class="number-element">
                      <img src={china} alt="China" />
                    </h1>
                    <h4 class="mb-20">
                      CHINA
                      <br class="d-none d-lg-block" />
                      (CH)
                    </h4>
                    <p class="font-lg color-text-paragraph-2">
                      Lorem ipsum dolor sit amet,
                      <br class="d-none d-lg-block" />
                      consectetur adipisicing elit, sed do{" "}
                    </p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="box-step">
                    <h1 class="number-element">
                      <img src={germany} alt="Germany"/>
                    </h1>
                    <h4 class="mb-20">
                      GERMANY
                      <br class="d-none d-lg-block" />
                      (GM)
                    </h4>
                    <p class="font-lg color-text-paragraph-2">
                      Lorem ipsum dolor sit amet,
                      <br class="d-none d-lg-block" />
                      consectetur adipisicing elit, sed do{" "}
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
                Find Best Country
              </h2>
              <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                Find your favourite jobs and get the benefits of yourself
              </p>
            </div>
          </div>
          <div class="container">
            <div class="row mt-50">
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageOne">
                      <span class="lbl-hot">Hot</span>
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      {" "}
                      <h5>Paris, France</h5>
                    </a>
                    <div class="row">
                      <div class="col-lg-6 col-6">
                        <span class="text-14 color-text-paragraph-2">
                          5 Vacancy
                        </span>
                      </div>
                      <div class="col-lg-6 col-6 text-end">
                        <span class="color-text-paragraph-2 text-14">
                          120 companies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageTwo">
                      <span class="lbl-hot">Trending</span>
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      {" "}
                      <h5>London, England</h5>
                    </a>
                    <div class="row">
                      <div class="col-lg-6 col-6">
                        <span class="text-14 color-text-paragraph-2">
                          7 Vacancy
                        </span>
                      </div>
                      <div class="col-lg-6 col-6 text-end">
                        <span class="color-text-paragraph-2 text-14">
                          68 companies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageThree">
                      <span class="lbl-hot">Hot</span>
                    </div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      {" "}
                      <h5>New York, USA</h5>
                    </a>
                    <div class="row">
                      <div class="col-lg-6 col-6">
                        <span class="text-14 color-text-paragraph-2">
                          9 Vacancy
                        </span>
                      </div>
                      <div class="col-lg-6 col-6 text-end">
                        <span class="color-text-paragraph-2 text-14">
                          80 companies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageFour"></div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      {" "}
                      <h5>Amsterdam, Holland</h5>
                    </a>
                    <div class="row">
                      <div class="col-lg-6 col-6">
                        <span class="text-14 color-text-paragraph-2">
                          16 Vacancy
                        </span>
                      </div>
                      <div class="col-lg-6 col-6 text-end">
                        <span class="color-text-paragraph-2 text-14">
                          86 companies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-7 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageFive"></div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      {" "}
                      <h5>Copenhagen, Denmark</h5>
                    </a>
                    <div class="row">
                      <div class="col-lg-6 col-6">
                        <span class="text-14 color-text-paragraph-2">
                          39 Vacancy
                        </span>
                      </div>
                      <div class="col-lg-6 col-6 text-end">
                        <span class="color-text-paragraph-2 text-14">
                          186 companies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
                <div class="card-image-top hover-up">
                  <a href="#">
                    <div class="image imageSix"></div>
                  </a>
                  <div class="informations">
                    <a href="#">
                      {" "}
                      <h5>Berlin, Germany</h5>
                    </a>
                    <div class="row">
                      <div class="col-lg-6 col-6">
                        <span class="text-14 color-text-paragraph-2">
                          15 Vacancy
                        </span>
                      </div>
                      <div class="col-lg-6 col-6 text-end">
                        <span class="color-text-paragraph-2 text-14">
                          632 companies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeComponent;
