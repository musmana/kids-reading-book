import React from "react";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const navigate = useNavigate();

  const books = [
    { title: "I Talk to the Rain", img: "books/book1.png" },
    { title: "Kevin and Katie", img: "books/book2.png" },
    { title: "Library Lion", img: "books/book3.png" },
    { title: "Universe", img: "books/book4.png" },
    { title: "Adventure", img: "books/book5.png" },
    { title: "Boats Afloat", img: "books/book6.png" },
    { title: "Little White Fish", img: "books/book7.png" },
    { title: "Firefighters", img: "books/book8.png" },
    { title: "Funny Bowl", img: "books/book9.png" },
    { title: "Racecar", img: "books/book10.png" },
    { title: "For Three Days", img: "books/book11.png" },
    { title: "Numbers", img: "books/book12.png" },
    { title: "Moon", img: "books/book13.png" },
    { title: "Train Ride", img: "books/book14.png" },
    { title: "Little Fish", img: "books/book15.png" },
    { title: "Eagle", img: "books/book16.png" },
  ];

  return (
    <div className="bg-[#03194F] text-white min-h-screen">
    
      {/* === HEADER === */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to our library
        </h1>
        <p className="text-gray-200 mb-10 text-sm md:text-base">
          Explore 1000+ award-winning titles from publishers like Simon &
          Schuster, Candlewick Press, ABRAMS, and more.
        </p>

        {/* === BUTTON + FILTER ROW === */}
        <div className="flex justify-center items-center gap-4 relative">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#F78C40] hover:bg-[#ff9b4e] text-white font-semibold px-6 py-3 rounded-md transition"
          >
            START BOOK CHAT
          </button>

          <div className="relative">
            <select className="bg-white text-[#03194F] font-semibold px-6 py-4 rounded-md focus:outline-none appearance-none cursor-pointer">
              <option>AGE</option>
              <option>3–5</option>
              <option>6–8</option>
              <option>9–12</option>
            </select>
            {/* dropdown arrow */}
            <span className="absolute right-3 top-3.5 text-[#03194F] font-bold pointer-events-none">
              ▼
            </span>
          </div>
        </div>
      </section>

      {/* === BOOK GRID === */}
      <section className="bg-[#BBD8FF] py-12 px-6 md:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden w-full max-w-[160px] transform hover:scale-105 transition duration-300"
            >
              <a onClick={() => navigate("/reading")}>
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#F78C40] hover:bg-[#ff9b4e] text-white font-semibold px-6 py-3 rounded-md transition">
            LOAD MORE
          </button>
        </div>
      </section>

    </div>
  );
}
