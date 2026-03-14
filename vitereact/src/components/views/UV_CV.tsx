import React from 'react';
import { cvData } from '@/data/cvData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Award,
  Calendar,
  ExternalLink
} from 'lucide-react';

// Personal Info / Hero Section
const PersonalInfoSection: React.FC = () => {
  const { personalInfo } = cvData;

  return (
    <header className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
            {personalInfo.fullName}
          </h1>
          <p className="text-xl md:text-2xl text-amber-400 font-medium tracking-wide mb-8">
            {personalInfo.professionalTitle}
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 text-sm font-medium backdrop-blur-sm"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{personalInfo.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 text-sm font-medium backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{personalInfo.phone}</span>
              <span className="sm:hidden">Phone</span>
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white/80 rounded-lg text-sm font-medium backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all duration-200 text-sm font-medium"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#333] hover:bg-[#24292e] text-white rounded-lg transition-all duration-200 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-200 text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>Portfolio</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// Professional Summary Section
const ProfessionalSummarySection: React.FC = () => {
  const { professionalSummary } = cvData;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            {professionalSummary.title}
          </h2>
        </div>
        
        <div className="prose prose-lg prose-slate max-w-none">
          {professionalSummary.content.split('\n\n').map((paragraph, index) => (
            <p 
              key={index} 
              className="text-slate-600 leading-relaxed mb-4 last:mb-0"
              style={{ fontSize: '1.125rem', lineHeight: '1.8' }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

// Work Experience Section
const WorkExperienceSection: React.FC = () => {
  const { workExperience } = cvData;

  const formatDate = (dateString: string | null, isCurrent: boolean): string => {
    if (isCurrent || !dateString) return 'Present';
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <article
              key={job.id}
              className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Current job indicator */}
              {job.isCurrent && (
                <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Current
                </div>
              )}

              {/* Timeline connector */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-10 md:left-12 top-full w-0.5 h-8 bg-slate-200" />
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Company initial badge */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {job.company.charAt(0)}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {job.jobTitle}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(job.startDate, false)} — {formatDate(job.endDate, job.isCurrent)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                    <span className="text-lg font-medium text-blue-600">
                      {job.company}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection: React.FC = () => {
  const { education } = cvData;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Education
          </h2>
        </div>

        <div className="grid gap-6">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border border-slate-100"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Institution initial badge */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {edu.institution.charAt(0)}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {edu.degree} in {edu.fieldOfStudy}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.startDate} — {edu.endDate}</span>
                    </div>
                  </div>

                  <p className="text-lg font-medium text-purple-600 mb-4">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {/* GPA */}
                    {edu.gpa && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
                        <span className="font-semibold">GPA:</span> {edu.gpa}
                      </div>
                    )}

                    {/* Honors */}
                    {edu.honors && edu.honors.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium"
                          >
                            <Award className="w-3.5 h-3.5" />
                            {honor}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Relevant Coursework */}
                  {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-slate-500 mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCoursework.map((course, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection: React.FC = () => {
  const { skillCategories } = cvData;

  const getProficiencyColor = (proficiency: string): string => {
    switch (proficiency) {
      case 'expert':
        return 'bg-emerald-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-amber-500';
      case 'beginner':
        return 'bg-slate-400';
      default:
        return 'bg-slate-300';
    }
  };

  const getProficiencyWidth = (proficiency: string): string => {
    switch (proficiency) {
      case 'expert':
        return 'w-full';
      case 'advanced':
        return 'w-3/4';
      case 'intermediate':
        return 'w-1/2';
      case 'beginner':
        return 'w-1/4';
      default:
        return 'w-0';
    }
  };

  const getProficiencyLabel = (proficiency: string): string => {
    return proficiency.charAt(0).toUpperCase() + proficiency.slice(1);
  };

  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-amber-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-xs text-slate-400 uppercase tracking-wider">
                        {getProficiencyLabel(skill.proficiency)}
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getProficiencyColor(skill.proficiency)} ${getProficiencyWidth(skill.proficiency)} rounded-full transition-all duration-500`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-slate-400">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-slate-400">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-slate-400">Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-400" />
            <span className="text-slate-400">Beginner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer: React.FC = () => {
  const { personalInfo } = cvData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {currentYear} {personalInfo.fullName}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with passion and attention to detail.
        </p>
      </div>
    </footer>
  );
};

// Main CV Page Component
const UV_CV: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PersonalInfoSection />
      <ProfessionalSummarySection />
      <WorkExperienceSection />
      <EducationSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default UV_CV;
