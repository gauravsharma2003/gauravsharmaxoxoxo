import { SubHeader, ProjectCards, Animatify, SEO } from "../../components";
import projectData from "../../project-data";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-fit w-full">
      <SEO
        title="Software Projects | Gaurav Sharma"
        desc="Explore software projects by Gaurav Sharma, including an e-commerce app, a React Native music app, an AI healthcare concept, and smaller web apps. Source code is linked where available."
        img="/assets/images/seo/about.webp"
      />
      <SubHeader
        title="My Projects"
        eyebrow="Selected builds / Portfolio"
        caption="Web and mobile products I have built, including personal projects and client work."
      />
      <div className="grid grid-cols-1 gap-24">
        <Animatify>
          {projectData.map((props, index) => (
            <ProjectCards key={`project-card-${index}`} {...props} />
          ))}
        </Animatify>
      </div>
      <Animatify>
        <span className="relative z-10 block text-center mx-auto mt-16 text-lightTextColor dark:text-white text-xl skew">
          {"There's more, "}
          <Link href="https://github.com/gauravsharma2003">
            <a
              className="transition text-indigo hover:underline underline-offset-8"
              target="_blank"
            >
              click here to find out!
            </a>
          </Link>
        </span>
      </Animatify>
    </div>
  );
}
