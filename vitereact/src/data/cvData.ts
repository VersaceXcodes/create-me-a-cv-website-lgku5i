import type { CVData } from '@/types/cv';

export const cvData: CVData = {
  personalInfo: {
    fullName: 'Alexandra Chen',
    professionalTitle: 'Senior Full-Stack Developer',
    profilePhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    email: 'alexandra.chen@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedIn: 'https://linkedin.com/in/alexandrachen',
    github: 'https://github.com/alexandrachen',
    portfolio: 'https://alexandrachen.dev',
  },
  professionalSummary: {
    title: 'About Me',
    content: `Passionate full-stack developer with 8+ years of experience building scalable web applications and leading cross-functional teams. I specialize in React, Node.js, and cloud architecture, with a proven track record of delivering high-impact solutions for Fortune 500 companies and fast-paced startups alike.

My approach combines technical excellence with a deep understanding of user needs. I thrive in collaborative environments where I can mentor junior developers while continuously learning from peers. I'm particularly interested in creating accessible, performant applications that make a real difference in people's lives.

When I'm not coding, you'll find me contributing to open-source projects, speaking at tech conferences, or exploring the latest developments in AI and machine learning.`,
  },
  workExperience: [
    {
      id: '1',
      company: 'TechVenture Inc.',
      jobTitle: 'Senior Full-Stack Developer',
      location: 'San Francisco, CA',
      startDate: '2021-03',
      endDate: null,
      isCurrent: true,
      description: 'Leading the development of a next-generation SaaS platform serving over 2 million users worldwide. Architecting microservices infrastructure and mentoring a team of 8 engineers.',
      achievements: [
        'Reduced page load times by 60% through performance optimization and CDN implementation',
        'Designed and implemented a real-time collaboration feature used by 500K+ users daily',
        'Led migration from monolith to microservices, improving deployment frequency by 300%',
        'Established code review standards and CI/CD pipelines, reducing production bugs by 45%',
      ],
    },
    {
      id: '2',
      company: 'InnovateLabs',
      jobTitle: 'Full-Stack Developer',
      location: 'Seattle, WA',
      startDate: '2018-06',
      endDate: '2021-02',
      isCurrent: false,
      description: 'Developed and maintained multiple client-facing applications for enterprise customers in the healthcare and finance sectors.',
      achievements: [
        'Built a HIPAA-compliant patient portal serving 100K+ healthcare providers',
        'Implemented automated testing suite achieving 95% code coverage',
        'Collaborated with UX team to redesign core product, increasing user retention by 35%',
        'Mentored 4 junior developers through structured onboarding program',
      ],
    },
    {
      id: '3',
      company: 'StartupXYZ',
      jobTitle: 'Junior Developer',
      location: 'Austin, TX',
      startDate: '2016-01',
      endDate: '2018-05',
      isCurrent: false,
      description: 'First engineering hire at a seed-stage startup. Wore multiple hats while building the MVP and scaling the platform.',
      achievements: [
        'Developed MVP that secured $2M seed funding within 6 months',
        'Built RESTful APIs serving 50K daily active users',
        'Integrated third-party payment and analytics services',
        'Created comprehensive technical documentation for the engineering team',
      ],
    },
  ],
  education: [
    {
      id: '1',
      institution: 'Stanford University',
      degree: 'Master of Science',
      fieldOfStudy: 'Computer Science',
      startDate: '2014',
      endDate: '2016',
      gpa: '3.9/4.0',
      honors: ['Dean\'s List', 'Graduate Research Fellowship'],
      relevantCoursework: ['Distributed Systems', 'Machine Learning', 'Database Systems', 'Software Engineering'],
    },
    {
      id: '2',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      startDate: '2010',
      endDate: '2014',
      gpa: '3.8/4.0',
      honors: ['Magna Cum Laude', 'Phi Beta Kappa'],
      relevantCoursework: ['Data Structures', 'Algorithms', 'Computer Architecture', 'Operating Systems'],
    },
  ],
  skillCategories: [
    {
      id: '1',
      name: 'Programming Languages',
      skills: [
        { name: 'TypeScript', proficiency: 'expert' },
        { name: 'JavaScript', proficiency: 'expert' },
        { name: 'Python', proficiency: 'advanced' },
        { name: 'Go', proficiency: 'intermediate' },
        { name: 'Rust', proficiency: 'beginner' },
      ],
    },
    {
      id: '2',
      name: 'Frontend',
      skills: [
        { name: 'React', proficiency: 'expert' },
        { name: 'Next.js', proficiency: 'expert' },
        { name: 'Vue.js', proficiency: 'advanced' },
        { name: 'Tailwind CSS', proficiency: 'expert' },
        { name: 'GraphQL', proficiency: 'advanced' },
      ],
    },
    {
      id: '3',
      name: 'Backend & Infrastructure',
      skills: [
        { name: 'Node.js', proficiency: 'expert' },
        { name: 'PostgreSQL', proficiency: 'advanced' },
        { name: 'Redis', proficiency: 'advanced' },
        { name: 'AWS', proficiency: 'advanced' },
        { name: 'Docker', proficiency: 'advanced' },
        { name: 'Kubernetes', proficiency: 'intermediate' },
      ],
    },
    {
      id: '4',
      name: 'Soft Skills',
      skills: [
        { name: 'Team Leadership', proficiency: 'expert' },
        { name: 'Technical Mentoring', proficiency: 'expert' },
        { name: 'Agile/Scrum', proficiency: 'advanced' },
        { name: 'Public Speaking', proficiency: 'advanced' },
        { name: 'Technical Writing', proficiency: 'advanced' },
      ],
    },
  ],
};
