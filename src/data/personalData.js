export const personalInfo = {
  name: 'Aditya Sharma',
  nickname: 'Aadi',
  role: 'ASPIRING_FULL_STACK_DEV()',
  tagline: 'I build things for the web.',
  location: 'JAMSHEDPUR, INDIA',
  status: 'BCA STUDENT @ AMITY UNIVERSITY',
  mission: 'Build. Learn. Ship.',
  email: 'adityasharma10@amityonline.com',
  github: 'https://github.com/iadi01',
  linkedin: 'https://www.linkedin.com/in/iadi0',
  resumeUrl: '#',
  about: [
    { text: 'Welcome to the official ', highlight: null },
    { text: 'Aditya Sharma Portfolio', highlight: true },
    { text: '. I am Aditya Sharma (Aadi), currently showcasing my work in this ', highlight: null },
    { text: 'Aadi Portfolio', highlight: true },
    { text: '. I am a ', highlight: null },
    { text: 'BCA Student Portfolio', highlight: true },
    { text: ' creator studying at Amity University Online, building a ', highlight: null },
    { text: 'Full Stack Developer Portfolio', highlight: true },
    { text: ' as a ', highlight: null },
    { text: 'Web Developer Portfolio India', highlight: true },
    { text: ' builder.', highlight: null }
  ],
  aboutP2: 'Known online as the iadi0 Developer, I have strong problem-solving skills, a passion for clean code, and an eagerness to learn new technologies. My journey in tech has taught me to be adaptable, curious, and always shipping.',
  aboutCTA: '🚀 Open to Internships & Collaboration',
};

export const skills = [
  {
    category: 'Languages',
    color: 'text-custom-yellow',
    bgColor: 'bg-custom-yellow',
    items: ['JavaScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    category: 'Frontend',
    color: 'text-custom-pink',
    bgColor: 'bg-custom-pink',
    items: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Backend',
    color: 'text-custom-green',
    bgColor: 'bg-custom-green',
    items: ['Node.js', 'REST APIs', 'MongoDB'],
  },
  {
    category: 'Databases',
    color: 'text-custom-blue',
    bgColor: 'bg-custom-blue',
    items: ['MongoDB'],
  },
  {
    category: 'Core CS',
    color: 'text-custom-purple',
    bgColor: 'bg-custom-purple',
    items: ['DSA (Learning Phase)', 'OS Concepts (Learning Phase)', 'DBMS (Learning Phase)'],
  },
  {
    category: 'Tools',
    color: 'text-custom-red',
    bgColor: 'bg-custom-red',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify', 'Figma', 'Gen AI Tools'],
  },
];

export const projects = [
  {
    title: 'GitAura',
    description: 'A high-fidelity developer analytics dashboard that generates beautiful GitHub profile visualizations, language breakdown charts, and repository metrics. It allows developers to analyze commit histories, language usage patterns, and contribution trends in real-time.',
    tech: ['React', 'GitHub API', 'Tailwind CSS', 'Chart.js'],
    color: 'bg-custom-purple',
    borderColor: 'border-custom-yellow',
    liveUrl: '#',
    githubUrl: 'https://github.com/iadi01',
    highlights: [
      'Integrated GitHub REST API to aggregate user contributions, language usage, and repository statistics.',
      'Designed interactive data charts (polar area, bar, doughnut) using Chart.js with custom color palettes.',
      'Optimized client-side API caching and request throttling to prevent rate-limiting and accelerate dashboard rendering by 50%.',
      'Developed a clean, user-friendly search interface that lets users query any public GitHub username instantly.'
    ],
  },
  {
    title: 'Weather App',
    description: 'A real-time weather analytics application featuring predictive forecasts, geolocation-based lookups, and micro-interaction weather animations. Users can check current weather details, wind speeds, UV index, and get a detailed 5-day forecast for any global city.',
    tech: ['JavaScript', 'Weather API', 'CSS3', 'HTML5'],
    color: 'bg-custom-blue',
    borderColor: 'border-custom-yellow',
    liveUrl: '#',
    githubUrl: 'https://github.com/iadi01',
    highlights: [
      'Integrated OpenWeatherMap API for live atmospheric data processing and 5-day predictive forecasts.',
      'Engineered browser geolocation tracking to serve localized climate data on initial page load.',
      'Implemented dynamic CSS theme transitions mapping application background colors to current climate conditions.',
      'Added responsive design and intuitive icons for varying weather conditions (rainy, sunny, snowy, cloudy).'
    ],
  },
  {
    title: 'Luxury Furniture',
    description: 'A premium, responsive e-commerce experience showcasing high-end furniture lines with scroll-driven animations. It features an interactive product catalog, virtual layout preview tools, and a seamless shopping cart experience.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    color: 'bg-custom-yellow',
    borderColor: 'border-custom-yellow',
    liveUrl: '#',
    githubUrl: 'https://github.com/iadi01',
    highlights: [
      'Architected immersive UX featuring parallax scrolling, staggered reveals, and scale animations using Framer Motion.',
      'Designed responsive multi-device product catalogs with flat neobrutalist styling overlays.',
      'Optimized image loading pipelines using responsive sizes and progressive image placeholders to increase LCP scores.',
      'Implemented dynamic product filtering by price, category, and material with state-retaining URLs.'
    ],
  },
  {
    title: 'Anjali Boutiques',
    description: 'A modern boutique platform featuring product catalogs, instant item filtering, and cart state synchronization. It showcases trending clothing collections, custom outfit requests, and integrates dynamic image grids for a smooth, high-fashion browsing experience.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    color: 'bg-custom-pink',
    borderColor: 'border-custom-yellow',
    liveUrl: '#',
    githubUrl: 'https://github.com/iadi01',
    highlights: [
      'Implemented advanced multi-criteria filtering system allowing clients to sort catalog by size, category, and price.',
      'Developed client-side cart checkout logic keeping cart items persistent across page refreshes using browser storage.',
      'Engineered custom neobrutalist grid interfaces supporting quick views and catalog zooming overlays.',
      'Optimized mobile viewports to provide a seamless swipe-to-view clothing gallery on smaller screens.'
    ],
  },
  {
    title: 'Restaurant Website',
    description: 'A visually stunning restaurant landing page featuring interactive menus, parallax reservation forms, and booking states. Customers can browse chef specials, filter menu items by dietary preferences, and book tables with instant response mockups.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    color: 'bg-custom-green',
    borderColor: 'border-custom-yellow',
    liveUrl: '#',
    githubUrl: 'https://github.com/iadi01',
    highlights: [
      'Designed high-fidelity typography layouts combining display fonts with responsive CSS grid spacing.',
      'Implemented smooth scrolling navigation overlays linking food categories directly to target menu grids.',
      'Integrated interactive forms with client-side input validation and localized confirmation banners.',
      'Added accessibility enhancements including keyboard-navigable menu sections and screen-reader friendly descriptions.'
    ],
  },
  {
    title: 'Trip Budget Calculator',
    description: 'A travel expense planning utility that allows users to categorize expenditures, calculate split costs, and track budget constraints. Perfect for groups wishing to allocate trip budgets, log live expenses, and calculate fair payment splits instantly.',
    tech: ['React', 'CSS3', 'LocalStorage'],
    color: 'bg-orange-200',
    borderColor: 'border-custom-yellow',
    liveUrl: '#',
    githubUrl: 'https://github.com/iadi01',
    highlights: [
      'Developed robust cost-splitting algorithm calculation engine with support for multi-currency conversion mockups.',
      'Integrated browser LocalStorage for client-side state persistence to preserve travel lists offline.',
      'Designed budget warning indicators notifying users when expenses cross the preset budget threshold.',
      'Built interactive category charts displaying percentage breakdowns of food, stay, transport, and leisure costs.'
    ],
  },
  {
    title: 'TeamJams',
    description: 'A collaborative real-time workspace for teams to brainstorm, map projects, and jam on ideas synchronously. Uses WebSockets for low-latency synchronization of interactive sketchboards, code snippets, and group chat.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    color: 'bg-custom-purple',
    borderColor: 'border-custom-yellow',
    liveUrl: '#',
    githubUrl: 'https://github.com/iadi01',
    highlights: [
      'Engineered real-time connection state logic using WebSockets (Socket.io) with room-based isolation.',
      'Architected modular Node.js/Express server framework handling live concurrent client updates.',
      'Integrated MongoDB database layer to store active workspace structures and chat history logs.',
      'Designed responsive canvas whiteboard supporting real-time drawing, sticky notes, and text markers.'
    ],
  },
];


export const experience = [
  {
    role: 'Self-Taught Developer',
    company: 'Independent',
    duration: '2024 — Present',
    location: 'Remote',
    description: 'Building full-stack web projects, contributing to open source, and continuously learning modern web technologies through hands-on practice.',
    color: 'bg-custom-green',
  },
];

export const education = [
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Amity University Online',
    duration: '2024 — 2027',
    description: 'Focusing on Computer Science fundamentals, Data Structures & Algorithms, Database Management, and Web Development.',
    color: 'bg-custom-yellow',
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'High School',
    duration: '2022 — 2024',
    description: 'Completed higher secondary education with focus on Science and Mathematics.',
    color: 'bg-custom-pink',
  },
];

export const blogs = [
  {
    title: 'My Journey into Web Development',
    excerpt: 'How I went from zero coding knowledge to building full-stack applications in under a year.',
    date: 'March 2025',
    readTime: '5 min read',
    tags: ['Personal', 'Web Dev'],
    color: 'bg-blue-100',
    url: '#',
  },
  {
    title: 'Why Every Student Should Learn Git',
    excerpt: "Version control isn't just for pros. Here's why Git should be in every student's toolkit.",
    date: 'February 2025',
    readTime: '4 min read',
    tags: ['Git', 'Tips'],
    color: 'bg-green-100',
    url: '#',
  },
  {
    title: 'Building My First React Project',
    excerpt: 'Lessons learned from shipping my first React application — the good, the bad, and the bugs.',
    date: 'January 2025',
    readTime: '6 min read',
    tags: ['React', 'Tutorial'],
    color: 'bg-yellow-100',
    url: '#',
  },
];

export const hackathons = [
  {
    name: 'Code Quest 2025',
    result: 'Participant',
    description: 'Built a real-time collaboration tool during a 24-hour coding marathon.',
    tech: ['React', 'Socket.io', 'Node.js'],
  },
];

export const codingProfiles = [
  { platform: 'GitHub', handle: '@iadi01', url: 'https://github.com/iadi01', stats: '6+ Repos' },
];

export const interests = [
  'Video Editing', 'Travel & Exploration', 'Open Source', 'UI/UX Design',
  'Building Side Projects', 'Learning New Frameworks',
];

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#blogs' },
  { label: 'Education', href: '#education' },
];

export const terminalCommands = {
  help: [
    'Available commands:',
    '  help      — Show this help message',
    '  whoami    — About Aadi',
    '  skills    — My tech stack',
    '  projects  — Featured projects',
    '  contact   — Get in touch',
    '  clear     — Clear terminal',
    '  sudo hire — ???',
  ],
  whoami: [
    'Aditya Sharma (Aadi)',
    'BCA Student | Full-Stack Developer in the making',
    'Location: Jamshedpur, India',
    'Currently building cool stuff on the web 🚀',
  ],
  skills: [
    'Languages:  JavaScript, HTML5, CSS3, Python',
    'Frontend:   Next.js, Tailwind CSS',
    'Backend:    Node.js, REST APIs',
    'Databases:  MongoDB',
    'Core CS:    DSA (Learning Phase), OS Concepts (Learning Phase), DBMS (Learning Phase)',
    'Tools:      Git, GitHub, VS Code, Vercel, Figma',
  ],
  projects: [
    'Featured Projects:',
    '  → GitAura — GitHub profile visualizer',
    '  → Weather App — Real-time forecasts',
    '  → Luxury Furniture — E-commerce landing',
    '  → TeamJams — Real-time collaboration',
  ],
  contact: [
    "Let's connect!",
    '  📧 adityasharma10@amityonline.com',
    '  🔗 linkedin.com/in/iadi0',
    '  🐙 github.com/iadi01',
  ],
  'sudo hire': [
    '🔓 Access granted!',
    '',
    '  Aadi would love to work with you.',
    '  Sending resume... ✅',
    '  Opening LinkedIn... ✅',
    '',
    '  Just kidding! But seriously, let\'s connect 😄',
  ],
};
