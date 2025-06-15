import { ComponentProps } from "react";
import styles from "./speech-buble.module.css";

interface SpeechBubbleProps extends ComponentProps<"div"> {
  text: string;
}

export function SpeechBubble({ text, className, ...props }: SpeechBubbleProps) {
  return (
    <div className={className} {...props}>
      <div className={`${styles.speechBubble}`}>{text}</div>
    </div>
  );
}
