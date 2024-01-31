// image
import Image from "next/image";

// link
import Link from "next/link";

// icons
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const date = () => {
  let date = 2021;
  let current = new Date().getFullYear();
  return date === current ? date : `${date} - ${current}`;
};

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6">
          {/* logo */}
          <Link href={"#"}>
            <Image src={"logo.svg"} width={180} height={180} alt="logo" />
          </Link>
          {/* social icons */}
          <div className="flex gap-x-6 text-xl lg:text-2xl text-white">
            <Link href={"#"} className="hover:text-secondary transition-all duration-200">
              <FaYoutube />
            </Link>
            <Link href={"#"} className="hover:text-secondary transition-all duration-200">
              <FaFacebook />
            </Link>
            <Link href={"#"} className="hover:text-secondary transition-all duration-200">
              <FaInstagram />
            </Link>
            <Link href={"#"} className="hover:text-secondary transition-all duration-200">
              <FaPinterest />
            </Link>
          </div>
          {/* copyright */}
          <div className="text-white font-medium text-center">
            Copyright &copy; Pizzaland {date()}. All rights reserved.
          </div>
          <div className="text-sm text-white/70 font-light">
            Powered by{" "}
            <a
              href="https://pavelbelousov.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease-linear font-medium"
            >
              @signorPao
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
