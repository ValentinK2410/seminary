import { Logo } from '../../images/Logo';


export const Footer = () => {
  return (
    <footer className="bg-[#f9f8ff] px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-betwee gap-8 py-[100px] px-4">
        {/* Первая колонка (33.33% на десктопе) */}
        <div className="w-full lg:w-[calc(33.33%-28px)]">
          <div className='flex gap-2 items-center mb-4 ml-[-12px]'>
            <div className='w-fit min-w-20 ux:min-w-[110px]'>
              <Logo />
            </div>
            <h1 className='text-xl ux:text-1xl uppercase text-black'>
              <span className='block'>Московская</span>
              <span className='block'>Богословская</span>
              <span className='block'>семинария</span>
            </h1>
          </div>
          
          <p className="text-zinc-600 mb-6">
            Московская Богословская семинария (МБС) - это учебное заведение, которое предлагает богословское образование и подготовку для служения в церкви.
          </p>
          
          <ul className='space-y-2'>
            <li className='flex items-center gap-2 text-zinc-600'>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
              Yarra Park, Melbourne, Australia
            </li>
            <li className='flex items-center gap-2 text-zinc-600'>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <a href="tel:+4733378901" className="hover:text-indigo-600">+(61) 485-826-710</a>
            </li>
          </ul>
        </div>

        {/* Остальные колонки (22.22% на десктопе) */}
        <div className="w-full  lg:w-[calc(22.22%-28px)]">
          <h3 className='text-lg font-semibold mb-4'>Быстрые ссылки</h3>
          <ul className='space-y-2'>
            {['О нас', 'Курсы', 'Контакты', 'Блог'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className='text-zinc-600 hover:text-indigo-600 transition-colors'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full  lg:w-[calc(22.22%-28px)]">
          <h3 className='text-lg font-semibold mb-4'>Социальные сети</h3>
          <ul className='space-y-2'>
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <li key={social}>
                <a href={`https://${social.toLowerCase()}.com`} 
                  className='text-zinc-600 hover:text-indigo-600 transition-colors'>
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full  lg:w-[calc(22.22%-28px)]">
          <h3 className='text-lg font-semibold mb-4'>Подписка на новости</h3>
          <p className='text-zinc-600 mb-4'>
            Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления.
          </p>
          <form className='space-y-3'>
            <input 
              type="email" 
              placeholder="Ваш email" 
              className='w-full px-4 py-2 border border-zinc-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
            <button 
              type="submit" 
              className='w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors'
            >
              Подписаться
            </button>
          </form>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between border-t border-zinc-200 p-6 text-left text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Московская Богословская Семинария. Все права защищены.</p>
        <div class="social-copyright">
          <ul className="flex space-x-4 ml-auto">
            <li>
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.326v21.348C0 23.407 0.593 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463 0.099 2.794 0.143v3.24h-1.918c-1.504 0-1.796 0.715-1.796 1.763v2.312h3.591l-0.467 3.622h-3.124V24h6.125C23.407 24 24 23.407 24 22.674V1.326C24 0.593 23.407 0 22.675 0z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.987.24 2.44.415a4.92 4.92 0 011.77 1.012 4.918 4.918 0 011.013 1.77c.175.452.359 1.27.414 2.438.059 1.267.071 1.647.071 4.851s-.012 3.584-.071 4.851c-.055 1.169-.239 1.986-.414 2.439a4.92 4.92 0 01-1.013 1.77 4.92 4.92 0 01-1.77 1.013c-.453.175-1.27.359-2.44.414-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.055-1.987-.239-2.44-.414a4.92 4.92 0 01-1.77-1.013 4.92 4.92 0 01-1.013-1.77c-.175-.453-.359-1.27-.414-2.44C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.071-4.851c.055-1.169.239-1.986.414-2.438a4.918 4.918 0 011.013-1.77 4.918 4.918 0 011.77-1.013c.453-.175 1.27-.359 2.44-.415C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 5.77.129 4.684.336 3.785.669a7.078 7.078 0 00-2.562 1.669A7.078 7.078 0 00.669 4.785C.336 5.684.129 6.77.07 8.052.012 9.332 0 9.741 0 12c0 2.259.012 2.668.07 3.948.059 1.282.266 2.368.599 3.267a7.078 7.078 0 001.669 2.562 7.078 7.078 0 002.562 1.669c.899.333 1.985.54 3.267.599 1.281.059 1.69.07 3.948.07s2.668-.012 3.948-.07c1.282-.059 2.368-.266 3.267-.599a7.078 7.078 0 002.562-1.669 7.078 7.078 0 001.669-2.562c.333-.899.54-1.985.599-3.267.059-1.28.07-1.689.07-3.948s-.012-2.668-.07-3.948c-.059-1.282-.266-2.368-.599-3.267a7.078 7.078 0 00-1.669-2.562 7.078 7.078 0 00-2.562-1.669C19.684.336 18.598.129 17.316.07 16.036.012 15.627 0 12.368 0H12zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM2 9h6v13H2zM14.5 9c-2.21 0-3.5 1.465-3.5 2.843V22h-6V9h6v1.68c.84-1.355 2.28-2.18 4.03-2.18 3.026 0 5.47 2.398 5.47 6.165V22h-6v-7.5c0-1.32-.94-2.5-2.5-2.5z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Pinterest">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 4.67 2.68 8.7 6.56 10.61-.09-.9-.17-2.27.03-3.25.19-.86 1.22-5.47 1.22-5.47s-.31-.63-.31-1.56c0-1.46.85-2.55 1.91-2.55.9 0 1.34.67 1.34 1.48 0 .9-.57 2.24-.86 3.49-.24 1.01.51 1.83 1.5 1.83 1.8 0 3.17-1.9 3.17-4.63 0-2.42-1.74-4.11-4.23-4.11-2.88 0-4.57 2.16-4.57 4.4 0 .87.33 1.81.74 2.32.08.1.09.2.07.31-.08.34-.25 1.08-.28 1.22-.05.2-.17.24-.4.15-1.49-.62-2.42-2.58-2.42-4.15 0-3.38 2.45-6.48 7.07-6.48 3.71 0 6.59 2.65 6.59 6.21 0 3.68-2.32 6.64-5.56 6.64-1.08 0-2.09-.56-2.43-1.21l-.66 2.53c-.24.94-.89 2.11-1.32 2.82.99.31 2.05.48 3.15.48 6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a2.97 2.97 0 00-2.09-2.097C19.84 3.5 12 3.5 12 3.5s-7.84 0-9.408.589a2.97 2.97 0 00-2.09 2.097C0 7.77 0 12 0 12s0 4.23.502 5.814a2.97 2.97 0 002.09 2.097C4.16 20.5 12 20.5 12 20.5s7.84 0 9.408-.589a2.97 2.97 0 002.09-2.097C24 16.23 24 12 24 12s0-4.23-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
