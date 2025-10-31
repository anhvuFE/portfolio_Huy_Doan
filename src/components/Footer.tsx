import { HiHeart, HiDownload } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import cvFile from '../assets/Tran-Doan-Huy-TopCV.vn-311025.215752.pdf';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Tran Doan Huy
            </h3>
            <p className="text-gray-400 text-sm">Junior Digital Marketer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={cvFile}
              download="Tran-Doan-Huy-CV.pdf"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
            >
              <HiDownload className="text-lg" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/huy.doan.439449"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700/50 backdrop-blur rounded-full hover:bg-blue-600 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="mailto:huydoan031812@gmail.com"
              className="p-3 bg-gray-700/50 backdrop-blur rounded-full hover:bg-purple-600 transition-all duration-300"
              aria-label="Email"
            >
              <MdEmail className="text-lg" />
            </a>
            <a
              href="tel:+84763484002"
              className="p-3 bg-gray-700/50 backdrop-blur rounded-full hover:bg-green-600 transition-all duration-300"
              aria-label="Phone"
            >
              <MdPhone className="text-lg" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            © 2024 Made with <HiHeart className="text-red-500 text-lg" /> by Huy Doan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;