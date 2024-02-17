import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales, pathnames } from './localesConfig';

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
    locales,
    pathnames,
});
