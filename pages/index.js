import React from "react";
import Head from "next/head";
import Link from "next/link";
import HomeHeroSection from "../components/HomeHeroSection";
import SubHeader from "../components/SubHeader";
import ProjectCards from "../components/ProjectCards";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import projectData from "../project-data";

const Home = () => {
  return (
    <div className="w-full h-fit">
      <Head>
        <title>Home / Gaurav</title>
        <meta
          name="description"
          content="Product-focused guy with experience building consumer-facing products, driving retention, and shipping features end-to-end from POC to release. This site showcases selected projects, product thinking, and execution."
          img="public/assets/images/seo/about.webp"
        />
        {/* Other meta tags */}
      </Head>
      <HomeHeroSection />

      <SubHeader
        title="Featured Projects"
        caption="Take a look at these projects I made. Most of them are available on Github so go ahead knock yourself out."
      />
      <div className="grid grid-cols-1 gap-24">
        {projectData.map((props, index) => {
          if (props.showOnHome) {
            return <ProjectCards key={`project-card-${index}`} {...props} />;
          } else {
            return null;
          }
        })}
      </div>
      <span className="relative z-10 block mx-auto my-16 text-xl text-center text-lightTextColor dark:text-white skew">
        Wait that’s it?{" "}
        <Link href="/projects">
          <a className="transition text-pink hover:underline underline-offset-8">
            Show me more!
          </a>
        </Link>
      </span>
      <SubHeader title="Experience" />
      <ExperienceSection />
      <SubHeader title="Why hire me?" />
      <SkillsSection />
      <span className="relative z-10 block px-10 mx-auto my-16 text-xl text-center text-lightTextColor dark:text-white md:px-32">
        {"If you haven't checked me out on "}
        <Link href="https://linkedin.com/in/gauravsharma2003/">
          <a
            className="transition text-indigo hover:underline underline-offset-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Link>
        {", do it! Also here's my "}
        <Link href="https://github.com/gauravsharma2003">
          <a
            className="transition text-pink hover:underline underline-offset-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub!!!
          </a>
        </Link>{" "}
      </span>
    </div>
  );
};

export default Home;
