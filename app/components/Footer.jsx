import { FaXTwitter } from "react-icons/fa6";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#606C38] text-white py-8 px-5 text-center mt-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Privacy Policy
              </a>
            </li>
          </ul>

          <div className="flex gap-5 text-xl">
            <a
              href="https://x.com/azmi_nkm"
              className="hover:text-gray-300 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/GibranMaulana"
              className="hover:text-gray-300 transition"
            >
              <SlSocialGithub />
            </a>
            <a
              href="www.linkedin.com/in/gibran-maulana-azmi"
              className="hover:text-gray-300 transition"
            >
              <SlSocialLinkedin />
            </a>
          </div>

          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} BlistPoints. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

