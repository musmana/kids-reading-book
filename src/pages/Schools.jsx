export default function Schools() {
  return (
    <div className="bg-white text-[#03194F]">
{/* === HERO SECTION === */}
      <section className="bg-navy text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="max-w-lg mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Introducing the Guest Reader Program
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Our FREE program combines videochat technology with over 1,000 interactive, digitized booked to help volunteers read their child's class anytime, from anywhere.
            <br></br><span className="pt-5">Free for Teachers & Volunteers</span>
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md shadow-md">
              Learn More
            </button>
         </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="guestreader.png"
            alt="BookChat preview"
            className="w-[500px] md:w-[600px] drop-shadow-2xl rounded-lg"
          />
        </div>
      </section>

    
     <section className="bg-[#03194F] py-20 px-6 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        How will you use the program?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 🧑 Parent/Guardian */}
        <div className="relative bg-white text-[#03194F] rounded-3xl shadow-lg pt-16 pb-10 px-8 flex flex-col items-center">
          {/* Circular image on top */}
          <div className="absolute -top-12 flex justify-center w-full">
            <div className="w-24 h-24 bg-[#03194F] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="parent.png"
                alt="Parent Guardian"
                className="w-20 h-20 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          {/* Card content */}
          <h3 className="text-2xl font-bold mb-2">I’m a parent/guardian</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            wanting to share this program with my child's class
          </p>
          <button className="bg-[#F78C40] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#e97b2f] transition">
            SHARE DETAILS
          </button>
        </div>

        {/* 👩‍🏫 Teacher */}
        <div className="relative bg-white text-[#03194F] rounded-3xl shadow-lg pt-16 pb-10 px-8 flex flex-col items-center">
          <div className="absolute -top-12 flex justify-center w-full">
            <div className="w-24 h-24 bg-[#03194F] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="teach.png"
                alt="Teacher"
                className="w-20 h-20 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-2">I’m a teacher</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            excited to use this program in my classroom.
          </p>
          <button className="bg-[#F78C40] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#e97b2f] transition">
            LEARN MORE
          </button>
        </div>

        {/* 👩‍💼 Administrator */}
        <div className="relative bg-white text-[#03194F] rounded-3xl shadow-lg pt-16 pb-10 px-8 flex flex-col items-center">
          <div className="absolute -top-12 flex justify-center w-full">
            <div className="w-24 h-24 bg-[#03194F] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="admin.png"
                alt="Administrator"
                className="w-20 h-20 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-2">I’m an administrator</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            seeking further information on behalf of my school or district.
          </p>
          <button className="bg-[#F78C40] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#e97b2f] transition">
            REACH OUT NOW
          </button>
        </div>
      </div>
    </section>

      {/* 📖 Getting Started Section */}
      <section className="text-center py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Getting started is easy as 1-2-read!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-[#03194F]">
            <div className="bg-[#03194F] text-white font-semibold px-6 py-2 rounded-sm mb-6">
              STEP 1
            </div>
            <img
              src="step1.png"
              alt="Step 1"
              className="w-56 h-auto mb-6 rounded-md"
            />
            <h3 className="text-3xl font-bold mb-3">Set up your FREE account</h3>
            <p className="text-gray-700 leading-relaxed max-w-xs">
              Sign up using the Teacher Code located on the Guest Reader Program flyer,
              or in the email from your child’s teacher.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-[#03194F]">
            <div className="bg-[#03194F] text-white font-semibold px-6 py-2 rounded-sm mb-6">
              STEP 2
            </div>
            <img
              src="step2.png"
              alt="Step 2"
              className="w-56 h-auto mb-6 rounded-md"
            />
            <h3 className="text-3xl font-bold mb-3">Choose a timeslot</h3>
            <p className="text-gray-700 leading-relaxed max-w-xs">
              Teachers set the schedule, you pick the available slot between your
              afternoon meetings — and the book you’d like to read! We’ll handle the rest.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-[#03194F]">
            <div className="bg-[#03194F] text-white font-semibold px-6 py-2 rounded-sm mb-6">
              STEP 3
            </div>
            <img
              src="step3.png"
              alt="Step 3"
              className="w-56 h-auto mb-6 rounded-md"
            />
            <h3 className="text-3xl font-bold mb-3">Enjoy story time together!</h3>
            <p className="text-gray-700 leading-relaxed max-w-xs">
              While most volunteer sessions last about 10 minutes, you’ll have plenty
              of time to read, answer questions, and chat with the class.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
