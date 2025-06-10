import { LightBulbTopic } from '../../components/LightBulbTopic';
import { SecondaryButton } from '../../componentLibrary/SecondaryButton'

export const WhyChooseUs = () => {
  return (
    <section className=' bg-blue-800  p-6 sm:p-20  flex flex-col gap-20'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='space-y-5'>
          <LightBulbTopic topic='Почему стоит выбрать МБС?' textColor="text-yellow-300" />

          <h3 className='text-2xl sm:text-4xl text-white max-w-[29ch]'>
          Вы определяете цели в соответствии с вашим призванием, а мы помогаем вам выстроить ваш индивидуальный путь обучения
          </h3>  
          <p className='text-zinc-100 max-w-[70ch]'>
            Путь служения требует разных знаний и компетенций. Меняются вызовы и контекст. Сотрудники Московской богословской семинарии МБС постоянно анализируют эти вызовы, чтобы помочь вам приобретать те знания и компетенции, которые помогут вам в служении достигать поставленные цели.
          </p>
        </div>
        <SecondaryButton className='mt-10'>
          Каталог курсов  <span className="ml-2 mt-1 transition-colors duration-200">→</span>
        </SecondaryButton>
      </div>
    </section>
  )
}
