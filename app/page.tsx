import Background from "@/components/background";
import ContainerCash from "@/components/container-cash";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="container mx-auto flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-black text-left">
            Welcome to <span className="primary-text">Money Orbit</span>
          </h1>
          <ContainerCash />
        </div>
      </div>
    </div>
  );
}
