import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({ title, desc, img }) {
  const router = useRouter();
  const siteUrl = "https://gauravsharmaxoxoxo.vercel.app";
  const path = (router.asPath || "/").split("?")[0];
  const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;
  const imageUrl = img
    ? img.startsWith("http")
      ? img
      : `${siteUrl}/${img.replace(/^public\/?/, "").replace(/^\//, "")}`
    : `${siteUrl}/assets/images/seo/gaurav.webp`;
  const description =
    desc ||
    "Gaurav Sharma is a product professional in India building user-focused digital products through product strategy, data, and execution.";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#gaurav-sharma`,
        name: "Gaurav Sharma",
        url: siteUrl,
        jobTitle: "Product Professional",
        sameAs: [
          "https://www.linkedin.com/in/gauravsharma2003/",
          "https://github.com/gauravsharma2003",
          "https://x.com/Gauravxoxoxo",
        ],
        alumniOf: "Guru Gobind Singh Indraprastha University",
      },
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Gaurav Sharma",
        url: siteUrl,
      },
    ],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Gaurav Sharma" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemProp="image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </Head>
  );
}
