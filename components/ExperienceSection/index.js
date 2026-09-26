import { useEffect, useRef, useState } from "react";
import experienceData from "../../experience-data";
import Link from "next/link";

export default function ExperienceSection() {
    const scrollerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateActiveIndex = () => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const center = scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
        const cards = Array.from(scroller.querySelectorAll("[data-experience-card]"));
        const nearest = cards.reduce((best, card, index) => {
            const bounds = card.getBoundingClientRect();
            const distance = Math.abs(bounds.left + bounds.width / 2 - center);
            return distance < best.distance ? { index, distance } : best;
        }, { index: 0, distance: Infinity });

        setActiveIndex((current) => current === nearest.index ? current : nearest.index);
    };

    useEffect(() => {
        window.addEventListener("resize", updateActiveIndex);
        return () => window.removeEventListener("resize", updateActiveIndex);
    }, []);

    const goToCard = (index) => {
        const scroller = scrollerRef.current;
        const card = scroller?.querySelectorAll("[data-experience-card]")[index];
        if (!card) return;

        const scrollerBounds = scroller.getBoundingClientRect();
        const cardBounds = card.getBoundingClientRect();
        const left = scroller.scrollLeft + cardBounds.left - scrollerBounds.left - (scroller.clientWidth - cardBounds.width) / 2;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        scroller.scrollTo({ left, behavior: reducedMotion ? "auto" : "smooth" });
    };

    return (
        <section className="relative z-10 h-fit px-6 sm:px-10 md:px-20 lg:px-32" aria-label="Work experience">
            <div className="max-w-screen-xl mx-auto">
                <p className="mb-5 text-sm text-lightTextColor dark:text-white opacity-70">Scroll, swipe, or use the dots to explore experience</p>
                <div ref={scrollerRef} onScroll={updateActiveIndex} className="flex gap-6 overflow-x-auto snap-x snap-mandatory experience-scroll" aria-label="Experience cards">
                    {experienceData.map((experience, index) => (
                        <Experience {...experience} key={`experience-${index}`} />
                    ))}
                </div>
                <div className="mt-2 flex items-center justify-center gap-1" role="group" aria-label="Experience carousel navigation">
                    {activeIndex > 0 ? (
                        <button type="button" onClick={() => goToCard(activeIndex - 1)} className="group flex h-[40px] w-[40px] items-center justify-center rounded-full" aria-label={`Previous experience: ${experienceData[activeIndex - 1].position}`}>
                            <span className="h-[6px] w-[6px] rounded-full bg-lightTextColor dark:bg-white opacity-60 transition-transform duration-200 group-hover:scale-150" aria-hidden="true" />
                        </button>
                    ) : <span className="h-[40px] w-[40px]" aria-hidden="true" />}
                    <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-pink bg-lightBgSecondaryColor dark:bg-bgSecondaryColor text-[11px] font-semibold tabular-nums text-lightTextColor dark:text-white" role="status" aria-label={`Experience ${activeIndex + 1} of ${experienceData.length}`}>
                        {activeIndex + 1}<span className="opacity-50">/{experienceData.length}</span>
                    </span>
                    {activeIndex < experienceData.length - 1 ? (
                        <button type="button" onClick={() => goToCard(activeIndex + 1)} className="group flex h-[40px] w-[40px] items-center justify-center rounded-full" aria-label={`Next experience: ${experienceData[activeIndex + 1].position}`}>
                            <span className="h-[6px] w-[6px] rounded-full bg-lightTextColor dark:bg-white opacity-60 transition-transform duration-200 group-hover:scale-150" aria-hidden="true" />
                        </button>
                    ) : <span className="h-[40px] w-[40px]" aria-hidden="true" />}
                </div>
            </div>
        </section>
    );
}

function Experience({ icon, date, organization, position, desc, website }) {
    return (
        <article data-experience-card className="flex flex-col gap-4 flex-none snap-start w-[85vw] md:w-[42rem] min-h-[30rem] justify-between p-6 md:p-8 rounded-xl bg-lightBgSecondaryColor dark:bg-bgSecondaryColor">
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col md:flex-row gap-4">
                    <img
                        src={icon}
                        loading="lazy"
                        decoding="async"
                        width={organization === "Times Internet" ? 128 : 64}
                        height={64}
                        className={`${organization === "Times Internet" ? "w-32 bg-white p-2" : "w-16"} h-16 rounded-lg select-none object-contain`}
                        alt={organization + " logo"}
                    />
                    <div className="flex flex-col">
                        <h3 className="text-2xl md:text-3xl text-lightTextColor dark:text-white">{organization}</h3>
                        <p className="font-secondary text-xl md:text-2xl leading-snug text-lightTextColor dark:text-white break-words">{position}</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <div className="text-xl text-lightTextColor dark:text-white">{date}</div>
                    <p className="text-base md:text-lg leading-7 text-lightTextColor dark:text-white whitespace-pre-line">{desc}</p>
                </div>
            </div>
            <Link href={website}>
                <a
                    target="_blank"
                    className={`inline-block w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none mt-4`}
                >
                    Website
                </a>
            </Link>
        </article>
    )
}
