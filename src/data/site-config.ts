import avatar from '../assets/images/avatar.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://cejasmau.github.io',
    avatar: {
        src: avatar,
        alt: 'Mauro Cejas Marcovecchio'
    },
    title: 'Mauro Cejas Marcovecchio',
    subtitle: 'en las vidrieras no lo vas a encontrar',
    description: 'Economía, ciencia de datos y otros cantares',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Mauro Cejas Marcovecchio'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },        
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Github',
            href: 'https://github.com/cejasmau'
        }
    ],
    footerNavLinks: [
        {
            text: 'Acerca de mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos y condiciones',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/mauro-cejas-marcovecchio'
        }
    ],
    hero: {
        title: 'Economía, ciencia de datos y otros cantares'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
