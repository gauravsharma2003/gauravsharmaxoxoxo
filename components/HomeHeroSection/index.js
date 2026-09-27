import { useEffect } from "react";
import assetUrl from "../../asset-url";
import ArrowIcon from "../ArrowIcon";

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
    <div id="portfolio-hero" className="min-h-[100dvh] w-full relative -mt-20 md:-mt-16 overflow-hidden">
      <div className="hero-background absolute inset-0 bg-center bg-no-repeat bg-cover"></div>
      <canvas className="hidden md:block absolute inset-0 h-full w-full pointer-events-none" id="liquid-canvas" aria-hidden="true"></canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/85 via-white/60 to-white/15 dark:from-bgColor/90 dark:via-bgColor/70 dark:to-bgColor/20"></div>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-white translate-y-1 pointer-events-none dark:opacity-0 opacity-100 bottom-0"></div>
      <div className="absolute h-1/4 w-full bg-gradient-to-b from-transparent transition duration-300 to-bgColor translate-y-1 pointer-events-none opacity-0 dark:opacity-100 bottom-0"></div>
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-screen-xl items-center px-6 pb-16 pt-28 sm:px-10 md:px-20 md:pb-20 md:pt-24 lg:px-32">
        <div className="w-full max-w-[760px]">
          <p className="mb-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-lightTextColor/80 dark:text-white/80">
            Gaurav Sharma
          </p>
          <h1 className="max-w-[13ch] font-secondary text-[clamp(46px,12vw,56px)] md:text-[clamp(3.6rem,7vw,7rem)] leading-[1.06] tracking-[-0.035em] text-lightTextColor dark:text-white">
            Making complex ideas useful.
          </h1>
          <p className="mt-7 max-w-[34rem] text-lg sm:text-xl md:text-2xl leading-[1.45] text-lightTextColor dark:text-white">
            I’m an Associate Product Manager at Paytm shaping agentic travel experiences.
          </p>
          <a href="#experience" className="mt-9 inline-flex min-h-[44px] items-center gap-3 border-b-2 border-pink text-base md:text-lg font-semibold text-lightTextColor dark:text-white transition hover:gap-4">
            Explore my work <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
