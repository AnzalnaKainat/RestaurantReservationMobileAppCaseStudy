import React from "react";
import LowFiPrototypeImage from '../image/low-fi.PNG';

const LowFiPrototypeSection = () => {
  return (
    <section className="prototype" id="low-fi">
      <div className="prototype-info">
        <h3>Low-Fidelity Prototype</h3>
        <p>
        After turning the final wireframes 
into a prototype and conducting a 
usability study, I improved the 
prototype to show how users go 
through steps like choosing a 
restaurant, pre-ordering, entering 
reservation details, adding payment 
options, and confirming the 
reservation.

        </p>
        <a href="https://www.figma.com/proto/NthDLJaxwmR8pbUVj1Lo5B/Restaurant-Reservation?type=design&node-id=88-179&t=LJZQabBZaifRqaQe-1&scaling=scale-down&page-id=88%3A3&starting-point-node-id=88%3A179&mode=design" target="_blank" rel="noopener noreferrer">View Low-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={LowFiPrototypeImage} alt="Low-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default LowFiPrototypeSection;
