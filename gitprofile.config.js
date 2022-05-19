// gitprofile.config.js

const config = {
  github: {
    username: 'fernandoapeguero', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks:  true, // Forked projects will not be displayed if set to true.
      projects: ['css-exercises', 'odin-recipes', 'git-test', 'challenge-repo', 'challenge-repo2', 'catclicker', 'Number-Wizard-Repo',  ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'fernandoapeguero',
    twitter: '',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'fernandoapeguero',
    website: 'https://fernandoapeguero.github.io',
    phone: '',
    email: 'fernandoapeguero@gmail.com',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'GraphQL',
    'PostgresSQL',
    'Git',
    'Docker',
    'Kubernetes',
    'CSS',
    'HTML',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Udacity',
      position: 'Udacity Mentors & Reviewers Opportunities',
      from: 'May 2019',
      to: 'Present',
    }
  ],
  education: [
    {
      institution: 'Udacity',
      degree: 'Full Stack Web Developer',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'Udacity',
      degree: 'Front End Web Developer',
      from: '2017',
      to: '2018',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'fernandoapeguero',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
