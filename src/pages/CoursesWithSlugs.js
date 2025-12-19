//Canonical course data used across the app.
//Each item includes a slug (generated once) so list and detail pages always match.

const slugify = (s = '') =>
  s
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');

const courses = [
   {
      title: 'Mastering React & react-nextjs.js',
      description:
         'Build scalable, high-performance web applications using the latest features of React, Hooks, and Next.js.',
      duration: '20 Hrs',
      rating: '4.9',
      students: '1.2K',
      planType: 'monthly',
      outline: [
         {
            title: 'Getting Started & Tooling',
            lessons: [
               'Course overview',
               'Project setup',
               'Dev tools & best practices',
            ],
         },
         {
            title: 'React Fundamentals',
            lessons: [
               'JSX & Components',
               'State & Props',
               'Hooks: useState/useEffect',
            ],
         },
         {
            title: 'Advanced React Patterns',
            lessons: [
               'Context & Reducers',
               'Performance optimization',
               'Testing basics',
            ],
         },
         {
            title: 'Next.js in Production',
            lessons: [
               'Routing & data fetching',
               'SSG/SSR',
               'Deployment to Vercel',
            ],
         },
      ],
   },

   {
      title: 'Data Science with Python',
      description:
         'Learn Python, Pandas, NumPy, and Scikit-learn to clean, analyze, and visualize complex datasets.',
      duration: '35 Hrs',
      rating: '4.8',
      students: '850',
      planType: 'monthly',
      outline: [
         {
            title: 'Python for Data',
            lessons: [
               'Python essentials',
               'NumPy basics',
               'Pandas fundamentals',
            ],
         },
         {
            title: 'Data Cleaning & Wrangling',
            lessons: [
               'Missing data',
               'Merging & reshaping',
               'Feature engineering',
            ],
         },
         {
            title: 'Modeling & Evaluation',
            lessons: [
               'scikit-learn workflows',
               'Model evaluation',
               'Pipelines',
            ],
         },
         {
            title: 'Visualization & Reporting',
            lessons: ['Matplotlib/Seaborn', 'Dashboards with Plotly'],
         },
      ],
   },

   {
      title: 'AI & Machine Learning Deep Dive',
      description:
         'Explore TensorFlow and PyTorch for building and training neural networks for practical AI solutions.',
      duration: '40 Hrs',
      rating: '5.0',
      students: '600',
      planType: 'lifetime', // example: lifetime product
      outline: [
         {
            title: 'Foundations',
            lessons: ['Linear algebra refresher', 'Probability & stats for ML'],
         },
         {
            title: 'Deep Learning Basics',
            lessons: [
               'Perceptron & activation functions',
               'Loss & optimization',
            ],
         },
         {
            title: 'Frameworks',
            lessons: [
               'TensorFlow Keras',
               'PyTorch basics',
               'Building and training models',
            ],
         },
         {
            title: 'Advanced Topics',
            lessons: ['CNNs', 'RNNs/Transformers', 'Deployment'],
         },
      ],
   },

   {
      title: 'Full-Stack Node.js Development',
      description:
         'Develop robust APIs and web servers using Node.js, Express, and MongoDB (MERN stack).',
      duration: '25 Hrs',
      rating: '4.7',
      students: '1.5K',
      planType: 'monthly',
      outline: [
         {
            title: 'Node & Express',
            lessons: ['Routing', 'Middleware', 'Auth basics'],
         },
         {
            title: 'Databases (MongoDB)',
            lessons: ['Schemas', 'Queries', 'Indexes & performance'],
         },
         {
            title: 'Frontend Integration',
            lessons: ['React + API', 'State management', 'Deployment'],
         },
      ],
   },

   // The rest of the list from your message — include slugs and a basic outline.
   {
      title: 'Advanced JavaScript (ES6+)',
      description:
         'Deep dive into modern JavaScript features, asynchronous programming, and best practices.',
      duration: '15 Hrs',
      rating: '4.6',
      students: '1.8K',
      planType: 'monthly',
      outline: [
         {
            title: 'ES6+ Features',
            lessons: ['Let/const', 'Arrow functions', 'Promises & async/await'],
         },
      ],
   },
   {
      title: 'SQL and Database Fundamentals',
      description:
         'Master relational databases, advanced SQL queries, indexing, and database design principles.',
      duration: '10 Hrs',
      rating: '4.5',
      students: '2.1K',
      planType: 'monthly',
      outline: [
         {
            title: 'SQL Essentials',
            lessons: ['SELECTs', 'JOINs', 'Indexes & performance'],
         },
      ],
   },
   {
      title: 'Digital Marketing Mastery',
      description:
         'Learn SEO, paid advertising (PPC), social media strategies, and email marketing for business growth.',
      duration: '18 Hrs',
      rating: '4.6',
      students: '3.1K',
      planType: 'monthly',
      outline: [
         {
            title: 'Marketing Fundamentals',
            lessons: ['SEO basics', 'PPC fundamentals', 'Email marketing'],
         },
      ],
   },
   {
      title: 'Computer Basics and Operations',
      description:
         'Essential skills for navigating operating systems, file management, and core productivity software.',
      duration: '8 Hrs',
      rating: '4.4',
      students: '4.5K',
      planType: 'monthly',
      outline: [
         {
            title: 'Computer Essentials',
            lessons: ['OS basics', 'File management', 'Office productivity'],
         },
      ],
   },
   {
      title: 'Professional Video Editing (Premiere Pro)',
      description:
         'Edit high-quality videos for social media and professional projects using Adobe Premiere Pro.',
      duration: '16 Hrs',
      rating: '4.7',
      students: '1.9K',
      planType: 'monthly',
      outline: [
         {
            title: 'Editing Workflow',
            lessons: ['Cutting', 'Color grading', 'Exporting'],
         },
      ],
   },
   {
      title: 'Graphics Design Fundamentals',
      description:
         'Master foundational design principles, typography, and color theory using industry-standard tools.',
      duration: '22 Hrs',
      rating: '4.8',
      students: '2.5K',
      planType: 'monthly',
      outline: [
         {
            title: 'Design Principles',
            lessons: ['Typography', 'Color theory', 'Layout'],
         },
      ],
   },
   {
      title: 'Ethical Hacking & Cyber Security',
      description:
         'Understand penetration testing, vulnerability analysis, and network defense strategies.',
      duration: '30 Hrs',
      rating: '5.0',
      students: '1.1K',
      planType: 'lifetime',
      outline: [
         {
            title: 'Intro to Security',
            lessons: ['Threat models', 'Pen-testing basics'],
         },
      ],
   },
   {
      title: 'Networking Fundamentals (Cisco)',
      description:
         'Learn the core concepts of TCP/IP, routing, switching, and network architecture.',
      duration: '24 Hrs',
      rating: '4.5',
      students: '900',
      planType: 'monthly',
      outline: [
         {
            title: 'Networking Basics',
            lessons: ['TCP/IP', 'Routing', 'Switching'],
         },
      ],
   },
   {
      title: 'Blockchain Technology & Crypto',
      description:
         'Explore decentralized ledgers, smart contracts (Solidity), and the foundational technology of Web3.',
      duration: '14 Hrs',
      rating: '4.9',
      students: '750',
      planType: 'monthly',
      outline: [
         {
            title: 'Blockchain Basics',
            lessons: ['Ledgers', 'Smart contracts', 'Solidity intro'],
         },
      ],
   },
   {
      title: 'Forex Trading Automation (Python)',
      description:
         'Use Python to build algorithmic trading bots and perform quantitative market analysis.',
      duration: '15 Hrs',
      rating: '4.3',
      students: '1.3K',
      planType: 'monthly',
      outline: [
         {
            title: 'Trading with Python',
            lessons: ['APIs', 'Backtesting', 'Automated orders'],
         },
      ],
   },
   {
      title: 'Web Development Full Stack (Advanced)',
      description:
         'Comprehensive program covering both front-end and back-end frameworks for job readiness.',
      duration: '50 Hrs',
      rating: '4.9',
      students: '3.8K',
      planType: 'lifetime',
      outline: [
         {
            title: 'Full-stack Roadmap',
            lessons: ['Frontend', 'Backend', 'Deployment'],
         },
      ],
   },
   {
      title: 'Data Analysis & Visualization (Power BI)',
      description:
         'Transform raw data into actionable insights using advanced Excel, SQL, and Power BI/Tableau.',
      duration: '28 Hrs',
      rating: '4.7',
      students: '2.2K',
      planType: 'monthly',
      outline: [
         { title: 'Data Viz', lessons: ['Power BI', 'DAX', 'Dashboards'] },
      ],
   },
   {
      title: 'Mobile App Development (Native & Hybrid)',
      description:
         'Build native iOS/Android apps with Swift/Kotlin and hybrid apps with React Native/Flutter.',
      duration: '45 Hrs',
      rating: '4.8',
      students: '1.6K',
      planType: 'lifetime',
      outline: [
         {
            title: 'Mobile Fundamentals',
            lessons: ['Native vs Hybrid', 'React Native basics', 'Deployment'],
         },
      ],
   },
   {
      title: 'Game Development (Unity/C#)',
      description:
         'Create 2D and 3D games from concept to deployment using the Unity game engine and C# scripting.',
      duration: '38 Hrs',
      rating: '4.6',
      students: '1.0K',
      planType: 'monthly',
      outline: [
         {
            title: 'Game Basics',
            lessons: ['Unity intro', 'C# scripting', 'Publishing'],
         },
      ],
   },
];

// attach slug to each course (stable, canonical)
const coursesWithSlugs = courses.map((c) => ({ ...c, slug: slugify(c.title) }));

export default coursesWithSlugs;
