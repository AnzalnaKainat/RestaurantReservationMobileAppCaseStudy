import React from "react";
import Image1 from "../image/paper-wireframe1.jpg";
import Image2 from "../image/paper-wireframe2.jpg";

const PaperWireframes = () => {
  return (
    <section className="persona">
      <h2>Paper Wireframes</h2>
      <p>
        Dedicating time to sketch paper versions of app screens ensured elements
        in digital wireframes addressed user concerns. The home screen
        prioritized pain point solutions:{" "}
        <b>
          language selection, search, and distinct buttons for restaurant
          categories.
        </b>{" "}
        This streamlined the user experience and saved time.
      </p>
      <div className="images">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
      </div>
    </section>
  );
};
export default PaperWireframes;
