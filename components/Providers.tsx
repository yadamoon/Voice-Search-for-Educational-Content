"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { store } from "@/store/store";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <Provider store={store}>{children}</Provider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
