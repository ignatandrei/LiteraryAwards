import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'All Authors',
    icon: 'nb-coffee-maker',
    link: '/pages/authors',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },

 
  {
    title: 'Awards',
    icon: 'nb-list',
    children: [
      {
        title: 'Nobel',
        
        link: '/pages/awards/nobel',
      },
      {
        title: 'Booker',
        
        link: '/pages/awards/booker',
      },     
    ],
  },
  {
    title: 'Best of...',
    icon: 'nb-list',
    children: [    
      {
        title: 'Bill Gates',
        
        link: '/pages/awards/bg',
      },
    ],
  }
  ,
  
];
