"use client";

import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { formatNumberInput, parseFormattedNumber } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

interface iProps {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  formType: "detail" | "create" | "update";
}

const FormTransaction = ({ isOpen, onClose, title, formType }: iProps) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(2, "Title must be at least 5 characters")
      .max(50, "Title must be at most 50 characters"),
    amount: z.number().min(1, "Amount must be at least 1"),
    type: z.enum(["income", "expense"]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      amount: 0,
      type: "income",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const isDisabled = formType === "detail";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold primary-text">
            {title}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Title"
                      {...field}
                      className="primary-border"
                      disabled={isDisabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2 relative my-4">
                      <Input
                        placeholder="0"
                        {...field}
                        className="primary-border absolute pl-8"
                        disabled={isDisabled}
                        value={
                          field.value
                            ? formatNumberInput(field.value.toString())
                            : ""
                        }
                        onChange={(e) => {
                          const formattedValue = formatNumberInput(
                            e.target.value
                          );
                          const parsedValue =
                            parseFormattedNumber(formattedValue);

                          field.onChange(parsedValue);
                        }}
                      />
                      <span className="absolute left-2">{"Rp"}</span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <SelectTrigger
                        className="w-full primary-border"
                        disabled={isDisabled}
                      >
                        {field.value === "income" ? "Income" : "Expense"}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="income">Income</SelectItem>
                        <SelectItem value="expense">Expense</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isDisabled && (
              <Button type="submit" className="w-full mt-4">
                {formType === "create" ? "Create" : "Update"} Transaction
                <ChevronRight />
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormTransaction;
