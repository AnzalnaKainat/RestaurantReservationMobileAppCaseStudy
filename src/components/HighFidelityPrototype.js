import React from 'react';
import HighFiPrototypeImage from '../image/high-fi.png'; 

const HighFiPrototype = () => {
  return (
    <section className="prototype" id="high-fi">
      <div className="prototype-info">
        <h3>High-Fidelity Prototype</h3>
        <p>
          The final high-fidelity prototype streamlined user flows for restaurant selection and checkout, added a language selection feature, and enabled reservation cancellations within the app.
        </p>
        <a href="https://www.figma.com/proto/NthDLJaxwmR8pbUVj1Lo5B/Restaurant-Reservation?type=design&node-id=243-4751&t=5rNXx7OURXKLx8JO-1&scaling=scale-down&page-id=243%3A4734&starting-point-node-id=243%3A4751&mode=design" target="_blank" rel="noopener noreferrer">View High-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={HighFiPrototypeImage} alt="High-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default HighFiPrototype;
