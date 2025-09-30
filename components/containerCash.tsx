import React from "react";
import { CashCard } from "./card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { getTransactionSummary } from "@/action/action-transaction";

const ContainerCash = async () => {
  const data = await getTransactionSummary();
  const { totalCash, totalIncome, totalExpense } = data;

  return (
    <div className="grid w-md">
      <div className="grid gap-8">
        <CashCard type="total" amount={totalCash} />
        <CashCard
          icon={<TrendingUp size={30} color="green" />}
          type="income"
          amount={totalIncome}
          variant="bordered"
        />
        <CashCard
          icon={<TrendingDown size={30} color="red" />}
          type="expense"
          amount={totalExpense}
          variant="bordered"
        />
      </div>
    </div>
  );
};

export default ContainerCash;
