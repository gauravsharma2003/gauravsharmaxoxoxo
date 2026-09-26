import experienceData from "../../experience-data";
import Link from "next/link";

export default function ExperienceSection() {
    return (
        <div className="relative z-10 h-fit px-10 md:px-32">
            <div className="max-w-screen-xl mx-auto">
                <p className="mb-5 text-sm text-lightTextColor dark:text-white opacity-70">Scroll to explore experience →</p>
                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 experience-scroll" aria-label="Work experience">
                    {experienceData.map((experience, index) => (
                        <Experience {...experience} key={`experience-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Experience({ icon, date, organization, position, desc, website }) {
    return (
        <article className="flex flex-col gap-4 flex-none snap-start w-[85vw] md:w-[42rem] min-h-[30rem] justify-between p-6 md:p-8 rounded-xl bg-lightBgSecondaryColor dark:bg-bgSecondaryColor">
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col md:flex-row gap-4">
                    <img src={icon} loading="lazy" decoding="async" className="h-16 w-16 rounded-lg select-none object-contain" alt={organization + " logo"} />
                    <div className="flex flex-col">
                        <h3 className="text-2xl md:text-3xl text-lightTextColor dark:text-white">{organization}</h3>
                        <p className="text-xl md:text-2xl text-border break-words">{position}</p>
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
