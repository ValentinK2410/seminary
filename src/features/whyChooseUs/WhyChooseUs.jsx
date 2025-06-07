import React from 'react'
import { MainButton } from '../../componentLibrary/MainButton'
import { LightBulb } from '../../images/LightBulb'

export const WhyChooseUs = () => {
  return (
    <section className='bg-indigo-600 px-6 py-20  flex flex-col'>
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
        <button className='mt-10 w-fit bg-white text-indigo-600  border 
        border-indigo-600
        px-5 
        py-2.5 
        text-lg 
        rounded-lg 
        flex 
        items-center 
        justify-between
        transition-colors 
        duration-200
        hover:bg-indigo-600 
        hover:text-white 
        hover:border-white'>
          Перейти в каталог курсов
        </button>
      </div>
    </section>
  )
}
