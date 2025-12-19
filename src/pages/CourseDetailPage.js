import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LayoutList } from 'lucide-react';
// ===========================================

// --- Centralized Course Data (SLUG IS THE KEY) ---
// Defining core courses first to avoid the "access before initialization" error
const _coreCourses = {
   // 1. WEB DEV - REACT/NEXT.JS (Modules already exist)
   'react-nextjs': {
      title: 'Mastering React & Next.js: Full-Stack Enterprise Patterns',
      description:
         'Move beyond tutorials to build **scalable, high-performance web applications** using React, modern Next.js features (App Router), and best-in-class full-stack patterns like Server Components and advanced data fetching.',
      duration: '20 Hrs',
      instructor: 'Davidson Team',
      planType: 'monthly',
      level: 'Advanced',
      projectTitle: 'E-commerce Dashboard with Real-time Updates',
      prerequisites: [
         'Proficiency in JavaScript (ES6+)',
         'Basic understanding of React',
      ],
      techStack: [
         'React 18+',
         'Next.js 14+',
         'TypeScript',
         'Tailwind CSS',
         'Vercel',
      ],
      keyFeatures: [
         'Mastering React Server Components (RSC)',
         'Advanced State Management (Zustand/Jotai)',
         'Building High-performance APIs with Next.js Routes',
         'Full CI/CD Pipeline Deployment',
      ],
      outline: [
         {
            title: 'Getting Started: Next.js Ecosystem',
            summary:
               'Setup, tooling, and project scaffolding using the **App Router**. This module covers the critical differences between the old Pages Router and the modern architecture, focusing on co-location of data and logic.',
            lessons: [
               'Introduction & Course Overview: App Router vs. Pages Router',
               'Tooling: Node, npm, VS Code, and Project Structure',
               'TypeScript Configuration & Best Practices',
            ],
         },
         {
            title: 'React Fundamentals Refresher & Deep Dive',
            summary:
               'A deep dive into core React concepts, **advanced hooks**, and optimized component patterns. We focus on writing clean, performant code by mastering `useMemo`, `useCallback`, and the Context API.',
            lessons: [
               'JSX & Modern Functional Components',
               'Deep Dive: State, Props, and Context API',
               'Custom Hooks for Reusability',
               'Performance Optimization with useMemo/useCallback',
            ],
         },
         {
            title: 'Advanced Next.js Architecture',
            summary:
               'Mastering **routing, Server-Side Rendering (SSR), Static Site Generation (SSG), and effective caching strategies**. Learn how to handle complex data fetching using Server Components and tackle dynamic routes.',
            lessons: [
               'Next.js Pages & Dynamic Routing',
               'Data Fetching with Server Components & Suspense',
               'Client vs. Server Rendering Strategies',
               'API Routes & Middleware for Authentication',
            ],
         },
         {
            title: 'Deployment & Enterprise Practices',
            summary:
               'Focus on **testing, security, and production-ready deployment**. We implement robust unit testing and deploy the application to a cloud provider with a Continuous Integration (CI/CD) pipeline for automation.',
            lessons: [
               'Unit Testing with Jest and React Testing Library',
               'Deploying to Vercel/AWS Amplify with CI',
               'Monitoring & Performance Auditing (Lighthouse)',
               'Security Best Practices (CSRF, XSS)',
            ],
         },
      ],
   },

   // 2. DATA SCIENCE (Modules already exist)
   'data-science': {
      title: 'Data Science & Machine Learning: From EDA to Deployment',
      description:
         "A project-based curriculum focused on Python's ecosystem. Learn data cleaning, exploratory data analysis (EDA), predictive modeling, and model deployment using industry-standard libraries.",
      duration: '35 Hrs',
      instructor: 'Data Team',
      planType: 'monthly',
      level: 'Intermediate',
      projectTitle: 'Predictive Model for Housing Prices',
      prerequisites: [
         'Basic Python programming knowledge',
         'Familiarity with algebra',
      ],
      techStack: [
         'Python',
         'Pandas',
         'NumPy',
         'Scikit-learn',
         'Matplotlib',
         'Jupyter',
      ],
      keyFeatures: [
         'Hands-on experience with real-world datasets',
         'Model Evaluation and Hyperparameter Tuning',
         'Advanced Data Visualization techniques',
         'Introduction to Big Data tools',
      ],
      outline: [
         {
            title: 'Python for Data Analysis',
            summary:
               'Setting up your **Anaconda and Jupyter Notebook environment** and mastering the core libraries. This includes an intensive focus on **NumPy** for numerical efficiency and **Pandas** for advanced data manipulation (Series & DataFrames).',
            lessons: [
               'Setting up Anaconda and Jupyter Notebooks',
               'Python Syntax, types, functions (Review)',
               'NumPy for Numerical Computing',
               'Pandas: Series & DataFrame Mastery',
            ],
         },
         {
            title: 'Data Wrangling and Feature Engineering',
            summary:
               'The critical phase of preparing data. You will learn professional techniques for **handling missing data**, **outliers**, feature scaling, and conducting thorough **Exploratory Data Analysis (EDA)** to inform modeling choices.',
            lessons: [
               'Handling Missing Data and Outliers',
               'Data Cleaning & Merging techniques',
               'Feature Scaling and Selection',
               'Exploratory Data Analysis (EDA)',
            ],
         },
         {
            title: 'Machine Learning Fundamentals',
            summary:
               'Implementing and understanding foundational models using **Scikit-learn**. This module covers **Linear and Logistic Regression**, alongside **Decision Trees and Random Forests**, focusing heavily on proper **model evaluation metrics**.',
            lessons: [
               'Introduction to Scikit-learn',
               'Linear Regression and Logistic Regression',
               'Decision Trees and Random Forests',
               'Model Evaluation Metrics (Precision, Recall, F1)',
            ],
         },
         {
            title: 'Visualization & Deployment',
            summary:
               'Creating powerful, compelling visualizations using **Matplotlib and Seaborn**. Finally, learn the basics of **model deployment** using frameworks like Flask or Streamlit to put your predictive models into production.',
            lessons: [
               'Matplotlib and Seaborn for Static Visuals',
               'Interactive Dashboards with Plotly',
               'Model Deployment with Flask/Streamlit (Intro)',
            ],
         },
      ],
   },

   // 3. AI/ML (Modules already exist)
   'ai-machine-learning': {
      title: 'Deep Learning & Neural Networks with TensorFlow/PyTorch',
      description:
         'Master the theory and practical application of deep learning. Build and train complex neural networks for Computer Vision (CNNs) and Natural Language Processing (RNNs/Transformers).',
      duration: '45 Hrs',
      instructor: 'AI Team',
      planType: 'lifetime',
      level: 'Expert',
      projectTitle: 'Custom Image Recognition Model for Medical Diagnosis',
      prerequisites: [
         'Strong knowledge of Data Science fundamentals',
         'Advanced algebra and calculus',
      ],
      techStack: [
         'Python',
         'TensorFlow',
         'PyTorch',
         'Keras',
         'GPUs/TPUs',
         'Jupyter',
      ],
      keyFeatures: [
         'Building and optimizing Convolutional Neural Networks (CNNs)',
         'Implementing Recurrent Neural Networks (RNNs) and Transformers',
         'Hands-on GPU training for large datasets',
         'Deep dive into optimization algorithms (Adam, RMSProp)',
      ],
      outline: [
         {
            title: 'NN Fundamentals & Frameworks',
            summary:
               'The building blocks of neural networks. We cover the math behind the **Perceptron and Backpropagation** and set up your environment for **TensorFlow/PyTorch**. Focus is placed on selecting and tuning **Optimizers** like SGD and Adam.',
            lessons: [
               'Review: Perceptron and Activation Functions',
               'Backpropagation Algorithm Explained (Math & Code)',
               'TensorFlow/PyTorch Setup and Data Pipelines',
               'Optimizers: Stochastic Gradient Descent (SGD) and Variants',
            ],
         },
         {
            title: 'Computer Vision with CNNs',
            summary:
               'Designing and training networks for image tasks. Master **Convolutional Layers and Pooling** and implement modern architectures like **VGG and ResNet**. The module culminates in an image classification project using Transfer Learning.',
            lessons: [
               'Convolutional Layers and Pooling',
               'Designing VGG, ResNet, and Inception Architectures',
               'Image Classification Project (TensorFlow)',
               'Transfer Learning and Fine-Tuning',
            ],
         },
         {
            title: 'Natural Language Processing (NLP)',
            summary:
               'Working with sequence data. You will build and understand **Recurrent Neural Networks (RNNs)** and **LSTMs**. Conceptual introductions to the **Attention Mechanism and Transformers** are also included, with a practical text generation project.',
            lessons: [
               'Recurrent Neural Networks (RNNs) and LSTMs',
               'Attention Mechanism and Transformers (Conceptual)',
               'Text Generation and Sentiment Analysis Project (PyTorch)',
            ],
         },
      ],
   },

   // 4. FULL-STACK NODE.JS (Modules already exist)
   'full-stack-node-js': {
      title: 'The Modern Node.js Full-Stack Masterclass (MERN/MEVN)',
      description:
         'Develop robust, scalable, and secure full-stack applications. Focus on building and deploying industrial-grade RESTful APIs with Node.js, Express, and MongoDB, and connecting a modern frontend framework.',
      duration: '25 Hrs',
      instructor: 'Node Team',
      planType: 'monthly',
      level: 'Intermediate',
      projectTitle: 'Secure Document Management API',
      prerequisites: [
         'Familiarity with JavaScript and basic networking concepts (HTTP)',
      ],
      techStack: [
         'Node.js',
         'Express',
         'MongoDB (Mongoose)',
         'JWT',
         'React/Vue (Intro)',
      ],
      keyFeatures: [
         'Designing and documenting RESTful and GraphQL APIs',
         'Implementing token-based authentication (JWT)',
         'Building a scalable NoSQL database schema',
         'Deployment to Cloud Platforms (e.g., Heroku, AWS)',
      ],
      outline: [
         {
            title: 'API Design & Express Setup',
            summary:
               'Building the foundational server structure. We cover deep dives into **Node.js, NPM**, setting up the Express server, writing custom **Middleware** for logging and error handling, and initializing **MongoDB/Mongoose** schemas.',
            lessons: [
               'Node.js & NPM Deep Dive',
               'Express Server Setup and Routing',
               'Custom Middleware and Error Handling',
               'Introduction to MongoDB with Mongoose Schemas',
            ],
         },
         {
            title: 'Authentication and Security',
            summary:
               'Crucial for any production API. You will implement industry-standard **token-based authentication (JWT)**, secure **password hashing (Bcrypt)**, and apply security headers like CORS, Rate Limiting, and Helmet to prevent common attacks.',
            lessons: [
               'User Authentication with JWT (Tokens)',
               'Password Hashing (Bcrypt)',
               'CORS, Rate Limiting, and Helmet Security Middleware',
               'Role-Based Access Control (RBAC)',
            ],
         },
         {
            title: 'Advanced Database & Deployment',
            summary:
               'Handling complex data with **Mongoose Aggregation Pipelines**. We transition to production readiness by exploring **Serverless Functions** and setting up a basic **CI/CD Pipeline** for automated cloud deployment.',
            lessons: [
               'Advanced Mongoose Queries and Aggregation',
               'Serverless Functions (Intro to AWS Lambda/Google Cloud Functions)',
               'CI/CD Pipeline and Production Deployment',
            ],
         },
      ],
   },

   // 5. ADVANCED JAVASCRIPT (Modules updated for better structure)
   'advanced-javascript': {
      title: 'Advanced JavaScript: ES2024, V8 Engine, and Performance',
      description:
         'A deep, engineering-focused dive into the JavaScript language. Master asynchronous patterns, engine mechanics (V8), memory management, and write highly performant, clean code using modern standards.',
      duration: '15 Hrs',
      instructor: 'JS Team',
      planType: 'monthly',
      level: 'Advanced',
      projectTitle: 'Custom Event Emitter and Promise Library',
      prerequisites: [
         'Strong grasp of basic JavaScript syntax and OOP principles',
      ],
      techStack: [
         'JavaScript (ES6+)',
         'Node.js',
         'V8 Engine Concepts',
         'Web Workers',
         'RxJS (Intro)',
      ],
      keyFeatures: [
         'Mastering the Event Loop and Asynchronous Programming',
         'Deep understanding of `this` binding and Prototypal Inheritance',
         'Module System (ESM vs. CommonJS) and Bundling',
         'Performance tuning and memory optimization techniques',
      ],
      outline: [
         {
            title: 'Asynchronous JS Mastery',
            summary:
               'The event loop, Promises, and modern concurrency control.',
            lessons: [
               'JavaScript Runtime and the Event Loop',
               'Promises, Promise.all, and Asynchronous Control Flow',
               'Async/Await for Cleaner Concurrency',
               'Error Handling in Asynchronous Code',
            ],
         },
         {
            title: 'Engine Mechanics and OOP',
            summary:
               'How JavaScript works under the hood (V8) and advanced OOP.',
            lessons: [
               'Prototypal Inheritance vs. Class Syntax',
               'Scope, Closures, and Memory Leaks',
               'Design Patterns (Singleton, Factory, Observer)',
            ],
         },
         {
            title: 'Performance & Tooling',
            summary:
               'Profiling code, using bundlers (Webpack/Vite), and writing memory-efficient code.',
            lessons: [
               'Module Systems (ESM vs. CommonJS)',
               'Memory Management and Garbage Collection',
               'Code Bundling and Optimization',
            ],
         },
      ],
   },

   // 6. DIGITAL MARKETING MASTERY (Modules Added)
   'digital-marketing-mastery': {
      outline: [
         {
            title: 'Search Engine Optimization (SEO)',
            summary:
               'Fundamentals of on-page and off-page SEO, keyword research, and using tools like Google Search Console.',
            lessons: [
               'Keyword Research and Content Mapping',
               'Technical SEO Audits',
               'Link Building Strategies',
            ],
         },
         {
            title: 'Pay-Per-Click (PPC) Advertising',
            summary:
               'Setting up and managing profitable Google Ads and social media ad campaigns, focusing on budget and ROI.',
            lessons: [
               'Google Ads Setup and Campaign Structure',
               'Ad Copywriting and A/B Testing',
               'Remarketing Strategies',
            ],
         },
         {
            title: 'Social Media & Email Marketing',
            summary:
               'Developing a cohesive social media content calendar and leveraging email marketing funnels.',
            lessons: [
               'Social Media Content Strategy',
               'Email Funnel Design (Mailchimp)',
               'Analytics and Reporting',
            ],
         },
      ],
      title: 'Digital Marketing Mastery: SEO, PPC, and Social Media Strategy',
      instructor: 'Marketing Team',
      planType: 'monthly',
      duration: '12 Hrs',
      description:
         'Master SEO, PPC, and social media advertising with practical, hands-on campaigns.',
      level: 'Beginner',
      prerequisites: ['None'],
      techStack: ['Google Ads', 'SEMrush', 'Mailchimp'],
      keyFeatures: [
         'SEO Audit Template',
         'PPC Campaign Setup',
         'Social Media Strategy',
      ],
      projectTitle: 'Comprehensive 6-Month Digital Marketing Plan',
   },

   // 7. COMPUTER BASICS (Modules Added)
   'computer-basics': {
      outline: [
         {
            title: 'Operating System Mastery',
            summary:
               'Efficient file navigation, shortcuts, and core application management on Windows and macOS.',
            lessons: [
               'File Management and Cloud Storage',
               'Keyboard Shortcuts for Productivity',
               'Basic System Settings',
            ],
         },
         {
            title: 'Software and Security',
            summary:
               'Safe software installation, basic virus protection, and data backup strategies.',
            lessons: [
               'Installing and Uninstalling Software Safely',
               'Introduction to Antivirus/Firewalls',
               'Data Backup and Recovery Basics',
            ],
         },
         {
            title: 'Hardware & Peripherals',
            summary:
               'Understanding computer hardware components and managing external devices like printers and monitors.',
            lessons: [
               'Understanding PC/Laptop Components',
               'Printer Setup and Troubleshooting',
               'Managing Drivers and Updates',
            ],
         },
      ],
      title: 'Computer Basics for Professionals',
      instructor: 'IT Team',
      planType: 'monthly',
      duration: '8 Hrs',
      description:
         'Learn essential computer operations, file management, and basic troubleshooting for efficiency.',
      level: 'Beginner',
      prerequisites: ['None'],
      techStack: ['Windows', 'macOS', 'Microsoft Office'],
      keyFeatures: [
         'File Management Best Practices',
         'Basic Cyber Hygiene',
         'Software Installation Mastery',
      ],
      projectTitle: 'Optimizing a Personal Workstation',
   },

   // 8. PROFESSIONAL VIDEO EDITING (Modules Added)
   'professional-video-editing': {
      outline: [
         {
            title: 'Editing Workflow & Tools',
            summary:
               'Setting up the timeline, efficient cutting techniques, and using key Premiere Pro tools.',
            lessons: [
               'Project Setup and Media Organization',
               'J-Cuts, L-Cuts, and Advanced Trimming',
               'Multicam Editing Workflow',
            ],
         },
         {
            title: 'Color and Audio Post-Production',
            summary:
               'Mastering the Lumetri panel for color grading and mixing audio for professional clarity.',
            lessons: [
               'Color Correction vs. Color Grading',
               'Loudness Standards and Audio Noise Reduction',
               'Creating Cinematic Looks',
            ],
         },
         {
            title: 'Motion Graphics and Export',
            summary:
               'Introduction to After Effects for basic motion graphics and optimizing export settings for different platforms.',
            lessons: [
               'Basic After Effects Integration',
               'Keyframe Animation and Text Effects',
               'Optimized Exporting for Social Media and Web',
            ],
         },
      ],
      title: 'Professional Video Editing Masterclass',
      instructor: 'Media Team',
      planType: 'monthly',
      duration: '18 Hrs',
      description:
         'Take your video projects to the next level with advanced cutting, color grading, and motion graphics.',
      level: 'Intermediate',
      prerequisites: ['Basic computer skills'],
      techStack: ['Adobe Premiere Pro', 'Adobe After Effects (Intro)'],
      keyFeatures: [
         'Color Grading & Audio Mixing',
         'Multi-Camera Editing Workflow',
         'Exporting for Social Media',
      ],
      projectTitle: '30-Second Commercial Spot',
   },

   // 9. GRAPHICS DESIGN FUNDAMENTALS (Modules Added)
   'graphics-design-fundamentals': {
      outline: [
         {
            title: 'Design Principles & Theory',
            summary:
               'The foundational concepts of visual communication: color theory, typography, and layout principles (Gestalt).',
            lessons: [
               'Color Theory and Palettes',
               'Mastering Typography and Font Pairing',
               'Visual Hierarchy and Layout Grids',
            ],
         },
         {
            title: 'Vector Graphics (Illustrator)',
            summary:
               'Working with scaleable vector art for logos and illustrations.',
            lessons: [
               'Introduction to Adobe Illustrator Tools',
               'Creating a Vector Logo from Scratch',
               'Understanding Paths and Bézier Curves',
            ],
         },
         {
            title: 'Raster Graphics (Photoshop) & Branding',
            summary:
               'Working with images, retouching, and applying design principles to brand identity creation.',
            lessons: [
               'Image Retouching and Compositing in Photoshop',
               'Creating Social Media Visuals',
               'Designing a Brand Style Guide',
            ],
         },
      ],
      title: 'Graphics Design Fundamentals',
      instructor: 'Design Team',
      planType: 'monthly',
      duration: '15 Hrs',
      description:
         'The foundation of visual communication, covering typography, layout, and software essentials.',
      level: 'Beginner',
      prerequisites: ['None'],
      techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
      keyFeatures: [
         'Mastering Typography',
         'Creating a Brand Style Guide',
         'Vector vs. Raster Graphics',
      ],
      projectTitle: 'Designing a Full Brand Identity',
   },

   // 10. NETWORKING (Modules Added)
   networking: {
      outline: [
         {
            title: 'Network Architecture & Protocols',
            summary:
               'Deep dive into the OSI and TCP/IP models, understanding how data travels across networks.',
            lessons: [
               'OSI Model Layers Explained',
               'TCP/IP Suite and Common Protocols (HTTP, DNS, DHCP)',
               'Types of Networks (LAN, WAN, MAN)',
            ],
         },
         {
            title: 'IP Addressing and Subnetting',
            summary:
               'Mastering IPv4 and IPv6 addressing, including practical subnetting calculations.',
            lessons: [
               'IPv4 Addressing and Classes',
               'Subnetting and CIDR Notation',
               'Introduction to IPv6',
            ],
         },
         {
            title: 'Network Devices & Configuration',
            summary:
               'Understanding and configuring routers, switches, and firewalls using command-line interfaces.',
            lessons: [
               'Configuring Routers and Switches (Simulated)',
               'Wireless Networking and Security (WPA3)',
               'Monitoring and Troubleshooting with Wireshark',
            ],
         },
      ],
      title: 'Networking Fundamentals (CompTIA N+ Prep)',
      instructor: 'NetSec Team',
      planType: 'monthly',
      duration: '20 Hrs',
      description:
         'Core concepts of network architecture, protocols, and configuration for career readiness.',
      level: 'Beginner',
      prerequisites: ['None'],
      techStack: ['TCP/IP', 'Cisco IOS (Simulated)', 'Wireshark'],
      keyFeatures: [
         'Subnetting Calculations',
         'Configuring Routers & Switches',
         'OSI Model Deep Dive',
      ],
      projectTitle: 'Setting up a Small Office Network',
   },

   // 11. BLOCKCHAIN (Modules Added)
   blockchain: {
      outline: [
         {
            title: 'Blockchain Fundamentals & Cryptography',
            summary:
               'Understanding distributed ledgers, hash functions, and consensus mechanisms (PoW, PoS).',
            lessons: [
               'How Blockchain Works (Mining, Blocks)',
               'Cryptography and Digital Signatures',
               'Consensus Mechanisms (PoW vs. PoS)',
            ],
         },
         {
            title: 'Smart Contracts (Solidity)',
            summary:
               'Writing, compiling, and testing secure smart contracts on the Ethereum Virtual Machine (EVM).',
            lessons: [
               'Introduction to Solidity Programming Language',
               'ERC-20 Token Standard Implementation',
               'Testing and Debugging with Truffle/Hardhat',
            ],
         },
         {
            title: 'Decentralized Application (DApp) Development',
            summary:
               'Connecting a frontend interface to your smart contracts using Web3.js or Ethers.js.',
            lessons: [
               'Web3.js/Ethers.js Integration',
               'Building a Decentralized Frontend',
               'Introduction to DeFi and NFTs',
            ],
         },
      ],
      title: 'Blockchain Technology and DApp Development',
      instructor: 'Crypto Team',
      planType: 'lifetime',
      duration: '22 Hrs',
      description:
         'From foundational concepts to writing and deploying your first smart contracts on Ethereum.',
      level: 'Intermediate',
      prerequisites: ['Basic programming knowledge'],
      techStack: ['Solidity', 'Ethereum', 'Truffle/Hardhat', 'Web3.js'],
      keyFeatures: [
         'Deploying Smart Contracts',
         'Understanding DeFi & NFTs',
         'Decentralized Application (DApp) Architecture',
      ],
      projectTitle: 'Simple Smart Contract for Asset Transfer',
   },

   // 12. FOREX TRADING (Modules Added)
   'forex-trading': {
      outline: [
         {
            title: 'Financial Market Basics & Python Setup',
            summary:
               'Understanding currency pairs, pips, leverage, and setting up the data analysis environment.',
            lessons: [
               'Forex Market Structure and Terminology',
               'Setting up Python, Pandas, and Backtrader',
               'Connecting to Financial Data APIs (OANDA)',
            ],
         },
         {
            title: 'Strategy Development & Backtesting',
            summary:
               'Coding technical indicators and using historical data to test profitability and robustness.',
            lessons: [
               'Implementing Moving Average Crossover Strategies',
               'Building Custom Technical Indicators',
               'Backtesting and Optimization Techniques',
            ],
         },
         {
            title: 'Live Trading and Risk Management',
            summary:
               'Transitioning from backtesting to simulated or live trading with robust risk control.',
            lessons: [
               'Automated Order Execution (Simulated)',
               'Implementing Stop-Loss and Take-Profit',
               'Essential Risk Management in Code',
            ],
         },
      ],
      title: 'Forex Trading Automation with Python',
      instructor: 'Finance Team',
      planType: 'monthly',
      duration: '15 Hrs',
      description:
         'Build and backtest algorithmic trading bots using Python and financial APIs.',
      level: 'Intermediate',
      prerequisites: [
         'Basic Python knowledge',
         'Basic financial market concepts',
      ],
      techStack: ['Python', 'Pandas', 'Backtrader', 'OANDA API'],
      keyFeatures: [
         'Building Algorithmic Trading Bots',
         'Backtesting Strategies',
         'Risk Management in Code',
      ],
      projectTitle: 'Developing a Moving Average Crossover Strategy Bot',
   },

   // 13. WEB DEVELOPMENT FULL STACK (Updated to general Full Stack Web Dev)
   'web-dev-full-stack': {
      outline: [
         {
            title: 'Front-End Foundation (HTML5, CSS3, JavaScript)',
            summary:
               'Mastering modern, semantic HTML, responsive design with Flexbox/Grid, and core JavaScript fundamentals (ES6+).',
            lessons: [
               'Advanced HTML5 and Semantic Structure',
               'CSS3 Grid and Flexbox for Responsive Design',
               'Modern JavaScript (ES6+), DOM Manipulation, and Functions',
            ],
         },
         {
            title: 'React.js and Component-Based Architecture',
            summary:
               'Building Single Page Applications (SPAs) using React hooks, functional components, and client-side routing.',
            lessons: [
               'React Hooks (useState, useEffect, useContext) Deep Dive',
               'Component Lifecycle and Performance Optimization',
               'Client-Side Routing with React Router',
            ],
         },
         {
            title: 'Back-End Mastery with Node.js/Express',
            summary:
               'Designing and implementing robust RESTful APIs using Node.js, the Express framework, and MongoDB.',
            lessons: [
               'Node.js and Express Server Setup',
               'Designing RESTful APIs and CRUD Operations',
               'Database Integration (MongoDB/Mongoose)',
            ],
         },
         {
            title: 'Authentication, Security, and Deployment',
            summary:
               'Securing the application with JWT, handling state, and deploying the full-stack application to a cloud provider.',
            lessons: [
               'User Authentication with JWT and Bcrypt',
               'Security (CORS, Helmet) and Error Handling',
               'Deployment to Vercel/Render/Heroku',
            ],
         },
      ],
      title: 'Web Development Full Stack (Advanced)',
      instructor: 'Web Dev Team',
      planType: 'monthly',
      duration: '50 Hrs',
      description:
         'Comprehensive program covering both front-end and back-end frameworks for job readiness.',
      level: 'Advanced',
      prerequisites: ['Basic programming logic'],
      techStack: [
         'HTML',
         'CSS',
         'JavaScript',
         'React',
         'Node.js',
         'Express',
         'MongoDB',
      ],
      keyFeatures: [
         'Building a Full-Stack MERN Application',
         'Mastering both front-end and back-end frameworks',
         'Authentication and API Security Implementation',
         'Portfolio-ready job projects',
      ],
      projectTitle: 'E-commerce Platform and Dashboard',
   },

   // 14. DATA ANALYSIS AND VISUALIZATION (Modules Added)
   'data-analysis': {
      outline: [
         {
            title: 'Advanced SQL & Data Warehousing',
            summary:
               'Mastering complex SQL queries (window functions, CTEs) and basic data warehouse concepts.',
            lessons: [
               'Complex Joins and Subqueries',
               'Window Functions and Common Table Expressions (CTEs)',
               'Introduction to ETL Processes',
            ],
         },
         {
            title: 'Power BI Data Modeling & DAX',
            summary:
               'Importing data, establishing relationships, and writing powerful formulas using Data Analysis Expressions (DAX).',
            lessons: [
               'Data Import and Query Editor (Power Query)',
               'Data Modeling and Relationship Management',
               'DAX Fundamentals (Measures and Calculated Columns)',
            ],
         },
         {
            title: 'Creating Interactive Dashboards',
            summary:
               'Designing visually compelling and insightful dashboards for business intelligence reporting.',
            lessons: [
               'Choosing the Right Visualizations',
               'Dashboard Design Best Practices',
               'Publishing and Sharing Reports',
            ],
         },
      ],
      title: 'Data Analysis and Visualization with Power BI & SQL',
      instructor: 'BI Team',
      planType: 'monthly',
      duration: '18 Hrs',
      description:
         'Transform raw data into actionable business intelligence using industry-leading tools and advanced SQL.',
      level: 'Intermediate',
      prerequisites: ['Familiarity with Excel'],
      techStack: ['Power BI', 'SQL', 'Advanced Excel', 'DAX'],
      keyFeatures: [
         'Creating Interactive Dashboards',
         'Data Modeling and ETL Processes',
         'Advanced DAX Formulas',
      ],
      projectTitle: 'Creating a Quarterly Sales Performance Dashboard',
   },

   // 15. MOBILE APP DEVELOPMENT (Modules Added)
   'mobile-app-development': {
      outline: [
         {
            title: 'React Native Fundamentals & Environment Setup',
            summary:
               'Setting up the development environment, component structure, and basic styling.',
            lessons: [
               'Setting up Expo and React Native CLI',
               'Core Components and Props',
               'Flexbox and Mobile Styling',
            ],
         },
         {
            title: 'State Management & Navigation',
            summary:
               'Implementing global state management and creating multi-screen navigation using React Navigation.',
            lessons: [
               'React Navigation (Stack, Tab, Drawer)',
               'Context API for State Management',
               'Introduction to Redux/Zustand for Mobile',
            ],
         },
         {
            title: 'Native Features & Deployment',
            summary:
               'Accessing device features (camera, location) and preparing the app for distribution on app stores.',
            lessons: [
               'Accessing Camera and Geolocation',
               'Working with Local Storage (AsyncStorage)',
               'Building and Deploying to iOS/Android Stores',
            ],
         },
      ],
      title: 'Cross-Platform Mobile App Development (React Native)',
      instructor: 'Mobile Team',
      planType: 'monthly',
      duration: '20 Hrs',
      description:
         'Build high-performance, native-like mobile apps for iOS and Android using a single codebase.',
      level: 'Intermediate',
      prerequisites: ['Basic programming in JavaScript or Kotlin/Swift'],
      techStack: ['React Native', 'Flutter (Intro)', 'Firebase', 'Expo'],
      keyFeatures: [
         'Cross-Platform Development',
         'State Management (Redux/Provider)',
         'Native Module Integration',
      ],
      projectTitle: 'Social Media Clone App',
   },

   // 16. GAME DEVELOPMENT (Modules Added)
   'game-development': {
      outline: [
         {
            title: 'Unity Engine & C# Scripting Basics',
            summary:
               'Navigating the Unity editor, understanding GameObjects, and learning foundational C# scripting for game logic.',
            lessons: [
               'Unity Editor Overview and Scene Management',
               'C# Basics (Variables, Functions, Classes)',
               'Input Management and Event Systems',
            ],
         },
         {
            title: 'Physics, Collisions & Level Design',
            summary:
               'Implementing 2D/3D physics, handling collisions, and creating engaging game levels.',
            lessons: [
               'Rigidbodies and Colliders',
               'Creating a 2D Platformer Character',
               'Designing a Simple 3D Environment',
            ],
         },
         {
            title: 'Asset Pipeline & Final Build',
            summary:
               'Importing and optimizing art/audio assets and preparing the final game for distribution.',
            lessons: [
               'Asset Optimization and LODs',
               'UI/UX Design for Games',
               'Building and Exporting to PC/Web',
            ],
         },
      ],
      title: 'Game Development with Unity and C#',
      instructor: 'Game Dev Team',
      planType: 'monthly',
      duration: '25 Hrs',
      description:
         'Learn C# scripting, 2D/3D physics, and asset pipeline management in the Unity game engine.',
      level: 'Intermediate',
      prerequisites: ['Basic programming in C#'],
      techStack: ['Unity Engine', 'C#', 'Blender (Intro)'],
      keyFeatures: [
         '2D and 3D Game Physics',
         'Scripting Game Logic',
         'Asset Management and Optimization',
      ],
      projectTitle: 'Creating a Simple Platformer Game',
   },

   // 17. SQL FUNDAMENTALS (Modules Added)
   'sql-fundamentals': {
      outline: [
         {
            title: 'Relational Database Design & Schema',
            summary:
               'Understanding the structure of relational databases (RDBMS) and applying normalization rules.',
            lessons: [
               'Introduction to RDBMS and Key Concepts',
               'Database Normalization (1NF, 2NF, 3NF)',
               'Creating Tables and Defining Constraints',
            ],
         },
         {
            title: 'Core SQL Queries and Data Retrieval',
            summary:
               'Mastering SELECT, WHERE, GROUP BY, and different types of JOINs.',
            lessons: [
               'Basic CRUD Operations (SELECT, INSERT, UPDATE, DELETE)',
               'Filtering and Sorting Data',
               'INNER, LEFT, RIGHT, and FULL JOINs',
            ],
         },
         {
            title: 'Advanced Queries and Performance',
            summary:
               'Using subqueries, views, and indexes to write efficient and complex database interactions.',
            lessons: [
               'Subqueries and Common Table Expressions (CTEs)',
               'Creating Views and Stored Procedures',
               'Indexing and Query Performance Tuning',
            ],
         },
      ],
      title: 'SQL Fundamentals and Database Design',
      instructor: 'Database Team',
      planType: 'monthly',
      duration: '10 Hrs',
      description:
         'Master basic to advanced SQL queries and best practices for relational database design.',
      level: 'Beginner',
      prerequisites: ['None'],
      techStack: ['PostgreSQL', 'MySQL', 'SQLAlchemy'],
      keyFeatures: [
         'Advanced Joins and Subqueries',
         'Database Normalization',
         'Performance Tuning with Indexing',
      ],
      projectTitle:
         'Designing a Customer Relationship Management (CRM) Database',
   },

   // 18. ETHICAL HACKING (Modules already exist)
   'cyber-security': {
      title: 'Certified Ethical Hacking & Advanced Penetration Testing',
      description:
         'A hands-on, simulated course covering the full lifecycle of a penetration test. Understand vulnerability analysis, network defense, social engineering, and secure configuration management to become a certified ethical hacker.',
      duration: '30 Hrs',
      instructor: 'Security Team',
      planType: 'lifetime',
      level: 'Intermediate',
      projectTitle: 'Full Penetration Test Report on a Virtual Network',
      prerequisites: [
         'Familiarity with Linux OS',
         'Basic understanding of TCP/IP networking',
      ],
      techStack: [
         'Kali Linux',
         'Metasploit',
         'Nmap',
         'Wireshark',
         'Python (Scripting)',
      ],
      keyFeatures: [
         'Mastering the MITRE ATT&CK Framework',
         'Advanced SQL Injection and Cross-Site Scripting (XSS) attacks',
         'Network Sniffing and Man-in-the-Middle Attacks',
         'Creating Professional Penetration Testing Reports',
      ],
      outline: [
         {
            title: 'Vulnerability Analysis and Scanning',
            summary: 'Information gathering and finding weaknesses in systems.',
            lessons: [
               'Introduction to Kali Linux and Virtual Environments',
               'Active and Passive Reconnaissance',
               'Network Scanning Tools (Nmap)',
               'Vulnerability Assessment Reporting',
            ],
         },
         {
            title: 'Exploitation and Post-Exploitation',
            summary: 'Gaining access and maintaining persistence.',
            lessons: [
               'Introduction to Metasploit Framework',
               'Buffer Overflows and Web Application Exploits',
               'Privilege Escalation Techniques',
               'Covering Tracks and Persistence',
            ],
         },
         {
            title: 'Network Defense and Security',
            summary: 'The blue team perspective: defense and hardening.',
            lessons: [
               'Firewall and IDS/IPS Evasion',
               'Intrusion Detection System (IDS) Configuration',
               'Security Best Practices and Hardening Servers',
            ],
         },
      ],
   },
};

// Final 'sampleCourses' object, which is what the component expects.
const sampleCourses = {
   ..._coreCourses,
};
// --- END Centralized Course Data ---

const CourseDetailPage = () => {
   const { courseId } = useParams();
   const navigate = useNavigate();

   const [course, setCourse] = useState(null);
   const [loading, setLoading] = useState(true);
   const [openModules, setOpenModules] = useState({}); // tracks which module indexes are expanded

   useEffect(() => {
      setLoading(true);

      const found = sampleCourses[courseId];
      if (found) {
         setCourse(found);
         // Optionally initialize the first module open
         setOpenModules({ 0: true });
      } else {
         setCourse(null);
      }
      setLoading(false);
   }, [courseId]);

   const toggleModule = (idx) =>
      setOpenModules((s) => ({ ...s, [idx]: !s[idx] }));

   const handleEnroll = () => {
      if (!course) return;

      const { planType } = course;

      if (planType === 'lifetime') {
         // Redirect to lifetime access page
         navigate(`/lifetime?course=${encodeURIComponent(courseId)}`);
         return;
      }

      // default: go to pricing and pass the course slug
      navigate(`/pricing?plan=${encodeURIComponent(courseId)}&from=course`);
   };

   if (loading) {
      return (
         <div className="min-h-screen bg-academy-bg text-white flex items-center justify-center p-8">
            <div>Loading course details...</div>
         </div>
      );
   }

   if (!course) {
      return (
         <div className="min-h-screen bg-academy-bg text-white pt-24 px-4">
            <div className="max-w-4xl mx-auto text-center p-8 bg-gray-900 rounded-xl shadow-xl border border-gray-700">
               <h2 className="text-3xl font-extrabold mb-4 text-red-400">
                  Course not found
               </h2>
               <p className="text-gray-400 mb-6">
                  We couldn't find the course with the ID:{' '}
                  <strong className="text-academy-accent">{courseId}</strong>.
               </p>
               <Link
                  to="/courses"
                  className="px-4 py-2 rounded-md bg-academy-accent text-black font-semibold hover:opacity-90 transition"
               >
                  Back to the Full Catalog
               </Link>
            </div>
         </div>
      );
   }

   // Determine the color/style for the enrollment button based on planType
   const isLifetime = course.planType === 'lifetime';
   const enrollButtonClass = isLifetime
      ? 'px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300'
      : 'px-6 py-3 bg-academy-accent text-black font-semibold rounded-lg shadow-lg hover:opacity-95 transition duration-300';
   const planText = isLifetime
      ? 'Get Lifetime Access'
      : 'Start with Monthly Plan';

   // Safely determine level color (uses nullish coalescing for safety)
   const levelColor =
      {
         Beginner: 'text-green-400 bg-green-900/50',
         Intermediate: 'text-yellow-400 bg-yellow-900/50',
         Advanced: 'text-red-400 bg-red-900/50',
         Expert: 'text-purple-400 bg-purple-900/50',
      }[course.level] || 'text-gray-400 bg-gray-700/50'; // Default color if level is missing

   return (
      <div className="min-h-screen bg-academy-bg text-white pt-24 px-4">
         <div className="max-w-5xl mx-auto space-y-12 py-10">
            {/* Header Section (Enhanced) */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700">
               <p className="text-sm font-semibold uppercase tracking-wider text-academy-accent mb-2">
                  {course.instructor} presents
               </p>
               <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
                  {course.title}
               </h1>
               <p className="text-xl text-gray-300 max-w-4xl">
                  {course.description}
               </p>

               <div className="flex flex-wrap items-center mt-6 gap-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                     <span className="font-medium text-white">
                        {course.duration}
                     </span>
                     <span>Total Course Time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                     <span
                        className={`font-medium ${
                           isLifetime
                              ? 'text-indigo-400'
                              : 'text-academy-accent'
                        }`}
                     >
                        {course.planType.toUpperCase()}
                     </span>
                     <span>Enrollment Type</span>
                  </div>
                  {/* New Level Tag (Safely rendered) */}
                  {course.level && (
                     <div className="flex items-center space-x-2">
                        <span
                           className={`font-medium px-2 py-0.5 rounded-full text-xs uppercase tracking-wider ${levelColor}`}
                        >
                           {course.level}
                        </span>
                     </div>
                  )}
               </div>

               <div className="mt-8">
                  <button onClick={handleEnroll} className={enrollButtonClass}>
                     {planText}
                  </button>
               </div>
            </div>

            {/* Key Details Section (Safely rendered) */}
            {(course.keyFeatures?.length > 0 ||
               course.prerequisites?.length > 0 ||
               course.techStack?.length > 0) && (
               <section className="grid md:grid-cols-2 gap-8">
                  {/* Key Takeaways */}
                  {course.keyFeatures?.length > 0 && (
                     <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-2xl space-y-4">
                        <h3 className="text-2xl font-bold text-academy-accent">
                           🚀 Key Takeaways
                        </h3>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside">
                           {course.keyFeatures.map((feature, i) => (
                              <li key={i} className="text-lg">
                                 <strong className="text-white">
                                    {feature}
                                 </strong>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )}

                  {/* Course Requirements */}
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-2xl space-y-4">
                     <h3 className="text-2xl font-bold text-indigo-400">
                        📚 Course Requirements
                     </h3>
                     <div className="space-y-4">
                        {/* Prerequisites */}
                        {course.prerequisites?.length > 0 && (
                           <div>
                              <h4 className="font-semibold text-white">
                                 Prerequisites:
                              </h4>
                              <ul className="text-gray-300 list-disc list-inside ml-4">
                                 {course.prerequisites.map((req, i) => (
                                    <li key={`req-${i}`}>{req}</li>
                                 ))}
                              </ul>
                           </div>
                        )}
                        {/* Tech Stack */}
                        {course.techStack?.length > 0 && (
                           <div>
                              <h4 className="font-semibold text-white">
                                 Tech Stack Covered:
                              </h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                 {course.techStack.map((tech, i) => (
                                    <span
                                       key={`tech-${i}`}
                                       className="text-sm px-3 py-1 bg-gray-700 rounded-full text-gray-200"
                                    >
                                       {tech}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </section>
            )}

            {/* Main Project (Safely rendered) */}
            {course.projectTitle && (
               <section className="rounded-xl bg-gray-900 p-8 border border-gray-700 shadow-2xl">
                  <h2 className="text-3xl font-bold mb-3 text-white">
                     🔥 Capstone Project:
                  </h2>
                  <p className="text-xl text-yellow-400 font-semibold mb-4">
                     {course.projectTitle}
                  </p>
                  <p className="text-gray-400">
                     This hands-on project is the core deliverable of the
                     course, ensuring you can apply all learned skills to a
                     real-world, portfolio-ready application or solution.
                  </p>
               </section>
            )}

            {/* Roadmap / Outline Section */}
            <section className="rounded-xl bg-gray-900 p-8 border border-gray-700 shadow-2xl">
               <h2 className="text-3xl font-bold mb-6 flex items-center space-x-3 text-academy-accent">
                  <LayoutList className="w-8 h-8" />
                  <span>
                     Detailed Course Roadmap ({course.outline.length} Modules)
                  </span>
               </h2>
               <p className="text-gray-400 mb-8">
                  The full curriculum is broken down by module. Click to expand
                  and see the individual lessons.
               </p>

               <div className="space-y-4">
                  {course.outline.map((mod, idx) => (
                     <div
                        key={idx}
                        className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300"
                     >
                        <div
                           className="flex items-start justify-between p-5 cursor-pointer hover:bg-gray-700/70"
                           onClick={() => toggleModule(idx)}
                        >
                           <div>
                              <h3 className="text-xl font-semibold text-white">
                                 Module {idx + 1}: {mod.title}
                              </h3>
                              {/* Display the enhanced summary here */}
                              {mod.summary && (
                                 <p className="text-sm text-gray-400 mt-1">
                                    {mod.summary}
                                 </p>
                              )}
                           </div>
                           <button
                              className="p-1 text-gray-400 hover:text-white transition duration-150"
                              aria-expanded={!!openModules[idx]}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className={`w-6 h-6 transition-transform duration-300 ${
                                    openModules[idx]
                                       ? 'rotate-180 text-academy-accent'
                                       : 'rotate-0'
                                 }`}
                              >
                                 <path d="m6 9 6 6 6-6" />
                              </svg>
                           </button>
                        </div>

                        {/* Collapsible Lessons Content */}
                        {openModules[idx] && (
                           <div className="p-5 pt-0 border-t border-gray-700">
                              <ul className="space-y-2 text-base text-gray-300 list-none">
                                 {mod.lessons.map((lesson, i) => (
                                    <li
                                       key={i}
                                       className="flex items-center justify-between border-b border-gray-700/50 py-2 last:border-b-0"
                                    >
                                       <span className="flex items-center">
                                          <span className="text-green-400 text-lg mr-3">
                                             ✓
                                          </span>
                                          {lesson}
                                       </span>
                                       <span className="text-xs text-gray-500 italic">
                                          {/* Placeholder for lesson duration if needed, currently empty */}
                                       </span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </section>

            {/* Final Call to Action */}
            <div className="rounded-xl bg-gray-900 p-6 border border-gray-700 text-center">
               <h3 className="text-2xl font-bold mb-3 text-white">
                  Secure Your Spot Now!
               </h3>
               <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Ready to start mastering {course.title}? Click below to select
                  your plan and begin your journey immediately.
               </p>
               <div className="flex justify-center gap-4">
                  <button onClick={handleEnroll} className={enrollButtonClass}>
                     {planText}
                  </button>
                  <Link
                     to="/courses"
                     className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                     Explore More Courses
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseDetailPage;
