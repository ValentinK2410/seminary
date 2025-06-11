import { Logo } from '../../images/Logo';
import { PrimaryButton } from '../../componentLibrary/PrimaryButton';
import { Icon_map } from '../../images/Icon_map';
import { Icon_phone } from '../../images/Icon_phone';
import { Icon_facebook } from '../../images/Icon_facebook';
import { Icon_instagram } from '../../images/Icon_instagram';
import { Icon_youtube } from '../../images/Icon_youtube';
import { Icon_x } from '../../images/Icon_x';
import { Input } from '../../componentLibrary/Input';

export const Footer = () => {
  return (
    <footer className="bg-indigo-25 px-6 sm:px-20">
      <div
        className="w-full max-w-7xl mx-auto grid gap-8 py-[100px]
                  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {/* Колонка 1 — Всегда первая */}
        <div className="order-1">
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
            Московская Богословская семинария (МБС) — это учебное заведение, которое предлагает богословское образование и подготовку для служения в церкви.
          </p>

          <ul className='space-y-2'>
            <li className='flex items-center gap-2 text-zinc-600'>
              <Icon_map className="w-3" />
              Yarra Park, Melbourne, Australia
            </li>
            <li className='flex items-center gap-2 text-zinc-600'>
              <Icon_phone className="w-3" />
              <a href="tel:+4733378901" className="hover:text-indigo-600">+(61) 485-826-710</a>
            </li>
          </ul>
        </div>

        {/* Колонка 2 — Быстрые ссылки */}
        <div className="order-2 sm:order-3 md:order-3 lg:order-3 xl:order-2">
          <h3 className='text-lg font-semibold mb-4'>Быстрые ссылки</h3>
          <ul className='space-y-2'>
            {['О нас', 'Курсы', 'Контакты', 'Блог'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className='text-zinc-600 hover:text-indigo-600 transition-colors'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Колонка 3 — Соцсети, скрыта на lg и ниже */}
        <div className="hidden sm:block md:block order-4 md:order-4 lg:hidden xl:block xl:order-3">
          <h3 className='text-lg font-semibold mb-4'>Социальные сети</h3>
          <ul className='space-y-2'>
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <li key={social}>
                <a
                  href={`https://${social.toLowerCase()}.com`}
                  className='text-zinc-600 hover:text-indigo-600 transition-colors'
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Колонка 4 — Подписка */}
        <div className="order-2 md:order-2 lg:order-3 xl:order-4">
          <h3 className='text-lg font-semibold mb-4'>Подписка на новости</h3>
          <p className='text-zinc-600 mb-4'>
            Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления.
          </p>
          <form className='space-y-3 flex flex-col gap-3'>
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className='w-full max-h-[50px]'
            />
            <PrimaryButton className='w-full !justify-center !m-0'>
              Подписаться
            </PrimaryButton>
          </form>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between border-t border-zinc-200 py-6 text-left text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Московская Богословская Семинария. Все права защищены.</p>
        <div className="social-copyright">
          <ul className="flex space-x-4 ml-auto">
            <li>
              <a href="#" aria-label="Facebook">
                <Icon_facebook className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <Icon_instagram className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
              <Icon_youtube className="w-6 h-6" />
              </a>
            </li>
             <li>
              <a href="#" aria-label="X">
              <Icon_x className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
