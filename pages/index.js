import React from "react";
import Link from "next/link";
import HomeHeroSection from "../components/HomeHeroSection";
import SubHeader from "../components/SubHeader";
import ProjectCards from "../components/ProjectCards";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import projectData from "../project-data";
import { SEO } from "../components";

const Home = () => {
  return (
    <div className="w-full h-fit">
      <SEO
        title="Gaurav Sharma | Product Manager & Product Builder in India"
        desc="Portfolio of Gaurav Sharma, a product professional in India who builds consumer digital products, improves retention, and ships data-informed experiences end to end."
        img="/assets/images/seo/gaurav.webp"
      />
      <HomeHeroSection />
      <SubHeader title="Experience" />
      <ExperienceSection />

      <section className="px-10 mt-20 md:px-32">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl text-lightTextColor dark:text-white">Product Management Case Studies</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl leading-9 text-lightTextColor dark:text-white">Read how I approach retention, product funnels, news personalisation, and cross-functional product delivery.</p>
          <Link href="/case-studies"><a className="inline-block mt-6 text-xl text-indigo hover:underline underline-offset-8">Explore case studies</a></Link>
        </div>
      </section>

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
