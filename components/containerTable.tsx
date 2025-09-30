import { ScrollArea } from "./ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import TableTransactionAction from "./tableTransactionAction";
import { getTransactions } from "@/action/action-transaction";
import { formatDate, formatRupiah } from "@/lib/utils";

const ContainerTable = async () => {
  const datas = await getTransactions();
  console.log(datas);

  const transactions =
    datas && datas.length
      ? datas?.map((data) => {
          return {
            id: data.id,
            title: data.title,
            amount: data.amount,
            type: data.type,
            date: data.createdAt,
          };
        })
      : [];

  return (
    <div className="primary-border neu w-full p-6 rounded-xl">
      <ScrollArea className="h-[400px] w-full">
        <Table className="w-full relative">
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Title</TableHead>
              <TableHead scope="col">Amount</TableHead>
              <TableHead scope="col">Type</TableHead>
              <TableHead scope="col">Date</TableHead>
              <TableHead scope="col" className="w-[200px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map(({ id, title, amount, type, date }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">{title}</TableCell>
                <TableCell>{formatRupiah(amount)}</TableCell>
                <TableCell
                  className={`${
                    type === "INCOME" ? "text-green-500" : "text-red-500"
                  } font-semibold
                  `}
                >
                  {type === "INCOME" ? "Income" : "Expense"}
                </TableCell>
                <TableCell>{formatDate(date)}</TableCell>
                <TableCell>
                  <TableTransactionAction id={id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default ContainerTable;
