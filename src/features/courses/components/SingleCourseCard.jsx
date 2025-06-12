export const SingleCourseCard = (props) => {
  const { Id, Name, Desc, Category,Image } = props;
  return (
    <div
      key={Id}
      className="border border-indigo-100 bg-white rounded-lg shadow-md overflow-hidden sm:h-[550px] ux:h-[510px] "
    >
      <a href="#">
        <div className="flex justify-center mt-6">
          <img
            src={Image}
            alt="Lite программа"
            className="size-14 
          rounded-md 
          ux:w-5/6 ux:h-5/6
          xs:w-5/6 xs:h-5/6
          sm:w-5/6 sm:h-5/6
          md:w-5/6 md:h-5/6
          lg:w-5/6 lg:h-5/6
          xl:w-5/6 xl:h-5/6
          2xl:w-5/6 2xl:h-5/6"
          />
        </div>
        <div className="flex justify-start pl-6 pt-4">
          <div className="bg-indigo-50 p-2 text-indigo-900 text-xs">
            {Category}
          </div>
        </div>
        <div className="p-6 ux:pl-8">
          <h4 class="text-lg mt-4 mb-2 font-semibold text-indigo-900">
            {Name || "name course"}
          </h4>
          <p className="text-gray-600 text-md">
            {Desc ||
              "Описание карточки. Тут может быть любой текст, описывающий содержание карточки."}
          </p>
        </div>
      </a>
    </div>
  );
 
};
