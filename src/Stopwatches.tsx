import { useState } from "react";
import { Stopwatch } from "./Stopwatch";
import Button from "./components/Button";

function Stopwatches() {
  const [stopwatchList, setStopwatchList] = useState<number[]>([]);

  // handlers
  const addStopwatch = () => {
    setStopwatchList((prev) => [...prev, Date.now()]);
  };
  const removeStopwatch = (id: number) => {
    setStopwatchList((prev) => prev.filter((x) => x !== id));
  };

  return (
    <div className="mt-6 w-full flex flex-col justify-center items-center gap-y-6">
      <Button
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-150 text-lg"
        onClick={addStopwatch}
        padding="1rem 3rem"
      >
        Add Stopwatch
      </Button>

      {stopwatchList.map((id) => (
        <Stopwatch key={id} onDelete={() => removeStopwatch(id)} />
      ))}
    </div>
  );
}

export default Stopwatches;
