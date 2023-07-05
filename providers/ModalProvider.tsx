"use client";

import StoreModal from "@/components/modals/StoreModal";
import { useState, useEffect } from "react";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; /* in case I am in a server side rendering it will return null */
  }
  return (
    <>
      <StoreModal />
    </>
  );
}

/* 

layout.tsx is a server component, can't directly add client component to this we don't want any hydration errors especially with modals

*/
