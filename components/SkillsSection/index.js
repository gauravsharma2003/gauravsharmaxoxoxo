import { useState, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { VscSymbolInterface } from "react-icons/vsc";
import { GiRobotGolem } from "react-icons/gi";
import { GoTools } from "react-icons/go";

export default function SkillsSection() {
  return (
    <div className="px-10 md:px-32 relative z-10 mb-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12">
        <div className="flex justify-center flex-col gap-6">
          <div className="text-xl text-lightTextColor dark:text-white leading-8">
            I work at the intersection of product, technology, and execution. My focus is on building user-centric products and driving measurable business outcomes through structured problem solving.
          </div>
          <div className="text-sm text-lightTextColor dark:text-white mt-2 md:mt-0">
            Skills backed by real-world product ownership and shipped features
          </div>

        </div>
        <div className="h-full w-full bg-lightBgSecondaryColor dark:bg-bgSecondaryColor rounded-xl overflow-hidden pb-6">
          <AliceCarousel
            infinite
            autoWidth
            autoHeight
            mouseTracking
            ssrSilentMode
            touchTracking
            disableButtonsControls
          >
            <Skill
              logo={<VscSymbolInterface />}
              title="Product Management"
              desc="Experience in user research, PRDs, funnel analysis, retention strategy, and roadmap prioritization. Owned end-to-end features from ideation to launch across content, games, and personalization surfaces."
            />

            <Skill
              logo={<GiRobotGolem />}
              title="Data & Experimentation"
              desc="Worked extensively with GA4, Microsoft Clarity, cohort analysis, and funnel diagnostics to identify drop-offs, validate hypotheses, and guide product decisions through experimentation."
            />

            <Skill
              logo={<BsCodeSlash />}
              title="Product Engineering"
              desc="Hands-on with JavaScript/TypeScript, React, REST APIs, and SQL. Built and shipped full-stack products and internal tools, enabling better collaboration with engineering teams."
            />

            <Skill
              logo={<GoTools />}
              title="Tools & Execution"
              desc="Comfortable working with Jira, Figma, Metabase, Git/GitHub, and analytics dashboards. Strong at cross-functional coordination, stakeholder alignment, and execution under tight timelines."
            />

          </AliceCarousel>
        </div>
      </div>
    </div>
  );
}

function Skill({ logo, title, desc }) {
  const Logo = () => logo;
  return (
    <div className="skill text-left p-6 h-full w-full select-none cursor-grab active:cursor-grabbing">
      <div className="rounded-xl p-4 text-3xl text-lightTextColor dark:text-white mb-2 bg-white dark:bg-bgColor flex justify-start items-center gap-4 shadow-2xl">
        <Logo />
        <span className="">{title}</span>
      </div>
      <div className="px-4 py-2 text-xl text-lightTextColor dark:text-white leading-10">
        {desc}
      </div>
    </div>
  );
}
