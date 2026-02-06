import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw, Trash2 } from "lucide-react";

type Status = "idle" | "running" | "paused";

interface Props {
  onDelete: () => void;
}

export function Stopwatch({ onDelete }: Props) {
  const [timeMs, setTimeMs] = useState(0);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status !== "running") return;

    const id = setInterval(() => {
      setTimeMs((t) => t + 10);
    }, 10);

    return () => clearInterval(id);
  }, [status]);

  // handlers
  const start = () => setStatus("running");
  const pause = () => setStatus("paused");
  const resume = () => setStatus("running");
  const clear = () => {
    setTimeMs(0);
    setStatus("idle");
  };

  // formatting
  const minutes = Math.floor(timeMs / 60000);
  const seconds = Math.floor((timeMs % 60000) / 1000);
  const milliseconds = Math.floor((timeMs % 1000) / 10);

  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="relative bg-white rounded-2xl shadow-md border border-gray-200 py-8 px-20 hover:shadow-lg transition-shadow duration-200">
      <div className="text-center mb-8 mt-2">
        <div className="text-6xl font-mono tabular-nums tracking-tight text-gray-900">
          {format(minutes)}:{format(seconds)}.{format(milliseconds)}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        {status === "idle" && (
          <span
            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-150"
            onClick={start}
          >
            <Play className="w-6 h-6" fill="currentColor" />
          </span>
        )}

        {status === "running" && (
          <div className="flex items-center gap-x-3">
            <span
              className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-150"
              onClick={pause}
            >
              <Pause className="w-6 h-6" fill="currentColor" />
            </span>
            <span
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700 shadow-md hover:shadow-lg transition-all duration-150"
              onClick={clear}
            >
              <RotateCcw className="w-5 h-5" />
            </span>
          </div>
        )}

        {status === "paused" && (
          <div className="flex items-center gap-x-3">
            <span
              className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-150"
              onClick={resume}
            >
              <Play className="w-6 h-6" fill="currentColor" />
            </span>
            <span
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700 shadow-md hover:shadow-lg transition-all duration-150"
              onClick={clear}
            >
              <RotateCcw className="w-5 h-5" />
            </span>
          </div>
        )}
      </div>

      <span
        onClick={onDelete}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150 group cursor-pointer"
        aria-label="Delete stopwatch"
      >
        <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
      </span>
    </div>
  );
}
