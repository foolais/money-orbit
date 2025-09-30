import ButtonCreateTransaction from "./buttonCreateTransaction";

const ContainerHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-5xl font-extrabold text-black text-left">
        Welcome to <span className="primary-text">Money Orbit</span>
      </h1>
      <ButtonCreateTransaction />
    </div>
  );
};

export default ContainerHeader;
