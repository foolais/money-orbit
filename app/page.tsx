import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-200 text-white min-h-screen flex flex-col gap-6 items-center justify-center">
      <h1 className="primary-text text-3xl font-extrabold">Money Orbit</h1>
      <Button>Hello World</Button>
    </div>
  );
}
