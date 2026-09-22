import Link from "next/link";
import { SEO, SubHeader } from "../../components";
import caseStudies from "../../case-study-data";

export default function CaseStudies() {
  return (
    <div className="h-fit w-full">
      <SEO
        title="Product Management Case Studies | Gaurav Sharma"
        desc="Product management case studies by Gaurav Sharma covering consumer app retention, news personalisation, TOI App product strategy, funnel optimisation, and cross-functional execution."
        img="/assets/images/seo/gaurav.webp"
      />
      <SubHeader
        title="Product Case Studies"
        caption="Selected product work across consumer app retention, funnel optimisation, news personalisation, and cross-functional execution."
      />
      <main className="px-10 pb-16 md:px-32">
        <div className="grid max-w-screen-xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.slug} className="p-8 border-2 rounded-xl border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor">
              <p className="text-lg text-pink">{study.role}</p>
              <h2 className="mt-3 text-3xl text-lightTextColor dark:text-white">{study.title}</h2>
              <p className="mt-4 text-xl leading-8 text-lightTextColor dark:text-white">{study.summary}</p>
              <p className="mt-5 text-lg leading-7 text-lightTextColor dark:text-white"><strong>Outcome:</strong> {study.outcome}</p>
              <Link href={`/case-studies/${study.slug}`}>
                <a className="inline-block mt-6 text-lg text-indigo hover:underline underline-offset-8">Read case study</a>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
