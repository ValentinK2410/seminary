import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import wijdemap from '../../images/card_woningbouw.jpg'
import '../styles/sectionTwo.css'; 


export default function FusionProtest() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div id='articles' className="section_two py-10 px-6 lg:p-40 main_section ">
      <div className="flex flex-col xl:flex-row items-center xl:items-center gap-8">
        
        {/* Text Section (on the left side) */}
        <div className="md:w-2/3">
          <div className='mb-12 md:mb-20 text-center xl:text-left '>
                    <h1 className="special_font text-2xl uppercase md:text-4xl font-bold ">
            Раздел: такой-то 
          </h1>
          </div>
          <div className="text-lg md:text-xl space-y-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus voluptas eius a expedita! Officiis explicabo earum repellendus placeat est alias?
            </p>
          </div>

          {isExpanded && (
            <div className="text-lg md:text-xl space-y-4 animate-fadeIn mt-6 transition-all duration-500 ease-in-out">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque eum assumenda ad possimus consequuntur fugiat est, qui perferendis animi modi fugit vitae cupiditate deserunt doloremque eligendi reiciendis voluptatibus nisi delectus labore? Ullam, vitae rerum!
              </p>
              <p className="scroll_naar_beneden text-center md:text-left font-semibold text-red-800">
                ↓↓ Scroll down and see bla bla bla ↓↓
              </p>
            </div>
          )}

          <div className="flex mt-10 justify-center xl:justify-start">
             <button
              onClick={toggleExpand}
              className="group thirdary_color flex items-center justify-center px-4 py-3 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <PlusIcon
                className={`w-5 h-5 mr-2 transform transition-transform duration-300 ${
                  isExpanded ? 'rotate-45' : ''
                }`}
              />
              {isExpanded ? 'Меньше' : 'Больше'}
            </button>
          </div>
        </div>

        {/* Image Section (on the right side, vertically centered) */}
        <div className="hidden xl:flex md:w-1/2 ml-12 h-full items-center justify-center">
          <img
             src={wijdemap}
            alt="Your Image"
            className="w-full h-auto rounded-lg shadow-xl"
            width={500} // Adjust width to your needs
            height={500} // Adjust height to your needs
          />
        </div>
      </div>
    </div>
  );
}
