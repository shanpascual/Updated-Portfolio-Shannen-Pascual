export const NAV_LEFT = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

export const NAV_RIGHT = [
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
];

export const RESUME_PDF = '/Shannen-Pascual-Resume.pdf';
export const CV_PDF = '/CV - Shannen-Pascual.pdf';

export const ROLES = ['Front-End Developer', 'UI/UX Designer', 'Web Designer'];

export const SERVICES = [
  { title: 'UI/UX App Design', img: '/images/iponly-app.png', link: 'https://iponly.vercel.app/' },
  {
    title: 'Front-End Development',
    img: '/images/fleur-1.png',
    link: 'https://www.figma.com/design/1TdgQ7OUSjnCnev3OQX2x7/Fleur-Lush-Desktop?t=1wm8aHyZwaPrkvx6-1',
  },
  { title: 'Website Design', img: '/images/mjquality-app.png', link: 'https://www.mjqualitycars.com/' },
];

export const JOURNEY = [
  {
    place: 'Clark International Airport Corporation (CIAC)',
    period: 'On-the-Job Training · 2026',
    title: 'OJT Trainee · MIS Department',
    detail:
      'Contributed to the Risk Management Information System, working on the UI/UX, Figma designs and form validations.',
  },
  {
    place: 'Holy Angel University',
    period: 'Currently 4th Year',
    title: 'BS Information Technology (Web Development)',
    detail:
      "Consistent Dean's Lister since AY 2023–2024. Building skills in web design, responsive development and interface prototyping.",
  },
  {
    place: 'Freelance · M & J Quality Used Cars',
    period: 'Client Project · December 2025',
    title: 'Front-End Web Developer',
    detail: 'Designed and built a mobile-first digital showroom with optimized assets and clear calls-to-action.',
  },
  {
    place: 'Holy Angel University',
    period: 'Senior High · 2022 – 2023',
    title: 'STEM Strand',
    detail: 'Graduated with 3rd Honor.',
  },
  {
    place: 'Holy Angel University',
    period: 'Junior High · 2017 – 2021',
    title: 'Junior High School',
    detail: 'Completed with Honors.',
  },
];

export const PROJECTS = [
  {
    title: 'CIAC Risk Management Information System',
    category: 'Web',
    gallery: ['/images/rms-1.jpg', '/images/rms-2.jpg'],
    features: ['UI/UX Design', 'Form Validations', 'Supabase Backend'],
    short: 'CIAC RMS',
    type: 'Web System · OJT Project',
    date: 'July 2026',
    description:
      'A Risk Management Information System built with the MIS Department at Clark International Airport Corporation during my on-the-job training. I contributed to the interface design and the input validations, helping keep the data entered into the system clean and the screens clear for staff to use. The screens shown here are my Figma designs, since the live system is company property and not available for public viewing.',
    tools: ['Figma', 'JSX', 'Supabase', 'Form Validation'],
    img: '/images/rms-1.jpg',
  },

    {
    title: 'Campass – Campus Queue App',
    category: 'Mobile',
    gallery: ['/images/campass-1.png', '/images/campass-3.png'],
    features: ['Virtual Queueing', 'Live Wait Estimates', 'Campus Office Directory'],
    short: 'Campass',
    type: 'Mobile App',
    date: 'March 2026',
    description:
      'A Flutter mobile app that lets Holy Angel University students queue for campus offices like the Finance Office, Registrar, Admissions and Clinic, then go elsewhere while they wait instead of standing in crowded lines. It shows your queue number, how many people are ahead and the estimated wait, and lets you know when it is your turn.',
    tools: ['Flutter', 'Dart', 'Android Studio', 'UI/UX Design'],
    img: '/images/campass-1.png',
  },

   {
    title: 'M & J Quality Used Cars',
    category: 'Web',
    gallery: ['/images/mj-cars-1.png', '/images/mj-cars-2.png'],
    features: ['Digital Showroom', 'Mobile-First', 'Optimized Assets'],
    short: 'M & J Cars',
    type: 'Full Website',
    date: 'December 2025',
    description:
      'A freelance digital showroom for quality used cars. A responsive, mobile-first platform with a clean inventory layout, clear sales calls-to-action and optimized images for fast loading.',
    tools: ['Angular', 'MongoDB', 'SEO', 'Responsive Design', 'Figma'],
    img: '/images/mj-cars-1.png',
    link: 'https://www.mjqualitycars.com/',
  },

  {
    title: 'Ben Ibe Website Mock Up',
    category: 'UI/UX',
    gallery: ['/images/ben-ibe-1.png', '/images/ben-ibe-2.png'],
    features: ['Visual Hierarchy', 'Intuitive Flow', 'Warm Palette'],
    short: 'Ben Ibe',
    type: 'UI/UX Design',
    date: 'October 2025',
    description:
      'A high-fidelity website mock-up for a flower shop in Angeles City. Clear visual hierarchy and well-structured content create a smooth flow from landing page to contact form, with a warm palette that conveys trust and personality.',
    tools: ['Figma', 'Prototype Design', 'Visual Hierarchy', 'Warm Palette'],
    img: '/images/ben-ibe-1.png',
    link: 'https://www.figma.com/design/Md0nXgu9QFOuyLTkyIfkv8/Ben-Ibe---Pascual---Punsalan-WD-302-Midterm-byPair?node-id=0-1&t=1wm8aHyZwaPrkvx6-1',
  },
 {
    title: 'Iponly – Savings App',
    category: 'Mobile',
    gallery: ['/images/iponly-1.png', '/images/iponly-2.png'],
    features: ['Gamified Savings', 'Interactive Feedback', 'Vibrant Interface'],
    short: 'Iponly',
    type: 'Mobile App Concept',
    date: 'October 2025',
    description:
      'A gamified savings app tackling the habit of consistent saving. User flows keep rewards and progress tracking from cluttering the core features, with interactive feedback loops and a vibrant interface.',
    tools: ['UI/UX Design', 'Mobile Prototyping', 'User Research', 'Node.js'],
    img: '/images/iponly-app.png',
    link: 'https://iponly.vercel.app/',
  },
  
  {
    title: 'Fleur Lush Brand Concept',
    category: 'UI/UX',
    gallery: ['/images/fleur-1-app.png', '/images/fleur-2.png'],
    features: ['Premium Shopping UX', 'Typography Selection', 'White-space Management'],
    short: 'Fleur Lush',
    type: 'E-commerce Design',
    date: 'September 2024',
    description:
      'An aesthetic-driven concept for a fictional floral brand, exploring visual balance and high-end retail branding. Typography and white-space were tuned to give the shopping experience its "lush" feel.',
    tools: ['Figma', 'Visual Branding', 'Prototype Animation'],
    img: '/images/fleur-2.png',
    link: 'https://www.figma.com/design/1TdgQ7OUSjnCnev3OQX2x7/Fleur-Lush-Desktop?t=1wm8aHyZwaPrkvx6-1',
  },
  
];
export const TESTIMONIALS = [
  {
    name: 'Julien Michael Punsalan',
    role: 'Classmate / Project Teammate',
    image: '/images/julien-image.jpg',
    quote:
      'Working with Shannen was a great experience. She is attentive to details, open to feedback, and consistently delivers clean and organized front-end work.',
  },
  {
    name: 'Jeremy Punsalan',
    role: 'Client',
    image: '/images/jeremy-punsalan.png',
    quote:
      'Shannen has a natural eye for layout and design. Her ability to translate wireframes into clean code is impressive for someone still learning.',
  },
  {
    name: 'Clarence Lane Parungao',
    role: 'Project Member',
    image: '/images/lane-parungao.jpg',
    quote:
      'Working with Shannen on our project was a great experience. I really appreciated her attention to detail and willingness to help the team whenever needed.',
  },
];

export const MARQUEE = ['UI/UX Design', 'Front-End Development', 'Web Design', 'App Design', 'Wireframing', 'Prototyping'];

export const CERTIFICATIONS = [
  {
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    img: '/images/cert-fcc-responsive.png',
    link: 'https://www.freecodecamp.org/certification/shanpascual15/responsive-web-design',
  },
  {
    title: 'Figma UI/UX Design Components',
    issuer: 'Coursera',
    img: '/images/cert-coursera-figma.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/1BVN9QC2CKG9',
  },
  {
    title: 'CompTIA ITF+ (IT Fundamentals)',
    issuer: 'CompTIA',
    img: '/images/cert-comptia-itf.png',
    link: 'https://www.credly.com/badges/baa43148-4de7-42e3-9604-072e9905dd81/linked_in_profile',
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    img: '/images/cert-cisco-js.png',
    link: 'https://www.credly.com/badges/da19263d-766b-4cd4-ba2b-4aa521664675/public_url',
  },
  {
    title: 'JS Algorithms & Data Structures',
    issuer: 'FreeCodeCamp',
    img: '/images/cert-fcc-js.png',
    link: 'https://www.freecodecamp.org/certification/shanpascual15/javascript-algorithms-and-data-structures',
  },
  {
    title: 'Back End Development & APIs',
    issuer: 'FreeCodeCamp',
    img: '/images/cert-fcc-backend.png',
    link: 'https://www.freecodecamp.org/certification/shanpascual15/back-end-development-and-apis',
  },
  {
    title: 'Digital Marketing',
    issuer: 'HubSpot Academy',
    img: '/images/cert-hubspot.png',
    link: 'https://app-na2.hubspot.com/academy/achievements/ggg8njqt/en/1/shannen-pascual/digital-advertising',
  },
  {
    title: 'Foundations of Business',
    issuer: 'SkillFront',
    img: '/images/cert-skillfront.png',
    link: 'https://www.skillfront.com/Badges/64197264603842',
  },

      {
    title: 'Intro to C# for Web Development',
    issuer: 'Simplilearn SkillUP',
    img: '/images/introduction to c  cert.png',
    link: 'https://simpli-web.app.link/e/Nfw3YQXkg7b',
  },
  {
    title: 'AI for Business Applications',
    issuer: 'Saylor University',
    img: '/images/saylor ai for business certification.png',
    link: 'https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1792232549/8308403159SP.pdf',
  },
    {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    img: '/images/cert-aws-cloud-foundations.png',
    link: 'https://www.credly.com/earner/earned/badge/e2b11faf-3055-4d94-8f76-dd1fe995b2dd',
  },
  {
    title: 'Google Analytics Certification',
    issuer: 'Google',
    img: '/images/cert-google-analytics.png',
    link: 'https://skillshop.credential.net/8cfa4294-e4ac-41ff-990b-b8d3414d6951#acc.OAxZ76EC',
  },

];

export const CONTACT = {
  email: 'shanpascual150@gmail.com',
  phone: '+63 945 250 9430',
  phoneHref: 'tel:+639452509430',
  address: 'Angeles City, Pampanga, Philippines',
};

export const SOCIALS = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/shanpascual' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/shannen-pascual-b727a9348' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/shanpascual15' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/sashann.n' },
  { label: 'X', icon: 'x', href: 'https://x.com/saishann__' },
];
