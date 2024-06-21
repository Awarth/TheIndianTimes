import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import ArticleCard from "./ArticleCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { formatDate } from "../utility/dateFormatter";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("everything");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const baseURL = "https://api.currentsapi.services/v1/search";
  const apiKey = "n1sUYUbD2afMmYmFnAsTG5wUitnbCDw2swnUdWzxBSlY0y71";

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(baseURL, {
        params: {
          keywords: searchQuery || selectedOption,
          apiKey: apiKey,
          language: "en",
          page_number: currentPage,
          page_size: pageSize,
        },
      });
      setArticles(response.data.news);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage, selectedOption, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectedChange = (e) => {
    setSelectedOption(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
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
    const articleId = article.id;
    navigate(`/article/${articleId}`, { state: { article } });
  };

  const totalPages = Math.ceil(100 / pageSize);

  return (
    <>
      <div className="main w-full px-6 bg-white">
        <div className="filterAndSearch w-full flex flex-row gap-1 justify-end items-center mt-3">
          <div className="gap-6 flex">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-row text-center justify-between items-center "
            >
              <input
                className="searchInput bg-[#fff] border text-[#646464] py-2 px-4  -mr-8 transition-all ease-in-out duration-500 rounded-lg"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
              <button type="submit" className="bg-[#fff] text-[#646464]">
                <CiSearch />
              </button>
            </form>
            <select
              value={selectedOption}
              onChange={handleSelectedChange}
              placeholder="Categories"
              className="bg-[#fff] border mr-2 rounded-lg px-2 text-[#646464]"
            >
              {keyWords.map((keyword, index) => (
                <option key={index} value={keyword}>
                  {keyword}
                </option>
              ))}
            </select>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center my-10">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center my-10">
            <p>{error}, try again later</p>
          </div>
        ) : (
          <>
            <div className="article__list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-12 my-10">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  article={article}
                  onReadMore={handleReadMore}
                  formattedDate={formatDate(article.published)}
                />
              ))}
            </div>
            <div className="pagination flex items-center justify-center bg-white my-10 mx-auto">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === page
                        ? "z-10 bg-blue-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next</span>
                <FaChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
