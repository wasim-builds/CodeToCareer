import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-green-500 mb-4 inline-block">
              CodeToCareer
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Your journey from code to career starts here. Master technical skills with 35+ topics, 5000+ interview questions, and gamified learning.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@codetocareer.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quiz" className="text-gray-400 hover:text-green-400 transition-colors">
                  Start Quiz
                </Link>
              </li>
              <li>
                <Link href="/theory" className="text-gray-400 hover:text-green-400 transition-colors">
                  Theory Learning
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-green-400 transition-colors">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-green-400 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Topics */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Topics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quiz/python" className="text-gray-400 hover:text-green-400 transition-colors">
                  Python
                </Link>
              </li>
              <li>
                <Link href="/quiz/javascript" className="text-gray-400 hover:text-green-400 transition-colors">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/quiz/react" className="text-gray-400 hover:text-green-400 transition-colors">
                  React
                </Link>
              </li>
              <li>
                <Link href="/quiz/dsa" className="text-gray-400 hover:text-green-400 transition-colors">
                  DSA
                </Link>
              </li>
              <li>
                <Link href="/quiz/sql" className="text-gray-400 hover:text-green-400 transition-colors">
                  SQL
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} CodeToCareer. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-red-500 w-4 h-4" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
}

