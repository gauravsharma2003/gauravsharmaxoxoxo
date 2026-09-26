export default function ArrowIcon({ direction = "up-right", className = "" }) {
  const path = direction === "right" ? "M4 12h16m-6-6 6 6-6 6" : "M5 19 19 5M7 5h12v12";

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block h-[0.9em] w-[0.9em] shrink-0 align-[-0.08em] ${className}`}
    >
      <path d={path} />
    </svg>
  );
}
