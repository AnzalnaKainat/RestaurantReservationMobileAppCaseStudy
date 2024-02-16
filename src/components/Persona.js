import React from "react";
import personaImage from "../image/Persona.jpg";

const Persona = () => {
  return (
    <section className="persona" id="persona">
      <h2>Persona: Zaid Hamdi</h2>
      <img src={personaImage} alt="Persona2" />
      <h4>Problem Statement</h4>
      <p>
        Zaid Hamdi is Tourist in a new country who needs a quick and reliable
        way to make a booking for a family restaurant because trying to navigate
        through an app in a foreign language is a hassle
      </p>
    </section>
  );
};

export default Persona;
