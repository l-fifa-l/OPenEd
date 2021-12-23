export default function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 mr-3 fill-stone-800"
      width="14px"
      height="14px"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <circle
          cx="7"
          cy="7"
          r="6"
          stroke="#000000"
          strokeOpacity=".2"
          strokeWidth="2"
        />
        <path
          fill="#ffffff"
          fillOpacity=".8"
          fillRule="nonzero"
          d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"
        />
      </g>
    </svg>
  );
}
