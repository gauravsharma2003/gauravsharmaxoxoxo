import { useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import assetUrl from "../asset-url";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const saved = localStorage.getItem("theme");
      document.documentElement.classList.toggle(
        "dark",
        saved ? saved === "dark" : media.matches
      );
    };

    applyTheme();
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, []);

  const changeTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="64x64" href={assetUrl("/assets/images/favicon-portrait.png")} />
        <link rel="preload" href={assetUrl("/assets/fonts/SulphurPoint-Bold.woff")} as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href={assetUrl("/assets/fonts/Marcellus.woff")} as="font" type="font/woff" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face { font-family: "Sulphur Point"; src: url("${assetUrl("/assets/fonts/SulphurPoint-Bold.woff")}") format("woff"); font-display: swap; }
          @font-face { font-family: "Marcellus"; src: url("${assetUrl("/assets/fonts/Marcellus.woff")}") format("woff"); font-display: swap; }
        ` }} />
      </Head>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header changeTheme={changeTheme} />
      <main id="main-content" className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
