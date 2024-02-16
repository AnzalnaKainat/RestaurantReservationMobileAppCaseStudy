import React from "react";
import HomepageImage from "../image/homepage-original.png";
import GetStarted from "../image/get-started.png";
import reservationWireframe from "../image/reservation-wireframe.png";
import reservation2 from "../image/reservation2.png";

const Iteration = () => {
  return (
    <section className="iteration" id="usability-findings">
      <h2>Mockups</h2>

      <div className="finding">
        <h3>Finding 1</h3>
        <p>
          Following the usability study of the initial digital wireframes, users
          were perplexed by the visual table and chair selection. They favored a
          guest count input field and felt the absence of a date calendar. To
          tackle these concerns, I incorporated both modifications in the
          low-fidelity prototype and subsequently in the mockups.
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={reservationWireframe} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={reservation2} alt="" />
          </div>
        </div>
      </div>

      <hr />

      <div className="finding">
        <h3>Finding 2</h3>
        <p>
          The findings from the second usability study indicated user
          frustration related to the language selection feature. To resolve this
          issue, I integrated the language selection feature on the first page
          “Get Started” as well.
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={HomepageImage} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={GetStarted} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iteration;
