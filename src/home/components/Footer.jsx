'use client';

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import '../styles/footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contact' className="text-white pt-12 pb-4 bg-gray-800">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-8 text-center lg:text-left">
          {/* Logo/Brand */}
          <div>
            <h3 className="hidden lg:block text-3xl font-bold lg:text-yellow-100">
              Seminary<span className="hidden lg:inline-block text-red-300">.</span>
            </h3>
            <p className="hidden lg:block mt-2 lg:mt-5 text-gray-300 text-md text-center lg:text-left lg:text-base max-w-[320px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam rem ipsum.
            </p>
            <p className='hidden lg:block mt-2 '>Подключайтесь!</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl lg:text-xl lg:text-yellow-100 font-semibold text-white mb-4 uppercase truncate">Наши контакты</h4>
            <div className="space-y-3 text-gray-300 text-sm mx-auto max-w-[220px] lg:max-w-[350px] border py-5 px-4 lg:border-0 lg:p-0">
              {/* Email */}
              <p className="footer_icons flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                <a href="mailto:info@dorpvoordorp.nl" className="hover:text-red-600 transition duration-300">
                  info@seminary.online
                </a>
              </p>

              {/* Phone */}
              <p className="footer_icons flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <a href="tel:0610534312" className="hover:text-red-600 transition duration-300">
                  908-44-88-213
                </a>
              </p>

              {/* Address */}
              <div className=" flex items-start">
                <MapPinIcon className="footer_icons w-5 h-5 mr-2 mt-[2px]" />
              <div className="text-left">
                  <a
                    href=""

                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition duration-300 flex flex-col lg:flex-row gap-2"
                  >
                    <p> Москва, проспект Ленина,</p> 
                    <p>переулок Утопия, 11</p>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear}. Все права сохранены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
