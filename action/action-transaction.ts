"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface iTransaction {
  title: string;
  amount: number;
  type: "INCOME" | "EXPENSE";
}

export const getTransactions = async () => {
  try {
    const transactions = await prisma.transaction.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return transactions;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailTransaction = async (id: string) => {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id: id,
      },
    });
    return transaction;
  } catch (error) {
    console.log(error);
  }
};

export const createTransaction = async (data: iTransaction) => {
  try {
    const { title, amount, type } = data;
    await prisma.transaction.create({
      data: {
        title: title,
        amount: amount,
        type: type as "INCOME" | "EXPENSE",
      },
    });

    revalidatePath("/");
    return { success: true, message: "Transaction created successfully" };
  } catch (error) {
    console.log(error);
    return { error: true, message: error };
  }
};

export const updateTransaction = async (id: string, data: iTransaction) => {
  try {
    const { title, amount, type } = data;
    await prisma.transaction.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        amount: amount,
        type: type as "INCOME" | "EXPENSE",
      },
    });
    revalidatePath("/transactions");
    return { success: true, message: "Transaction updated successfully" };
  } catch (error) {
    console.log(error);
    return { error: true, message: error };
  }
};

export const deleteTransaction = async (id: string) => {
  try {
    await prisma.transaction.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
    return { success: true, message: "Transaction deleted successfully" };
  } catch (error) {
    console.log(error);
    return { error: true, message: error };
  }
};

export const getTransactionSummary = async () => {
  const income = await prisma.transaction.aggregate({
    _sum: { amount: true },
    where: { type: "INCOME" },
  });

  const expense = await prisma.transaction.aggregate({
    _sum: { amount: true },
    where: { type: "EXPENSE" },
  });

  const totalIncome = income._sum.amount ?? 0;
  const totalExpense = expense._sum.amount ?? 0;

  const totalCash = totalIncome - totalExpense;

  return {
    totalCash,
    totalIncome,
    totalExpense,
  };
};
