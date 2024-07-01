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
            Here's a list of all my skills and all the reasons why you should hire me. As a developer, I don't completely know anything, you see I am not very good at memorizing, I normally read documentations every time I am building something, but I make sure to get the work done in time.
          </div>
          <div className="text-sm text-lightTextColor dark:text-white mt-2 md:mt-0">
            Claims are based on my experience and projects
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
              logo={<BsCodeSlash />}
              title="Web Development"
              desc="Proficient in HTML, CSS, JavaScript, and experienced with libraries and frameworks such as React.js, Node.js, Express.js, and Tailwind CSS. Developed dynamic applications like weather and news apps using APIs."
            />
            <Skill
              logo={<VscSymbolInterface />}
              title="UI/UX"
              desc="Designed and developed user-friendly interfaces with a focus on responsiveness and usability. Tools used include Figma and Adobe XD and i love using Canva."
            />
            <Skill
              logo={<GiRobotGolem />}
              title="Programming"
              desc="Experienced in programming languages such as C, C++, and Java. Participated in Hackathons and coding competitions on college level."
            />
            <Skill
              logo={<GoTools />}
              title="Other Tools and Technologies"
              desc="Familiar with Git, GitHub, VS Code, RESTful APIs, and development tools like Docker. Experienced in using cloud services such as AWS and Google Cloud Platform."
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
