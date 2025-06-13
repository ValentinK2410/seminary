export const CardFeedback = ({ text, image, name, info, bgColorClass, colorCode }) => {
  return (
    <div className="w-60 min-h-80 rounded-lg shadow-md flex flex-col justify-between text-white overflow-hidden">
      <article className={` h-full space-y-3 ${bgColorClass}`}>
        <div className='w-1/3 h-5 bg-white bg-opacity-40'> </div>
        <div className="px-5 z-10">
          <div className="text-lg mb-4 flex gap-1">
            {[...Array(4)].map((_, i) => (
              <p key={i} className={i < colorCode ? 'text-white' : 'text-gray-400'}>★</p>
            ))}
          </div>
          <p className="text-sm mb-6">{text}</p>
        </div>
      </article>

      <article className={`relative p-5 ${bgColorClass} flex items-center justify-center`}>
        <div className="w-12 h-12  rounded-full overflow-hidden mr-3 z-10">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex-grow z-10">
          <p className="">{name}</p>
          <p className="text-xs">{info}</p>
        </div>
        {/* second overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-0" />
      </article>
    </div>
  );
};
