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

export const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("Index");

  const portraitVariants = {
    rest: {
      translateX: 0,
    },
    move: {
      translateX: -30,
      transition: { duration: 0.3 },
    },
  };

  const waveVariants = {
    rest: {
      rotate: 0,
      translateX: 0,
    },
    move: {
      rotate: [0, 14, -8, 14, -4, 10, 0, 0],
      translateX: [0, 30, 30, 30, 30, 30, 30, 30],
      transition: {
        duration: 2.5,
        repeat: 2,
        ease: "easeInOut",
        times: [0, 0.15, 0.3, 0.4, 0.5, 0.6, 0.7, 1],
      },
    },
  };

  return (
    <>
      <div className="h-screen flex justify-center sm:justify-normal items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start gap-5 prose prose-slate dark:prose-invert max-w-none">
          <div className="hidden md:block"></div>
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="move"
            whileTap="move"
            className="relative flex justify-self-center md:justify-self-start"
          >
            <motion.div className="z-10" variants={portraitVariants}>
              <Image
                className="m-0 w-52 md:w-60 mb-4 aspect-square justify-self-center md:justify-self-start rounded-full shadow-2xl"
                src="/portrait.jpeg"
                alt="portrait"
                width={400}
                height={400}
              />
            </motion.div>
            <motion.div
              variants={waveVariants}
              className="absolute md:-right-20 -right-12 w-fit select-none text-5xl md:text-7xl pb-5 pr-5 md:pb-10 md:pr-10 justify-self-center md:justify-self-end self-center"
            >
              👋
            </motion.div>
          </motion.div>
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
