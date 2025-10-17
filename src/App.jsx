import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Schools from "./pages/Schools";
import Library from "./pages/Library";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Login from "./pages/Login";
import Reading from "./pages/Reading";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen bg-navy text-white">
        {/* Navbar always at top */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/library" element={<Library />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
