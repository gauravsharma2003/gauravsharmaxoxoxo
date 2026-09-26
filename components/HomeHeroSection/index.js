import { useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import assetUrl from "../../asset-url";

export default function HomeHeroSection() {
  useEffect(() => {
    const motionAllowed = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );
    if (!motionAllowed.matches) return;

    let mounted = true;
    const start = () => {
      if (mounted) window.startPortfolioCanvas?.();
    };

    let script;
    let idleId;
    let delayId;
    const loadFluid = () => {
      if (!mounted) return;
      script = document.querySelector("script[data-portfolio-fluid]");
      if (window.startPortfolioCanvas) {
        start();
      } else {
        if (!script) {
          script = document.createElement("script");
          script.src = assetUrl("/assets/lib/fluid-background.js");
          script.async = true;
          script.dataset.portfolioFluid = "true";
          document.body.appendChild(script);
        }
        script.addEventListener("load", start);
      }
    };

    // The CSS gradient paints immediately; initialize WebGL when the browser
    // has a moment free, so it cannot delay the hero text or interaction.
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadFluid, { timeout: 2000 });
    } else {
      delayId = window.setTimeout(loadFluid, 700);
    }

    const hero = document.querySelector("#portfolio-hero");
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.portfolioCanvasPaused = !entry.isIntersecting;
      },
      { threshold: 0 }
    );
    if (hero) observer.observe(hero);

    return () => {
      mounted = false;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (delayId !== undefined) window.clearTimeout(delayId);
      observer.disconnect();
      script?.removeEventListener("load", start);
      window.stopPortfolioCanvas?.();
    };
  }, []);

  return (
    <div id="portfolio-hero" className="min-h-[100dvh] w-full relative -mt-20 md:-mt-16">
      <div className="hero-background absolute inset-0 bg-center bg-no-repeat bg-cover"></div>
      <canvas className="hidden md:block absolute inset-0 h-full w-full pointer-events-none" id="liquid-canvas" aria-hidden="true"></canvas>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-white translate-y-1 pointer-events-none dark:opacity-0 opacity-100 bottom-0"></div>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-bgColor translate-y-1 pointer-events-none opacity-0 dark:opacity-100 bottom-0"></div>
      <div className="absolute w-full h-full pointer-events-none">
        <div className="skew absolute top-0 left-0 bottom-0 right-0 m-auto z-10 h-fit w-fit px-10">
          <div className="md:px-6">
            <span className="m-auto block text-2xl md:text-xl text-lightTextColor dark:text-white md:text-center">
              Hi {"I'm "}
              <span
                className="underline underline-offset-8 text-pink dark:text-blue"
              >
                Gaurav Sharma
              </span>
            </span>
            <h1 className="md:leading-[9rem] mb-6 block text-[13vw] sm:text-[7rem] text-lightTextColor dark:text-white md:text-center font-secondary max-w-[100vw] md:max-w-[80rem]">
              Building Products, Experiences & Scalable Systems
            </h1>
            <span className="md:m-auto block text-lightTextColor dark:text-white text-2xl md:text-xl leading-10 md:text-center max-w-xl my-4">
              I work at the intersection of{" "}
              <span
                className="text-pink dark:text-blue"
              >
                product, technology, and execution
              </span>
              , focused on building user-first products.
            </span>

            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                className="text-lightTextColor dark:text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="https://github.com/gauravsharma2003"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
              <a
                className="text-lightTextColor dark:text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="https://linkedin.com/in/gauravsharma2003"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                className="text-lightTextColor dark:text-white text-4xl md:text-2xl w-fit inline pointer-events-auto"
                href="mailto:sharmagauravxo@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
