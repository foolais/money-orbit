"use client";

import CountUp from "./CountUp";

const CashCardAmount = ({ amount }: { amount: number }) => {
  return (
    <div className="text-4xl font-bold">
      {"Rp"}
      <CountUp
        from={0}
        to={amount}
        separator="."
        direction="up"
        duration={0.1}
        className="count-up-text"
      />
    </div>
  );
};

export default CashCardAmount;
