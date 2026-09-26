import ArrowIcon from "../ArrowIcon";

export default function MetricValue({ value }) {
  if (!value?.includes(" → ")) return value;

  const [before, after] = value.split(" → ");
  return (
    <>
      {before}<span className="mx-[0.12em] whitespace-nowrap"><ArrowIcon direction="right" /><span className="sr-only"> to </span></span>{after}
    </>
  );
}
