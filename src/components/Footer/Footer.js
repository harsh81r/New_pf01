import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-white text-xl font-bold mb-3">
              Harsh Khare
            </h2>
            <p className="text-sm">
              Full Stack Developer building modern web & mobile applications.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/harsh81r"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/harsh-khare-tech81"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <hr className="my-8 border-gray-700" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm">
            © {new Date().getFullYear()} Harsh Khare. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5">

            <a
              href="https://github.com/harsh81r"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              💻
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-khare-tech81"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              🔗
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;