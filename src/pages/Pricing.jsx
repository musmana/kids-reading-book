import { Check, X, Info } from "lucide-react";
export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#03194F]">
   

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#03194F] mb-4">
          Enjoy (way) more with KidsReading Gold
        </h1>
        <p className="text-gray-700 mx-auto text-lg">
          Take advantage of our Gold Family Plan option to experience all the benefits
          KidsReading has to offer.
        </p>
      </section>

      {/* Pricing Comparison Table */}
      <section className="bg-[#CDEFF7] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-6">
          {/* Feature List */}
          <div className="flex flex-col justify-center text-left text-[#03194F] text-lg space-y-8 mt-10">
            <div>
              <p className="font-medium">BookChat with the ones you love</p>
            </div>
            <div>
              <p className="font-medium">
                Full Library access <br />
                <span className="text-gray-500 text-sm">(over 1,000 books and counting!)</span>
              </p>
            </div>
            <div>
              <p className="font-medium flex items-center gap-2">
                Create customized bookshelves
                <span title="Organize your favorite books"><Info className="inline text-blue-500 ml-2" /></span>
              </p>
            </div>
            <div>
              <p className="font-medium flex items-center gap-2">
                Bookmarks
                <span title="Save books to continue later"><Info className="inline text-blue-500 ml-2" /></span>
              </p>
            </div>
            <div>
              <p className="font-medium items-center gap-2">
                Share Gold with 4 others
                <span title="They’ll have full Gold plan benefits"><Info className="inline text-blue-500 ml-2" /></span>
                <br></br>
                <span className="text-gray-500 text-sm">
                  (They’ll have full Gold plan benefits)
                </span>
              </p>
            </div>
          </div>

          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Free Plan</h2>

            <div className="space-y-8 text-lg">
              <p><Check className="inline text-green-500 mr-2" /></p>
              <p>
                <span className="font-semibold">Limited</span>{" "}
                <span title="5 books rotate monthly" className="text-[#03194F] cursor-help">❓</span>
                <br />
                <span className="text-sm text-gray-500">(5 books rotate monthly)</span>
              </p>
              <p><X className="inline text-red-500 mr-2" /></p>
              <p><X className="inline text-red-500 mr-2" /></p>
              <p><X className="inline text-red-500 mr-2" /></p>
            </div>

            <div className="mt-10">
              <p className="text-[#03194F] font-semibold mb-1">FREE</p>
              <p className="text-gray-500 text-sm mb-6">Forever</p>
              <button className="border-2 border-[#03194F] text-[#03194F] font-bold px-6 py-2 rounded-md hover:bg-[#03194F] hover:text-white transition">
                STAY FREE
              </button>
            </div>
          </div>

          {/* Gold Plan */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center border-4 border-[#F47C20]">
            <h2 className="text-2xl font-bold mb-6">Gold Family Plan</h2>

                <ul className="space-y-10 mb-8">
            {Array(5)
              .fill()
              .map((_, i) => (
                <li key={i}>
                  <Check className="inline text-green-500 mr-2" />
                </li>
              ))}
          </ul>

            <div className="mt-10">
              <p className="font-semibold text-[#03194F]">$14.99/monthly</p>
              <p className="text-gray-600 mb-6 font-semibold">$99.99/annually</p>
              <button className="bg-[#F47C20] text-white font-bold px-6 py-2 rounded-md hover:bg-[#e86f14] transition">
                FAMILY GOLD
              </button>
            </div>
          </div>
        </div>
      </section>
{/* Gold Plan Perks Section */}
<section className="bg-[#03194F] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-16">Gold Plan Perks</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Bookshelves */}
      <div className="flex flex-col items-center">
        <img
          src="bookshelf.png"
          alt="Bookshelf"
          className="mb-6"
        />
        <h3 className="text-xl font-semibold mb-3">
          Create customized bookshelves
        </h3>
        <p className="text-gray-300 max-w-xs">
          Keep your books organized and on display, using as many shelves as you
          like. Anyone on your Gold Family Plan can access them, too!
        </p>
      </div>

      {/* Bookmark */}
      <div className="flex flex-col items-center">
        <img
          src="bookmark.png"
          alt="Bookmark"
          className="mb-6"
        />
        <h3 className="text-xl font-semibold mb-3">Save your spot</h3>
        <p className="text-gray-300 max-w-xs">
          When bedtime cuts your BookChat short, bookmark that spot and jump
          back in later.
        </p>
      </div>

      {/* Family Share */}
      <div className="flex flex-col items-center">
        <img
          src="family1.png"
          alt="Family Share"
          className="mb-6"
        />
        <h3 className="text-xl font-semibold mb-3">Share Gold with Family</h3>
        <p className="text-gray-300 max-w-xs">
          Add up to 4 people on your Gold Family Plan. They’ll have the same
          full access to KidsReading as you.
        </p>
      </div>
    </div>

    <div className="mt-16">
      <button className="bg-[#F47C20] hover:bg-[#e86f14] text-white font-bold px-8 py-3 rounded-md transition">
        GET STARTED FOR FREE
      </button>
    </div>
  </div>
</section>

     {/* FAQ Section */}
<section className="bg-[#A9DFED] py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#03194F] mb-12">
      Frequently asked questions
    </h2>

    {/* FAQ List */}
    <div className="space-y-4">
      {[
        "What are the benefits of upgrading to a Gold Membership?",
        "What is the difference between a Gold Plan and a Gold Family Plan?",
        "How do I add/remove members to my Gold Family Plan?",
        "Can a Free Member BookChat with a Gold Member?",
        "Is there any sort of time limit or book restraint for reading sessions?",
        "Is a credit card required at signup if I’m signing up for a Free Membership?",
      ].map((question, index) => (
        <div
          key={index}
          className="bg-white flex items-center gap-4 shadow-sm rounded-md py-4 px-6 cursor-pointer hover:bg-gray-50 transition"
        >
          <div className="bg-[#F47C20] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
            +
          </div>
          <p className="text-[#03194F] font-medium">{question}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}
