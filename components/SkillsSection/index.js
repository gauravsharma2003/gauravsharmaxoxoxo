import { FiCpu, FiCheckCircle, FiZap } from "react-icons/fi";
import { VscSymbolInterface } from "react-icons/vsc";
import { GoGraph, GoTools } from "react-icons/go";

const strengths = [
  {
    icon: <FiCpu />,
    title: "Agentic AI products",
    description: "Shaping Check-in at Paytm Travel: an agentic travel experience designed around a new kind of user journey.",
  },
  {
    icon: <FiCheckCircle />,
    title: "AI evals & iteration",
    description: "Improving evals for the AI layer to assess agent behaviour, find gaps, and guide product improvements.",
  },
  {
    icon: <FiZap />,
    title: "Automation with impact",
    description: "Built AI-assisted newsletter and game-generation workflows at Times Internet that cut editorial effort by over 90%.",
  },
  {
    icon: <VscSymbolInterface />,
    title: "Product direction",
    description: "User research, PRDs, prioritization, and ownership from an early idea through launch.",
  },
  {
    icon: <GoGraph />,
    title: "Evidence-led decisions",
    description: "Funnel and cohort analysis with GA4 and Clarity to locate friction and measure changes.",
  },
  {
    icon: <GoTools />,
    title: "Delivery across teams",
    description: "Clear coordination across design, engineering, editorial, and business to get work shipped.",
  },
];

export default function SkillsSection() {
  return (
    <section className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-32 pb-4 md:pb-12" aria-label="How I work">
      <div className="max-w-screen-xl mx-auto grid gap-10 lg:grid-cols-[minmax(17rem,0.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-24">
        <div className="lg:pr-8">
          <p className="max-w-xl font-secondary text-2xl sm:text-3xl md:text-4xl leading-[1.2] tracking-tight text-lightTextColor dark:text-white text-balance">
            I turn emerging AI capabilities into useful product experiences, with the judgment to take an idea from discovery to delivery.
          </p>
          <p className="max-w-lg mt-6 text-base md:text-lg leading-relaxed text-lightTextColor dark:text-white opacity-75">
            I bring technical fluency, evidence-led decisions, and hands-on collaboration with data science, engineering, design, and business teams.
          </p>
          <div className="hidden lg:block mt-10 h-px w-20 bg-pink" aria-hidden="true" />
        </div>
        <div className="border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
          {strengths.map((strength) => (
            <article key={strength.title} className="grid gap-3 py-5 md:py-6 border-b border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor sm:grid-cols-[minmax(11rem,0.7fr)_minmax(0,1fr)] sm:gap-7">
              <div className="flex items-start gap-3 text-lightTextColor dark:text-white">
                <span className="mt-1 text-lg text-pink" aria-hidden="true">{strength.icon}</span>
                <h3 className="font-secondary text-xl md:text-2xl leading-snug">{strength.title}</h3>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-lightTextColor dark:text-white opacity-80">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
