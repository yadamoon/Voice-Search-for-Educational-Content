"use client"; // Add this directive at the top

import { useRouter, usePathname } from "next/navigation";
import React, { ChangeEvent } from "react";

const LangSwitcher = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/"); // Adjust path dynamically
    router.push(`/${selectedLang}/${path}`);
  };

  return (
    <div>
      <select onChange={handleChange} value={locale}>
        <option value="en">English</option>
        <option value="am">Amharic</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
