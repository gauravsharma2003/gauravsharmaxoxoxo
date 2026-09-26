import Link from "next/link";
import SEO from "../../components/SEO";
import caseStudies from "../../case-study-data";
import ArrowIcon from "../../components/ArrowIcon";
import MetricValue from "../../components/MetricValue";

export default function CaseStudy({ study, nextStudy, number }) {
  return (
    <div className="h-fit w-full px-6 sm:px-10 md:px-20 lg:px-32 pb-24 text-lightTextColor dark:text-white">
      <SEO title={study.metaTitle} desc={study.metaDescription} img="/assets/images/seo/gaurav.webp" />
      <article className="max-w-screen-xl mx-auto">
        <nav aria-label="Breadcrumb" className="pt-10 text-sm text-lightTextColor dark:text-white opacity-70">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <span className="mx-3" aria-hidden="true">/</span>
          <Link href="/case-studies"><a className="hover:underline">Case studies</a></Link>
          <span className="mx-3" aria-hidden="true">/</span>
          <span>{study.title}</span>
        </nav>

        <header className="mt-16 md:mt-20 border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor pt-6 md:pt-8 pb-12 md:pb-16 border-b border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.55fr)] md:items-end md:gap-10">
            <div>
              <p className="text-xs md:text-sm tracking-[0.22em] uppercase text-pink">Case study / 0{number} / {study.category}</p>
              <h1 className="mt-4 font-secondary text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.06] tracking-[-0.035em] text-balance">{study.title}</h1>
            </div>
            <p className="max-w-lg text-base md:text-lg leading-relaxed opacity-80 md:pb-1">{study.summary}</p>
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20 pt-12 md:pt-16">
          <aside className="text-sm leading-7 lg:sticky lg:top-24 lg:self-start">
            <p className="text-pink uppercase tracking-widest">Role</p>
            <p className="mt-2">{study.role}</p>
            <p className="mt-8 text-pink uppercase tracking-widest">Focus</p>
            <p className="mt-2">{study.category}</p>
            <Link href="/case-studies"><a className="inline-flex items-center gap-2 mt-9 border-b border-current hover:text-pink">All case studies <ArrowIcon /></a></Link>
          </aside>

          <div className="max-w-3xl">
            <section aria-labelledby="outcome-heading" className="pb-12 md:pb-16 border-b border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
              <p className="text-sm tracking-[0.2em] uppercase text-pink">The result</p>
              {study.metric && <p className="font-secondary text-6xl md:text-8xl leading-none mt-6 text-pink tabular-nums"><MetricValue value={study.metric} /></p>}
              <h2 id="outcome-heading" className="sr-only">Outcome</h2>
              <p className="mt-5 font-secondary text-2xl md:text-3xl leading-snug">{study.outcome}</p>
            </section>

            <section aria-labelledby="challenge-heading" className="py-12 md:py-16 border-b border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
              <p className="text-sm tracking-[0.2em] uppercase text-pink">01 / Context</p>
              <h2 id="challenge-heading" className="mt-4 font-secondary text-3xl md:text-4xl">The challenge</h2>
              <p className="mt-5 text-xl leading-9 opacity-85">{study.challenge}</p>
            </section>

            <section aria-labelledby="approach-heading" className="py-12 md:py-16 border-b border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
              <p className="text-sm tracking-[0.2em] uppercase text-pink">02 / Execution</p>
              <h2 id="approach-heading" className="mt-4 font-secondary text-3xl md:text-4xl">What I worked on</h2>
              <ol className="mt-8">
                {study.approach.map((item, index) => (
                  <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5 border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
                    <span className="text-sm text-pink tabular-nums">0{index + 1}</span>
                    <p className="text-xl leading-8">{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="takeaway-heading" className="py-12 md:py-16">
              <p className="text-sm tracking-[0.2em] uppercase text-pink">03 / Reflection</p>
              <h2 id="takeaway-heading" className="mt-4 font-secondary text-3xl md:text-4xl">What this reinforced</h2>
              <p className="mt-5 text-xl leading-9 opacity-85">{study.learnings}</p>
            </section>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-lightTextColor dark:border-white">
          <p className="text-sm tracking-[0.2em] uppercase text-pink">Next case study</p>
          <Link href={`/case-studies/${nextStudy.slug}`}>
            <a className="group inline-flex items-center gap-4 mt-5 font-secondary text-3xl md:text-5xl hover:text-pink transition">
              {nextStudy.title}<ArrowIcon className="transition group-hover:translate-x-2" />
            </a>
          </Link>
        </div>
      </article>
    </div>
  );
}

export function getStaticPaths() {
  return { paths: caseStudies.map(({ slug }) => ({ params: { slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  const index = caseStudies.findIndex((study) => study.slug === params.slug);
  return {
    props: {
      study: caseStudies[index],
      nextStudy: caseStudies[(index + 1) % caseStudies.length],
      number: index + 1,
    },
  };
}
