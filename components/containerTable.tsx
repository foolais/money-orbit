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

const mockData = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  title: "Salary",
  amount: "Rp 5.000.000",
  type: index % 2 === 0 ? "Income" : "Expense",
  date: "2023-08-01",
}));

const ContainerTable = () => {
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
            {mockData.map(({ id, title, amount, type, date }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">{title}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell
                  className={
                    type === "Income" ? "text-green-500" : "text-red-500"
                  }
                >
                  {type}
                </TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>
                  <TableTransactionAction />
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
