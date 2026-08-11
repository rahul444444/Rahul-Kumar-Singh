import { Project, Experience, SkillCategory, EducationItem, CertificationItem, AchievementItem } from '../types';

export const personalDetails = {
  name: 'Rahul Kumar Singh',
  role: 'Flutter & Laravel Developer',
  tagline: 'Mobile Application Developer | Full Stack Developer | Clean Architecture Specialist',
  location: 'West Champaran, Bihar, India',
  phone: '+91 9334274325',
  email: 'rk9600460@gmail.com',
  github: 'https://github.com/TechRizex',
  experienceYears: '2+ Years',
  appsDelivered: '15+ Apps',
  playStoreApps: '10+ Live Apps',
  summary: 'Passionate Flutter & Laravel Developer with 2+ years of professional experience building scalable Android applications, Laravel backend systems, REST APIs, Admin Panels, and real-time applications. Specialized in developing production-ready applications using Flutter, Laravel, Firebase, WebSocket, GetX, Provider, Bloc, MySQL, PostgreSQL, Google Maps, Payment Gateway Integration, Push Notifications, and Clean Architecture.',
  languages: ['English', 'Hindi'],
  softSkills: [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Agile Development',
    'Debugging',
    'Performance Optimization',
    'Leadership',
    'Time Management'
  ]
};

export const keyAchievements: AchievementItem[] = [
  {
    metric: '15+',
    title: 'Commercial Applications',
    description: 'Built & architected full-stack mobile apps and robust Laravel backends.'
  },
  {
    metric: '10+',
    title: 'Live Play Store Apps',
    description: 'Deployed and maintained high-traffic production mobile apps.'
  },
  {
    metric: '2+ Yrs',
    title: 'Professional Experience',
    description: 'Specialized in Clean Architecture, GetX, Bloc, and REST API optimization.'
  },
  {
    metric: '100%',
    title: 'Real-Time Precision',
    description: 'Integrated WebSockets, Socket.IO, live location tracking, and Firebase FCM.'
  }
];

export const experiences: Experience[] = [
  {
    id: 'ontech',
    role: 'Flutter & Laravel Developer',
    company: 'Ontech Digital Solutions Pvt. Ltd.',
    period: 'Current Company',
    duration: '10+ Months',
    location: 'India',
    isCurrent: true,
    summary: 'Working on large-scale production Flutter applications and Laravel backend systems following Clean Architecture.',
    responsibilities: [
      'Developed scalable Flutter applications following Clean Architecture.',
      'Designed and maintained high-performance Laravel REST APIs.',
      'Integrated WebSocket for real-time communication & live location updates.',
      'Implemented Firebase Authentication, Cloud Messaging Notifications, and Analytics.',
      'Integrated Google Maps API, Location Tracking, and Geolocator plugins.',
      'Optimized REST API database queries for ultra-fast response times.',
      'Published and maintained production applications on Google Play Store.',
      'Collaborated seamlessly with UI/UX designers, QA engineers, and backend teams.',
      'Fixed production bottlenecks and improved mobile app rendering performance.'
    ],
    liveAppsDelivered: [
      {
        name: 'The Helply',
        description: 'Urban Company-style service marketplace connecting customers with verified professionals.',
        badge: 'Customer App'
      },
      {
        name: 'The Helply Partner',
        description: 'Partner application for service providers to accept jobs, track earnings, and navigate live.',
        badge: 'Partner App'
      },
      {
        name: 'PaisaWasul',
        description: 'Financial collection management platform for automated tracking, reports & dashboards.',
        badge: 'Fintech Portal'
      },
      {
        name: 'PaisaWasul Partner',
        description: 'Field executive application for daily collections, live location logging & payment tracking.',
        badge: 'Field Exec'
      },
      {
        name: 'Driver24×7',
        description: 'Cab and Driver Booking Platform with real-time driver search, booking & trip history.',
        badge: 'Rider App'
      },
      {
        name: 'Driver24×7 Partner',
        description: 'Driver-side app with instant ride acceptance, earnings wallet, and live GPS navigation.',
        badge: 'Driver App'
      }
    ]
  },
  {
    id: 'hottrix',
    role: 'Flutter & Laravel Developer',
    company: 'Hottrix IT Services Pvt. Ltd.',
    period: 'Past Role',
    duration: '1 Year 6 Months',
    location: 'India',
    isCurrent: false,
    summary: 'Worked on enterprise mobile applications, Laravel backend development, API integration, and production support in an Agile environment.',
    responsibilities: [
      'Built custom Flutter mobile applications from scratch.',
      'Developed modular Laravel REST APIs and comprehensive Admin Panels.',
      'Integrated Firebase Authentication, Firestore databases, and FCM.',
      'Implemented WebSockets for live chat, notification feeds, and real-time state sync.',
      'Integrated Razorpay and secure payment gateway webhooks.',
      'Optimized database queries in MySQL and PostgreSQL for reduced server load.',
      'Resolved complex production bugs and maintained high application uptime.',
      'Worked in fast-paced Agile sprint cycles with CI/CD deployments.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'helply-customer',
    title: 'The Helply - Service Marketplace',
    category: 'marketplace',
    shortDesc: 'Urban Company-style on-demand home and local service booking app.',
    fullDesc: 'A comprehensive service marketplace application connecting users with verified local service professionals. Features end-to-end service booking, live status tracking, secure online payments via Razorpay, rating/reviews system, and push notifications.',
    company: 'Ontech Digital Solutions',
    role: 'Lead Mobile & Backend Developer',
    technologies: ['Flutter', 'Laravel', 'GetX', 'Google Maps', 'Razorpay', 'Firebase FCM'],
    features: [
      'Interactive Service Booking & Category Browsing',
      'Real-time Service Order Status Tracking',
      'Integrated Razorpay Payment Gateway & Invoice Generation',
      'Verified Ratings & Customer Review Engine',
      'Firebase Push Notifications & In-App Alerts',
      'Google Maps Geolocation for Address Auto-Complete'
    ],
    liveLink: 'https://play.google.com/store',
    isLiveApp: true,
    appType: 'Customer',
    iconName: 'Wrench',
    screenshotsColor: 'from-amber-500/20 to-orange-600/20',
    stats: '10K+ Bookings Handled'
  },
  {
    id: 'helply-partner',
    title: 'The Helply Partner App',
    category: 'marketplace',
    shortDesc: 'Dedicated vendor app for service providers to manage jobs and earnings.',
    fullDesc: 'Partner application enabling service technicians to accept incoming jobs in real-time, view route navigation, manage daily earnings, update service progress, and maintain their professional profile.',
    company: 'Ontech Digital Solutions',
    role: 'Lead Mobile Developer',
    technologies: ['Flutter', 'GetX', 'Laravel API', 'WebSocket', 'Google Maps', 'Firebase'],
    features: [
      'Instant Job Request Popups & Accept/Reject Logic',
      'Live GPS Navigation to Customer Location',
      'Daily/Weekly Earnings Dashboard & Payout Requests',
      'Service Completion Workflow with Image Verification',
      'Real-Time Chat & Direct Call with Customer'
    ],
    liveLink: 'https://play.google.com/store',
    isLiveApp: true,
    appType: 'Partner/Provider',
    iconName: 'Briefcase',
    screenshotsColor: 'from-amber-600/20 to-yellow-600/20',
    stats: '500+ Verified Partners'
  },
  {
    id: 'paisawasul',
    title: 'PaisaWasul - Collection Platform',
    category: 'fintech',
    shortDesc: 'Financial collection management platform for debt recovery & loan tracking.',
    fullDesc: 'Enterprise fintech collection management system featuring automated customer tracking, real-time agent dispatch, collection reporting, admin metrics dashboard, and automated receipt generation.',
    company: 'Ontech Digital Solutions',
    role: 'Full Stack Developer',
    technologies: ['Flutter', 'Laravel', 'MySQL', 'Bloc', 'REST APIs', 'Razorpay'],
    features: [
      'Comprehensive Loan & Collection Tracking System',
      'Automated Customer Risk & Overdue Scoring',
      'Detailed Financial Reports & Ledger Export (PDF/Excel)',
      'Admin Control Panel for Field Agent Allocation',
      'Real-Time Collection Receipting & Payment Sync'
    ],
    liveLink: 'https://play.google.com/store',
    isLiveApp: true,
    appType: 'Full System',
    iconName: 'IndianRupee',
    screenshotsColor: 'from-emerald-500/20 to-teal-600/20',
    stats: '₹50M+ Collections Logged'
  },
  {
    id: 'paisawasul-partner',
    title: 'PaisaWasul Partner App',
    category: 'fintech',
    shortDesc: 'Field executive collection app with live location and offline receipting.',
    fullDesc: 'Mobility app for recovery field executives to track daily collection targets, log customer visits with geo-stamping, issue instant digital receipts, and sync with the central Laravel server.',
    company: 'Ontech Digital Solutions',
    role: 'Mobile Developer',
    technologies: ['Flutter', 'Geolocator', 'Laravel', 'SQLite Local DB', 'OTP Auth'],
    features: [
      'Geo-Stamped Daily Collection Routines',
      'Live Location Logging & Route Optimization',
      'Instant Payment Collection & Digital Receipts',
      'Offline Data Caching with Auto Server Sync',
      'OTP Customer Collection Verification'
    ],
    liveLink: 'https://play.google.com/store',
    isLiveApp: true,
    appType: 'Executive',
    iconName: 'ShieldCheck',
    screenshotsColor: 'from-emerald-600/20 to-cyan-600/20',
    stats: 'Daily Field Operations'
  },
  {
    id: 'driver247',
    title: 'Driver24×7 - Cab & Driver Booking',
    category: 'logistics',
    shortDesc: 'On-demand cab and private driver booking platform with live ride tracking.',
    fullDesc: 'Logistics and mobility booking engine allowing riders to search nearby available drivers, calculate fares, book rides, track vehicle location in real-time, and pay seamlessly.',
    company: 'Ontech Digital Solutions',
    role: 'Lead Developer',
    technologies: ['Flutter', 'Laravel', 'WebSocket', 'Google Maps API', 'Razorpay'],
    features: [
      'Interactive Map with Nearby Live Driver Markers',
      'Dynamic Fare Estimator & Distance Calculation',
      'Live Vehicle Location Tracking via WebSockets',
      'Trip History, E-Receipts & Emergency SOS',
      'Multi-Payment Integration (Cash, UPI, Cards)'
    ],
    liveLink: 'https://play.google.com/store',
    isLiveApp: true,
    appType: 'Customer',
    iconName: 'Car',
    screenshotsColor: 'from-blue-500/20 to-indigo-600/20',
    stats: 'Real-time GPS Tracking'
  },
  {
    id: 'driver247-partner',
    title: 'Driver24×7 Partner App',
    category: 'logistics',
    shortDesc: 'Driver application with ride requests, in-app navigation, and digital wallet.',
    fullDesc: 'Driver-facing mobile application featuring audio ride alerts, instant acceptance, turn-by-turn Google Maps navigation, wallet balance tracking, and withdrawal requests.',
    company: 'Ontech Digital Solutions',
    role: 'Lead Developer',
    technologies: ['Flutter', 'Background Geolocation', 'WebSocket', 'Laravel', 'Firebase FCM'],
    features: [
      'Audio & Visual Ride Request Popups',
      'Turn-by-Turn GPS Route Guidance',
      'Driver Wallet Management & Instant Payouts',
      'Daily Ride Analytics & Peak Hour Heatmaps',
      'Driver Document Verification & Status Toggle'
    ],
    liveLink: 'https://play.google.com/store',
    isLiveApp: true,
    appType: 'Driver',
    iconName: 'Navigation',
    screenshotsColor: 'from-blue-600/20 to-sky-600/20',
    stats: 'Low Latency Socket Sync'
  },
  {
    id: 'fitamigo',
    title: 'FitAmigo - Fitness Social Network',
    category: 'social',
    shortDesc: 'Tinder-inspired fitness social networking & workout partner finder.',
    fullDesc: 'A fitness social networking platform where health enthusiasts match with nearby gym buddies, discover local fitness clubs, consult certified coaches, purchase courses, and chat in real-time.',
    role: 'Full Stack Creator',
    technologies: ['Flutter', 'Laravel', 'Firebase', 'WebSocket', 'Google Maps'],
    features: [
      'OTP Login & Profile Onboarding',
      'Nearby Gym & Fitness Spot Discovery via Maps',
      'Coach Registration & Course Storefront',
      'Swipe/Match Friend Requests & 1-on-1 Real-time Chat',
      'Push Notifications & Fitness Challenge Feeds'
    ],
    isLiveApp: false,
    appType: 'Full System',
    iconName: 'Dumbbell',
    screenshotsColor: 'from-rose-500/20 to-pink-600/20',
    stats: 'Social & Match Engine'
  },
  {
    id: 'villager-jobs',
    title: 'Villager Jobs - Job Portal',
    category: 'edtech',
    shortDesc: 'WorkIndia-style blue-collar & local job recruitment ecosystem.',
    fullDesc: 'Job portal connecting local job seekers with employers. Includes candidate resume creation, employer job posting workflows, candidate tracking dashboard, and an integrated Admin Panel.',
    role: 'Full Stack Developer',
    technologies: ['Flutter', 'Laravel', 'MySQL', 'Provider', 'REST APIs'],
    features: [
      'Smart Job Filtering by Distance & Skill',
      'Employer Portal for Job Posting & Applicant Review',
      'In-App Resume Builder & PDF Generation',
      'Candidate Direct Call & WhatsApp Contact',
      'Comprehensive Admin Management Dashboard'
    ],
    isLiveApp: false,
    appType: 'Full System',
    iconName: 'Users',
    screenshotsColor: 'from-purple-500/20 to-violet-600/20',
    stats: 'Recruitment Workflow'
  },
  {
    id: 'degreeduniya',
    title: 'DegreeDuniya - Career Counselling',
    category: 'edtech',
    shortDesc: 'Education portal for college discovery, counseling & admission guidance.',
    fullDesc: 'EdTech portal enabling students to search colleges, compare courses, seek expert career counseling, apply for admissions online, and track application milestones.',
    role: 'Full Stack Developer',
    technologies: ['Flutter', 'Laravel', 'MySQL', 'Firebase', 'REST APIs'],
    features: [
      'Colleges & University Search Engine with Filters',
      'Career Counseling Booking & Consultation',
      'Online Admission Application Tracking',
      'Student Dashboard & Application History',
      'Scholarship Alerts & Entrance Exam Updates'
    ],
    isLiveApp: false,
    appType: 'Customer',
    iconName: 'GraduationCap',
    screenshotsColor: 'from-cyan-500/20 to-blue-600/20',
    stats: 'College Discovery Engine'
  },
  {
    id: 'dream-home-pg',
    title: 'Dream Home PG - Management System',
    category: 'fintech',
    shortDesc: 'Paying Guest (PG) & hostel tenant management & automated rent platform.',
    fullDesc: 'Property management system for PG owners to manage room availability, tenant onboarding, automated rent payment collection, utility bill logs, and admin analytics.',
    role: 'Full Stack Developer',
    technologies: ['Flutter', 'Laravel', 'MySQL', 'GetX', 'Razorpay'],
    features: [
      'Room & Bed Availability Grid View',
      'Digital Tenant Onboarding & Document Verification',
      'Automated Rent Reminders & Digital Payments',
      'Maintenance Request Ticket Raising System',
      'Owner Financial P&L Dashboard'
    ],
    isLiveApp: false,
    appType: 'Full System',
    iconName: 'Home',
    screenshotsColor: 'from-amber-500/20 to-emerald-600/20',
    stats: 'Automated Rent Logs'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Development',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter', level: 95, description: 'Cross-platform native UI framework, animations, custom painting & widgets', highlight: true },
      { name: 'Dart', level: 92, description: 'Strong OOP, asynchronous programming, isolates & functional Dart', highlight: true },
      { name: 'Android SDK', level: 85, description: 'Native Android components, manifests, Gradle build configs, services' },
      { name: 'Clean Architecture', level: 90, description: 'Separation of concerns (Data, Domain, Presentation layers)', highlight: true }
    ]
  },
  {
    title: 'Backend & Frameworks',
    icon: 'Server',
    skills: [
      { name: 'Laravel (PHP)', level: 92, description: 'REST API design, Eloquent ORM, Middleware, Queue workers, Auth', highlight: true },
      { name: 'RESTful APIs', level: 95, description: 'Scalable API structure, rate limiting, JWT/Sanctum authentication', highlight: true },
      { name: 'MVC Architecture', level: 90, description: 'Clean controller-model separation, service pattern & repositories' }
    ]
  },
  {
    title: 'State Management',
    icon: 'Layers',
    skills: [
      { name: 'GetX', level: 95, description: 'Reactive state management, route management & dependency injection', highlight: true },
      { name: 'Provider', level: 88, description: 'ChangeNotifier, ProxyProvider & state lifecycle optimization' },
      { name: 'Bloc / Cubit', level: 85, description: 'Event-driven state management, streams & state immutability' }
    ]
  },
  {
    title: 'Databases & Persistence',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 90, description: 'Relational database schema design, indexing & complex JOINs', highlight: true },
      { name: 'PostgreSQL', level: 85, description: 'JSONB queries, relational integrity & performance tuning' },
      { name: 'Firebase Firestore', level: 92, description: 'NoSQL collections, real-time listeners & offline persistence', highlight: true },
      { name: 'MongoDB', level: 80, description: 'Document stores & aggregation pipelines' }
    ]
  },
  {
    title: 'Real-Time & Communication',
    icon: 'Radio',
    skills: [
      { name: 'WebSocket / Socket.IO', level: 90, description: 'Bi-directional real-time chat, notifications & live streaming', highlight: true },
      { name: 'Live Location Tracking', level: 92, description: 'Background GPS tracking, polyline rendering, distance matrix', highlight: true },
      { name: 'Firebase Cloud Messaging (FCM)', level: 95, description: 'Targeted push notifications, data payloads & deep linking' }
    ]
  },
  {
    title: 'Integrations & Cloud',
    icon: 'Cpu',
    skills: [
      { name: 'Google Maps API', level: 95, description: 'Custom map markers, route polylines, Places autocomplete', highlight: true },
      { name: 'Razorpay Payment Gateway', level: 90, description: 'Order creation, webhook signature verification, refund flow', highlight: true },
      { name: 'OTP & Phone Auth', level: 92, description: 'SMS gateway webhooks, Firebase Phone Auth, rate limits' },
      { name: 'Geolocator', level: 90, description: 'Accuracy tuning, geofencing & background location updates' }
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 92, description: 'Branching models, pull requests, merge conflict resolution' },
      { name: 'Android Studio / VS Code', level: 95, description: 'Advanced debugging, profiler, memory leak detection' },
      { name: 'Postman', level: 92, description: 'API collection testing, environment variables & automated scripts' },
      { name: 'Linux / Command Line', level: 85, description: 'Server deployment, SSH, Nginx proxy, file permissions' },
      { name: 'Play Store Publishing', level: 90, description: 'App Bundle signing, privacy policies, store release tracks' }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    period: 'Completed',
    highlights: [
      'Advanced Software Engineering & Enterprise Architecture',
      'Database Management Systems & Distributed Computing',
      'Mobile Application Engineering & Cloud Security'
    ]
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Maa Shakumbhari University',
    period: '2021 – 2024',
    highlights: [
      'Core Programming (Java, C++, Data Structures)',
      'Web Application Engineering & Relational Databases',
      'System Analysis and Design'
    ]
  },
  {
    degree: 'Intermediate (PCM)',
    institution: 'Board Examination',
    period: 'Senior Secondary',
    grade: '79.2%',
    highlights: ['Physics, Chemistry, Higher Mathematics']
  },
  {
    degree: 'Matriculation (High School)',
    institution: 'Board Examination',
    period: 'Secondary School',
    grade: '77.9%',
    highlights: ['Foundational Science & Mathematics']
  }
];

export const certifications: CertificationItem[] = [
  {
    title: 'Java Full Stack Development',
    issuer: 'Professional Certification',
    badgeColor: 'border-orange-500/50 text-orange-400 bg-orange-500/10'
  },
  {
    title: 'IBM Cloud & Data Science',
    issuer: 'IBM',
    badgeColor: 'border-blue-500/50 text-blue-400 bg-blue-500/10'
  },
  {
    title: 'SQL (5 Star / Advanced)',
    issuer: 'HackerRank',
    badgeColor: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10'
  },
  {
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    badgeColor: 'border-amber-500/50 text-amber-400 bg-amber-500/10'
  },
  {
    title: 'Oracle Certification',
    issuer: 'Oracle Corporation',
    badgeColor: 'border-red-500/50 text-red-400 bg-red-500/10'
  }
];
