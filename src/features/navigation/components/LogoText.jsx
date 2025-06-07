import './LogoText.css'

export const LogoText = () => {
  return (
      <article className="logo_text w-fit font-semibold text-indigo-600 p-2 sm:hidden flex gap-2">
        <h2 className='text-4xl'>МБС<span>:</span></h2>
        <div className='text-sm rounded-md '>
          <p className="mt-0.5">Богословская</p>
          <p className="-mt-1">семинария</p>
        </div>
      </article>
  )
}
