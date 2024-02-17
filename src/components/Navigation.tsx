import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Navigation() {
    return (
        <nav className="flex justify-end pt-10 pr-5 sticky">
            <LocaleSwitcher />
        </nav>
    );
}
