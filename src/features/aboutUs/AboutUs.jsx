import React from 'react'
import { MainButton } from '../../componentLibrary/MainButton'
import { LightBulb } from '../../images/LightBulb'

export const AboutUs = () => {
  return (
    <section className='px-6 py-20  flex flex-col'>
      <div className='w-full max-w-7xl mx-auto flex justify-between flex-col space-y-5'>
        <article className='text-indigo-600 flex gap-4'>
          <LightBulb />
          <p>Учитесь там, где вам удобно и когда вам удобно</p>
        </article>

        <h3 className='text-2xl sm:text-4xl text-indigo-900 max-w-[29ch]'>
          МБС стала ближе, чем когда либо!
        </h3>  
        <p className='text-zinc-600'>
          Образовательные возможности в Московской Богословской Семинарии не ограничиваются стенами московского кампуса МБС. В семинарии можно учиться онлайн, изучая курсы ведущих преподавателей из любой точки мира. Кроме того в каждом регионе страны предлагаются образовательные возможности, которые могут быть засчитаны в рамках обучения по программам МБС.
        </p>
                <p className='text-zinc-600'>
          Присоединяйтесь к сообществу студентов Московской богословской семинарии МБС! Став студентом, вы получите доступ к курсам семинарии и сможете узнавать первыми о новых возможностях в МБС.
        </p>
                <p className='text-zinc-600'>
          ПРИСОЕДИНЯЙТЕСЬ К МБС!
        </p>
        <MainButton className='w-fit'>
          Стать студентом МБС
        </MainButton>
      </div>
    </section>
  )
}
