import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reading() {
  const navigate = useNavigate();

  // Array of book pages (images)
  const pages = [
    "book1.png",
    "book2.png",
    "book3.png",
    "book4.png",
    "book5.png",
  ];

  const [currentPage, setCurrentPage] = useState(0);

  // Go to next image
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  // Go to previous image
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  // Go back to Library
  const handleExit = () => {
    navigate("/library");
  };

  return (
   <div className="bg-[#03194F] text-white min-h-screen">
        
      <div className="flex justify-end bg-navy p-4">
  <button
    onClick={() => navigate("/library")}
    className="bg-orange text-white font-semibold px-4 py-1.5 rounded-md hover:bg-orange/90"
  >
    EXIT
  </button>
</div>

      {/* === IMAGE CONTAINER === */}
      <div className="flex items-center justify-center w-full px-8 pt-[100px] pb-[100px] bg-[#BBD8FF]">
        {/* LEFT ARROW */}
        <button
          onClick={prevPage}
          className="text-white bg-[#03194F] hover:bg-[#052a7f] px-5 py-3 rounded-full absolute left-6"
        >
          <span className="text-lg">❮</span>
        </button>

        {/* BOOK IMAGE */}
        <img
          src={pages[currentPage]}
          alt={`Page ${currentPage + 1}`}
          className="w-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
        />

        {/* RIGHT ARROW */}
        <button
          onClick={nextPage}
          className="text-white bg-[#03194F] hover:bg-[#052a7f] px-5 py-3 rounded-full absolute right-6"
        >
          <span className="text-lg">❯</span>
        </button>
      </div>

    </div>
  );
}
