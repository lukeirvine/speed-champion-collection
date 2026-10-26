import type { CSSProperties } from "react";

export function RadialProgress({
  value,
  size = "3rem",
  thickness = "4px",
  className = "text-primary text-xs",
}: {
  value: number;
  size?: string;
  thickness?: string;
  className?: string;
}) {
  const vars = { "--size": size, "--thickness": thickness } as CSSProperties;
  return (
    <div className="relative">
      {/* Track */}
      <div className="radial-progress absolute inset-0 text-base-300" style={{ ...vars, "--value": 100 } as CSSProperties} aria-hidden />
      <div
        className={`radial-progress font-display ${className}`}
        style={{ ...vars, "--value": value } as CSSProperties}
        role="progressbar"
        aria-valuenow={value}
      >
        {value}%
      </div>
    </div>
  );
}
