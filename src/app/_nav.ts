export const navItems = [
  // {
  //   name: 'E-SHOP ',
  //   url: '/dashboard',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   name: 'Orange Money',
  //   url: '/mobile',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   name: 'Orange & Moi',
  //   url: '/omoi',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'warning',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   name: 'Digital Inside',
  //   url: '/digital-inside',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'warning',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   name: 'CA follow',
  //   url: '/CA',
  //   icon: 'icon-speedometer',
  //
  // },
  {
    name: 'PMO',
    url: '',
    children:
    [
      {
        name: 'Moodboard',
        url: '/moodboard',
        icon: 'icon-speedometer',

      },
      {
        name: 'KudoWall',
        url: '/kudowall',
        icon: 'icon-speedometer',

      },
      {
        name: 'Obstacle Board',
        url: '/pmoboard',
        icon: 'icon-speedometer',

      },
      {
        name: 'Staffing',
        url: '/staffing',
        icon: 'icon-speedometer',

      }  
    ]
  },
  {
    name: 'Orange Money',
    url: '',
    children:
    [
      {
        name: 'APP MOBILE',
        url: '',
        icon: 'icon-arrow-right',
        children:
        [
          {
              name: 'Velocité',
              url: '/velocite',
              icon: 'icon-speedometer',

            },
            {
              name: 'Epique',
              url: '/epique',
              icon: 'icon-speedometer',

            }
        ]
      },
      {
        name: 'Coûts & Budget',
        url: '/coutom',
        icon: 'icon-speedometer',
      }  
    ]
  },
  {
    name: 'Business Monitoring',
    url: '',
    children:
    [
      {
        name: 'MARKETING',
        url: '',
        icon: 'icon-arrow-right',
        children:
        [
          {
            name: "Uses Case",
            url: '/usescasebm',
            icon: 'icon-speedometer',
          },
        ]
      },
      {
        name: 'DISTRIBUTION',
        url: '',
        icon: 'icon-arrow-right',
        children:
        [
          {
            name: "Epic",
            url: '/epicbm',
            icon: 'icon-speedometer',
          },
        ]
      },
      {
        name: "Coûts & Budget",
        url: '/coutbudgetbm',
        icon: 'icon-speedometer',
      },
    ]
  },
  {
    name: 'Care',
    url: '',
    children:
    [
      {
        name: 'SELFCARE B2B',
        url: '',
        icon: 'icon-arrow-right',
        children:
        [
          {
            name: "Epic",
            url: '/epicare',
            icon: 'icon-speedometer',
          },
        ]
      },
      {
        name: "Coûts & Budget",
        url: '/coutbudgetcare',
        icon: 'icon-speedometer',
      },
    ]
  },
  {
    name: 'Data Science',
    url: '',
    children:
    [
      {
        name: "Churn Recharge",
        url: '/churn',
        icon: 'icon-speedometer',

      }
    ]
  },
];
