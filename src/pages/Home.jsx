import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      {/* === HERO SECTION === */}
      <section className="bg-navy text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="max-w-lg mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Read together<br />from anywhere
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            <span className="text-lightblue font-semibold">BookChat™</span> by
            Readeo lets you enjoy more time with the little ones in your life,
            even when you're apart by combining video chat with over{" "}
            <span className="text-lightblue">1,500 digital kids' books.</span>
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md shadow-md">
              TRY IT FOR FREE
            </button>

            <button className="flex items-center gap-2 text-white font-bold hover:text-lightblue">
              <span className="border-2 border-white rounded-full w-8 h-8 flex items-center justify-center">
                ▶
              </span>
              SEE IT IN ACTION
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="tablet.png"
            alt="BookChat preview"
            className="w-[500px] md:w-[600px] drop-shadow-2xl rounded-lg"
          />
        </div>
      </section>

      {/* === STORYTIME SECTION === */}
      <section className="w-full bg-[#F8F8EE] text-navy py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex justify-center md:w-1/2">
            <img
              src="laptop.png"
              alt="Laptop reading preview"
              className="w-[500px] md:w-[550px] drop-shadow-xl rounded-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03194F] mb-6 leading-snug">
              More storytime means more quality time
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our patented BookChat platform makes it easier to capture kids’
              attention. By combining interactive, digitized books with video
              chat, BookChat sessions last almost 10 minutes longer than
              traditional video calls.
            </p>

            <button className="bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md shadow-md">
              SIGN UP FOR FREE
            </button>
          </div>
        </div>
      </section>

      {/* === FAMILY PLAN SECTION === */}
      <section className="w-full bg-white text-[#03194F] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Give the whole family the gift of reading
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When you sign up for a Readeo Gold Family Plan, you can share your
              gold benefits with four others — who will all have access to our
              entire library. Kids can explore countless stories on their own or
              with you during your next BookChat.
            </p>
            <button className="bg-[#F47C20] hover:bg-[#e86f14] text-white font-bold py-3 px-6 rounded-md shadow-md transition-all">
              GET THE FAMILY PLAN
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="family.png"
              alt="Family plan preview"
              className="w-[550px] md:w-[600px] drop-shadow-xl rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* === HOW DOES BOOKCHAT WORK === */}
      <section className="w-full bg-[#A9DFED] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 relative flex justify-center">
            <img
              src="bookchat.png"
              alt="BookChat video thumbnail"
              className="rounded-lg shadow-lg w-[550px] md:w-[600px]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="bg-[#F47C20] hover:bg-[#e86f14] text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="w-10 h-10"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 text-[#03194F]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              How does BookChat work?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              All you need is a high-speed internet connection, webcam, and
              Readeo account. Easily access BookChat on an internet browser with
              your PC, laptop, or tablet — and let the stories begin.
            </p>
            <button className="bg-[#F47C20] hover:bg-[#e86f14] text-white font-bold py-3 px-6 rounded-md shadow-md transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* === A GOOD BOOK CAN BRIDGE ANY DISTANCE === */}
      <section className="w-full bg-white text-[#03194F] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              A good book can bridge any distance
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Stories have the power to bring people together. Visit our
              ever-growing library of carefully curated titles, and enjoy
              thousands of books you and your family can explore — anytime,
              anywhere.
            </p>
            <button className="bg-[#F47C20] hover:bg-[#e86f14] text-white font-bold py-3 px-6 rounded-md shadow-md transition-all">
              BROWSE THE LIBRARY
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="bookopen.png"
              alt="Book and map illustration"
              className="w-[550px] md:w-[600px] drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* === TESTIMONIAL SECTION === */}
      <Testimonials />
    </div>
  );
}
