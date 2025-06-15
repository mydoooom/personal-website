import { useLocale, useTranslations } from "next-intl";

export function Footer() {
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
      <footer className="container py-8 flex flex-col items-center justify-center *:text-center">
        <p>{`© ${currentYearFormatted} ${t("surname")} ${t("name")}`}</p>
        <p>{t("all-rights-reserved")}</p>
      </footer>
    </>
  );
}
