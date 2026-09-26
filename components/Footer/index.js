import Link from "next/link";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { SiSubstack } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-12 px-6 sm:px-10 md:px-20 lg:px-32 relative w-full border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor contain-paint">
      <div aria-hidden="true" className="ambient-glow absolute -bottom-32 right-0 pointer-events-none" />
        <div className="relative max-w-screen-xl w-full mx-auto mt-10">
          <div className="">
            <div className="">
              <p className="max-w-3xl text-lightTextColor dark:text-white text-base leading-relaxed">
                Have a project or product question? Reach out through the contact page,
                email, or social media. I prefer messages to phone calls.
              </p>
              <div className="flex flex-wrap justify-start items-center gap-4 sm:gap-6 h-fit mt-6">
                <Link href="/contact" prefetch={false}>
                  <a
                    className={`inline-block w-full md:w-fit text-center md:text-left px-8 py-2 text-lightTextColor dark:text-white text-xl border-lightTextColor dark:border-white border-2 rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                  >
                    Contact
                  </a>
                </Link>
                <a
                  className="text-lightTextColor dark:text-white text-2xl w-fit inline "
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
                <a
                  className="text-lightTextColor dark:text-white text-2xl w-fit inline "
                  href="https://substack.com/@gauravxo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiSubstack />
                </a>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 w-full text-center font-secondary text-border-thick text-[clamp(2.25rem,7vw,6.5rem)] leading-none tracking-[-0.06em] whitespace-nowrap opacity-15 select-none">
            Gaurav Sharma
          </div>
          <div className="h-px w-full bg-lightBgSecondaryColorTranslucent dark:bg-bgSecondaryColor mt-5 mb-6"></div>
          <div className="text-lightTextColor dark:text-white text-lg text-center pb-6">
            © {new Date().getFullYear()} <span className="text-green-400">Gaurav Sharma.</span> All rights reserved.
          </div>
        </div>
    </footer>
  );
}
