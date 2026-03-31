import { fetchMediumPosts } from './medium';

export interface Experience {
  id: string;
  companyName: string;
  companyImage: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  cover: string;
  link: string;
  githubLink?: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  timeline: string;
}

export interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  email: string;
  location: string;
  experiencedFrom: string;
  keywords: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
  label: string;
}

// Personal Information
export function getPersonalInfo(): PersonalInfo {
  return {
    name: 'Khandokar Rashidul Islam',
    title: 'Software Engineer & Design Pattern Enthusiast',
    subtitle:
      'Software Engineer with 2+ years of experience in NodeJs and NextJs ecosystem',
    description:
      'Passionate about building scalable web applications with clean architecture and design patterns. As a design pattern enthusiast, I create exceptional user experiences while maintaining robust, maintainable codebases.',
    image: '/avatar.jpg',
    email: 'khandokar.rashidul.islam.1120@gmail.com',
    location: 'Bangladesh',
    experiencedFrom: '2022-1-1',
    keywords: [
      'Design Patterns',
      'Clean Architecture',
      'SOLID Principles',
      'Node.js',
      'Next.js',
      'TypeScript',
      'MongoDB',
      'PostgreSQL',
      'AWS',
    ],
  };
}

// Social Links
export function getSocialLinks(): SocialLink[] {
  return [
    {
      name: 'github',
      icon: 'github',
      link: 'https://github.com/Farabiislam',
      label: 'GitHub',
    },
    {
      name: 'email',
      icon: 'mail',
      link: 'mailto:khandokar.rashidul.islam.1120@gmail.com',
      label: 'Email',
    },
    {
      name: 'instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/farabii099/',
      label: 'Instagram',
    },
    {
      name: 'twitter',
      icon: 'twitter',
      link: 'https://www.linkedin.com/in/khandokar-rashidul-islam/',
      label: 'Linkedin',
    },
  ];
}

// Work Experience
// export function getExperiences(): Experience[] {
//   return [
//     {
//       id: 'geeky-solutions',
//       companyName: 'Geeky Solutions',
//       companyImage:
//         'https://geeky.solutions/wp-content/uploads/2020/09/favicon.ico',
//       position: 'Software Engineer Trainee',
//       startDate: '2022-6-1',
//       endDate: '2022-12-31',
//       description:
//         'Participated in Learnathon 2022 organized by Geeky Solutions. Learned advanced technologies and developed two major projects including a WhatsApp clone and Twitter clone.',
//       technologies: [
//         'TypeScript',
//         'Angular',
//         'MongoDB',
//         '.NET Core',
//         'RabbitMQ',
//         'SignalR',
//       ],
//     },
//   ];
// }
export function getExperiences(): Experience[] {
  return [];
}

// Projects - Extended with more projects
export function getProjects(): Project[] {
  return [
    {
      id: 'mentorMatch',
      title: 'MentorMatch',
      cover: '/mentormatch.png',
      link: 'https://youtu.be/mRjaEWx8qII',
      githubLink: 'https://github.com/Farabiislam/MentorMatch',
      description:
        'MentorMatch is a full-stack online learning and tutoring platform designed to connect learners with qualified educators in a flexible, freelance-style marketplace.',
      technologies: [
        'React',
        'Express',
        'MongoDB',
        'Socket.IO',
        'webRTC',
        'Node.js',
        'Tailwind CSS',
        'Shadcn',
      ],
      featured: true,
      timeline: '2025',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      cover: '/portfolio.png?height=200&width=300',
      link: 'https://kri11.vercel.app/',
      githubLink: 'https://github.com/Farabiislam/KRI11',
      description:
        'A beautiful portfolio website to showcase my projects, articles, expericences and others in one place.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Shadcn'],
      featured: true,
      timeline: '2025 - Present',
    },
    {
      id: 'social-media-app-ui',
      title: 'Social Media App UI',
      cover: '/social-media.png?height=200&width=300',
      link: '',
      githubLink: 'https://github.com/Farabiislam/FARABI',
      description:
        'A modern and scalable social media application user interface like facebook built with React and Scss.',
      technologies: ['React', 'Scss', 'Css', 'javaScript'],
      featured: true,
      timeline: '2024',
    },
    {
      id: 'WorkSphere',
      title: 'WorkSphere',
      cover: '/worksphare.png?height=200&width=300',
      link: 'https://worksphere-a80ec.web.app/',
      githubLink: 'https://github.com/Farabiislam/WorkSphere',
      description:
        'WorkSphere is a full-featured Employee Management platform where Admins, HRs, and Employees collaborate to track work progress, manage payroll, verify employment, and analyze performance visually. The app is built with role-based access control and real-time feedback using modern web technologies like React, Express, Firebase, and MongoDB.',
      technologies: ['React', 'Express', 'Firebase', 'MongoDB', 'Tailwind CSS'],
      featured: true,
      timeline: '2025',
    },
    {
      id: 'notes',
      title: 'Notes',
      cover: '/notes.png?height=200&width=300',
      link: '',
      githubLink: 'https://github.com/Farabiislam/Notes',
      description:
        'A simple note-taking web application interface to create, edit, and delete notes.',
      technologies: ['React', 'Scss', 'mysql', 'Express', 'Node.js', 'jwt'],
      featured: false,
      timeline: '2024',
    },
    {
      id: 'old-portfolio',
      title: 'Old Portfolio',
      cover: '/old-portfolio.png?height=200&width=300',
      link: 'https://khandokar-rashidul-islam.netlify.app/',
      githubLink: 'https://github.com/Farabiislam/Portfolio',
      description:
        'An beautiful portfolio website to showcase my projects, experiences and others in one place.',
      technologies: ['React', 'Tailwind CSS', 'framer-motion'],
      featured: false,
      timeline: '2024',
    },
    {
      id: 'roll-the-dice',
      title: 'Roll The Dice',
      cover: '/Dice-rolling.png?height=200&width=300',
      link: 'https://the-dice-rolling.netlify.app/',
      githubLink: 'https://github.com/Farabiislam/Fun-game-dice-2',
      description:
        'An interactive dice rolling game with animations and score tracking, built with vanilla web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      timeline: '2022',
    },
    {
      id: 'number-guess',
      title: 'Number Guess',
      cover: '/number-guess.png?height=200&width=300',
      link: 'https://farabis-fun-game1.netlify.app/',
      githubLink:
        'https://github.com/Farabiislam/Fun-game-1/tree/master/starter',
      description:
        'An interactive number guessing game with animations and score tracking, built with vanilla web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      timeline: '2022',
    },
  ];
}

// Articles - Extended with more articles
export async function getArticles(): Promise<Article[]> {
  return await fetchMediumPosts('farabii099');
}

// Skills - Enhanced with more detailed categorization
export function getSkills() {
  return {
    frontend: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
    backend: [
      'Node.js',
      'Express.js',
      'Prisma',
      'REST APIs',
      'GraphQL',
      'Microservices',
    ],
    database: ['MongoDB', 'PostgreSQL', 'Firestore', 'MySQL', 'SQLite'],
    cloud: ['AWS', 'Vercel', 'Firebase', 'Docker', 'Netlify'],
    tools: [
      'Socket.IO',
      'webRTC',
      'Git',
      'Figma',
      'Postman',
      'Webpack',
      'Vite',
      'Jest',
    ],
  };
}
