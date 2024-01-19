import { ListItem } from '@/app/containers/nav/desktop/desktopNav.types.ts';

export const menuListItems: ListItem[] = [
  {
    label: 'home',
    href: '/',
    isDisabled: false,
    isDownloadable: false
  },
  {
    label: 'experience',
    href: '/experience',
    isDisabled: false,
    isDownloadable: false
  },
  {
    label: 'contact',
    href: '/contact',
    isDisabled: false,
    isDownloadable: false
  },
  {
    label: 'cv',
    href: 'wojciech_palacz.pdf',
    isDisabled: false,
    isDownloadable: true
  }
]
