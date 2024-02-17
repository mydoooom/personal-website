import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'cs'] as const;

export const pathnames = {
    '/': '/',
    '/pathnames': {
        en: '/pathnames',
        cs: '/pathnames',
    },
} satisfies Pathnames<typeof locales>;
