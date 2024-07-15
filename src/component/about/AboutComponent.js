import React from "react";
import firstAboutImage from "../../web-assets/first-about.jpg";
import secondAboutImage from "../../web-assets/second-about.jpg";
import ChatB from "../chatbot/ChatB";

const AboutComponent = () => {
  return (
    <>
      <main className="main">
        <section className="section-box mt-20">
          <div className="post-loop-grid">
            <div className="container">
              <div className="row mt-70">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img src={firstAboutImage} alt="joxBox" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h3 className="mt-20 about-comp-first-heading">
                    What good does that do?
                  </h3>
                  <div className="mt-20">
                    <p className="font-md color-text-paragraph mt-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vitae neque metus. Vivamus consectetur ultricies
                      commodo. Pellentesque at nisl sit amet neque finibus
                      egestas ut at magna. Cras tincidunt tortor sed eros
                      aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-20">
          <div className="post-loop-grid">
            <div className="container">
              <div className="row mt-70">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h3 className="mt-20 about-comp-first-heading">
                    What good does that do?
                  </h3>
                  <div className="mt-20">
                    <p className="font-md color-text-paragraph mt-20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vitae neque metus. Vivamus consectetur ultricies
                      commodo. Pellentesque at nisl sit amet neque finibus
                      egestas ut at magna. Cras tincidunt tortor sed eros
                      aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit amet neque
                      finibus egestas ut at magna. Cras tincidunt tortor sed
                      eros aliquam eleifend.Pellentesque at nisl sit .
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img src={secondAboutImage} alt="joxBox" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ChatB/>
    </>
  );
};

export default AboutComponent;
