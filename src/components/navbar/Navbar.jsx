import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import M from "../../messages.js";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center">
            <ul className="flex">
                <li className="text-white m-2">{M.tag_home}</li>
                <li className="text-white m-2">{M.tag_experiences}</li>
                <li className="text-white m-2">{M.tag_projects}</li>
            </ul>
            <div className="nav-cta-container flex items-center">
                <a href="https://github.com/predator2v0" className="text-white m-2">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/subhakanta-roul/" className="text-white m-2">
                    <FaLinkedinIn />
                </a>
                <button className="text-white border rounded-3xl px-5 py-2 m-2">
                    get in touch
                </button>
            </div>
        </div>
    );
};

export default Navbar;
