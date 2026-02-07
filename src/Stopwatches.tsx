import { useState } from "react";
import { Stopwatch } from "./Stopwatch";
import Button from "./components/Button";
import { Plus } from "lucide-react";

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
    <div className="w-full px-16 py-12">
      <Button
        className="mx-auto bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-150 text-lg"
        onClick={addStopwatch}
        icon={<Plus className="w-5 h-5" fill="currentColor" />}
        padding="1rem 3rem"
      >
        Add Stopwatch
      </Button>

      <div className="mt-12 grid lg:grid-cols-3 grid-cols-1 gap-6">
        {stopwatchList.map((id) => (
          <Stopwatch key={id} onDelete={() => removeStopwatch(id)} />
        ))}
      </div>
    </div>
  );
}

export default Stopwatches;
