import React from "react";
import digitalHomepage1 from "../image/homepage-wireframe.png";
import digitalHomepage2 from "../image/hamburger-menu-wireframe.png";

const DigitalWireframes = () => {
  return (
    <div>
      <section className="digital-wireframe">
        <h2>Digital Wireframes</h2>

        <div className="digital-row">
          <div className="digital-col">
            <p>
              As the initial design phase progressed, I ensured that the screen
              designs were built using feedback and insights gathered from user
              research.
            </p>
            <ul>
              <li>
                Simplified Navigation: Explore Easily with Categorized Buttons
              </li>
              <li>
                Enhance Accessibility: Multilingual Experience with Language
                Selection
              </li>
            </ul>

            <img src={digitalHomepage1} alt="Digital wireframe" />
          </div>

          <div className="digital-col">
            <p>
              Crafting an intuitive navigation menu prioritized easy access and
              compatibility with assistive technologies, while also enabling
              hassle-free reservation cancellations.
            </p>
            <ul>
              <li>
                Our Simplified Menu Ensures Effortless Access to App Features.
              </li>
              <li>
                Cancel reservations, providing you with greater control over
                your plans.
              </li>
            </ul>

            <img src={digitalHomepage2} alt="Digital wireframe" className="digital-img" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default DigitalWireframes;
