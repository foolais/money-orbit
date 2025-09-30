import React from "react";
import { CashCard } from "./card";
import { TrendingDown, TrendingUp } from "lucide-react";

const ContainerCash = () => {
  return (
    <div className="w-3/4 grid py-6">
      <div className="grid gap-8">
        <CashCard type="total" amount={500000} />
        <CashCard
          icon={<TrendingUp size={30} color="green" />}
          type="income"
          amount={500000}
          variant="bordered"
        />
        <CashCard
          icon={<TrendingDown size={30} color="red" />}
          type="expense"
          amount={500000}
          variant="bordered"
        />
      </div>
    </div>
  );
};

export default ContainerCash;
