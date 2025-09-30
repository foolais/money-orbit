import CashCardAmount from "./cashCardAmount";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CircleDollarSign } from "lucide-react";

interface iCashProps {
  icon?: React.ReactNode;
  type: "total" | "income" | "expense";
  amount: number;
  variant?: "default" | "bordered";
}

export const CashCard = ({ icon, type, amount, variant }: iCashProps) => {
  const cardVariant =
    variant === "bordered" ? "primary-border" : "primary-bg text-white ";

  const title = {
    total: "Total Cash",
    income: "Income",
    expense: "Expense",
  };

  return (
    <Card className={`max-w-md gap-2 ${cardVariant}`}>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2 font-semibold">
          {icon ? icon : <CircleDollarSign size={30} />}
          <span
            className={
              type === "income"
                ? "text-green-500"
                : type === "expense"
                ? "text-red-500"
                : "text-white"
            }
          >
            {title[type]}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CashCardAmount amount={amount} />
      </CardContent>
    </Card>
  );
};
