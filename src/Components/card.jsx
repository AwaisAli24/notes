const Card = ({ heading, content }) => {
  return (
    <div
      className="border border-gray-300 rounded-2xl p-5 flex flex-col
  w-full sm:w-80 md:w-72 lg:w-64 h-auto bg-white shadow-md hover:shadow-lg transition-shadow"
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">
          {heading.length > 25 ? heading.slice(0, 25) + "..." : heading}
        </h2>
      </div>
      <div className="mt-2 text-gray-600 text-sm sm:text-base">
        {content.length > 200 ? content.slice(0, 200) + "..." : content}
      </div>
    </div>
  );
};

export default Card;
