import { cn } from "@/ui/lib/utils";
import { ComponentProps } from "react";
import DarkModeSwitcher from "./dark-mode-switcher";
import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export function Header({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "container fixed max-w-full! flex justify-end py-5 gap-3 z-20",
        className,
      )}
      {...props}
    >
      <div className="flex gap-3 mr-4">
        <Link
          className="flex items-center hover:-translate-y-1 hover:-rotate-2 transform transition-all duration-200"
          href={"https://www.linkedin.com/in/sebast1antran/"}
          target={"_blank"}
        >
          <LinkedInLogoIcon className="size-6" />
        </Link>
        <Link
          className="flex items-center hover:-translate-y-1 hover:-rotate-2 transform transition-all duration-200"
          href={"https://github.com/mydoooom"}
          target={"_blank"}
        >
          <GitHubLogoIcon className="size-6" />
        </Link>
        <Link
          className="flex items-center hover:-translate-y-1 hover:-rotate-2 transform transition-all duration-200"
          href={"https://www.instagram.com/mydoooom/"}
          target={"_blank"}
        >
          <InstagramLogoIcon className="size-6" />
        </Link>
      </div>
      <LocaleSwitcher />
      <DarkModeSwitcher />
    </header>
  );
}
