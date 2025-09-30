"use client";

import { Edit, Info, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import FormTransaction from "./formTransaction";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

const TableTransactionAction = () => {
  const [type, setType] = useState<"detail" | "update">("detail");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setType("detail");
            setIsDialogOpen(true);
          }}
        >
          <Info color="teal" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setType("update");
            setIsDialogOpen(true);
          }}
        >
          <Edit color="blue" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setIsAlertOpen(true)}>
          <Trash color="red" />
        </Button>
      </div>
      {isDialogOpen &&
        (type === "detail" ? (
          <FormTransaction
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Detail Transaction"
            formType="detail"
          />
        ) : (
          <FormTransaction
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Update Transaction"
            formType="update"
          />
        ))}
      {isAlertOpen && (
        <AlertDialog
          open={isAlertOpen}
          onOpenChange={() => setIsAlertOpen(false)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                transaction and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Yes</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default TableTransactionAction;
