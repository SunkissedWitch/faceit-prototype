export const Close = ({
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
    <g id="x">
      <path id="Vector" d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path id="Vector_2" d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)
