import Link from "next/link";
import {
  GallerySection,
  SubHeader,
  SkillsSection,
  Animatify,
  SEO,
  ExperienceSection, // Import ExperienceSection here
} from "../../components";
import Head from "next/head";

export default function About() {
  return (
    <div className="w-full pt-4 h-fit">
      <SEO
        title="About / Gaurav Sharma"
        desc="A Full Stack Developer based in India. I enjoy designing and developing websites. I am currently pursuing B. Tech in Information Technology from Guru Gobind Singh Indraprastha University."
        img="public/assets/images/seo/about.webp"
      />
      <Animatify>
        <div className="px-10 pb-12 md:px-32">
          <div className="md:grid md:grid-cols-[1fr_0.4fr] gap-8 max-w-screen-xl m-auto mt-4">
            <div className="md:m-auto">
              <h1 className="absolute text-border text-[6rem] md:text-[7rem] whitespace-nowrap opacity-10 -translate-y-1/2">
                Gaurav Sharma
              </h1>
              <img
                className="absolute m-auto top-0 left-0 -translate-y-1/2 -translate-x-1/4 max-w-none w-[50rem] md:w-[75rem] dark:opacity-60"
                src="/assets/images/blur-ball-blue.webp"
              />
              <div className="relative z-10">
                <h1 className="bottom-0 m-auto text-5xl text-lightTextColor dark:text-white">
                  Gaurav Sharma
                </h1>
                <span className="block mt-8 text-xl leading-10 text-lightTextColor dark:text-white">
                  A Full Stack Developer based in India. I enjoy designing and
                  developing websites. I am currently{" "}
                  {new Date().getFullYear() - 2003} years old, and am pursuing a
                  B. Tech in Information Technology from Guru Gobind Singh
                  Indraprastha University.
                </span>
                <Link href="/resume">
                  <a
                    className={`inline-block mt-8 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                  >
                    Check out Resume
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/assets/images/seo/gaurav.webp"
                className="w-full mx-auto shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </div>
        <SubHeader title="Why hire me?" />
        <SkillsSection />
        <SubHeader
          title="My Experience"
         
        />
        <ExperienceSection /> {/* Add the ExperienceSection here */}
      </Animatify>
    </div>
  );
}
