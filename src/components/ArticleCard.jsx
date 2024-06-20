import defaultBG from "../images/default.png";

const ArticleCard = ({ article, onReadMore, formattedDate }) => {
  return (
    <div className="article-card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={article.image ? article.image : defaultBG} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{article.title}</h2>
        <p className="text-gray-600">{formattedDate}</p>
        <p className="text-gray-700 mt-2">{article.description}</p>
        <button
          onClick={() => onReadMore(article)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
