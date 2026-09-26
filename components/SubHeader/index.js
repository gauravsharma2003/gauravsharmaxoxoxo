export default function SubHeader({ title, caption, headingLevel = 1, homeIndex }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  if (homeIndex) {
    return (
      <div className="px-6 sm:px-10 md:px-20 lg:px-32 pt-20 md:pt-28 pb-9 md:pb-12">
        <div className="max-w-screen-xl mx-auto border-t border-lightBgSecondaryColorTranslucent dark:border-bgSecondaryColor pt-5 md:pt-7">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.55fr)] md:items-end md:gap-10">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-pink">{homeIndex} / Portfolio</p>
              <Heading className="mt-4 font-secondary text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.06] tracking-[-0.035em] text-lightTextColor dark:text-white text-balance">
                {title}
              </Heading>
            </div>
            {caption && <p className="max-w-lg text-base md:text-lg leading-relaxed text-lightTextColor dark:text-white opacity-80 md:pb-1">{caption}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative px-10 md:px-32 mx-auto py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto relative">
        <span aria-hidden="true" className="absolute -top-10 left-0 text-border-thick text-6xl md:text-[7rem] whitespace-nowrap opacity-10 pointer-events-none select-none">
          {title}
        </span>
        <div aria-hidden="true" className="ambient-glow absolute -top-20 -left-24 pointer-events-none" />
        <div className="relative z-10">
          <Heading className="text-lightTextColor dark:text-white text-4xl md:text-5xl leading-tight tracking-tight">
            {title}
          </Heading>
          {caption && <p className="max-w-3xl text-lightTextColor dark:text-white mt-6 text-xl leading-8">{caption}</p>}
        </div>
      </div>
    </div>
  );
}
