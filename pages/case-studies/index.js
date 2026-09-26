import Link from "next/link";
import SEO from "../../components/SEO";
import SubHeader from "../../components/SubHeader";
import caseStudies from "../../case-study-data";

export default function CaseStudies() {
  const [featured, ...others] = caseStudies;
  return (
    <div className="h-fit w-full pb-24">
      <SEO
        title="Product Management Case Studies | Gaurav Sharma"
        desc="Product management case studies by Gaurav Sharma covering consumer app retention, news personalisation, TOI App product strategy, funnel optimisation, and cross-functional execution."
        img="/assets/images/seo/gaurav.webp"
      />
      <SubHeader
        title="Case studies"
        eyebrow="Selected work / Times Internet"
        caption="Five views into my work on consumer news products: the questions, decisions, and results behind each one."
      />
      <div className="px-6 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-screen-xl mx-auto">
        <article className="relative mt-4 md:mt-8 border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor pt-7 md:pt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.45fr)]">
          <div>
            <p className="text-sm tracking-widest uppercase text-pink">01 / Featured case study</p>
            <h2 className="mt-5 max-w-3xl font-secondary text-4xl md:text-6xl leading-tight text-lightTextColor dark:text-white">{featured.title}</h2>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-lightTextColor dark:text-white">{featured.summary}</p>
            <Link href={`/case-studies/${featured.slug}`}>
              <a className="inline-block mt-8 border-b-2 border-pink pb-1 text-lg text-lightTextColor dark:text-white transition hover:text-pink focus-visible:text-pink">Explore the case study <span aria-hidden="true">↗</span></a>
            </Link>
          </div>
          <div className="md:border-l md:border-lightBgSecondaryColorTranslucent dark:md:border-bgSecondaryColor md:pl-10 flex flex-col justify-end">
            <p className="text-xs uppercase tracking-[0.2em] text-pink">The measured shift</p>
            <p className="mt-3 font-secondary text-5xl md:text-6xl leading-none tracking-tight text-pink tabular-nums">{featured.metric}</p>
            <p className="mt-3 text-base md:text-lg text-lightTextColor dark:text-white">{featured.metricLabel}</p>
            <div className="mt-8 space-y-4" role="img" aria-label="Games funnel progression increased from 18 percent to 74 percent">
              <div>
                <div className="flex justify-between text-sm text-lightTextColor dark:text-white"><span>Before</span><span className="tabular-nums">18%</span></div>
                <div className="mt-2 h-2 bg-lightBgSecondaryColor dark:bg-bgSecondaryColor"><div className="h-full w-[18%] bg-lightTextColor dark:bg-white" /></div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-lightTextColor dark:text-white"><span>After</span><span className="tabular-nums">74%</span></div>
                <div className="mt-2 h-2 bg-lightBgSecondaryColor dark:bg-bgSecondaryColor"><div className="h-full w-[74%] bg-pink" /></div>
              </div>
            </div>
            <p className="mt-8 pt-5 border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor text-sm leading-6 text-lightTextColor dark:text-white opacity-70">{featured.role}</p>
          </div>
        </article>

        <div className="mt-20 md:mt-28">
          <div className="flex items-end justify-between gap-6 pb-5 border-b border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
            <h2 className="font-secondary text-3xl md:text-4xl text-lightTextColor dark:text-white">More product work</h2>
            <span className="text-sm tracking-widest text-lightTextColor dark:text-white opacity-60">02 — 05</span>
          </div>
          {others.map((study, index) => (
            <article key={study.slug} className="group grid gap-3 md:grid-cols-[3rem_minmax(0,1fr)_minmax(13rem,0.45fr)_2rem] md:gap-6 py-7 md:py-9 border-b border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
              <span className="text-sm text-pink tabular-nums">0{index + 2}</span>
              <div>
                <h3 className="font-secondary text-2xl md:text-3xl leading-tight text-lightTextColor dark:text-white">
                  <Link href={`/case-studies/${study.slug}`}><a className="hover:text-pink focus-visible:text-pink transition">{study.title}</a></Link>
                </h3>
                <p className="mt-3 max-w-2xl text-lg leading-7 text-lightTextColor dark:text-white opacity-80">{study.summary}</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm tracking-wide text-lightTextColor dark:text-white opacity-70">{study.category}</p>
                {study.metric && <p className="mt-3 text-2xl font-secondary text-pink tabular-nums">{study.metric}</p>}
              </div>
              <Link href={`/case-studies/${study.slug}`}><a aria-label={`Read ${study.title}`} className="hidden md:block text-2xl text-lightTextColor dark:text-white transition group-hover:translate-x-1 group-hover:text-pink">↗</a></Link>
            </article>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
