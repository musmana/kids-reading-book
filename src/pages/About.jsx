export default function About() {
  return (
    <div className="font-[Inter] text-[#03194F]">
      {/* Section 1: Our Story */}
      <section className="bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03194F]">
            This is how our story begins
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In 2010, Readeo founder Coby Neuenschwander and his family moved
            1,500 miles away—and quickly realized video calls alone weren't
            enough to keep his son and son’s grandparents connected.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To bridge the distance, Coby turned to the power of stories.
            Combining beautifully digitized books with video chat technology,
            Readeo launched later that year, and BookChat™ was patented in 2012.
            Since then, Readeo has been committed to fostering the joy of
            reading between loved ones—near and far.
          </p>
        </div>

        {/* Right Video/Image */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="aboutstory.png"
              alt="Our story begins"
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition">
              <button className="bg-white text-[#03194F] rounded-full px-5 py-4 shadow-md hover:scale-110 transition">
                ▶
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Thousands of books */}
      <section className="bg-[#A9DFED] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="kidstablet.png"
            alt="Book collection"
            className="w-[90%] md:w-[70%] drop-shadow-xl"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Thousands of books for the whole family
          </h2>
          <p className="text-lg leading-relaxed text-[#03194F]/80">
            BookChat gives families a way to spend quality time together, even
            when they’re apart. We are passionate about growing our library with
            high-quality books that educate, entertain, and encourage little
            ones to let their imaginations run wild.
          </p>
        </div>
      </section>

      {/* Section 3: Turn screen time into storytime */}
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Turn screen time into storytime
          </h2>
          <p className="text-lg leading-relaxed text-[#03194F]/80">
            BookChat lets either side of the video call flip through the pages
            of a picture book easily. This interactive experience captures kids’
            attention longer—which makes it no surprise that 90% of Readeo
            users prefer BookChat over other video chat services to connect with
            their loved ones.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="booksgroup.png"
            alt="Kids reading on tablet"
            className="rounded-2xl shadow-lg w-[90%] md:w-[70%]"
          />
        </div>
      </section>
    </div>
  );
}
