import Link from "next/link";

export default function ProjectCards({
  title,
  miniDesc,
  website,
  github,
  img,
  link,
  headingLevel = 2,
}) {
  const Heading = `h${headingLevel}`;
  return (
    <div className="px-10 md:px-32">
      <div className="w-full max-w-screen-xl mx-auto flex items-center gap-12 md:gap-4 flex-col-reverse md:flex-row transition">
        <div className="relative z-10 w-full">
          <Heading className="text-lightTextColor dark:text-white text-4xl">
            {title}
          </Heading>
          <span className="block text-lightTextColor dark:text-white text-xl mt-4 leading-10">
            {miniDesc}
          </span>
          <div className="mt-6">
            <Link href={`/projects/${link}`} prefetch={false}>
              <a className="inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition hover:shadow-xl focus-visible:shadow-xl">
                Read project
              </a>
            </Link>
            {github && (
              <Link href={github}>
                <a
                  target="_blank"
                  className={`inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 text-bgColor dark:text-white rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                >
                  GitHub
                </a>
              </Link>
            )}
            {website && (
              <Link href={website}>
                <a
                  target="_blank"
                  className={`inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                >
                  Website
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="relative">
          <div aria-hidden="true" className="ambient-glow absolute inset-0 pointer-events-none" />
          <img
            className="relative z-10 md:max-w-sm lg:max-w-xl rounded-xl transition duration-300 hover:scale-105 shadow-2xl"
            src={img}
            alt={`${title} project preview`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
