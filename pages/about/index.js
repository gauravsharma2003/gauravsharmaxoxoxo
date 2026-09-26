import Link from "next/link";
import assetUrl from "../../asset-url";
import {
  GallerySection,
  SubHeader,
  SkillsSection,
  Animatify,
  SEO,
} from "../../components";

export default function About() {
  return (
    <div className="w-full pt-4 h-fit">
      <SEO
        title="About / Gaurav Sharma"
        desc="A product-focused professional based in India, working at the intersection of product strategy, data, and execution. Currently pursuing B.Tech in Information Technology from Guru Gobind Singh Indraprastha University."
        img="public/assets/images/seo/about.webp"
      />
      <Animatify>
        <div className="px-6 sm:px-10 md:px-20 lg:px-32 pb-12 pt-16 md:pt-24">
          <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(14rem,0.45fr)] md:items-center gap-10 max-w-screen-xl mx-auto border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor pt-6 md:pt-8">
            <div>
              <div className="relative z-10">
                <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-pink">About / Portfolio</p>
                <h1 className="mt-4 font-secondary text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.06] tracking-[-0.035em] text-lightTextColor dark:text-white">
                  Gaurav Sharma
                </h1>
                <p className="block mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-lightTextColor dark:text-white">
                  I am a product-focused professional based in India, working at the intersection
                  of product strategy, technology, and execution. I currently work on building
                  user-centric products with a strong emphasis on retention, personalization,
                  and scalable systems. I am {new Date().getFullYear() - 2003} years old and am
                  pursuing a B.Tech in Information Technology from Guru Gobind Singh Indraprastha
                  University.
                </p>

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
                src={assetUrl("/assets/images/seo/gaurav.webp")}
                alt="Portrait of Gaurav Sharma"
                decoding="async"
                className="w-full mx-auto shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </div>
        <SubHeader title="Why hire me?" headingLevel={2} eyebrow="How I work / Portfolio" caption="Product judgment, technical fluency, and the ability to carry a decision through delivery." />
        <SkillsSection />
      </Animatify>
    </div>
  );
}
