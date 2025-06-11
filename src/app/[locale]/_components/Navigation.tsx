import DarkModeSwitcher from './DarkModeSwitcher';
import LocaleSwitcher from './LocaleSwitcher';

export default function Navigation() {
    return (
        <nav className="container fixed max-w-full! flex justify-end pt-7 gap-3">
            <LocaleSwitcher />
            <DarkModeSwitcher />
        </nav>
    );
}
