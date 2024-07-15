import React from "react";
import "./TermsAndCondtions.css";
import termsAndConditions from "../../web-assets/terms-and-conditions.jpg";
import ChatB from "../chatbot/ChatB";

const TermsAndConditionsComponent = () => {
  return (
    <>
      <main className="main">
        <section className="section-box mt-20">
          <div className="post-loop-grid">
            <div className="container">
              <div className="row mt-70">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h3 className="mt-20 about-comp-first-heading">
                    TERMS & CONDITIONS
                  </h3>
                  <div className="mt-20">
                    <p className="font-md color-text-paragraph mt-20 font-bold">
                      Booking Confirmation:
                    </p>
                    <p>
                      All bookings are subject to availability and confirmation
                      by the tour operator. A confirmed booking will be provided
                      with a unique booking reference number. A confirmed
                      booking will be provided with a unique booking reference
                      number.A confirmed booking will be provided with a unique
                      booking reference number.
                    </p>
                    <p className="font-md color-text-paragraph mt-20 font-bold">
                      Payment Terms:
                    </p>
                    <p>
                      Full payment is required to secure a booking unless stated
                      otherwise. Payment can be made via credit card, bank
                      transfer, or other approved methods. Prices are quoted in
                      the designated currency and are subject to change without
                      notice.
                    </p>
                    <p className="font-md color-text-paragraph mt-20 font-bold">
                      Cancellation Policy:
                    </p>
                    <p>
                      Cancellations made within [X] days of departure may incur
                      cancellation fees. No refunds will be provided for unused
                      services or portions of the tour. Cancellations made
                      within [X] days of departure may incur cancellation fees.
                      No refunds will be provided for unused services or
                      portions of the tour.
                    </p>
                    <p className="font-md color-text-paragraph mt-20 font-bold">
                      Travel Documents:
                    </p>
                    <p>
                      It is the responsibility of the traveler to ensure all
                      travel documents (passports, visas, etc.) are valid and
                      up-to-date. The tour operator will not be liable for any
                      costs or consequences incurred due to insufficient or
                      invalid travel documents.
                    </p>
                    <p className="font-md color-text-paragraph mt-20 font-bold">
                      Health and Safety:
                    </p>
                    <p>
                      Travelers are advised to check and comply with any health
                      and safety regulations or requirements at their
                      destination. The tour operator reserves the right to
                      refuse service to any traveler deemed unfit for travel due
                      to health reasons. The tour operator reserves the right to
                      refuse service to any traveler deemed unfit for travel due
                      to health reasons.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 termsAndCondtion">
                  <img src={termsAndConditions} alt="joxBox" />
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

export default TermsAndConditionsComponent;
