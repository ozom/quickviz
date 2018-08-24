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
    name: 'KPIs STRATEGIQUES',
    url: 'STRATEGIE',
    children:
    [
      {
        name: 'CA Digital',
        url: '/cadigital',
        icon: 'icon-speedometer',

      },
    ]
  },
  {
    name: 'PMO',
    url: 'PMO',
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
    url: 'orange',
    children:
    [
      {
        name: 'APP MOBILE',
        url: '',
        icon: 'icon-arrow-right',
        children:
        [
          {
              name: 'Velocite',
              url: '/velocite',
              icon: 'icon-speedometer',

            },
            {
              name: 'Epique',
              url: '/epique',
              icon: 'icon-speedometer',

            },
            {
              name: "Plan de release",
              url: '/releaseom',
              icon: 'icon-speedometer',
            },
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
    url: 'business',
    children:
    [
      {
        name: "Uses Case Marketing",
        url: '/usescasebm',
        icon: 'icon-speedometer',
      },
      {
        name: "Epic Distribution",
        url: '/epicbm',
        icon: 'icon-speedometer',
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
    url: 'care',
    children:
    [
      {
        name: 'SELFCARE B2B',
        url: '',
        icon: 'icon-arrow-right',
        children:
        [
          {
            name: "Vélocité",
            url: '/velocitecare',
            icon: 'icon-speedometer',
          },
          {
            name: "Epic",
            url: '/epicare',
            icon: 'icon-speedometer',
          },
          {
            name: "Plan de release",
            url: '/releasecare',
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
    name: 'Quick Wins Data Science',
    url: '/churn',
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
