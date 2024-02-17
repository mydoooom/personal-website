import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Navigation() {
    return (
        <nav className="container flex justify-end pt-7">
            <LocaleSwitcher />
        </nav>
    );
}
