import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";

import { Button } from "../ui/button";

const AddProductButton = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="rounded-lg">
            <Plus />
            item
          </Button>
        }
      />
      <DialogContent className="max-w-8/10 rounded-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-start gap-2 text-xl">
            <Plus size={20} className="text-primary" />
            Adicionar Item
          </DialogTitle>
          <DialogDescription>
            Preencha todos os campos abaixo corretamente para adicionar o item
            na lista...
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductButton;
