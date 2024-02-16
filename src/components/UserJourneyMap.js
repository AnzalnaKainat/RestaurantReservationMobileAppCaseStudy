import React from "react";
import UJmap from "../image/User Journey Map.jpg";

const UserJourneyMap = () => {
  return (
    <section className="persona UJmap" id="UJmap">
      <h2>User Journey Map</h2>
      <p>
        Mapping Zaid’s user journey revealed how helpful it would be for users
        to have access to a dedicated Restaurant Reservation app.
      </p>
      <img src={UJmap} alt="User Journey Map" />
    </section>
  );
};

export default UserJourneyMap;
