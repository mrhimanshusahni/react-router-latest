import { useCounterStore } from "@/store/store";
import { memo } from "react";

export const ParentComponent = () => {
  console.log("[Line: 5] Parent Component Render :>> ");

  const {} = useCounterStore();

  return (
    <div className="mx-auto max-w-md space-y-2 rounded-md border p-2">
      <Value />

      <div className="flex items-center justify-center gap-x-1">
        <Increment />
        <Decrement />
      </div>

      <div>
        <StaticChild />
      </div>
    </div>
  );
};

const Value = () => {
  const { counter } = useCounterStore();
  console.log("[Line: 19] ValueComponent Render :>> ");

  return (
    <div className="flex items-center justify-center">Count: {counter}</div>
  );
};

const Increment = () => {
  const { incrementCounter } = useCounterStore();

  console.log("[Line: 29] IncrementComponent Render :>> ");
  return (
    <button
      type="button"
      onClick={incrementCounter}
      className="rounded-md border p-2"
    >
      Increment Counter
    </button>
  );
};

const Decrement = () => {
  const { decrementCounter } = useCounterStore();

  console.log("[Line: 44] Decrement Component Render :>> ");
  return (
    <button
      type="button"
      onClick={decrementCounter}
      className="rounded-md border p-2"
    >
      Decrement Counter
    </button>
  );
};

const StaticChild = memo(() => {
  console.log("[Line: 62] StaticChild Render :>> ");
  return <div>Hello World</div>;
});
