import Link from "next/link";
import HomeHeroSection from "../components/HomeHeroSection";
import SubHeader from "../components/SubHeader";
import ProjectCards from "../components/ProjectCards";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import projectData from "../project-data";
import caseStudies from "../case-study-data";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div className="w-full h-fit">
      <SEO
        title="Gaurav Sharma | Product Manager & Product Builder in India"
        desc="Portfolio of Gaurav Sharma, a product professional in India who builds consumer digital products, improves retention, and ships data-informed experiences end to end."
        img="/assets/images/seo/gaurav.webp"
      />
      <HomeHeroSection />
      <SubHeader title="Experience" headingLevel={2} homeIndex="01" caption="Where I have shaped product direction, improved user journeys, and worked with teams to ship." />
      <ExperienceSection />

      <section className="px-6 sm:px-10 md:px-20 lg:px-32 mt-20 md:mt-28" aria-labelledby="home-case-studies-title">
        <div className="max-w-screen-xl mx-auto border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor py-7 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-16">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-pink">02 / Case studies</p>
              <h2 id="home-case-studies-title" className="mt-4 max-w-2xl font-secondary text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.06] tracking-[-0.035em] text-lightTextColor dark:text-white text-balance">The work behind the outcomes.</h2>
              <p className="max-w-xl mt-5 text-base md:text-lg leading-relaxed text-lightTextColor dark:text-white opacity-80">A closer look at the product questions, decisions, and results behind my work on the TOI App.</p>
              <Link href="/case-studies" prefetch={false}><a className="inline-flex items-center gap-3 mt-7 pb-1 border-b border-pink text-base md:text-lg text-lightTextColor dark:text-white transition hover:text-pink focus-visible:text-pink">View all case studies <span aria-hidden="true">↗</span></a></Link>
            </div>
            <Link href={`/case-studies/${caseStudies[0].slug}`} prefetch={false}>
              <a className="group block border-l-2 border-pink pl-5 sm:pl-7 lg:pl-9 py-1 transition hover:border-lightTextColor dark:hover:border-white">
                <span className="text-xs md:text-sm uppercase tracking-[0.18em] text-pink">Featured / Games funnel</span>
                <span className="block mt-5 font-secondary text-2xl md:text-3xl leading-snug text-lightTextColor dark:text-white group-hover:text-pink transition">{caseStudies[0].title}</span>
                <span className="block mt-4 text-base md:text-lg leading-relaxed text-lightTextColor dark:text-white opacity-75">{caseStudies[0].summary}</span>
                <span className="flex items-end gap-4 mt-8 pt-5 border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
                  <span className="font-secondary text-3xl sm:text-4xl md:text-5xl leading-none tracking-tight text-pink tabular-nums">{caseStudies[0].metric}</span>
                  <span className="pb-1 text-sm md:text-base leading-tight text-lightTextColor dark:text-white">{caseStudies[0].metricLabel}</span>
                </span>
                <span className="inline-block mt-7 text-base text-lightTextColor dark:text-white group-hover:translate-x-1 transition-transform">Read the story ↗</span>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <SubHeader
        title="Featured Projects"
        headingLevel={2}
        homeIndex="03"
        caption="A selection of things I have designed and built, from web products to mobile experiences."
      />
      <div className="grid grid-cols-1 gap-24">
        {projectData.map((props, index) => {
          if (props.showOnHome) {
            return <ProjectCards key={`project-card-${index}`} headingLevel={3} {...props} />;
          } else {
            return null;
          }
        })}
      </div>
      <span className="relative z-10 block mx-auto my-16 text-xl text-center text-lightTextColor dark:text-white skew">
        Wait that’s it?{" "}
        <Link href="/projects" prefetch={false}>
          <a className="transition text-pink hover:underline underline-offset-8">
            Show me more!
          </a>
        </Link>
      </span>
      <SubHeader title="Why hire me?" headingLevel={2} homeIndex="04" caption="Product judgment, technical fluency, and the ability to carry a decision through delivery." />
      <SkillsSection />
    </div>
  );
};

export default Home;
