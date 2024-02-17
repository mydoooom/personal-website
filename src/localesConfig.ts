import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'cs', 'vi', 'zh'] as const;

export const pathnames = {
    '/': '/',
    '/pathnames': {
        en: '/pathnames',
        cs: '/pathnames',
        vi: '/pathnames',
        zh: '/pathnames',
    },
} satisfies Pathnames<typeof locales>;
