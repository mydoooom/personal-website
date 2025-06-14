import DarkModeSwitcher from "./dark-mode-switcher";
import LocaleSwitcher from "./locale-switcher";

export function Navigation() {
  return (
    <nav className="container fixed max-w-full! flex justify-end py-5 gap-3 bg-transparent/50 backdrop-blur-md z-20">
      <LocaleSwitcher />
      <DarkModeSwitcher />
    </nav>
  );
}
