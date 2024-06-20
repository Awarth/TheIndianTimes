import { CiCalendar } from "react-icons/ci";

function ArticleCard({ article, formattedDate, onReadMore }) {
  const { title, urlToImage, description } = article;

  const handleReadMore = () => {
    onReadMore(article, formattedDate);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {urlToImage && (
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-4 ">
          <img
            src={urlToImage}
            className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 "
          />

          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h5>
            <p className="block w-full font-sans text-base font-normal leading-relaxed text-inherit antialiased overflow-hidden">
              {description}
            </p>
            <p className="flex flex-row gap-1 items-center font-sans text-base font-normal leading-relaxed text-inherit antialiased text-left mt-2">
              <CiCalendar /> {formattedDate}
            </p>
          </div>
          <div className="flex items-center justify-between w-full p-6 pt-0">
            <button
              onClick={handleReadMore}
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans font-semibold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ArticleCard;
