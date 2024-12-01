import CarsArray from "./components/CarsArray";
import PComponent from "./components/PComponent";

export default function Home() {
  return (
<div>
      <div className="bg-slate-300 text-center pt-8 text-black text-3xl font-semibold">Using ArrayMap</div>

      <CarsArray />

      <div className="bg-slate-300 text-center text-black text-3xl font-semibold">Using props</div>

      <PComponent />
    </div>
  );
}
