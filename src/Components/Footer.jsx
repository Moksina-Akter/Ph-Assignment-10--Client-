import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-10 pb-5">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold mb-3">ImportExportHub</h1>
          <p className="text-gray-300">
            Your trusted platform to manage exports, browse global products, and
            import products seamlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#F59E0B]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-products" className="hover:text-[#F59E0B]">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/my-exports" className="hover:text-[#F59E0B]">
                My Exports
              </Link>
            </li>
            <li>
              <Link to="/my-imports" className="hover:text-[#F59E0B]">
                My Imports
              </Link>
            </li>
            <li>
              <Link to="/add-export" className="hover:text-[#F59E0B]">
                Add Export
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-300">Email: support@importexporthub.com</p>
          <p className="text-gray-300">Phone: +880 1234 567890</p>
          <p className="text-gray-300">
            Address: 123 Market Street, Dhaka, Bangladesh
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-[#F59E0B]">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-[#F59E0B]">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="hover:text-[#F59E0B]">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-[#F59E0B]">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ImportExportHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
