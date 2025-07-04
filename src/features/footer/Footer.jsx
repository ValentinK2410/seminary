import { Logo } from '../../images/Logo';
import { SecondaryButton } from '../../componentLibrary/SecondaryButton';
import { Icon_vk } from '../../images/Icon_vk';
import { Icon_rutube } from '../../images/Icon_rutube';
import { Icon_telegram } from '../../images/Icon_telegram';


import { Input } from '../../componentLibrary/Input';

import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id='contacts' className="scroll-mt-14 bg-indigo-25 px-6 sm:px-20">
      <div
        className="w-full max-w-7xl mx-auto grid gap-10 py-[100px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {/* Колонка 1 — Всегда первая */}
        <div className="order-1">
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-fit min-w-20 text-gray-600 -ml-4 ux:min-w-[110px]'>
              <Logo />
            </div>
            <h1 className='text-xl ux:text-1xl uppercase text-black'>
              <span className='block'>Московская</span>
              <span className='block'>Богословская</span>
              <span className='block'>семинария</span>
            </h1>
          </div>

          <p className="text-zinc-600 mb-6 max-w-[62ch]">
            Московская Богословская семинария (МБС) — это учебное заведение, которое предлагает богословское образование и подготовку для служения в церкви.
          </p>

          <ul className='space-y-2'>
            <li className='flex items-start gap-2 text-zinc-600'>
              <MapPin className="w-4 h-4 mt-1 text-indigo-600" />
              111524, Москва, ул.Перовская, д.4а
            </li>
            <li className='flex items-center gap-2 text-zinc-600'>
              <Phone className="w-4 h-4 text-indigo-600" />
              <a href="tel:+74957303580" className="hover:text-indigo-600">
                +7 (495) 730-35-80
              </a>
            </li>
            <li className='flex items-center gap-2 text-zinc-600'>
              <Mail className="mt-0.5 w-4 h-4 text-indigo-600" />
              <a href="mailto:info@seminary.moscow" className="hover:text-indigo-600">
                info@seminary.moscow
              </a>
            </li>
          </ul>

        </div>

        {/* Колонка 2 — Быстрые ссылки */}
        <div className="order-2 sm:order-3 md:order-3 lg:order-3 xl:order-2">
          <h3 className='text-lg text-zinc-600 font-semibold mb-4'>Быстрые ссылки</h3>
         
          <ul className="space-y-2">
            {[
              { label: 'Ресурсы семинарии МБС', href: '#ресурсы' },
              { label: 'Курсы на базе семинарии', href: '#курсы' },
              { label: 'Программы онлайн обучения', href: '#программы' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-zinc-600 hover:text-indigo-600 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Колонка 3 — Соцсети, скрыта на lg и ниже */}
        <div className="hidden order-2 xl:block xl:order-3">
          <h3 className='text-lg text-zinc-600 font-semibold mb-4'>Социальные сети</h3>
          <ul className="space-y-2">
            {[
              { label: 'МБС в VK', href: 'https://vk.com/mbsehb' },
              { label: 'МБС в RuTube', href: 'https://rutube.ru/channel/46391748/' },
              { label: 'МБС в Telegram', href: 'https://t.me/mbsehb' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-zinc-600 hover:text-indigo-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Колонка 4 — Подписка */}
        <div className="max-w-sm order-2 lg:order-3 xl:order-4">
          <h3 className='text-lg text-zinc-600 font-semibold mb-4'>Подписка на новости</h3>
          <p className='text-zinc-600 mb-4'>
            Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления.
          </p>
          <form className='flex flex-col gap-2'>
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className='w-full max-h-[50px]'
            />
          <SecondaryButton className="!py-2 xs:w-fit !text-gray-400 !border-gray-300 hover:!text-black hover:!bg-gray-200 hover:!border-black">
            Подписаться
          </SecondaryButton>
          </form>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between border-t border-zinc-200 py-6 text-left text-zinc-600">
        <p className='max-w-[700px]' >&copy; {new Date().getFullYear()} — Автономная некоммерческая организация дополнительного профессионального образования "Богословская Семинария" в г.Москве</p>
        <div className="social-copyright">
          <ul className="flex space-x-4 ml-auto">
            <li>
              <a href="https://vk.com/mbsehb" aria-label="VK">
                <Icon_vk className="w-7 h-7 mt-[-2px]" />
              </a>
            </li>
            <li>
              <a href="https://rutube.ru/channel/46391748/" aria-label="Rutube">
                <Icon_rutube className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://t.me/mbsehb" aria-label="Telegram">
                <Icon_telegram className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
