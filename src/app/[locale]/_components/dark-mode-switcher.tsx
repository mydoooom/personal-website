"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/ui/button";
import { Select, SelectContent, SelectItem } from "@/ui/select";
import {
  CaretDownIcon,
  DesktopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { SelectTrigger, Icon } from "@radix-ui/react-select";
import { useTheme } from "next-themes";

export default function DarkModeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("ThemeSwitcher");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="flex justify-between gap-1" title={t("change-theme")}>
        <Button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="rounded-full"
          size="icon"
          // variant="outline"
          asChild
        >
          <button>
            {isMounted &&
              (resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />)}
          </button>
        </Button>
        <Select
          value={isMounted ? theme : undefined}
          onValueChange={(value) => setTheme(value)}
        >
          <SelectTrigger asChild>
            <button
              type="button"
              className="h-full flex items-center cursor-pointer"
            >
              <Icon asChild>
                <CaretDownIcon className="h-4 w-4 opacity-50" />
              </Icon>
            </button>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="system">
              <span className="flex items-center gap-2">
                <DesktopIcon />
                {t("system")}
              </span>
            </SelectItem>
            <SelectItem value="light">
              <span className="flex items-center gap-2">
                <SunIcon />
                {t("light")}
              </span>
              <SelectItem value="dark">
                <span className="flex items-center gap-2">
                  <MoonIcon />
                  {t("dark")}
                </span>
              </SelectItem>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
