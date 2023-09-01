import React from "react";

type Props = {
  title: string;
};

const TextOutline: React.FC<Props> = ({ title }) => {
  return (
    <div className="outliner">
      <svg viewBox="0 0 10 2">
        <text
          x="1"
          y="1.75"
          text-anchor="start"
          font-size="2"
          fill="none"
          stroke-width=".015"
          stroke="#9c9c9c"
          font-family="sans-serif"
        >
          {title}
        </text>
      </svg>
    </div>
  );
};

export default TextOutline;