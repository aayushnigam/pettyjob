import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  // links: [
  //   {
  //     text: 'Home',
  //     href: getPermalink('/'),
  //   },
  //   {
  //     text: 'Services',
  //     href: getPermalink('/services'),
  //   },
  //   {
  //     text: 'Pricing',
  //     href: getPermalink('/pricing'),
  //   },
  //   {
  //     text: 'About us',
  //     href: getPermalink('/about'),
  //   },
  //   {
  //     text: 'Contact',
  //     href: getPermalink('/contact'),
  //   },
  // ]
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://pettyjob.com/"> pettyjob.com</a> · All rights reserved.
  `,
};
