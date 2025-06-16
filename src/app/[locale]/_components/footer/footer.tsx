import { cn } from "@/ui/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { ComponentProps } from "react";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  const t = useTranslations("Index");
  const locale = useLocale();

  const currentYear = new Date().getFullYear();
  const currentYearFormatted =
    locale === "zh"
      ? new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec", {
          useGrouping: false,
        }).format(currentYear)
      : currentYear;

  return (
    <>
      <footer
        className={cn(
          "container my-8 flex flex-col justify-center *:text-center",
          className,
        )}
        {...props}
      >
        <p>{`© ${currentYearFormatted} ${t("surname")} ${t("name")}`}</p>
        <p>{t("all-rights-reserved")}</p>
      </footer>
    </>
  );
}
