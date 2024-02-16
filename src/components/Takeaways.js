import React from "react";

const Takeaways = () => {
  return (
    <section className="takeaways">
      <h2>Takeaways</h2>
      <div className="takeaways-row">
        <div className="takeaways-col">
          <h4>Impacts</h4>
          <p>
            The app leaves users with the sense that their needs are truly taken
            into account
            <br />
            <br />
            One quote from peer feedback:
            <i>
              "Using this app feels like it was thoughtfully designed with users
              in mind. The intuitive and well-planned features stand out."
            </i>
          </p>
        </div>

        <div className="takeaways-col">
          <h4>What I learned</h4>
          <p>
            While designing the Restaurant Reservation app, I learned that the
            first ideas for the app are only the beginning of the process.
            Usability studies and peer feedback influenced each iteration of the
            app’s designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Takeaways;
