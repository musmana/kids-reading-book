import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#03194F] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/20 pb-10">
        
        {/* Kids Reading */}
        <div>
          <h3 className="text-[#A9DFED] text-lg font-semibold mb-4">
            Kids Reading
          </h3>
          <ul className="space-y-3 text-white font-medium">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Library</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-[#A9DFED] text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-3 text-white font-medium">
            <li><a href="#" className="hover:underline">Support & FAQ</a></li>
            <li><a href="#" className="hover:underline">Terms of service</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-[#A9DFED] text-lg font-semibold mb-4">
            Social Media
          </h3>
          <div className="flex items-center space-x-6 text-2xl">
            <a href="#" className="hover:text-[#A9DFED]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#A9DFED]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#A9DFED]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#A9DFED]"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center text-center md:justify-between items-center text-sm text-white/70 mt-6 space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center space-x-6">
          <a href="#" className="hover:text-[#A9DFED]">Copyright</a>
          <a href="#" className="hover:text-[#A9DFED]">Terms of service</a>
          <a href="#" className="hover:text-[#A9DFED]">Privacy</a>
          <a href="#" className="hover:text-[#A9DFED]">Blog</a>
          <a href="#" className="hover:text-[#A9DFED]">Patent</a>
        </div>
      </div>
    </footer>
  );
}
