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

const WavingHand = () => {
  const waveVariants = {
    idle: {
      rotate: 0,
      scale: 1,
    },
    waving: {
      rotate: [0, 14, -8, 14, -4, 10, 0, 0],
      scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
      transition: {
        duration: 2.5,
        repeat: 2, // Wave 3 times total
        ease: "easeInOut",
        times: [0, 0.15, 0.3, 0.4, 0.5, 0.6, 0.7, 1],
      },
    },
  };

  return (
    <motion.div
      initial="idle"
      whileHover="waving"
      whileTap="waving"
      variants={waveVariants}
      className="cursor-pointer w-fit select-none text-5xl pb-5 pr-5 md:text-7xl md:pb-10 md:pr-10 justify-self-center md:justify-self-end self-center"
    >
      👋
    </motion.div>
  );
};

export const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("Index");

  return (
    <>
      <div className="h-screen flex justify-center sm:justify-normal items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start gap-5 prose prose-slate dark:prose-invert max-w-none">
          <WavingHand />
          <Image
            className="m-0 w-60 md:w-64 mb-4 aspect-square justify-self-center md:justify-self-start rounded-full shadow-2xl"
            src="/portrait.jpeg"
            alt="portrait"
            width={400}
            height={400}
          />
          <strong className="md:text-right">{t("hello")}</strong>
          <div className="flex flex-col">
            <div className="relative flex mb-3 gap-3 flex-col-reverse md:flex-row md: md:gap-8 justify-normal md:items-center">
              <h1 className="m-0 text-5xl font-bold md:text-7xl animate-slide-in-left">
                <span className="text-teal-600 dark:text-teal-500">
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
