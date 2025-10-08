import React from "react";
import { Link } from "react-router-dom";
import image3 from "../../assets/error.png";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center px-6">
      <img
            src={image3}
            alt="404 Not Found"
            className="w-[250px] md:w-[350px] mb-8 animate-bounce"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            404
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
            Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
                to="/"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
            Go Back Home
        </Link>
    </div>
  );
};

export default ErrorPage;