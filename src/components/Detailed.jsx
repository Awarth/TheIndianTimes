import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../utility/dateFormatter";

function Detailed() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  const baseURL = "https://api.currentsapi.services/v1/search";
  const apiKey = "n1sUYUbD2afMmYmFnAsTG5wUitnbCDw2swnUdWzxBSlY0y71"; // Replace with your Currents API key

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${baseURL}?id=${articleId}&apiKey=${apiKey}`);
        const data = await response.json();
        if (data.news && data.news.length > 0) {
          setArticle(data.news[0]);
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
        <h1 className="w-full text-4xl max-sm:text-3xl font-semibold mb-2">{article.title}</h1>
        <p className="w-full border-b border-gray-400 pb-2 text-xl text-gray-800">
          {article.description}
        </p>
        <p className="text-gray-800 pt-1">
          {" "}
          <span className="font-medium"> Written by:</span> {article.author}
        </p>
        <p className="text-gray-800">
          {" "}
          <span className="font-medium"> Updated at:</span>{" "}
          {formatDate(article.published)}
        </p>
        <img
          src={article.image}
          alt={article.title}
          className="w-full my-2"
        />
        <p className="text-2xl text-gray-800">{article.description}</p>

        <p>
          <p className="mt-3 text-xl text-gray-800">Read the full article here : </p>
          <a className="text-xl text-blue-500 " href={article.url} target="_blank" rel="noopener noreferrer">
            Click here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Detailed;
