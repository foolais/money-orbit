import Background from "@/components/background";
import ContainerCash from "@/components/containerCash";
import ContainerHeader from "@/components/containerHeader";
import ContainerTable from "@/components/containerTable";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="container mx-auto flex flex-col gap-6">
          <ContainerHeader />
          <div className="flex gap-10 py-6 ">
            <ContainerCash />
            <ContainerTable />
          </div>
        </div>
      </div>
    </div>
  );
}
