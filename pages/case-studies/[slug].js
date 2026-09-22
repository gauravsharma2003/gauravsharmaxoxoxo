import Link from "next/link";
import { SEO, SubHeader } from "../../components";
import caseStudies from "../../case-study-data";

export default function CaseStudy({ study }) {
  return (
    <div className="h-fit w-full">
      <SEO title={study.metaTitle} desc={study.metaDescription} img="/assets/images/seo/gaurav.webp" />
      <SubHeader title={study.title} caption={study.summary} />
      <main className="px-10 pb-16 md:px-32">
        <article className="max-w-3xl mx-auto text-lightTextColor dark:text-white">
          <p className="text-xl text-pink">{study.role}</p>
          <section className="mt-10">
            <h2 className="text-3xl">Outcome</h2>
            <p className="mt-4 text-xl leading-9">{study.outcome}</p>
          </section>
          <section className="mt-10">
            <h2 className="text-3xl">The challenge</h2>
            <p className="mt-4 text-xl leading-9">{study.challenge}</p>
          </section>
          <section className="mt-10">
            <h2 className="text-3xl">Approach</h2>
            <ul className="mt-4 ml-6 space-y-3 text-xl leading-9 list-disc">
              {study.approach.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="mt-10">
            <h2 className="text-3xl">Product takeaway</h2>
            <p className="mt-4 text-xl leading-9">{study.learnings}</p>
          </section>
          <Link href="/case-studies"><a className="inline-block mt-12 text-xl text-indigo hover:underline underline-offset-8">View all product case studies</a></Link>
        </article>
      </main>
    </div>
  );
}

export function getStaticPaths() {
  return { paths: caseStudies.map(({ slug }) => ({ params: { slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { study: caseStudies.find((study) => study.slug === params.slug) } };
}
