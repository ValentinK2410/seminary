export const CardCourse = (props) => {
  const { Id, Name, Desc, Category,Image } = props;
  return (
    <div
      key={Id}
      className=" max-w-[300px] border border-indigo-100 rounded-lg shadow-md h-[500px] flex flex-col justify-between"
    >
      <article className="p-6 flex flex-col flex-grow">
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Lite программа"
            className="border w-full h-[200px] rounded-md"
          />
        </div>
        <h4 className="my-3 text-lg font-semibold text-indigo-900">
         {Name}
        </h4>
        <p className="text-gray-600 text-md">
          {Desc}
        </p>
      </article>

      <div className=" w-fit py-2 px-4 mb-3 bg-indigo-50 text-indigo-900 text-xs rounded-r-md">
        {Category}
      </div>
    </div>
  );
};
