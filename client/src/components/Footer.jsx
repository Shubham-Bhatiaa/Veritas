import React from "react";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = [
  { title: "Submit Review" },
  { title: "Explore Reviews" },
  { title: "Connect Wallet" },
  { title: "My Dashboard" }
];

const resources = [
  { title: "Documentation" },
  { title: "API Reference" },
  { title: "Whitepaper" },
  { title: "Smart Contracts" }
];

const Footer = () => (
  <footer className="bg-slate-900 text-slate-200 py-8 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {/* Brand */}
      <div className="space-y-4">
        <h2 className="flex items-center text-xl font-bold space-x-2">
          <span className="text-blue-400">■</span>
          <span>Veritas</span>
        </h2>
        <p className="text-slate-400 text-sm">
          Transparent, immutable reviews stored on the blockchain.
        </p>
        <div className="flex space-x-4">
          {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
            <Icon
              key={i}
              size={20}
              className="text-slate-400 hover:text-blue-400 transition-colors"
            />
          ))}
        </div>
      </div>
      {/* Links */}
      {[
        { title: "Quick Links", data: links },
        { title: "Resources", data: resources }
      ].map(({ title, data }) => (
        <div key={title}>
          <h3 className="font-semibold mb-4 text-lg">{title}</h3>
          <ul className="space-y-3">
            {data.map(({ title }) => (
              <li key={title}>
                <a
                  href="#"
                  className="flex items-center text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {title} <ArrowUpRight size={16} className="ml-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Newsletter */}
      <div>
        <h3 className="font-semibold mb-4 text-lg">Stay Updated</h3>
        <p className="text-slate-400 text-sm mb-4">
          Get the latest updates on blockchain tech.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="bg-slate-800 text-slate-300 px-4 py-2 rounded-l border border-slate-700 flex-grow text-sm"
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r text-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    {/* Bottom Footer */}
    <div className="border-t border-slate-800 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
      <span>© {new Date().getFullYear()} Veritas. All rights reserved.</span>
      <div className="flex space-x-6 mt-4 md:mt-0">
        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
