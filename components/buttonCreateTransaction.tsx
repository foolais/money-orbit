"use client";

import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import FormTransaction from "./formTransaction";
import { useState } from "react";

const ButtonCreateTransaction = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <Button size="lg" onClick={() => setIsDialogOpen(true)}>
        <PlusIcon />
        Add New Transaction
      </Button>
      <FormTransaction
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add New Transaction"
        formType="create"
      />
    </div>
  );
};

export default ButtonCreateTransaction;
