import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import * as motion from "motion/react-client";
import { PortraitAndWavingHand } from "@/app/[locale]/_components/portrait-and-waving-hand";

export const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("Index");

  return (
    <>
      <div className="h-screen flex justify-center sm:justify-normal items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start gap-5 prose prose-slate dark:prose-invert max-w-none">
          <div className="hidden md:block"></div>
          <PortraitAndWavingHand />
          <strong className="md:text-right">{t("hello")}</strong>
          <div className="flex flex-col">
            <div className="relative flex mb-3 gap-3 flex-col-reverse md:flex-row md: md:gap-8 justify-normal md:items-center">
              <h1 className="m-0 text-5xl font-bold md:text-7xl animate-slide-in-left">
                <span className="text-amber-500 dark:text-amber-400">
                  {t("surname")}
                </span>
                {`${locale !== "zh" ? " " : ""}${t("name")}`}
              </h1>
            </div>
            <p className="my-0">
              👨🏻‍💻 <em>{t("web-developer")}</em>
            </p>
            <div className="flex gap-3 pt-10">
              <Link
                href={"https://www.linkedin.com/in/sebast1antran/"}
                target={"_blank"}
              >
                <LinkedInLogoIcon className="size-9" />
              </Link>
              <Link href={"https://github.com/mydoooom"} target={"_blank"}>
                <GitHubLogoIcon className="size-9" />
              </Link>
              <Link
                href={"https://www.instagram.com/mydoooom/"}
                target={"_blank"}
              >
                <InstagramLogoIcon className="size-9" />
              </Link>
            </div>
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
