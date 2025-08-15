import React from "react";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full fixed bottom-px flex justify-center items-center">
      <p className="text-2xl text-accent text-center">&copy; Venkata Madhu K</p>
      <a
        href="https://github.com/VenkataMadhuK"
        className="mx-2.5 hover:cursor-pointer select-none"
        target="_blank"
      >
        <FaGithub className="text-accent text-2xl " />
      </a>
    </footer>
  );
};

export default Footer;
