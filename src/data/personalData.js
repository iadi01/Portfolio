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
    liveUrl: 'https://a-git-aura.vercel.app/',
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
    liveUrl: 'https://weather-app-aadi.vercel.app/',
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
    liveUrl: 'https://the-new-furniture.vercel.app/',
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
    liveUrl: 'https://anjali-boutiques.vercel.app/',
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
    liveUrl: 'https://the-restaurant-project.vercel.app/',
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
    liveUrl: 'https://asambhav-trip.vercel.app/',
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
    liveUrl: 'https://teamjams.vercel.app/',
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
    slug: 'journey-into-web-dev',
    content: [
      "Starting my journey as a BCA student at Amity University, I, Aditya Sharma (also known as Aadi or WTF Aadi), wanted to go beyond textbooks. I wanted to build real things. Coming from Jamshedpur, India, the regional tech scene inspired me to showcase my identity as an aspiring Full Stack Developer and Software Engineer.",
      "My web development path began in late 2024 with raw HTML5 and CSS3, building layout structures and responsive styling grids. Soon, I unlocked JavaScript, learning about asynchronous APIs, callbacks, and client-side storage. This foundation paved the way for modern frameworks like React and Next.js, and backend databases like MongoDB.",
      "Today, my portfolio showcases several full-stack applications, from GitAura (developer profile analytics) to Weather App (real-time Atmospheric forecasts), TeamJams (WebSocket collaborative whiteboard), Trip Budget Calculator, and boutique/restaurant showcase sites. My goal is to continually learn, share knowledge, and build digital products that solve real-world problems."
    ]
  },
  {
    title: 'Why Every Student Should Learn Git',
    excerpt: "Version control isn't just for pros. Here's why Git should be in every student's toolkit.",
    date: 'February 2025',
    readTime: '4 min read',
    tags: ['Git', 'Tips'],
    color: 'bg-green-100',
    slug: 'why-every-student-should-learn-git',
    content: [
      "For any developer or student pursuing software engineering, Git is the single most important tool to master. Known online as the iadi0 and iadi01 developer, I publish all my open-source work on GitHub to share code, request feedback, and track revision history. If you look at my repositories under iadi01 GitHub, you will see how version control structures my learning journey.",
      "Git is not just about staging and committing files. It enables team collaboration, branching workflows, and integration with deployment platforms like Vercel. In my project GitAura (a GitHub profile analytics tool built by Aditya Sharma), I created interactive charts to let users analyze their repository contributions and commits, highlighting the value of Git activity.",
      "By publishing your projects on GitHub, you build a public resume that recruiters can verify. Whether you are building a Weather App or a complex civic platform, GitHub serves as the official proof of your capabilities as a web developer and software developer in India."
    ]
  },
  {
    title: 'Building My First React Project',
    excerpt: 'Lessons learned from shipping my first React application — the good, the bad, and the bugs.',
    date: 'January 2025',
    readTime: '6 min read',
    tags: ['React', 'Tutorial'],
    color: 'bg-yellow-100',
    slug: 'building-my-first-react-project',
    content: [
      "Stepping from vanilla JavaScript to React was a huge milestone in my developer journey. React introduces component-driven development, allowing developers to create isolated, reusable modules. In this Aditya Sharma Portfolio, every visual component—from the custom cursor to the interactive CLI terminal—is built with modular React code.",
      "My first major React project was the Weather App, where I learned how to manage state, fetch weather datasets from OpenWeatherMap API, and trigger dynamic CSS theme transitions based on climate conditions. Later, I built Luxury Furniture using Tailwind CSS and Framer Motion for scroll-driven neobrutalist animations, and TeamJams utilizing WebSockets for real-time collaboration.",
      "Building in React taught me the importance of performance, layout shifts (CLS), and SEO structure. By combining React with next-generation tools, I strive to create web apps that look stunning, load in sub-0.1s, and provide an outstanding user experience."
    ]
  },
  {
    title: 'Mastering Tailwind CSS for Neobrutalist Web Design',
    excerpt: 'How to build high-contrast, bold web layouts using Tailwind CSS with neobrutalist borders and shadows.',
    date: 'December 2024',
    readTime: '5 min read',
    tags: ['Tailwind', 'CSS', 'UI/UX'],
    color: 'bg-purple-100',
    slug: 'mastering-tailwind-css-neobrutalist-design',
    content: [
      "Tailwind CSS has transformed the way modern frontend developers build interfaces. As Aditya Sharma Developer, I have adopted a bold neobrutalist styling across the WTF Aadi Personal Brand. Neobrutalist web design utilizes high-contrast outlines, thick borders, raw primary colors, and offset black drop shadows, diverging from soft minimal design trends.",
      "To build this unique aesthetic on the Aditya Sharma Portfolio Website, Tailwind CSS utility classes are leveraged. Combining heavy border utilities with absolute layouts allows for rapid prototyping of retro OS interfaces. Responsive grids dynamically align cards, while customized HSL background fills establish a premium user experience.",
      "With custom tokens defined inside the Tailwind environment, developers can build components that feel alive and responsive. In this Aadi Developer Portfolio, Tailwind transitions, scale effects, and hover offsets make the neobrutalist cards interactive and engaging, keeping recruiters and visitors interested."
    ]
  },
  {
    title: 'Full Stack Development Roadmap for BCA Students in India',
    excerpt: 'A structured guide for computer application students in India looking to build a career in full-stack development.',
    date: 'November 2024',
    readTime: '7 min read',
    tags: ['Roadmap', 'BCA', 'Full Stack'],
    color: 'bg-pink-100',
    slug: 'full-stack-development-roadmap-bca-students-india',
    content: [
      "Pursuing a BCA (Bachelor of Computer Applications) at Amity University Online, I, Aditya Sharma (also known as Aadi / iadi0), understand the gaps in traditional curriculums. To transition from a student developer to a world-class engineer in Jamshedpur, India, a clear, project-focused full-stack developer roadmap is required.",
      "The journey starts with mastering HTML, CSS, and vanilla ES6+ JavaScript. Once the fundamentals are solid, students should explore frontend libraries like React.js and frameworks like Next.js. The backend layer consists of Node.js and Express.js, combined with database systems like MongoDB to store collection states persistently.",
      "Building a developer portfolio website India helps showcase these projects. By publishing tools like GitAura, Weather App, and TeamJams, BCA student portfolio builders can prove their coding capabilities. This hands-on developer projects showcase acts as a real-world resume that outranks traditional academic marks."
    ]
  },
  {
    title: 'The Importance of REST APIs in Modern Software Architecture',
    excerpt: 'Why RESTful APIs are essential for decoupling frontend and backend services in modern applications.',
    date: 'October 2024',
    readTime: '6 min read',
    tags: ['APIs', 'Backend', 'Architecture'],
    color: 'bg-red-100',
    slug: 'importance-of-rest-apis-software-architecture',
    content: [
      "REST (Representational State Transfer) APIs are the backbone of modern web applications. As a Jamshedpur developer specializing in full stack applications, I use RESTful endpoints to connect React frontends with Node.js servers. Decoupling the presentation layer from backend logic ensures modularity and scalability.",
      "In the GitAura Developer workspace, GitAura integrates GitHub's REST API to retrieve open-source contributions and repository languages in real time. Similarly, the Weather App Project queries the OpenWeatherMap API to fetch geolocation atmospheric forecasts. Proper API design involves using correct HTTP methods (GET, POST, PUT, DELETE) and returning semantic status codes.",
      "Mastering REST APIs is a core skill for any backend developer in India. Decoupled services allow frontends to load instantly while databases process heavy calculations asynchronously. This ensures a fast First Contentful Paint (FCP) and optimal website performance."
    ]
  },
  {
    title: 'Understanding MongoDB: A Guide for NoSQL Databases',
    excerpt: 'An introductory guide to document-oriented databases and schema design in MongoDB.',
    date: 'September 2024',
    readTime: '5 min read',
    tags: ['MongoDB', 'Database', 'NoSQL'],
    color: 'bg-green-100',
    slug: 'understanding-mongodb-guide-nosql-databases',
    content: [
      "MongoDB is a leading document-oriented NoSQL database that offers flexibility, speed, and scaling capabilities. For developers building full-stack JavaScript applications (the MERN stack), MongoDB is the standard choice. Documents are stored in JSON-like BSON formats, allowing schemas to evolve as project requirements change.",
      "In my software projects portfolio, MongoDB is used to support real-time user state persistence. For example, the TeamJams Project stores shared drawings and live chat histories inside MongoDB collections. In addition, using Mongoose as an ODM (Object Data Modeling) tool enables schema validations and model hooks.",
      "Understanding index optimization, database aggregation pipelines, and secure connection strings is key. For a MongoDB developer portfolio, demonstrating document relationship designs (embedding vs referencing) proves the ability to architect fast, reliable, and secure production databases."
    ]
  },
  {
    title: 'Next.js vs React: Which Framework Should You Choose?',
    excerpt: 'Comparing core React library with the Next.js framework for client-side and server-side rendering.',
    date: 'August 2024',
    readTime: '6 min read',
    tags: ['React', 'Next.js', 'Frontend'],
    color: 'bg-blue-100',
    slug: 'nextjs-vs-react-which-framework-should-you-choose',
    content: [
      "Choosing between React and Next.js depends on the scale and requirements of your application. React is a lightweight JavaScript library focused on component rendering and client-side routing. Next.js is a full-featured framework built on React that handles server-side rendering (SSR), static site generation (SSG), and routing out of the box.",
      "For simple single-page applications (SPAs) like this Aditya Sharma Portfolio, client-side React is highly effective and offers sub-0.1s page speeds. However, for large-scale platforms that require strong SEO and dynamic metadata, a Next.js developer portfolio structure is superior because pages are pre-rendered on the server for indexing.",
      "Next.js also provides API routing, image optimization components, and code splitting natively. As Aadi React Developer, I evaluate both paths. React is perfect for highly interactive interfaces with local states, while Next.js is ideal for content-heavy pages that demand indexation."
    ]
  },
  {
    title: 'UI/UX Design Principles for Developer Portfolios',
    excerpt: 'How to design portfolios that stand out to recruiters while providing an exceptional user experience.',
    date: 'July 2024',
    readTime: '5 min read',
    tags: ['UI/UX', 'Portfolio', 'Design'],
    color: 'bg-yellow-100',
    slug: 'uiux-design-principles-developer-portfolios',
    content: [
      "A developer portfolio website should look premium, work smoothly, and highlight technical achievements instantly. In the WTF Aadi Developer Portfolio, I avoid boring templates and use a bold neobrutalist aesthetic with flat borders and bright colors. Good UI/UX design is about balance, spacing, and micro-animations.",
      "When recruiters view a portfolio, they seek key links (GitHub, LinkedIn, Resume) and project lists. Using semantic typography and clean hierarchies (H1 to H3 tags) improves scannability. Additionally, custom cursors and interactive terminal widgets provide an engaging experience that showcases creative developer capabilities.",
      "Accessibility is another core pillar. Contrast ratios, keyboard navigation, and alt texts for all images ensure the portfolio works for everyone. Incorporating these details elevates a simple portfolio to a professional website that highlights software engineering skills."
    ]
  },
  {
    title: 'How to Optimize Web Application Performance (SI & LCP)',
    excerpt: 'Best practices to improve your Core Web Vitals, speed index, and Largest Contentful Paint.',
    date: 'June 2024',
    readTime: '7 min read',
    tags: ['Performance', 'SEO', 'Web Vitals'],
    color: 'bg-orange-100',
    slug: 'how-to-optimize-web-application-performance-si-lcp',
    content: [
      "Web performance directly impacts user engagement and search engine rankings. Google's Core Web Vitals, specifically Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS), measure how fast a page renders. For an Aditya Sharma Full Stack Developer Portfolio, fast loading speeds are achieved through optimization.",
      "Optimizations include compressing hero images into WebP formats, using lazy loading for off-screen components, and preloading critical assets in the document head. Furthermore, inlining critical CSS directly within index.html removes render-blocking network requests, reducing the Speed Index (SI) significantly.",
      "Deferring heavy analytics scripts (like Google Tag Manager and Analytics) until the first user interaction avoids layout bottlenecks on load. These techniques ensure the website loads in sub-0.1s, delivering a smooth experience and ranking high on speed audits."
    ]
  },
  {
    title: 'Essential Git and GitHub Workflows for Open Source Contributors',
    excerpt: 'How to fork repositories, create branches, open pull requests, and collaborate effectively.',
    date: 'May 2024',
    readTime: '6 min read',
    tags: ['Git', 'GitHub', 'Open Source'],
    color: 'bg-indigo-100',
    slug: 'essential-git-github-workflows-open-source',
    content: [
      "Open source contribution is an excellent way for student developers in India to collaborate on real projects. Using Git and GitHub effectively requires understanding clean team workflows. It starts with forking a repository, cloning it locally, and creating a descriptive feature branch for your changes.",
      "In the iadi0 GitHub portfolio, I follow structured commit styles to keep histories clean. For example, when adding features to the GitAura Project, commits are formatted clearly. After writing code, pushing to origin and opening a pull request (PR) allows maintainers to review code before merging.",
      "Managing merge conflicts and running tests before staging changes is crucial. Contributing to open-source projects helps build team skills, improves code quality, and showcases collaboration capabilities to recruiters looking through your GitHub profile."
    ]
  },
  {
    title: 'Why Software Engineers Need to Focus on Technical SEO',
    excerpt: 'How page indexing, meta-tags, canonical urls, and schemas affect your website ranking.',
    date: 'April 2024',
    readTime: '6 min read',
    tags: ['SEO', 'Technical SEO', 'Rankings'],
    color: 'bg-teal-100',
    slug: 'why-software-engineers-need-technical-seo',
    content: [
      "Technical SEO ensures search engines can crawl, index, and understand a website's structure. For an aspiring full stack developer, SEO is as important as application logic. To make the WTF Aadi Portfolio Website rank #1 on Google, proper meta-tags and semantic outlines are integrated.",
      "Key elements include unique meta descriptions, canonical URLs, and Open Graph tags for social sharing. Implementing JSON-LD structured schemas (Person and WebSite) allows search engine bots to verify entity details. In this iadi0 Portfolio Website, dynamic schema generation establishes strong signals for index ranking.",
      "Adding custom sitemaps and robots.txt files guides search crawlers. Focusing on clean heading hierarchies and fast loading speeds satisfies Google's Core Web Vitals, ensuring the portfolio website is fully optimized for top search results."
    ]
  },
  {
    title: 'Building Real-Time Collaborative Web Apps with WebSockets',
    excerpt: 'An introduction to bi-directional communication channels in Node.js using Socket.io.',
    date: 'March 2024',
    readTime: '8 min read',
    tags: ['WebSockets', 'Node.js', 'Socket.io'],
    color: 'bg-pink-100',
    slug: 'building-real-time-collaborative-web-apps',
    content: [
      "WebSockets allow for real-time, bi-directional communication between client browsers and backend servers, bypassing traditional HTTP request limitations. For collaborative applications, WebSockets are essential. In my TeamJams Project, WebSocket channels enable live whiteboard sketching and messaging.",
      "Setting up a real-time workspace involves running a Node.js/Express server and integrating Socket.io. The server manages room-based connections, broadcasting events (like drawing coordinate shifts or chat messages) to all active clients with low latency, keeping the collaborative workspace synchronized.",
      "Handling connection states, reconnection logic, and state caching is vital. Demonstrating these features in a full stack developer portfolio highlights the ability to build interactive, real-time products that solve modern collaboration challenges."
    ]
  },
  {
    title: "Aadi's Guide to Clean Code and Software Engineering Fundamentals",
    excerpt: 'Writing clean, maintainable, and readable code using industry standard principles and patterns.',
    date: 'February 2024',
    readTime: '5 min read',
    tags: ['Clean Code', 'Design Patterns', 'Software Eng'],
    color: 'bg-purple-100',
    slug: 'aadiss-guide-to-clean-code-fundamentals',
    content: [
      "Writing clean, readable code is a core skill for any professional software engineer. It ensures applications are easy to maintain and scale over time. In my developer portfolio, I follow industry standard design patterns, avoiding messy code blocks in favor of modular components.",
      "Clean code starts with naming variables and functions clearly, writing self-documenting code, and keeping files focused. Applying DRY (Don't Repeat Yourself) principles and separating concerns ensures code remains flexible. In this Aadi Coding Portfolio, components are modular and well-structured.",
      "Writing unit tests and using linters ensures code quality. Demonstrating clean coding practices across your GitHub repositories shows potential employers that you write code that is ready for production and easy for other developers to build upon."
    ]
  },
  {
    title: 'Aspiring Software Engineer Guide: Transitioning from BCA to Industry',
    excerpt: 'Key strategies for students pursuing BCA to bridge the gap and land software engineering roles.',
    date: 'January 2024',
    readTime: '7 min read',
    tags: ['BCA', 'Careers', 'Software Eng'],
    color: 'bg-yellow-100',
    slug: 'aspiring-software-engineer-guide-bca-transition',
    content: [
      "As an Aditya Sharma BCA student at Amity University, my goal is to transition successfully into a Software Engineer role. Bridging the gap between a BCA curriculum and industry expectations requires focusing on core computer science concepts and building practical applications.",
      "The roadmap includes learning Data Structures and Algorithms (DSA), Operating System concepts, and Database Management Systems (DBMS). Beyond books, building full-stack web projects like GitAura or collaborative drawing boards helps apply these concepts. Publishing code on GitHub creates a verifiable history of your skills.",
      "Participating in hackathons and networking with developers online is key. Showcasing your learning journey through a developer portfolio website Jamshedpur helps you stand out in the Indian developer job market, proving your potential as a software engineer."
    ]
  },
  {
    title: 'The Rise of Generative AI Tools in Modern Software Development',
    excerpt: 'How modern developer environments integrate AI coding tools to speed up building applications.',
    date: 'December 2023',
    readTime: '5 min read',
    tags: ['Generative AI', 'Coding Tools', 'Future Tech'],
    color: 'bg-blue-100',
    slug: 'rise-of-generative-ai-software-development',
    content: [
      "Generative AI tools are changing the software development landscape, allowing engineers to build applications faster. Rather than replacing developers, AI acts as an intelligent pair programmer. Incorporating these tools into development environments improves productivity and helps solve coding problems quickly.",
      "In my developer projects showcase, I use Generative AI tools to brainstorm architectures and debug code. For instance, designing complex CSS neobrutalist styling details is accelerated by using AI to generate structural grids. Similarly, AI helps write robust utility classes and test suites.",
      "The key is understanding when to use AI suggestions and how to verify their output for security. Demonstrating proficiency with AI coding tools in your portfolio shows you are an adaptable, modern developer ready to use next-generation software tools."
    ]
  },
  {
    title: 'Crafting a Recruiter-Friendly ATS-Optimized Developer Portfolio',
    excerpt: 'How to structure your web presence and developer resume so they pass machine scanning parsers.',
    date: 'November 2023',
    readTime: '6 min read',
    tags: ['ATS', 'Resume', 'Portfolio'],
    color: 'bg-green-100',
    slug: 'crafting-recruiter-friendly-ats-portfolio',
    content: [
      "To stand out to recruiters, a developer portfolio must be recruiter-friendly and optimized for Applicant Tracking Systems (ATS). AI resume parsers search for specific tech keywords and structured layouts. Designing your site to be easily readable by both human recruiters and bots is crucial.",
      "ATS optimization involves highlighting core technologies (HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, REST APIs, Git, GitHub) in structured sections. Using descriptive, action-oriented project summaries also helps. In this Aditya Sharma Developer Portfolio, text is machine-readable for parsing.",
      "Having a clean, semantic HTML layout with clear headings and an easily downloadable PDF resume ensures compatibility. These optimizations increase your discoverability, helping your applications get noticed by hiring teams in the competitive tech industry."
    ]
  },
  {
    title: 'Building Responsive Web Layouts with CSS Grid and Flexbox',
    excerpt: 'Mastering modern CSS layout modules to align items, distribute spaces, and adapt containers.',
    date: 'October 2023',
    readTime: '5 min read',
    tags: ['CSS', 'Responsive', 'Grid'],
    color: 'bg-pink-100',
    slug: 'building-responsive-web-layouts-css-grid-flexbox',
    content: [
      "Responsive web design ensures applications work seamlessly across all screen sizes, from mobile screens to desktop monitors. Mastering CSS Grid and Flexbox is essential for building fluid layouts. Flexbox is ideal for aligning items along a single axis, while CSS Grid is designed for two-dimensional layouts.",
      "On the WTF Aadi Portfolio Website, responsive grid templates are used to organize sections. For example, the Projects grid collapses from three columns on desktop to a single column on mobile. Similarly, Flexbox handles the alignment of navbar buttons and footer links.",
      "Using container queries and media breakpoints helps adapt interfaces without layout shifts. Mastering these layout techniques ensures web applications look visually premium, providing a smooth user experience on any device."
    ]
  },
  {
    title: 'Local Storage and Client-Side State Persistence in Web Apps',
    excerpt: 'Using web storage APIs to maintain persistent client states across page restarts offline.',
    date: 'September 2023',
    readTime: '5 min read',
    tags: ['LocalStorage', 'State', 'Web Storage'],
    color: 'bg-orange-100',
    slug: 'local-storage-client-side-state-persistence',
    content: [
      "Client-side state persistence allows web applications to retain user configurations across browser refreshes, even without a backend database. The Web Storage API provides LocalStorage and SessionStorage, which let developers store key-value pairs locally.",
      "In my project Trip Budget Calculator, LocalStorage keeps expense logs persistent, allowing users to track trip budgets offline. In addition, the boutique catalog uses LocalStorage to save shopping cart selections, ensuring items are not lost when the page is reloaded.",
      "Understanding storage limits, security rules, and data serialization (JSON.stringify) is key. Demonstrating these features in a developer portfolio highlights the ability to design fast, serverless applications that offer a convenient user experience."
    ]
  },
  {
    title: 'Developer Community in Jamshedpur: Learning, Sharing, and Growing',
    excerpt: 'Exploring the local tech landscape, community groups, and networking opportunities in Jharkhand.',
    date: 'August 2023',
    readTime: '5 min read',
    tags: ['Community', 'Jamshedpur', 'Learning'],
    color: 'bg-purple-100',
    slug: 'developer-community-jamshedpur-learning-growing',
    content: [
      "Learning to code in Jamshedpur, India, has shown me the power of community. Connecting with other developers helps share ideas, resolve bugs, and collaborate on open-source projects. Local tech groups and developer forums provide opportunities to learn about modern frameworks and industry practices.",
      "As a developer from Jamshedpur, I publish all my projects on the iadi0 GitHub repository to collaborate with others. Showcasing my work (like GitAura and Weather App) helps connect with local peers. Sharing code allows student developers to get feedback and grow together.",
      "Building a local community helps establish a supportive environment for learning. Engaging in developer forums and sharing technical blogs represents my commitment to the local tech ecosystem, supporting Jamshedpur's growth as a tech hub in India."
    ]
  }
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
    '  help       — Show this help message',
    '  whoami     — About Aadi',
    '  skills     — My tech stack',
    '  projects   — Featured projects',
    '  contact    — Get in touch',
    '  clear      — Clear terminal',
    '  game       — Play a mini game',
    '  joke       — Tell a coder joke',
    '  coffee     — Brew some code fuel',
    '  git status — Aadi\'s git state',
    '  matrix     — Enter the simulation',
    '  sudo hire  — ???',
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
  joke: [
    '💡 Programmer Joke:',
    '  Why do programmers wear glasses?',
    '  Because they can\'t C#! 👓',
  ],
  coffee: [
    '☕ Coffee Machine v1.0',
    '  [•] Inserting coin...',
    '  [•] Grinding coffee beans...',
    '  [•] Brewing double espresso...',
    '  [🔥] CAUTION: Caffeine levels critical!',
    '  Result: Code output increased by 200%. Aadi is fully charged!',
  ],
  'git status': [
    'On branch developer-life',
    'Your branch is ahead of \'origin/expectations\' by 999 commits.',
    '  (use \"git push\" to publish your local changes)',
    '',
    'nothing to commit, working tree clean (and coffee cup refilled). ☕',
  ],
  matrix: [
    '🕶️ Matrix Simulation Initialized...',
    '  Wake up, guest...',
    '  The matrix has you.',
    '  Follow the white rabbit. 🐇',
    '  Aadi is the Chosen One (or just a BCA student who loves coding).',
  ],
  'sudo rm -rf': [
    '⚠️ WARNING: ACCESS VIOLATION!',
    '  Nice try, hackerman. 😎',
    '  Aadi\'s portfolio is protected by anti-gravity firewall shields.',
    '  Self-destruct avoided.',
  ],
  'sudo rm -rf /': [
    '⚠️ WARNING: ACCESS VIOLATION!',
    '  Nice try, hackerman. 😎',
    '  Aadi\'s portfolio is protected by anti-gravity firewall shields.',
    '  Self-destruct avoided.',
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
