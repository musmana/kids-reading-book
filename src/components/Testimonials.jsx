import { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This morning my grandson woke up and said he wanted to read with Gramma BEFORE he went outside to play! He always thanks me for reading to him. Thank you for a wonderful app!",
      author: "Nadine B.",
    },
    {
      quote:
        "My granddaughter and I love reading together even though we live miles apart. This app keeps us connected and brings us so much joy!",
      author: "Linda M.",
    },
    {
      quote:
        "BookChat has made bedtime stories magical again. My son insists on using it every night!",
      author: "John R.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row bg-[#B10F3A] text-white py-20">
      {/* === Left: Testimonial Slider === */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 text-center">
        <div className="bg-[#7C082B] rounded-md p-8 max-w-md relative shadow-lg">
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            “{testimonials[current].quote}”
          </p>
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#7C082B] rotate-45"></div>
        </div>
        <p className="mt-6 italic text-white/80">— {testimonials[current].author}</p>

        {/* Dots */}
        <div className="flex space-x-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-white" : "bg-[#7C082B]"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* === Right: Logos === */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-8 mt-12 md:mt-0 ">
        <h3 className="text-lg md:text-xl font-semibold mb-8">
          Rave reviews for Readeo’s BookChat
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 ">
          <img src="review1.png" alt="DailyCandy" />
          <img src="review2.png" alt="AARP" />
          <img src="review3.png" alt="Military.com" />
        </div>
      </div>
    </section>
  );
}
