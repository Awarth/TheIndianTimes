import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import defaultBg from "../images/default.png";

function Detailed() {
  const location = useLocation();
  const navigate = useNavigate();

  const { article } = location.state || {};

  useEffect(() => {
    if (!article) {
      navigate('/');
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  return (
    <div className="article-detail flex flex-col py-2 my-4 justify-center items-center max-full p-4 bg-white">
      <div className="shadow-md max-w-lg rounded-lg p-4">
        <h1 className="text-3xl max-450:text-2xl font-bold mb-3">{article.title}</h1>
        <p className="text-gray-600 pt-2 w-full border-t">
          <span className="font-semibold">Published at:</span>{" "}
          {new Date(article.published).toLocaleDateString()}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Author:</span> {article.author}
        </p>
        <img
          src={article.image !== "None" ? article.image : defaultBg}
          alt={article.title}
          className="w-full object-cover pb-4 border-b"
        />
        <div className="text-gray-700 leading-relaxed">
          {article.content}
        </div>
        <p className="text-gray-600">Read here:</p>
        <a href={article.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
          Click me
        </a>
      </div>
    </div>
  );
}

export default Detailed;
