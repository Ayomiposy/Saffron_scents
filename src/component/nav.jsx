import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
import { HashLink } from "react-router-hash-link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sm:px-4 md:px-0">
      <div className="flex items-center justify-around py-3 border-b border-primary">
        <Logo />

        <nav className="flex items-center">
          <button
            className="md:hidden text-primary text-2xl p-2"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>

          <ul className="hidden md:flex gap-5 items-center">
            <li className="text-primary text-lg font-medium underline hover:text-secondary cursor-pointer">
              Contact
            </li>
            <li className="text-primary text-lg font-medium hover:text-secondary cursor-pointer">
              <a
                href="https://wa.me/message/V6E5M4LJWAJGK1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li className="text-primary text-lg font-medium hover:text-secondary cursor-pointer">
              <a
                href="https://www.instagram.com/bunmii_xo?igsh=ZGQ3aWs5bDAwYTN5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <HashLink smooth to="/#waitlist">
              <button className="text-white bg-primary px-6 py-2 rounded-2xl text-lg font-medium hover:text-secondary cursor-pointer">
                Sign up
              </button>
            </HashLink>
          </ul>
        </nav>
      </div>

      {open && (
        <div className="md:hidden mt-2 rounded-lg shadow-md">
          <ul className="flex flex-col items-center gap-4 bg-[#D9B6A0] py-4 rounded-lg shadow-md">
            <li className="text-primary text-lg font-medium underline hover:text-secondary cursor-pointer">
              Contact
            </li>
            <li className="text-primary text-lg font-medium hover:text-secondary cursor-pointer">
              {" "}
              <a
                href="https://www.instagram.com/bunmii_xo?igsh=ZGQ3aWs5bDAwYTN5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="text-primary text-lg font-medium hover:text-secondary cursor-pointer">
              <a
                href="https://wa.me/message/V6E5M4LJWAJGK1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <HashLink smooth to="/#waitlist">
              <button className="text-white bg-primary px-6 py-2 rounded-2xl text-lg font-medium hover:text-secondary cursor-pointer">
                Sign up
              </button>
            </HashLink>
          </ul>
        </div>
      )}
    </header>
  );
}
