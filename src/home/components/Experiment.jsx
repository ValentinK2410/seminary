import React from 'react';
import './Experiment.css';

const Experiment = () => {
  return (
    <div id='home' className='experiment_page z-10'>
      <section>
              <picture>
        <img
          src="https://i.imgur.com/gIWOMuW.jpeg"
          width="3840"
          height="2160"
          alt="background"
        />
      </picture>
      <figure>
        <h1 className=' mb-4 text-2xl md:text-4xl xl:text-6xl font-bold'>Семинарий</h1>
        <figcaption>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam ipsa dolor.
        </figcaption>
      </figure>
      </section>
    </div>
  );
};

export default Experiment;