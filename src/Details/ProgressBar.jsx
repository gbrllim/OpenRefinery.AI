const ProgressBar = ({ progress, color, bar }) => {
  // Check if progress is 100%
  const isCompleted = progress === 100;

  // Conditionally set the color class
  const colorClass = isCompleted ? "bg-slate-400" : color;

  return (
    <div className={`h-2 w-[142px] rounded-full ${bar}`}>
      <div
        className={`h-full rounded-full ${colorClass}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const MineProgressBar = ({ progress, color, bar }) => {
  // Check if progress is 100%
  const isCompleted = progress === 100;

  // Conditionally set the color class
  const colorClass = isCompleted ? "bg-slate-400" : color;

  return (
    <div className={`h-2 w-full rounded-full ${bar}`}>
      <div
        className={`h-full rounded-full ${colorClass}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export { ProgressBar, MineProgressBar };
