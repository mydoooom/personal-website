import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { PortraitAndWavingHand } from "@/app/[locale]/_components/portrait-and-waving-hand";
import { Card, CardContent } from "@/ui/card";
import * as motion from "motion/react-client";

export const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("Index");

  return (
    <>
      <div className="min-h-screen pt-24 flex justify-center sm:justify-normal items-center ">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start gap-5 prose prose-slate dark:prose-invert max-w-none">
          <div className="hidden md:block"></div>
          <PortraitAndWavingHand />
          <strong className="md:text-right">{t("hello")}</strong>
          <div className="flex flex-col">
            <div className="relative flex mb-3 gap-3 flex-col-reverse md:flex-row md: md:gap-8 justify-normal md:items-center">
              <h1 className="m-0 text-5xl font-extrabold md:text-7xl animate-slide-in-left">
                <span className="text-amber-500 dark:text-amber-400">
                  {t("surname")}
                </span>
                {`${locale !== "zh" ? " " : ""}${t("name")}`}
              </h1>
            </div>
            <p className="my-0">
              👨🏻‍💻 <em>{t("web-developer")}</em>
            </p>
            <motion.div
              initial={{ opacity: 0, translateY: -27 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card className="mt-4 bg-secondary max-w-xl">
                <CardContent>
                  <p>{t("perex")}</p>
                </CardContent>
              </Card>
            </motion.div>

            <Link className="pt-4" href={"mailto:tran@vietanh.cz"}>
              <EnvelopeClosedIcon className="inline mr-1" />
              tran@vietanh.cz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
