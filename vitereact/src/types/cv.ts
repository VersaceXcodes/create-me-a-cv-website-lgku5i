// CV Data Types

export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  profilePhoto: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github: string;
  portfolio: string;
}

export interface ProfessionalSummary {
  title: string;
  content: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface CVData {
  personalInfo: PersonalInfo;
  professionalSummary: ProfessionalSummary;
  workExperience: WorkExperience[];
  education: Education[];
  skillCategories: SkillCategory[];
}
