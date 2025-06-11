import DarkModeSwitcher from './dark-mode-switcher';
import LocaleSwitcher from './locale-switcher';

export function Navigation() {
    return (
        <nav className="container fixed max-w-full! flex justify-end pt-7 gap-3">
            <LocaleSwitcher />
            <DarkModeSwitcher />
        </nav>
    );
}
