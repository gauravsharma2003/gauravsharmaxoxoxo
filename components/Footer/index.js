import Link from "next/link";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { Animatify } from "../";

export default function Footer() {
  return (
    <div className="mt-12 px-10 md:px-32 relative h-fit w-full border-t-[1px] border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor contain-paint">
      <h1 className="h-fit w-fit max-w-full absolute m-auto top-0 left-0 right-0 bottom-0 text-center text-border-thick text-[24vw] md:text-[14vw] opacity-5">
        Gaurav Sharma
      </h1>
      <img
        className="w-[120vw] md:w-[75vw] max-w-none absolute z-0 right-0 bottom-0 m-auto -translate-x-1/4 md:-translate-x-0 translate-y-2/3 dark:opacity-60 pointer-events-none"
        src="/assets/images/blur-ball-blue.webp"
      />
      <img
        className="w-[120vw] md:w-[75vw] max-w-none absolute z-0 left-0 bottom-0 m-auto translate-x-1/4 md:translate-x-0 translate-y-2/3 dark:opacity-60 dark:hidden pointer-events-none"
        src="/assets/images/blur-ball-indigo.webp"
      />
      <img
        className="w-[120vw] md:w-[75vw] max-w-none absolute z-0 left-0 bottom-0 m-auto translate-x-1/4 md:translate-x-0 translate-y-2/3 dark:opacity-60 dark:block hidden pointer-events-none"
        src="/assets/images/blur-ball-orange.webp"
      />
      <Animatify>
        <div className="relative max-w-screen-xl w-full mx-auto mt-10">
          <div className="">
            <div className="">
              <p className="text-lightTextColor dark:text-white text-base leading-10">
                Ever want to get in touch with me, hire me, or just connect?
                Feel free to reach out via the form below, email, or through
                social media. Please avoid phone calls, as I prefer not to use
                smartphones.
              </p>
              <div className="flex justify-start items-center gap-6 h-fit mt-6">
                <Link href="/contact">
                  <a
                    className={`inline-block w-full md:w-fit text-center md:text-left px-8 py-2 text-lightTextColor dark:text-white text-xl border-lightTextColor dark:border-white border-2 rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                  >
                    Contact
                  </a>
                </Link>
                <a
                  className="text-lightTextColor dark:text-white text-3xl w-fit inline "
                  href="https://github.com/gauravsharma2003"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  className="text-lightTextColor dark:text-white text-3xl w-fit inline "
                  href="https://www.linkedin.com/in/gauravsharma2003/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin />
                </a>
                <a
                  className="text-lightTextColor dark:text-white text-3xl w-fit inline "
                  href="https://x.com/Gauravxoxoxo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiTwitter />
                </a>
                <a
                  className="text-lightTextColor dark:text-white text-3xl w-fit inline "
                  href="mailto:sharmagauravxo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-lightBgSecondaryColorTranslucent dark:bg-bgSecondaryColor mt-12 mb-6"></div>
          <div className="text-lightTextColor dark:text-white text-lg text-center pb-6">
            © {new Date().getFullYear()} <span className="text-green-400">Gaurav Sharma.</span> All rights reserved.
          </div>
        </div>
      </Animatify>
    </div>
  );
}
