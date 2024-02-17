import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Navigation() {
    return (
        <nav className="container fixed !max-w-[100%] flex justify-end pt-7">
            <LocaleSwitcher />
        </nav>
    );
}
