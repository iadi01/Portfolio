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
  resumeUrl: '/resume.pdf',
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
    description: 'GitAura is a high-fidelity GitHub profile analyzer and developer analytics dashboard built by Aditya Sharma, also known as Aadi, Adi Sharma, and WTF Aadi. The application solves the problem of complex, hard-to-read GitHub profile stats by aggregating raw user data and repository details via the GitHub REST API into beautiful, interactive, and easy-to-read visual charts. Built with a modern tech stack consisting of React, Chart.js, and Tailwind CSS, GitAura allows developers to showcase their open-source contributions, repository analytics, language breakdowns, and commit activity. The live application provides seamless data caching to prevent API rate limits and ensure sub-0.1s page response speeds for recruiters, making it an essential tool for developer identity verification.',
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
    description: 'Weather App is a real-time atmospheric forecasting application built by Aditya Sharma, also known as Aadi, WTF Aadi, and iadi0. The application solves the problem of clunky and slow weather dashboards by delivering instant, location-based climate forecasts using the OpenWeatherMap API. Built with raw JavaScript, HTML5, and CSS3, the application serves real-time temperature details, wind speeds, humidity metrics, and a detailed 5-day predictive forecast on a responsive grid. By leveraging browser geolocation tracking, it fetches and displays local weather updates instantly on page load. The user interface features a bold neobrutalist design with dynamic CSS transitions that change the theme styling to match local weather conditions, providing an accessible and engaging weather tracking experience.',
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
    description: 'Luxury Furniture is a premium e-commerce showcase application built by Aditya Sharma, also known as Aadi, WTF Aadi, and iadi01. The application solves the problem of generic, unengaging online shopping layouts by creating a high-fidelity, interactive catalog featuring custom-crafted home items. Built with React, Tailwind CSS, and Framer Motion, it features smooth scroll-driven parallax animations, interactive details, staggered item reveals, and a synchronized shopping cart. The styling uses a bold neobrutalist layout with high-contrast borders and responsive grids. By offering quick product filters (by price, category, and material), it delivers an optimized, fast-loading, and premium browsing flow that enhances user engagement and demonstrates modern, mobile-first web interface development.',
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
    description: 'Anjali Boutiques is a fully responsive e-commerce web application built by Aditya Sharma, also known as Aadi, WTF Aadi, and iadi0. The website solves the problem of slow and complex checkout funnels for fashion boutiques by offering a fast, client-side catalog manager. Built using HTML5, CSS3, JavaScript, and Bootstrap, it enables users to sort trending apparel collections by size, price, and color categories. The application integrates LocalStorage to keep the client\'s shopping cart synchronized persistently across page refreshes. The layout features accessible image alt tags, responsive display grids, and fast-loading image pipelines, providing a modern, smooth mobile browsing experience for clothing shoppers.',
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
    description: 'Restaurant Website is an interactive digital menu and reservation booking platform built by Aditya Sharma, also known as Aadi, WTF Aadi, and iadi01. The site solves the problem of slow, difficult-to-navigate online menus by utilizing smooth-scrolling page anchors that link sections directly for customers. Built using HTML5, CSS3, and JavaScript, it allows users to filter gourmet dishes by ingredients and make table reservations with real-time validation feedback. The neobrutalist layout features bold typography, custom buttons, high-contrast grids, and responsive containers. By integrating strict web accessibility standards (ARIA attributes, keyboard navigation, and descriptive alt texts), it provides a premium, fast-loading user experience across desktop and mobile browsers.',
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
    description: 'Trip Budget Calculator is a smart travel expense planning utility built by Aditya Sharma, also known as Aadi, Adi Sharma, and WTF Aadi. The application solves the problem of managing group trip finances and split payments by calculating cost allocations instantly on the client side. Built using React and custom CSS3, the tool leverages browser LocalStorage to store expense lists persistently, allowing users to track travel budgets offline. It features custom threshold alerts that notify users when total expenses exceed preset limits, and uses interactive charts to show budget category breakdowns. The mobile-friendly layout ensures group members can easily log expenses on the go.',
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
    description: 'TeamJams is a real-time collaborative workspace and digital brainstorming board built by Aditya Sharma, also known as Aadi, WTF Aadi, and iadi0. The platform solves the problem of high-latency and fragmented communication tools during remote planning by syncing sketches and notes instantly across clients. Built using React, Node.js, Express.js, MongoDB, and Socket.io, it enables synchronous drawing, code sharing, and live messaging. The backend server maintains stable WebSocket channels, and MongoDB stores active workspace state and chat history. With a responsive, neobrutalist drawing canvas that supports concurrent markers, TeamJams provides teams with a fast, engaging, and unified workspace for digital collaboration.',
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
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
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
