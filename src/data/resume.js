// All resume content lives here so the UI stays purely presentational.
// Edit anything below and the site updates everywhere it's used.

export const profile = {
  name: 'Ritchie P. Nalam',
  firstName: 'Ritchie',
  title: 'Full Stack Software Developer',
  // Rotating words used by the hero typing effect.
  roles: [
    'Full Stack Developer',
    'Laravel & PHP Engineer',
    'React Native Mobile Dev',
    'Vue.js & React Builder',
    'Problem Solver',
  ],
  location: 'Deca Homes Talomo, Davao City, 8000, Davao Del Sur',
  phone: '+63 994 710 1127',
  phoneHref: 'tel:+639947101127',
  email: 'nalamritchie@gmail.com',
  yearsExperience: '6+',
  summary:
    'Full Stack Software Developer with over 6 years of experience designing, developing, and maintaining web and mobile applications. Proficient in Laravel, PHP, Vue.js, React Native, WordPress, JavaScript, TypeScript, and MySQL. Passionate about building scalable, user-friendly solutions, solving complex technical challenges, and delivering high-quality software that supports business growth. A collaborative team player with strong problem-solving skills and a commitment to continuous learning and professional development.',
};

export const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '11+', label: 'Key Projects' },
  { value: '3', label: 'Companies' },
  { value: '13+', label: 'Technologies' },
];

export const experience = [
  {
    company: 'Rag I.T Solutions',
    role: 'Fullstack Developer / Mobile Developer',
    location: 'Davao City',
    period: 'Present',
    current: true,
    points: [
      'Fixing bugs and building new functions using native PHP and mobile apps.',
      'Debugging existing projects using pure PHP, WordPress, Laravel, and mobile apps.',
    ],
  },
  {
    company: '21POS Inc',
    role: 'Software Developer',
    location: 'Davao City',
    period: 'Feb 2018 – Dec 2018',
    current: false,
    points: [
      'Fixing bugs and creating new functions using native PHP.',
      'Debugging existing projects using pure PHP, WordPress, and the CodeIgniter framework.',
    ],
  },
  {
    company: 'Mercadeo Consulting',
    role: 'Web Developer',
    location: 'Davao City',
    period: 'Apr 2016 – Dec 2017',
    current: false,
    points: [
      'Created and maintained existing websites (Theme X from Elegant Themes).',
      'Managed content with WordPress CMS.',
      'Built custom templates using PHP and custom plugins.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Web Development',
    skills: [
      { name: 'PHP (Native)', level: 95 },
      { name: 'Laravel', level: 90 },
      { name: 'CodeIgniter', level: 80 },
      { name: 'Vue.js', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'jQuery', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 88 },
      { name: 'Ionic Framework', level: 80 },
      { name: 'Angular', level: 72 },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'Git / Git Flow', level: 88 },
      { name: 'Adobe Photoshop', level: 78 },
      { name: 'PSD to HTML', level: 85 },
    ],
  },
  {
    title: 'CMS & More',
    skills: [
      { name: 'WordPress', level: 92 },
      { name: 'Custom Themes', level: 88 },
      { name: 'Custom Plugins', level: 85 },
      { name: 'Bug Fixing & Maintenance', level: 90 },
    ],
  },
];

export const projects = [
  { name: 'Entraguard Security & Access Platform', tags: ['React Native', 'Laravel', 'Node.js'], featured: true },
  { name: 'Enterprise Resource Planning (ERP) System', tags: ['Laravel', 'Vue.js', 'MySQL'] },
  { name: 'Point of Sale (POS) System', tags: ['PHP', 'Mobile App'] },
  { name: 'Online Lottery System', tags: ['Ionic', 'Angular', 'React Native/Expo'], featured: true },
  { name: 'E-Wallet System', tags: ['Laravel', 'MySQL'] },
  { name: 'Inventory Management System', tags: ['PHP', 'MySQL'] },
  { name: 'Booking System', tags: ['React Native', 'Laravel'] },
  { name: 'Barangay Information Management System', tags: ['PHP', 'WordPress'] },
  { name: 'Survey Management System', tags: ['Vue.js', 'PHP'] },
  { name: 'Webinar Management System', tags: ['Laravel', 'JavaScript'] },
  { name: 'Earn While Traveling Mobile App', tags: ['React Native', 'Expo'] },
];

export const education = [
  {
    level: 'Tertiary',
    school: 'University of Southeastern Philippines',
    detail: 'Bachelor of Science in Computer Technology',
    location: 'Obrero, Davao City',
    period: '2012 – 2016',
  },
  {
    level: 'Secondary',
    school: 'F. Bangoy National High School',
    detail: '',
    location: 'Sasa, Davao City',
    period: '2008 – 2012',
  },
  {
    level: 'Primary',
    school: 'Vicente Hizon Sr. Elementary School',
    detail: '',
    location: 'Sasa, Davao City',
    period: '2002 – 2008',
  },
];

export const references = [
  { name: 'Marlon Bentulan', role: 'Marketing Team', email: 'marlonbentulan@gmail.com' },
  { name: 'Marjun Ravanes', role: 'Software Developer', email: 'jun2mar@gmail.com' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
