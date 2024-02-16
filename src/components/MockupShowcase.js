import React from 'react';
import mockup  from '../image/mockup-showcase.png';


const MockupShowcase = () => {
  return (
      <section className="mockup-showcase">
        <div className="mockup1">
          <img src={mockup} alt="mockups showcase" />
        </div>
      </section>
  );
};

export default MockupShowcase;
