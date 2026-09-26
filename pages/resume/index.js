import { SubHeader, SEO } from "../../components";
import assetUrl from "../../asset-url";

export default function Resume() {
  return (
    <div>
      <SEO
        title="Resume / Gaurav"
        desc="Take a look at my resume to get a more formal description about myself. To know stuff like my education, etc. You can download my resume for future reference."
        img="public/assets/images/seo/about.webp"
      />
      <SubHeader
        title="My Resume"
        caption="Take a look at my resume to get a more formal description about myself. To know stuff like my education, etc. You can download my resume for future reference."
      />
      <div className="px-10 md:px-32 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <iframe
            src={assetUrl("/assets/resume/Gaurav.pdf")}
            title="Gaurav Sharma resume"
            loading="lazy"
            className="h-[90vh] w-full rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
