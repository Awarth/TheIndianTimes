import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ArticleCard from "./ArticleCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { formatDate } from "../utility/dateFormatter";
import { useNavigate } from "react-router-dom";

function Home() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("everything");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const navigate = useNavigate();

  const keyWords = [
    "Bitcoin",
    "Sports",
    "Technology",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "World",
    "Politics",
    "Travel",
  ];

  useEffect(() => {
    fetchArticles();
  }, [currentPage, selectedOption]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: searchQuery || selectedOption,
          sortBy: "publishedAt",
          apiKey: "b9d4f5029d1c4bac8b519f72a0487f67",
          page: currentPage,
          pageSize,
          language: "en",
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectedChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePageChange = (page) => {
    console.log(currentPage);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchArticles();
    setSearchQuery("");
  };

  const handleReadMore = (article) => {
    const articleId = article.title.replace(/\s+/g, '-');
    navigate(`/article/${articleId}`);
  };

  const totalPages = Math.ceil(100 / pageSize);

  return (
    <>
      <div className="main w-full bg-white">
        <div className="filterAndSearch w-full flex flex-row gap-4 justify-end items-center mt-3">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-row text-center justify-between items-center "
          >
            <input
              className="searchInput bg-[#fff] border text-[#646464] py-2 px-4 w-32 -mr-8 transition-all ease-in-out duration-500 rounded-3xl"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
            <button className="bg-[#fff] text-[#646464]">
              <CiSearch />
            </button>
          </form>
          <select
            value={selectedOption}
            onChange={handleSelectedChange}
            placeholder="Categories"
            className="bg-[#fff] text-[#646464]"
          >
            {keyWords.map((keyword, index) => (
              <option key={index} value={keyword}>
                {keyword}
              </option>
            ))}
          </select>
        </div>
        <div className="article__list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              onReadMore={handleReadMore}
              formattedDate={formatDate(article.publishedAt)}
            />
          ))}
        </div>
        <div className="pagination flex items-center justify-center bg-white px-4 py-3 sm:px-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                currentPage === page
                  ? "z-10 bg-blue-500  text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <FaChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
