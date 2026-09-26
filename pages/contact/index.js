import { SubHeader, Animatify, SEO } from "../../components";
import { useForm, ValidationError } from "@formspree/react";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwazwgr");
  if (state.succeeded) {
    return <ThankYouMessage />;
  }
  return (
    <div className="h-fit w-full">
      <SEO
        title="Contact / Gaurav"
        desc="You got something to say? Feel free to reach out to me, I’ll respond as soon as possible."
        img="public/assets/images/seo/about.webp"
      />
      <Animatify>
        <SubHeader
          title="Contact Me"
          eyebrow="Get in touch / Portfolio"
          caption="Have a product question, project, or opportunity in mind? Send me a note."
        />
        <div className="px-10 md:px-32 relative z-10">
          <div className="max-w-screen-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-lightBgSecondaryColor dark:bg-bgSecondaryColor p-12 rounded-xl"
            >
              <label
                htmlFor="email"
                className="block text-lightTextColor dark:text-white text-3xl"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="block w-full text-lightTextColor dark:text-white text-xl p-6 outline-none bg-transparent border-2 border-bgColor dark:border-white my-6 rounded-xl"
                placeholder="For e.g. sharmagauravxo@gmail.com"
                spellCheck={false}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="block text-lightTextColor dark:text-white text-xl bg-white dark:bg-bgColor px-12 py-6 mb-6 rounded-xl"
              />
              <label
                htmlFor="message"
                className="block text-lightTextColor dark:text-white text-3xl"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type a message for e.g. You're hired! We can pay you whatever you want."
                className="h-96 block w-full text-lightTextColor dark:text-white text-xl p-6 outline-none bg-transparent border-2 border-bgColor dark:border-white my-6 rounded-xl"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="block text-lightTextColor dark:text-white text-xl bg-white dark:bg-bgColor px-12 py-6 mb-6 rounded-xl"
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-block mt-4 w-full md:w-fit text-dark:border-whitecenter md:text-left md:mr-4 px-8 py-2 text-white text-xl border-bgColor dark:border-white border-2 bg-bgColor dark:bg-transparent  rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="px-6 sm:px-10 md:px-20 lg:px-32 mt-16">
          <div className="max-w-screen-xl mx-auto border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor pt-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-pink">Prefer email?</p>
            <a href="mailto:sharmagauravxo@gmail.com" className="inline-block max-w-full mt-4 font-secondary text-[clamp(1.4rem,4.5vw,4rem)] leading-tight tracking-tight text-lightTextColor dark:text-white break-all sm:break-normal transition-colors hover:text-pink focus-visible:text-pink">
              sharmagauravxo@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Animatify>
    </div>
  );
}

function ThankYouMessage() {
  return (
    <div className="h-fit w-full">
      <SubHeader
        title="Contact Me"
        eyebrow="Get in touch / Portfolio"
        caption="Have a product question, project, or opportunity in mind? Send me a note."
      />
      <div className="px-10 md:px-32 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-bgSecondaryColor p-12 text-center">
            <h1 className="text-white text-6xl ">
              Thank <span className="text-border">you!</span>
            </h1>
            <div className="text-xl text-white mt-6 max-w-prose mx-auto">
              {
                "I've received your message, so expect to receive a response soon."
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
