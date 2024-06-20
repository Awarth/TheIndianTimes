import PropTypes from 'prop-types';
import defaultBG from "../images/default.png";

const ArticleCard = ({ article, onReadMore, formattedDate }) => {
  console.log(article);
  return (
    <div className="article-card flex flex-col bg-white shadow-md rounded-lg overflow-hidden h-[500px]">
      <img
        src={article.image !== "None" ? article.image : defaultBG}
        alt={article.id}
        className="w-auto h-2/5 object-cover"
      />
      <div className="p-4 h-3/5">
        <h2 className="text-xl font-semibold h-max">
          {article.title.slice(0, 50)}...
        </h2>
        <p className="text-gray-600 h-max my-2"><span className='font-semibold'>Published at:</span> {formattedDate}</p>
        <p className="text-gray-700 h-max">
          {article.description.slice(0, 150)}...
        </p>
        <button
          onClick={() => onReadMore(article)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded h-max"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }),
  onReadMore: PropTypes.func,
  formattedDate: PropTypes.string
};

export default ArticleCard;
