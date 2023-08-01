export const Hamburger = ({
  width,
  height,
  viewBox,
  fill,
  ...props
}) => (
  <svg
    {...props}
    width={width || "24"}
    height={height || "24"}
    viewBox={viewBox || "0 0 24 24"}
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="menu">
      <path id="Vector" d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path id="Vector_2" d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path id="Vector_3" d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)