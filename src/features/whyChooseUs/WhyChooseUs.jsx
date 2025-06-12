import { LightBulbTopic } from '../../components/LightBulbTopic';
import { SecondaryButton } from '../../componentLibrary/SecondaryButton'
import { CardGrid } from './components/CardGrid';

export const WhyChooseUs = () => {
  return (
    <section className=' bg-blue-800  p-6 sm:p-20 flex flex-col '>
      <div className='w-full max-w-7xl mx-auto flex flex-col gap-10 xl:flex-row xl:items-center'>
        <main className='w-full max-w-7xl mx-auto'>
          <div className='space-y-5'>
            <LightBulbTopic topic='Почему стоит выбрать МБС?' textColor="text-yellow-300" />

            <h3 className='text-2xl sm:text-4xl text-white md:max-w-[29ch]'>
            Вы определяете цели в соответствии с вашим призванием, а мы помогаем вам выстроить ваш индивидуальный путь обучения
            </h3>  
            <p style={{ textWrap: 'pretty' }} className='text-zinc-100 md:max-w-[65ch]'>
              Путь служения требует разных знаний и компетенций. Меняются вызовы и контекст. Сотрудники Московской богословской семинарии МБС постоянно анализируют эти вызовы, чтобы помочь вам приобретать те знания и компетенции, которые помогут вам в служении достигать поставленные цели.
            </p>
          </div>
          <SecondaryButton className='mt-10'>
            Регистрация <span className="ml-2 mt-1 transition-colors duration-200">→</span>
          </SecondaryButton>
        </main>
      <CardGrid />
      </div>
    </section>
  )
}
