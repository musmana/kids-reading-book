export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#03194F]">
          {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#03194F] mb-4">
         Start Your Free Trial Now!
        </h1>
        <p className="text-gray-700 mx-auto text-lg">
          Sign up now to claim your FREE 7-day trial of KidsReading Gold!
        </p>
      </section>

      <div className="min-h-screen bg-[#C9ECF4] flex flex-col items-center justify-center px-6 py-12">
      {/* ===== Google Login ===== */}
      <button className="w-full max-w-lg bg-white text-black font-semibold py-3 rounded-2xl shadow-sm flex items-center justify-center gap-2 mb-4 hover:shadow-md transition">
        <img src="google.png" alt="Google" className="w-6 h-6" />
        <span>CONTINUE WITH GOOGLE</span>
      </button>

      {/* ===== Apple Login ===== */}
      <button className="w-full max-w-lg bg-black text-white font-semibold py-3 rounded-2xl shadow-sm flex items-center justify-center gap-2 mb-8 hover:opacity-90 transition">
        <img src="apple.png" alt="Apple" className="w-6 h-6" />
        <span>CONTINUE WITH APPLE</span>
      </button>

      {/* ===== Divider ===== */}
      <div className="flex items-center justify-center w-full max-w-lg mb-8">
        <hr className="flex-grow border-blue-300" />
        <span className="mx-3 text-gray-700 font-medium">or</span>
        <hr className="flex-grow border-blue-300" />
      </div>

      {/* ===== Login Form ===== */}
      <form className="w-full max-w-lg space-y-4">
        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 bg-white rounded-md border-none focus:ring-2 focus:ring-blue-300 outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 bg-white rounded-md border-none focus:ring-2 focus:ring-blue-300 outline-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#F47C28] hover:bg-[#e66c10] text-white font-bold py-3 rounded-md transition"
        >
          START READING
        </button>
      </form>

      {/* ===== Terms and Links ===== */}
      <div className="text-center text-sm mt-6 text-gray-800">
        <p>
          By continuing, you agree to our{" "}
          <a href="#" className="font-bold underline">
            Terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="font-bold underline">
            Privacy policy
          </a>
        </p>

        <p className="mt-4 text-base">
          Need help Logging in?{" "}
          <a href="#" className="font-bold underline">
            Click here
          </a>
        </p>

        <p className="mt-3 text-base">
          New to KidsReading?{" "}
          <a href="/signup" className="font-bold underline">
            SIGN UP
          </a>
        </p>
      </div>
    </div>

    </div>
  );
}
