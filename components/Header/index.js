import { useEffect, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/router";

import { FiSun, FiMoon } from "react-icons/fi";

export default function Header({ changeTheme }) {
  const router = useRouter(),
    [isAtTop, setIsAtTop] = useState(true),
    [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY <= 30);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleRouteChange = (url, { shallow }) => {
      setCurrentURL(url);
    };
    handleRouteChange(router.pathname, { shallow: true });

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className="sticky top-0 z-30">
      <div className="hidden md:block">
        <DesktopHeader
          isAtTop={isAtTop}
          currentURL={currentURL}
          changeTheme={changeTheme}
        />
      </div>
      <div className="md:hidden block">
        <MobileHeader
          isAtTop={isAtTop}
          currentURL={currentURL}
          changeTheme={changeTheme}
        />
      </div>
    </div>
  );
}

function DesktopHeader({ isAtTop, currentURL, changeTheme }) {
  return (
    <div
      className={`transition h-24 md:h-16 w-full z-30 px-10 md:px-32 ${
        !isAtTop
          ? `${
              !isAtTop ? "bg-extraLightBgColorTranslucent" : ""
            } dark:bg-bgColorTranslucent backdrop-blur-lg`
          : "bgColorTranslucent"
      }`}
    >
      <div className="max-w-screen-xl text-white m-auto h-full">
        <div className="h-full w-full grid grid-cols-[12rem_1fr_12rem] my-auto">
          <div
            className={`text-3xl my-auto text-lightTextColor dark:text-white`}
          >
            <Link href="/">GS</Link>
          </div>
          <div className="h-full w-full max-w-2xl flex flex-row justify-between items-center m-auto gap-4">
            <DesktopNavLink
              href="/"
              name="Home"
              currentURL={currentURL}
            />
            <DesktopNavLink
              href="/projects"
              name="Projects"
              currentURL={currentURL}
            />
            <DesktopNavLink
              href="/case-studies"
              name="Case Studies"
              currentURL={currentURL}
            />
            
            <DesktopNavLink
              href="/about"
              name="About"
              currentURL={currentURL}
            />
            <DesktopNavLink
              href="/contact"
              name="Contact"
              currentURL={currentURL}
            />
          </div>
          <div className="h-full w-full flex gap-4 items-center justify-end">
            <button
              onClick={changeTheme}
              className={`text-lightTextColor dark:text-white text-2xl outline-none bg-none border-none my-auto`}
            >
              <div className="block dark:hidden">
                <FiMoon />
              </div>
              <div className="hidden dark:block">
                <FiSun />
              </div>
            </button>
            <Link href="/resume" prefetch={false}>
              <a
                className={`px-6 py-1 text-lightTextColor border-lightTextColor dark:text-white dark:border-white border-2 my-auto rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
              >
                Resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopNavLink({ href, name, currentURL, target }) {
  return (
    <Link href={href} prefetch={false}>
      <a
          target={target}
        className={`text-lg text-lightTextColor dark:text-white ${
          currentURL !== href ? "hover:underline" : "cursor-default"
        } underline-offset-8`}
      >
        {currentURL === href ? `• ${name} •` : `${name}`}
      </a>
    </Link>
  );
}

function MobileNavLink({ href, name, currentURL, target = '_self', onClick }) {
  return (
    <Link href={href} prefetch={false}>
      <a
          target={target}
        onClick={onClick}
        className={`block text-4xl text-lightTextColor dark:text-white my-7 ${
          currentURL === href
            ? ""
            : `opacity-75 text-border`
        }`}
      >
        {name}
      </a>
    </Link>
  );
}

function MobileHeader({ isAtTop, currentURL, changeTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`transition h-20 w-full z-30 px-6 sm:px-10 ${
          !isAtTop
            ? `backdrop-blur-lg bg-extraLightBgColorTranslucent dark:bg-extraDarkBgColorTranslucent`
            : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4 h-full">
          <div
            className="min-w-0 truncate whitespace-nowrap text-[clamp(1.5rem,5vw,1.875rem)] text-lightTextColor dark:text-white"
          >
            <Link href="/">{isAtTop ? "GS" : "Gaurav Sharma"}</Link>
          </div>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="relative h-[44px] w-[44px] shrink-0"
            onClick={() => setIsOpen((open) => !open)}
          >
            <div
              aria-hidden="true"
              className={`absolute left-[7px] h-[3px] w-[30px] origin-center rounded-xl bg-lightTextColor transition dark:bg-white ${
                isOpen
                  ? "top-[21px] rotate-45"
                  : "top-[14px]"
              }`}
            ></div>
            <div
              aria-hidden="true"
              className={`absolute h-[3px] origin-center rounded-xl bg-lightTextColor transition dark:bg-white ${
                isOpen
                  ? "left-[7px] top-[21px] w-[30px] -rotate-45"
                  : "right-[7px] top-[27px] w-[20px]"
              }`}
            ></div>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-20 z-20 h-[calc(100dvh-5rem)] overflow-x-hidden overflow-y-auto backdrop-blur-lg bg-extraLightBgColorTranslucent dark:bg-extraDarkBgColorTranslucent"
        >
          <div className="px-6 sm:px-10">
            <MobileNavLink
              href="/"
              name="Home"
              currentURL={currentURL}
              onClick={() => setIsOpen(false)}
            />
            <MobileNavLink
              href="/projects"
              name="Projects"
              currentURL={currentURL}
              onClick={() => setIsOpen(false)}
            />
            <MobileNavLink
              href="/case-studies"
              name="Case Studies"
              currentURL={currentURL}
              onClick={() => setIsOpen(false)}
            />
            
            <MobileNavLink
              href="/about"
              name="About"
              currentURL={currentURL}
              onClick={() => setIsOpen(false)}
            />
            <MobileNavLink
              href="/contact"
              name="Contact"
              currentURL={currentURL}
              onClick={() => setIsOpen(false)}
            />
            <div className="mt-6 flex w-full items-center gap-4">
              <Link href="/resume" prefetch={false}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="min-w-0 flex-1 rounded-xl border-2 border-lightTextColor px-4 py-3 text-center text-2xl text-lightTextColor dark:border-white dark:text-white"
                >
                  Resume
                </a>
              </Link>
              <button
                type="button"
                aria-label="Change color theme"
                onClick={changeTheme}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-3xl text-lightTextColor dark:text-white"
              >
                <div className="block dark:hidden">
                  <FiMoon />
                </div>
                <div className="hidden dark:block">
                  <FiSun />
                </div>
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
