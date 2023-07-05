"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "../ui/modal";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(1),
});

export default function StoreModal() {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      The Create Store Form Goes Here
    </Modal>
  );
}
