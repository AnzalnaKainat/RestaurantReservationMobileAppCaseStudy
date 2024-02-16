import React from "react";
import StudyTypeImage from "../image/study-type.png";
import LocationImage from "../image/location.png";
import ParticipantsImage from "../image/participants.png";
import LengthImage from "../image/length.png";

const UsabilityParameters = () => {
  return (
    <div>
      {/* Usability Study: parameters */}
      <section className="usability">
        <h2>Usability Study: parameters</h2>
        <div className="parameter">
          <div className="group">
            <img src={StudyTypeImage} alt="Study Type" />
            <h4>Study Type</h4>
            <p>Unmoderated usability study</p>
          </div>
          <div className="group">
            <img src={LocationImage} alt="Location" />
            <h4>Location</h4>
            <p>Pakistan, Remote</p>
          </div>
          <div className="group">
            <img src={ParticipantsImage} alt="Participants" />
            <h4>Participants</h4>
            <p>5 participants</p>
          </div>
          <div className="group">
            <img src={LengthImage} alt="Length" />
            <h4>Length</h4>
            <p>20-30 minutes</p>
          </div>
        </div>
      </section>

      {/* Usability Study: Findings */}
      <div className="containers color" id="usabilty-findings">
        <h2>Usability Study: Findings</h2>
        <p>
          I conducted two rounds of usability studies. Findings from the first
          study helped guide the designs from wireframes to mockups. The second
          study used a high-fidelity prototype and revealed what aspects of the
          mockups needed refining.
        </p>

        <h3>Round 1 findings</h3>
        <section className="product-overview">
          <div className="col-findings one">
            <p>Users were confused about pre-ordering due to a missing label</p>
          </div>

          <div className="col-findings two">
            <p>Picking a reservation date was difficult without a calendar.</p>
          </div>

          <div className="col-findings three">
            <p>Lack of additional confirmation prompt.</p>
          </div>
        </section>

        <h3>Round 2 findings</h3>
        <section className="product-overview">
          <div className="col-findings one">
            <p>
              Users suggest placing the language selection feature on the
              initial "Get Started" page.
            </p>
          </div>

          <div className="col-findings two">
            <p>
              Users were frustrated that the header and bottom navigation bar
              weren't fixed and disappeared while scrolling.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UsabilityParameters;
