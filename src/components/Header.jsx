import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex flex-col justify-center items-center text-[#132643] border-b-2 border-black bg-white">
        <Link to="/">
          <h1 className="logo w-full flex justify-center items-center text-6xl max-450:text-5xl max-350:text-4xl bg-white my-2 ">
            The Bharat Times
          </h1>
        </Link>
      </header>
    </>
  );
}

export default Header;
