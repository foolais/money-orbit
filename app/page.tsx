import Background from "@/components/background";
import ContainerCash from "@/components/containerCash";
import ContainerTable from "@/components/containerTable";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <div className="absolute top-0 left-0 w-full h-full flex mt-20">
        <div className="container mx-auto flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-black text-left">
            Welcome to <span className="primary-text">Money Orbit</span>
          </h1>
          <div className="flex gap-10 py-6 ">
            <ContainerCash />
            <ContainerTable />
          </div>
        </div>
      </div>
    </div>
  );
}
