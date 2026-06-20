/**
 * Dotted world map with an animated UK → India connection arc.
 *
 * The "land" is described by a handful of ellipses; a dot grid is filtered to
 * the points that fall on land, producing a stylised dotted map. Deterministic,
 * so it renders fine as a server component. The connection arc + pulsing nodes
 * are CSS-animated (disabled under prefers-reduced-motion via globals.css).
 */

type Ellipse = { cx: number; cy: number; rx: number; ry: number };

const LAND: Ellipse[] = [
  // North America
  { cx: 210, cy: 150, rx: 95, ry: 78 },
  { cx: 150, cy: 108, rx: 55, ry: 34 },
  // Greenland
  { cx: 332, cy: 78, rx: 28, ry: 24 },
  // South America
  { cx: 312, cy: 342, rx: 46, ry: 92 },
  // Europe
  { cx: 512, cy: 138, rx: 44, ry: 34 },
  // Africa
  { cx: 548, cy: 272, rx: 70, ry: 95 },
  // Asia
  { cx: 705, cy: 158, rx: 150, ry: 74 },
  // India
  { cx: 672, cy: 232, rx: 34, ry: 34 },
  // SE Asia
  { cx: 766, cy: 252, rx: 40, ry: 28 },
  // Australia
  { cx: 842, cy: 372, rx: 54, ry: 34 },
];

function onLand(x: number, y: number) {
  return LAND.some(
    (e) => ((x - e.cx) / e.rx) ** 2 + ((y - e.cy) / e.ry) ** 2 <= 1
  );
}

// Precompute dots once at module load.
const STEP = 15;
const DOTS: Array<[number, number]> = [];
for (let x = 20; x <= 980; x += STEP) {
  for (let y = 30; y <= 470; y += STEP) {
    if (onLand(x, y)) DOTS.push([x, y]);
  }
}

const UK: [number, number] = [508, 126];
const INDIA: [number, number] = [672, 224];

export function WorldMap({
  className = "",
  dotClassName = "fill-cream/30",
  showConnection = true,
}: {
  className?: string;
  dotClassName?: string;
  showConnection?: boolean;
}) {
  // Quadratic arc that bows upward between UK and India.
  const arc = `M ${UK[0]} ${UK[1]} Q ${(UK[0] + INDIA[0]) / 2} ${
    Math.min(UK[1], INDIA[1]) - 70
  } ${INDIA[0]} ${INDIA[1]}`;

  return (
    <svg
      viewBox="0 0 1000 500"
      className={className}
      role="img"
      aria-label="Stylised world map highlighting an offshore corridor between the UK and India."
      preserveAspectRatio="xMidYMid meet"
    >
      {DOTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.7} className={dotClassName} />
      ))}

      {showConnection && (
        <>
          <path
            d={arc}
            fill="none"
            stroke="#DDA94E"
            strokeWidth={2.2}
            strokeLinecap="round"
            className="map-arc"
          />
          {[UK, INDIA].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={5} className="map-ping fill-amber" />
              <circle cx={x} cy={y} r={4} className="fill-amber-light" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}
