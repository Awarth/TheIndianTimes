import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../utility/dateFormatter";

function Detailed() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  const baseURL = "https://newsapi.org/v2/everything";
  const apiKey = "b9d4f5029d1c4bac8b519f72a0487f67";

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `${baseURL}?q=${articleId.replace(
            /-/g,
            " "
          )}&apiKey=${apiKey}&language=en`
        );
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setArticle(data.articles[0]);
        } else {
          console.log("No articles found.");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticle();
  }, [articleId]);

  if (!article) {
    return (
      <div className="m-w-full flex justify-center items-center text-4xl p-12">
        Loading...
      </div>
    );
  }

  return (
    <div className="detailed-article w-full px-1 py-12 flex justify-center items-center">
      <div className="detailedMain max-w-screen-md">
        <h1 className="w-full text-4xl max-sm:text-3xl font-semibold mb-2">
          {article.title}
        </h1>
        <p className="w-full border-b border-gray-400 pb-2 text-xl text-gray-800">
          {article.description}
        </p>
        <p className="text-gray-800 pt-1">
          <span className="font-medium">Written by:</span> {article.author} |{" "}
          {article.source.name}
        </p>
        <p className="text-gray-800">
          <span className="font-medium">Updated at:</span>{" "}
          {formatDate(article.publishedAt)}
        </p>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full my-2"
        />
        <p className="text-2xl text-gray-800">{article.content}</p>
        <div className="mt-3 text-xl text-gray-800">
          Read the full article here: 
          <a
            className="text-xl text-blue-500 ml-2 cursor-pointer"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Detailed;
