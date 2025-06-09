import { LightBulb } from '../../images/LightBulb'
import { SecondaryButton } from '../../componentLibrary/SecondaryButton'

export const WhyChooseUs = () => {
  return (
    <section className=' bg-indigo-700  p-6 sm:p-20  flex flex-col gap-20'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='space-y-5'>

          <article className='text-yellow-300 flex gap-4'>
            <LightBulb />
            <p>Почему стоит выбрать МБС?</p>
          </article>

          <h3 className='text-2xl sm:text-4xl text-white max-w-[29ch]'>
          Вы определяете цели в соответствии с вашим призванием, а мы помогаем вам выстроить ваш индивидуальный путь обучения
          </h3>  
          <p className='text-zinc-100 max-w-[70ch]'>
            Путь служения требует разных знаний и компетенций. Меняются вызовы и контекст. Сотрудники Московской богословской семинарии МБС постоянно анализируют эти вызовы, чтобы помочь вам приобретать те знания и компетенции, которые помогут вам в служении достигать поставленные цели.
          </p>
        </div>
        <SecondaryButton className='mt-10'>
          Перейти в каталог курсов  <span className="ml-2 transition-colors duration-200">→</span>
        </SecondaryButton>
      </div>
    </section>
  )
}
