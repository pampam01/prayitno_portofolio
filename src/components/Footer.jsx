import React from 'react';
import { socialLinks } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer font-poppins text-slate-500 w-full flex flex-col md:flex-row justify-between items-center py-6 border-t border-slate-200 mt-10">
      <p className="mb-4 md:mb-0">
        © {new Date().getFullYear()} Prayitno. All rights reserved.
      </p>
      <div className="flex gap-4 items-center">
        {socialLinks.map((link) => (
          <Link key={link.name} to={link.link} target="_blank" rel="noopener noreferrer">
            <img
              src={link.iconUrl}
              alt={link.name}
              className="w-6 h-6 object-contain hover:scale-110 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
