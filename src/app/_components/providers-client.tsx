"use client";

import { getQueryClient } from "@/app/_utils/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function ProvidersClient({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
