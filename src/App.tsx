import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Globe, 
  Award, 
  Briefcase, 
  GraduationCap, 
  BookOpen,
  Code2, 
  Sparkles, 
  Download, 
  ExternalLink, 
  Send, 
  Check, 
  Copy, 
  Sliders, 
  X, 
  User, 
  Layers, 
  Menu, 
  ArrowUpRight, 
  FileText,
  MapPin,
  Phone,
  Calendar,
  CheckCircle2,
  Terminal,
  Palette,
  Layout,
  Cpu,
  Share2,
  Image as ImageIcon,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';

// Import local generated images
// To add your custom photo, import it here: import myCustomAvatar from './assets/images/my_photo.jpg';
import fitnessAiImg from './assets/images/fitness_ai_app_1786208815267.jpg';
import fitnessAiDashboardImg from './assets/images/fitness_ai_dashboard.png';
import fitnessAiDietImg from './assets/images/fitness_ai_diet.png';
import fitnessAiChatImg from './assets/images/fitness_ai_chat.png';
import fitnessAiWorkoutImg from './assets/images/fitness_ai_workout.png';
import livEduImg from './assets/images/liv_edu_platform.png';
import livEduCoursesImg from './assets/images/liv_edu_courses.png';
import livEduRagImg from './assets/images/liv_edu_rag_assistant.png';
import livEduTutorImg from './assets/images/liv_edu_ai_tutor.png';
import livEduAnalyticsImg from './assets/images/liv_edu_analytics.png';
import livposErpImg from './assets/images/livpos_erp_system_1786208845992.jpg';
import livposDashboardImg from './assets/images/livpos_dashboard_analytics.png';
import livposFinancialsImg from './assets/images/livpos_accounting_financials.png';
import livposCheckoutImg from './assets/images/livpos_pos_checkout.png';
import livposInventoryImg from './assets/images/livpos_inventory_management.png';
import lixnStoreImg from './assets/images/lixn_store_platform_1786208859074.jpg';
import lixnleeHeroImg from './assets/images/lixnlee_storefront_hero.png';
import lixnleeProductDetailImg from './assets/images/lixnlee_product_detail.png';
import lixnleeCatalogImg from './assets/images/lixnlee_product_catalog.png';
import lixnleeAdminImg from './assets/images/lixnlee_admin_dashboard.png';
import livcareDoctorImg from './assets/images/livcare_doctor_app_1786208873295.jpg';
import livcareHomeImg from './assets/images/livcare_home.png';
import livcareAdminImg from './assets/images/livcare_admin_panel.png';
import livcareDoctorProfileImg from './assets/images/livcare_doctor_profile.png';
import livcareBookingConfirmedImg from './assets/images/livcare_booking_confirmed.png';
import taskflowDashboardImg from './assets/images/taskflow_dashboard.png';
import taskflowAdminImg from './assets/images/taskflow_admin_governance.png';
import taskflowKanbanImg from './assets/images/taskflow_kanban_board.png';
import taskflowProjectsImg from './assets/images/taskflow_projects_grid.png';
import livhotelGuestPortalImg from './assets/images/livhotel_guest_portal.png';
import livhotelReservationsImg from './assets/images/livhotel_reservations.png';
import livhotelPackagesImg from './assets/images/livhotel_packages.png';
import livhotelStaffImg from './assets/images/livhotel_staff.png';
import figmaFitnessDashboardImg from './assets/images/figma_fitness_dashboard.png';
import figmaMealPlannerImg from './assets/images/figma_meal_planner.png';
import figmaSleepTrackerImg from './assets/images/figma_sleep_tracker.png';
import figmaProgressPhotoImg from './assets/images/figma_progress_photo.png';
import previewOneImg from './assets/images/project_preview_one_1786200263853.jpg';
import previewTwoImg from './assets/images/project_preview_two_1786200278116.jpg';

export interface ProjectScreenshot {
  url: string;
  tabLabel?: string;
  title: string;
  caption: string;
}

export interface KeyFeature {
  title: string;
  description: string;
}

export interface TechStackCategory {
  category: string;
  technologies: string;
}

interface Certification {
  id: string;
  issuer: string;
  completionDate?: string;
  title: string;
  description: string;
  image?: string;
  certificateUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 'develop-ai-agent-microsoft-agent-framework',
    issuer: 'Microsoft Learn',
    completionDate: 'November 5, 2026',
    title: 'Develop an AI agent with Microsoft Agent Framework',
    description: 'Completed the Microsoft Learn course on developing an AI agent with Microsoft Agent Framework.',
    certificateUrl: '/certificates/develop-ai-agent-microsoft-agent-framework.pdf',
  },
  {
    id: 'plan-ai-agent-solution',
    issuer: 'Microsoft Learn',
    completionDate: 'November 5, 2026',
    title: 'Plan an AI agent solution',
    description: 'Completed the Microsoft Learn course on planning an AI agent solution.',
    certificateUrl: '/certificates/plan-ai-agent-solution.pdf',
  },
  {
    id: 'discover-azure-ai-agents-a2a',
    issuer: 'Microsoft Learn',
    completionDate: 'November 5, 2026',
    title: 'Discover Azure AI Agents with A2A',
    description: 'Completed the Microsoft Learn course on Azure AI Agents with A2A.',
    certificateUrl: '/certificates/discover-azure-ai-agents-a2a.pdf',
  },
  {
    id: 'work-smarter-with-ai',
    issuer: 'Microsoft Learn',
    completionDate: 'November 4, 2026',
    title: 'Work smarter with AI',
    description: 'Completed the Microsoft Learn course on working smarter with AI.',
    certificateUrl: '/certificates/work-smarter-with-ai.pdf',
  },
  {
    id: 'agentic-workflows',
    issuer: 'SoloLearn',
    completionDate: 'October 31, 2026',
    title: 'Agentic Workflows',
    description: 'Completed the course, demonstrating theoretical and practical understanding of agentic workflows.',
    image: '/certificates/agentic-workflows.jpg',
    certificateUrl: '/certificates/agentic-workflows.pdf',
  },
  {
    id: 'generative-ai-in-practice',
    issuer: 'SoloLearn',
    completionDate: 'October 31, 2026',
    title: 'Generative AI in Practice',
    description: 'Completed the course, demonstrating theoretical and practical understanding of generative AI.',
    image: '/certificates/generative-ai-in-practice.jpg',
    certificateUrl: '/certificates/generative-ai-in-practice.pdf',
  },
  {
    id: 'introduction-to-llms',
    issuer: 'SoloLearn',
    completionDate: 'October 31, 2026',
    title: 'Introduction to LLMs',
    description: 'Completed the course, demonstrating theoretical and practical understanding of large language models.',
    image: '/certificates/introduction-to-llms.jpg',
    certificateUrl: '/certificates/introduction-to-llms.pdf',
  },
  {
    id: 'machine-learning-for-beginners',
    issuer: 'SoloLearn',
    completionDate: 'October 31, 2026',
    title: 'Machine Learning for Beginners',
    description: 'Completed the course, demonstrating theoretical and practical understanding of machine learning.',
    image: '/certificates/machine-learning-for-beginners.jpg',
    certificateUrl: '/certificates/machine-learning-for-beginners.pdf',
  },
  {
    id: 'python-developer',
    issuer: 'SoloLearn',
    completionDate: 'November 1, 2026',
    title: 'Python Developer',
    description: 'Successfully completed the course, demonstrating theoretical and practical understanding of Python development.',
    image: '/certificates/python-developer.jpg',
    certificateUrl: '/certificates/python-developer.pdf',
  },
  {
    id: 'java-intermediate',
    issuer: 'SoloLearn',
    completionDate: 'October 31, 2026',
    title: 'Java Intermediate',
    description: 'Completed the course, demonstrating theoretical and practical understanding of Java.',
    image: '/certificates/java-intermediate.jpg',
    certificateUrl: '/certificates/java-intermediate.pdf',
  },
  {
    id: 'build-event-driven-java-azure',
    issuer: 'Microsoft Learn',
    completionDate: 'November 5, 2026',
    title: 'Build a real-time event-driven Java solution in Azure',
    description: 'Completed the Microsoft Learn course on building a real-time event-driven Java solution in Azure.',
    certificateUrl: '/certificates/build-real-time-event-driven-java-azure.pdf',
  },
  {
    id: 'containerize-java-app-azure',
    issuer: 'Microsoft Learn',
    completionDate: 'November 5, 2026',
    title: 'Containerize and deploy a Java app to Azure',
    description: 'Completed the Microsoft Learn course on containerizing and deploying a Java app to Azure.',
    certificateUrl: '/certificates/containerize-deploy-java-app-azure.pdf',
  },
];

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai_ml', label: 'AI & ML' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'desktop', label: 'Desktop Apps' },
  { id: 'ui_ux', label: 'UI/UX' },
  { id: 'devops', label: 'DevOps & CI/CD' },
] as const;

type ProjectCategoryId = Exclude<(typeof projectCategories)[number]['id'], 'all'>;
type ProjectFilterId = (typeof projectCategories)[number]['id'];

interface Project {
  id: string;
  title: string;
  subtitle?: string;
  categories: ProjectCategoryId[];
  description: string;
  overview: string;
  longDescription: string;
  image: string;
  mobileImage?: string;
  mobileImageAlt?: string;
  displayUrl: string;
  statusTheme?: 'light' | 'dark';
  screenshots: ProjectScreenshot[];
  tags: string[];
  keyFeatures?: KeyFeature[];
  techStackBreakdown?: TechStackCategory[];
  note?: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

interface Skill {
  name: string;
  logoType?: string;
}

function getWrappedScreenshotIndex(
  screenshots: ProjectScreenshot[] | undefined,
  currentIndex: number,
  offset: -1 | 1
) {
  const screenshotCount = screenshots?.length ?? 0;
  if (screenshotCount < 2) return currentIndex;
  return (currentIndex + offset + screenshotCount) % screenshotCount;
}

const skillCategories = [
  {
    id: 'full-stack',
    label: 'Full-Stack',
    skills: [
      { name: 'React', logoType: 'react' }, { name: 'JavaScript', logoType: 'javascript' },
      { name: 'TypeScript', logoType: 'typescript' }, { name: 'HTML5', logoType: 'html5' },
      { name: 'CSS3', logoType: 'css3' }, { name: 'Tailwind CSS', logoType: 'tailwind' },
      { name: 'Vite', logoType: 'vite' }, { name: 'Node.js', logoType: 'node' },
      { name: 'Express.js', logoType: 'express' }, { name: 'Java', logoType: 'java' },
      { name: 'Spring Boot', logoType: 'springboot' }, { name: 'Python', logoType: 'python' },
      { name: 'Flask', logoType: 'flask' }, { name: 'FastAPI', logoType: 'fastapi' },
      { name: 'Django' },
    ],
  },
  {
    id: 'ai-llm',
    label: 'AI & LLM',
    skills: [
      { name: 'Ollama', logoType: 'ollama' }, { name: 'Mistral' }, { name: 'Llama 3 (3.2)' },
      { name: 'LLM Integration' }, { name: 'Retrieval-Augmented Generation (RAG)' },
      { name: 'LangChain' }, { name: 'ChromaDB' },
      { name: 'AI-Powered Recommendations' }, { name: 'AI Content Generation' },
      { name: 'AI Task Breakdown' }, { name: 'AI-Powered Analytics' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    id: 'devops-tools',
    label: 'DevOps & Tools',
    skills: [
      { name: 'Git', logoType: 'git' }, { name: 'GitHub', logoType: 'github' },
      { name: 'Docker', logoType: 'docker' }, { name: 'GitHub Actions', logoType: 'githubactions' },
      { name: 'CI/CD Fundamentals' }, { name: 'Maven', logoType: 'maven' },
      { name: 'npm', logoType: 'npm' }, { name: 'Vite', logoType: 'vite' },
      { name: 'Postman', logoType: 'postman' }, { name: 'VS Code', logoType: 'vscode' },
      { name: 'IntelliJ IDEA' },
      { name: 'XAMPP' }, { name: 'Apache' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'MongoDB', logoType: 'mongodb' }, { name: 'MySQL', logoType: 'mysql' },
      { name: 'SQLite', logoType: 'sql' }, { name: 'Mongoose' }, { name: 'Motor' },
      { name: 'PyMongo' }, { name: 'SQL', logoType: 'sql' },
      { name: 'Database Design' }, { name: 'Data Modeling' },
      { name: 'CRUD Operations' },
    ],
  },
  {
    id: 'desktop',
    label: 'Desktop',
    skills: [
      { name: 'Python Tkinter', logoType: 'python' }, { name: 'SQLite', logoType: 'sql' },
      { name: 'Desktop Application Development' }, { name: 'Event-Driven Programming' },
      { name: 'JavaFX' }, { name: 'FXML' }, { name: 'Maven', logoType: 'maven' },
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    skills: [
      { name: 'Object-Oriented Programming (OOP)' }, { name: 'RESTful API Development' },
      { name: 'MVC Architecture' }, { name: 'CRUD Operations' },
      { name: 'JWT Authentication', logoType: 'jwt' },
      { name: 'Role-Based Access Control (RBAC)' }, { name: 'Password Hashing' },
      { name: 'Environment Configuration' }, { name: 'Input Validation' },
      { name: 'Software Testing' }, { name: 'Error Handling' },
      { name: 'Data Structures & Algorithms' },
      { name: 'Responsive Web Design' }, { name: 'Authentication & Authorization' },
      { name: 'API Integration' }, { name: 'Secure Coding Fundamentals' },
    ],
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    skills: [
      { name: 'Figma', logoType: 'figma' }, { name: 'UI Design' }, { name: 'Wireframing' },
      { name: 'Interactive Prototyping' }, { name: 'User Flows' },
      { name: 'Responsive Layout Design' }, { name: 'Light & Dark Mode Design' },
      { name: 'Visual Hierarchy' }, { name: 'Component-Based Design' },
      { name: 'UI Animation & Microinteractions' },
    ],
  },
] as const satisfies readonly { id: string; label: string; skills: readonly Skill[] }[];

type SkillCategoryId = (typeof skillCategories)[number]['id'];

const HERO_TITLES = [
  'Software engineer',
  'AI & LLM Developer',
  'Full-Stack Developer',
];

function SkillLogo({ type }: { type: string }) {
  switch (type) {
    case 'java':
      return (
        <svg className="w-6 h-6 text-[#E53935]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.873.187 4.969-.212 0 0 .509.288 1.055.518-2.671.954-7.464.848-6.677-1.02zm-1.848-2.61s-1.06.66.529.837c2.193.245 3.904.232 7.039-.323 0 0 .399.317.828.513-3.626 1.155-9.61.942-8.396-1.027zm10.223-3.328s.772.585-.828.98c-2.883.712-7.834.782-10.428.026-.523-.153.253-.591.564-.694 1.15-.382 2.684-.251 4.298-.124 1.83.143 3.947.261 5.394-.188zM9.54 8.79s-1.865 1.547.458 1.859c2.684.36 6.309.222 7.823-.424 0 0-.585.508-1.129.746-2.18.913-7.514.838-9.285-.303-1.054-.68 2.133-1.878 2.133-1.878zm3.224-4.52s1.428 1.488-.508 3.125c-1.936 1.637-2.023 2.518-.39 3.865-2.008-.22-3.417-1.28-2.197-2.73 1.528-1.815 3.095-2.527 3.095-4.26zm3.327 7.067s1.393-.728.802-1.633c-.591-.905-1.088-1.229-.623-1.878.465-.649 1.493-.34 1.493-.34s-1.031-1.031-2.046-.431c-1.015.6-1.031 1.633-.203 2.443.828.81.577 1.839.577 1.839z"/>
        </svg>
      );
    case 'typescript':
      return (
        <div className="w-6 h-6 bg-[#3178C6] text-white font-bold rounded-sm text-[11px] flex items-center justify-center font-mono tracking-tighter">
          TS
        </div>
      );
    case 'javascript':
      return (
        <div className="w-6 h-6 bg-[#F7DF1E] text-black font-extrabold rounded-sm text-[11px] flex items-center justify-end pr-0.5 pb-0.5 font-mono">
          JS
        </div>
      );
    case 'python':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M11.878 2c-4.48 0-4.2 1.942-4.2 1.942l.006 2.013h4.281v.608H5.892s-3.892.44-3.892 4.43 3.398 4.29 3.398 4.29h2.031v-2.883s-.11-3.447 3.398-3.447h5.845s3.287.055 3.287-3.232c0-3.287-2.848-3.721-2.848-3.721h-5.234z" fill="#387EB8"/>
          <path d="M12.122 22c4.48 0 4.2-1.942 4.2-1.942l-.006-2.013h-4.281v-.608h6.073s3.892-.44 3.892-4.43-3.398-4.29-3.398-4.29h-2.031v2.883s.11 3.447-3.398 3.447H7.327s-3.287-.055-3.287 3.232c0 3.287 2.848 3.721 2.848 3.721h5.234z" fill="#FFE052"/>
        </svg>
      );
    case 'php':
      return (
        <div className="w-7 h-5 bg-[#777BB4]/20 border border-[#777BB4]/40 rounded-full text-[#777BB4] font-bold text-[10px] flex items-center justify-center font-mono">
          php
        </div>
      );
    case 'sql':
      return (
        <svg className="w-6 h-6 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.34-6-2v-2.26c1.42.81 3.6 1.26 6 1.26s4.58-.45 6-1.26V17c0 .66-2.13 2-6 2zm0-5c-3.87 0-6-1.34-6-2v-2.26c1.42.81 3.6 1.26 6 1.26s4.58-.45 6-1.26V12c0 .66-2.13 2-6 2z"/>
        </svg>
      );
    case 'html5':
      return (
        <svg className="w-6 h-6 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-12.873.002.69 8.055h8.583l-.333 3.498-3.001.81-2.992-.81-.192-2.165H5.856l.361 4.382 5.753 1.583 5.753-1.583.774-8.433H8.531z"/>
        </svg>
      );
    case 'css3':
      return (
        <svg className="w-6 h-6 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-12.873.002.69 8.055h8.583l-.333 3.498-3.001.81-2.992-.81-.192-2.165H5.856l.361 4.382 5.753 1.583 5.753-1.583.774-8.433H8.531z"/>
        </svg>
      );
    case 'react':
      return (
        <svg className="w-6 h-6 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );
    case 'vite':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M21.503 3.535l-9.123 16.59a.747.747 0 01-1.306 0L1.95 3.535a.75.75 0 011.02-.997l8.28 4.78 8.233-4.78a.75.75 0 011.02.997z" fill="url(#vite-grad1)"/>
          <path d="M16.52 2.21l-4.52 8.01-4.52-8.01L1.95 3.535a.75.75 0 001.02-.997l8.28 4.78 8.233-4.78a.75.75 0 001.02.997z" fill="url(#vite-grad2)"/>
          <defs>
            <linearGradient id="vite-grad1" x1="2" y1="2" x2="21" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF"/>
              <stop offset="1" stopColor="#BD34FE"/>
            </linearGradient>
            <linearGradient id="vite-grad2" x1="2" y1="2" x2="21" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFEA83"/>
              <stop offset="1" stopColor="#FFDD35"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'tailwind':
      return (
        <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );
    case 'bootstrap':
      return (
        <div className="w-6 h-6 bg-[#7952B3] text-white font-extrabold rounded text-xs flex items-center justify-center font-serif">
          B
        </div>
      );
    case 'springboot':
      return (
        <svg className="w-6 h-6 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      );
    case 'springsecurity':
      return (
        <svg className="w-6 h-6 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8Messz"/>
        </svg>
      );
    case 'springdata':
      return (
        <svg className="w-6 h-6 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.34-6-2v-2.26c1.42.81 3.6 1.26 6 1.26s4.58-.45 6-1.26V17c0 .66-2.13 2-6 2z"/>
        </svg>
      );
    case 'flask':
      return (
        <svg className="w-6 h-6 text-[#E0D5C1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3h6M10 3v6.2L5.2 17A3 3 0 0 0 7.7 21h8.6a3 3 0 0 0 2.5-4L14 9.2V3"/>
        </svg>
      );
    case 'fastapi':
      return (
        <svg className="w-6 h-6 text-[#009688]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4H9l4-7v4h2l-4 7z"/>
        </svg>
      );
    case 'node':
      return (
        <svg className="w-6 h-6 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm0 2.3l6.5 3.8v7.5L12 19.3l-6.5-3.8V8.1L12 4.3z"/>
        </svg>
      );
    case 'express':
      return (
        <div className="w-7 h-5 bg-[#222] border border-[#e0d5c1]/30 rounded text-[#e0d5c1] font-mono font-bold text-[10px] flex items-center justify-center">
          ex
        </div>
      );
    case 'mongodb':
      return (
        <svg className="w-6 h-6 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5s-6.5 8.16-6.5 13.5c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5c0-5.34-6.5-13.5-6.5-13.5zm.5 18.42v-8.42h-1v8.42c-2.45-.25-4.5-2.12-4.5-4.92 0-3.32 3.73-8.88 5-10.61 1.27 1.73 5 7.29 5 10.61 0 2.8-2.05 4.67-4.5 4.92z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg className="w-6 h-6 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.34-6-2v-2.26c1.42.81 3.6 1.26 6 1.26s4.58-.45 6-1.26V17c0 .66-2.13 2-6 2z"/>
        </svg>
      );
    case 'jwt':
      return (
        <div className="w-6 h-6 bg-[#D63AF9]/20 border border-[#D63AF9]/50 rounded text-[#D63AF9] font-mono font-extrabold text-[9px] flex items-center justify-center">
          JWT
        </div>
      );
    case 'oauth':
      return (
        <svg className="w-6 h-6 text-[#EB5424]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      );
    case 'rag':
      return (
        <svg className="w-6 h-6 text-[#c81d25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
          <path d="M11 8v6M8 11h6"/>
        </svg>
      );
    case 'ollama':
      return (
        <div className="w-6 h-6 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] font-mono font-bold rounded flex items-center justify-center text-[10px]">
          O
        </div>
      );
    case 'langchain':
      return (
        <svg className="w-6 h-6 text-[#22D3EE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      );
    case 'chromadb':
      return (
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#E36C2F] to-[#4285F4] flex items-center justify-center font-bold text-white text-[9px]">
          C
        </div>
      );
    case 'aichat':
      return (
        <svg className="w-6 h-6 text-[#c81d25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/>
          <path d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7Z"/>
          <path d="M9 15h.01M15 15h.01"/>
        </svg>
      );
    case 'docker':
      return (
        <svg className="w-6 h-6 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.575a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.291a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.291a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 2.714h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.144a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.186.186 0 00.185-.186V6.291a.185.185 0 00-.185-.185H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 2.714h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.12a.185.185 0 00.184-.186V6.291a.185.185 0 00-.184-.185h-2.12a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zM23.738 11.23c-.453-.314-1.472-.387-2.228-.21-.363-.732-1.026-1.127-1.748-1.127a2.21 2.21 0 00-1.102.298c-.466-2.18-2.316-3.805-4.57-3.805H.52a.52.52 0 00-.52.52v10.016c0 3.86 3.14 7.001 7 7.001h10c3.86 0 7-3.141 7-7.001a6.974 6.974 0 00-.262-1.692z"/>
        </svg>
      );
    case 'dockercompose':
      return (
        <svg className="w-6 h-6 text-[#2496ED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      );
    case 'githubactions':
      return (
        <svg className="w-6 h-6 text-[#2088FF]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-2 14.5v-9l6 4.5z"/>
        </svg>
      );
    case 'cicd':
      return (
        <svg className="w-6 h-6 text-[#c81d25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
        </svg>
      );
    case 'git':
      return (
        <svg className="w-6 h-6 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.379-.06 1.88.442.503.503.657 1.24.44 1.885l2.66 2.66c.645-.217 1.38-.06 1.883.44.704.704.704 1.846 0 2.55-.705.705-1.847.705-2.55 0-.52-.522-.663-1.27-.427-1.92L12.78 8.87a1.815 1.815 0 0 1-.826.2c-.3 0-.594-.075-.853-.222l-2.82 2.82c.15.26.223.55.223.85 0 .99-.8 1.8-1.8 1.8s-1.8-.81-1.8-1.8c0-.99.8-1.8 1.8-1.8.3 0 .59.07.85.22l2.79-2.79a1.81 1.81 0 0 1-.22-.85c0-.49.19-.95.53-1.29l-2.73-2.73L.452 10.93c-.603.605-.603 1.583 0 2.187l10.48 10.48c.604.603 1.581.603 2.186 0l10.428-10.48c.603-.604.603-1.582 0-2.187z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className="w-6 h-6 text-[var(--text-primary)]" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'vscode':
      return (
        <svg className="w-6 h-6 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63L2.83 5.925a.866.866 0 00-1.19.086L.25 7.424a.863.863 0 00.082 1.258l4.436 3.61L.332 15.89a.863.863 0 00-.082 1.259l1.39 1.413a.866.866 0 001.19.086l4.215-3.203 9.46 8.63a1.494 1.494 0 001.705.29l4.94-2.377c.532-.256.84-.81.84-1.397V3.984c0-.587-.308-1.14-.84-1.397zM18 18.258L10.37 12 18 5.742v12.516z"/>
        </svg>
      );
    case 'postman':
      return (
        <svg className="w-6 h-6 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 5v6l5 3 1-1.5-4.5-2.7V7h-1.5z"/>
        </svg>
      );
    case 'maven':
      return (
        <div className="w-6 h-6 bg-[#C71A36] text-white font-mono font-bold text-[11px] rounded flex items-center justify-center">
          M
        </div>
      );
    case 'npm':
      return (
        <div className="w-6 h-6 bg-[#CB3837] text-white font-mono font-black text-[10px] rounded flex items-center justify-center">
          npm
        </div>
      );
    case 'figma':
      return (
        <svg className="w-5 h-6" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      );
    case 'gemini':
    default:
      return (
        <Sparkles className="w-6 h-6 text-[#c81d25]" />
      );
  }
}

function IphoneMockup({
  project,
  mode,
  onOpenScreenshot,
}: {
  project: Project;
  mode: 'duo' | 'phone';
  onOpenScreenshot: () => void;
}) {
  if (!project.mobileImage) return null;

  return (
    <div
      onClick={onOpenScreenshot}
      title="Click to view project screenshots"
      className={`z-20 cursor-pointer transform-gpu transition-transform duration-[250ms] ease-out group-hover/card:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/card:translate-y-0 ${
        mode === 'phone'
          ? 'relative mx-auto w-[min(34%,170px)] my-2'
          : 'absolute right-[2%] bottom-[5%] w-[clamp(84px,16cqw,124px)]'
      }`}
    >
      {mode === 'phone' && (
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
      )}
      <div
        className="relative w-full overflow-visible border border-white/[0.18] bg-[#0b0b0c] p-[3%] ring-1 ring-[#3a3a3c] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.6),0_2px_6px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)]"
        style={{ aspectRatio: '393 / 852', borderRadius: '14% / 6.5%' }}
      >
        <span className="absolute -left-[3px] top-[23%] h-[5%] w-[2px] rounded-l-full bg-[#3a3a3c]" aria-hidden="true" />
        <span className="absolute -left-[3px] top-[31%] h-[5%] w-[2px] rounded-l-full bg-[#3a3a3c]" aria-hidden="true" />
        <span className="absolute -right-[3px] top-[27%] h-[7%] w-[2px] rounded-r-full bg-[#3a3a3c]" aria-hidden="true" />

        <div
          className="relative h-full w-full overflow-hidden"
          style={{ borderRadius: '11% / 5.2%' }}
        >
          <img
            src={project.mobileImage}
            alt={project.mobileImageAlt || `${project.title} mobile app screen`}
            width={393}
            height={852}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute left-1/2 top-[2%] h-[3.2%] w-[28%] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
          <div
            className={`absolute bottom-[2%] left-1/2 h-[3px] w-[32%] -translate-x-1/2 rounded-full ${
              project.statusTheme === 'light' ? 'bg-black/60' : 'bg-white/70'
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function CertificationCarousel({
  items,
  prefersReducedMotion,
}: {
  items: Certification[];
  prefersReducedMotion: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{ pointerId: number; startX: number; startScrollLeft: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const slideCount = Math.max(items.length, 1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageStarts, setPageStarts] = useState<number[]>([0]);

  const getPageStarts = () => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return [0];

    const slides = Array.from(track.children) as HTMLElement[];
    const firstSlide = slides[0];
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const slidePitch = firstSlide.getBoundingClientRect().width + gap;
    const step = Math.max(1, Math.floor((track.clientWidth + gap) / slidePitch));
    const maxScroll = track.scrollWidth - track.clientWidth;
    const trackLeft = track.getBoundingClientRect().left;
    const lastPageStart = slides.reduce<number>((nearest, slide, index) => {
      const position = slide.getBoundingClientRect().left - trackLeft + track.scrollLeft;
      const nearestPosition = slides[nearest].getBoundingClientRect().left - trackLeft + track.scrollLeft;
      return Math.abs(position - maxScroll) < Math.abs(nearestPosition - maxScroll) ? index : nearest;
    }, 0);

    const starts: number[] = [];
    for (let index = 0; index < lastPageStart; index += step) starts.push(index);
    if (starts[starts.length - 1] !== lastPageStart) starts.push(lastPageStart);
    return starts;
  };

  const scrollToSlide = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children.item(index);
    if (!track || !(slide instanceof HTMLElement)) return;
    const left = slide.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    track.scrollTo({ left, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    setActiveIndex(index);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateActiveIndex = () => {
      const slides = Array.from(track.children);
      if (slides.length === 0) return;

      const starts = getPageStarts();
      setPageStarts(current => current.length === starts.length && current.every((start, index) => start === starts[index])
        ? current
        : starts);
      const trackLeft = track.getBoundingClientRect().left;
      const nearestStart = starts.reduce((nearest, index) => {
        const slidePosition = (slides[index] as HTMLElement).getBoundingClientRect().left
          - trackLeft
          + track.scrollLeft;
        const nearestPosition = (slides[nearest] as HTMLElement).getBoundingClientRect().left
          - trackLeft
          + track.scrollLeft;
        return Math.abs(slidePosition - track.scrollLeft) < Math.abs(nearestPosition - track.scrollLeft)
          ? index
          : nearest;
      }, starts[0]);

      setActiveIndex(nearestStart);
    };

    updateActiveIndex();
    track.addEventListener('scroll', updateActiveIndex, { passive: true });
    const resizeObserver = new ResizeObserver(updateActiveIndex);
    resizeObserver.observe(track);
    return () => {
      track.removeEventListener('scroll', updateActiveIndex);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const drag = dragState.current;
      const track = trackRef.current;
      if (!drag || !track || event.pointerId !== drag.pointerId) return;

      const distance = event.clientX - drag.startX;
      if (Math.abs(distance) > 5) drag.moved = true;
      if (!drag.moved) return;

      event.preventDefault();
      track.scrollLeft = drag.startScrollLeft - distance;
    };

    const handlePointerUp = (event: PointerEvent) => {
      const drag = dragState.current;
      if (!drag || event.pointerId !== drag.pointerId) return;

      if (drag.moved) {
        suppressClick.current = true;
        window.setTimeout(() => {
          suppressClick.current = false;
        }, 0);
      }

      dragState.current = null;
      if (trackRef.current) trackRef.current.style.cursor = '';
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest('a, button')) return;

    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
    event.currentTarget.style.cursor = 'grab';
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement && event.target.closest('a, button')) return;
    const pageIndex = Math.max(pageStarts.indexOf(activeIndex), 0);
    if (event.key === 'ArrowLeft' && pageIndex > 0) {
      event.preventDefault();
      scrollToSlide(pageStarts[pageIndex - 1]);
    }
    if (event.key === 'ArrowRight' && pageIndex < pageStarts.length - 1) {
      event.preventDefault();
      scrollToSlide(pageStarts[pageIndex + 1]);
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
          Continuous learning and professional development across software engineering, AI, and technology.
        </p>
        <div className="flex items-center gap-3">
          <span className="min-w-[4rem] text-center font-mono text-xs font-semibold text-[var(--text-secondary)]" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => scrollToSlide(pageStarts[Math.max(pageStarts.indexOf(activeIndex) - 1, 0)])}
            disabled={pageStarts.indexOf(activeIndex) <= 0}
            aria-label="Previous certificate"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[var(--border-strong)] disabled:hover:text-[var(--text-primary)]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              const nextPage = pageStarts.indexOf(activeIndex) + 1;
              if (nextPage < pageStarts.length) scrollToSlide(pageStarts[nextPage]);
            }}
            disabled={pageStarts.indexOf(activeIndex) >= pageStarts.length - 1}
            aria-label="Next certificate"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[var(--border-strong)] disabled:hover:text-[var(--text-primary)]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label="Certificates and learning"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onClickCapture={event => {
          if (!suppressClick.current) return;
          event.preventDefault();
          event.stopPropagation();
          suppressClick.current = false;
        }}
        onKeyDown={handleKeyDown}
        className="certification-carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 outline-none focus-visible:rounded-xl"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.length > 0 ? items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : Math.min(index * 0.06, 0.24), ease: [0.16, 1, 0.3, 1] }}
            className="group min-h-[430px] w-full shrink-0 snap-start overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow-card-hover)] sm:w-[calc((100%-1rem)/2)] lg:w-[31%]"
          >
            <div className="flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-alt)]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-contain"
                />
              ) : item.certificateUrl?.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  src={`${item.certificateUrl}#page=1&toolbar=0&navpanes=0`}
                  title={`${item.title} certificate preview`}
                  loading="lazy"
                  className="h-full w-full border-0 bg-white"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_center,var(--accent-subtle),transparent_68%)] text-[var(--text-muted)]">
                  <Award className="h-10 w-10 text-[var(--accent-primary)]" aria-hidden="true" />
                  <span className="font-mono text-[10px] font-semibold tracking-[0.2em]">CERTIFICATE</span>
                </div>
              )}
            </div>
            <div className="flex min-h-[238px] flex-col p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <span className="text-xs font-semibold text-[var(--accent-primary)]">{item.issuer}</span>
                {item.completionDate && (
                  <span className="shrink-0 font-mono text-[10px] text-[var(--text-muted)]">{item.completionDate}</span>
                )}
              </div>
              <h3 className="font-display text-lg font-bold leading-snug text-[var(--text-primary)] [overflow-wrap:anywhere]">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
              {item.certificateUrl ? (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border-strong)] px-3.5 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                >
                  View Certificate <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="mt-5 inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-lg border border-[var(--border-color)] px-3.5 py-2.5 text-xs font-semibold text-[var(--text-muted)]">
                  Certificate file unavailable
                </span>
              )}
            </div>
          </motion.article>
        )) : (
          <article className="min-h-[430px] w-full shrink-0 snap-start overflow-hidden rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-card)] sm:w-[calc((100%-1rem)/2)] lg:w-[31%]">
            <div className="flex aspect-[16/10] items-center justify-center border-b border-[var(--border-color)] bg-[var(--bg-alt)]">
              <div className="flex flex-col items-center gap-3 text-center">
                <Award className="h-10 w-10 text-[var(--accent-primary)]" aria-hidden="true" />
                <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[var(--text-muted)]">CERTIFICATE PREVIEW</span>
              </div>
            </div>
            <div className="flex min-h-[238px] flex-col justify-center p-5">
              <p className="text-xs font-semibold text-[var(--accent-primary)]">Your learning journey</p>
              <h3 className="mt-2 font-display text-lg font-bold text-[var(--text-primary)]">Add your first certificate</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                Add verified certificate details and a certificate image or link to display your learning here.
              </p>
              <span className="mt-5 inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-lg border border-[var(--border-color)] px-3.5 py-2.5 text-xs font-semibold text-[var(--text-muted)]">
                Certificate details not provided
              </span>
            </div>
          </article>
        )}
      </div>

      <div className="mt-5 flex justify-center gap-2" aria-label="Certificate pagination">
        {pageStarts.map((start, pageIndex) => (
          <button
            key={items[start]?.id ?? 'empty'}
            type="button"
            onClick={() => scrollToSlide(start)}
            disabled={items.length === 0}
            aria-label={`Go to certificate ${start + 1}`}
            aria-current={activeIndex === start ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 disabled:cursor-default ${
              activeIndex === start
                ? 'w-7 bg-[var(--accent-primary)]'
                : 'w-2.5 bg-[var(--border-strong)] hover:bg-[var(--accent-border)]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [displayedTitle, setDisplayedTitle] = useState(HERO_TITLES[0]);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'certifications', 'education', 'contact'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(entries => {
      const visibleSection = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visibleSection) setActiveSection(visibleSection.target.id);
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedTitle(HERO_TITLES[0]);
      return;
    }

    let titleIndex = 0;
    let currentText = '';
    let deleting = false;
    let timeoutId: number;

    const typeNextCharacter = () => {
      const title = HERO_TITLES[titleIndex];

      if (deleting) {
        currentText = title.slice(0, currentText.length - 1);
        setDisplayedTitle(currentText);
        if (!currentText) {
          deleting = false;
          titleIndex = (titleIndex + 1) % HERO_TITLES.length;
          timeoutId = window.setTimeout(typeNextCharacter, 300);
          return;
        }
        timeoutId = window.setTimeout(typeNextCharacter, 45);
        return;
      }

      currentText = title.slice(0, currentText.length + 1);
      setDisplayedTitle(currentText);
      if (currentText === title) {
        deleting = true;
        timeoutId = window.setTimeout(typeNextCharacter, 1400);
        return;
      }
      timeoutId = window.setTimeout(typeNextCharacter, 85);
    };

    timeoutId = window.setTimeout(typeNextCharacter, 100);
    return () => window.clearTimeout(timeoutId);
  }, [prefersReducedMotion]);

  // State for user profile data (Editable via Customizer)
  const [profile, setProfile] = useState(() => {
    const defaultData = {
      firstName: 'RAJENDRAN',
      lastName: 'LIVINGSAN',
      signatureName: 'RAJENDRAN LIVINGSAN',
      title: 'FULL-STACK DEVELOPER • AI & LLM ENTHUSIAST',
      websiteUrl: 'https://livingsan.github.io/',
      socialHandle: '',
      contactEmail: 'rlivingsan@gmail.com',
      location: 'Colombo, Sri Lanka',
      contactPhone: '0743113022',
      bio: 'Building full-stack applications and AI-powered solutions that solve real-world problems. I develop responsive web applications, secure REST APIs, and data-driven systems using React, Java Spring Boot, Node.js, and Python. I also integrate locally hosted LLMs and RAG pipelines to build practical, privacy-conscious AI applications.',
      fullAbout: 'Building full-stack applications and AI-powered solutions that solve real-world problems. I develop responsive web applications, secure REST APIs, and data-driven systems using React, Java Spring Boot, Node.js, and Python. I also integrate locally hosted LLMs and RAG pipelines to build practical, privacy-conscious AI applications.',
      avatarUrl: '/assets/aistudio/profile.jpg',
      github: 'https://github.com/Livingsan',
      linkedin: 'https://www.linkedin.com/in/rlivingsan22/',
      twitter: 'https://livingsan.github.io/',
      gpa: '3.92 / 4.0',
      gpaLabel: 'Cumulative GPA',
      gpaSub: 'First Class Honours',
      projectsCount: '8+',
      projectsLabel: 'Full-Stack Projects',
      projectsSub: 'POS, LMS, AI Apps',
      leetcode: '20+',
      leetcodeLabel: 'Core Tech Stack',
      leetcodeSub: 'React, Java, Node, Python',
      commits: '100%',
      commitsLabel: 'Local AI Integrated',
      commitsSub: 'Ollama, RAG & LLMs'
    };

    const saved = localStorage.getItem('portfolio_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        // ── Migration v3: force-update contact email & phone ──────────────
        // Bumping _migrationVersion guarantees the live site clears any
        // stale localStorage value regardless of what was previously stored.
        if (!parsed._migrationVersion || parsed._migrationVersion < 3) {
          parsed.contactEmail = 'rlivingsan@gmail.com';
          parsed.contactPhone = '0743113022';
          parsed._migrationVersion = 3;
        }

        // Migrate old names
        if (parsed.firstName === 'RAJ' || parsed.signatureName === 'RAJ LIV' || !parsed.firstName) {
          parsed.firstName = 'RAJENDRAN';
          parsed.lastName = 'LIVINGSAN';
          parsed.signatureName = 'RAJENDRAN LIVINGSAN';
        }
        // Migrate location (including San Francisco & other legacy placeholders)
        if (!parsed.location || parsed.location.includes('San Francisco') || parsed.location === 'Colombo onsite & Remote') {
          parsed.location = 'Colombo, Sri Lanka';
        }
        // Migrate email (including hello@reallygreatsite.com and example placeholders)
        if (!parsed.contactEmail || parsed.contactEmail.includes('reallygreatsite') || parsed.contactEmail === 'your.email@example.com' || parsed.contactEmail === 'rlivingsan.com') {
          parsed.contactEmail = 'rlivingsan@gmail.com';
        }
        // Migrate phone
        if (!parsed.contactPhone || parsed.contactPhone.includes('555') || parsed.contactPhone === '+1 (555) 019-2834' || parsed.contactPhone === '+94 74 3113022') {
          parsed.contactPhone = '0743113022';
        }
        if (!parsed.websiteUrl || parsed.websiteUrl.includes('reallygreatsite') || parsed.websiteUrl === '') {
          parsed.websiteUrl = 'https://livingsan.github.io/';
        }
        if (!parsed.github || parsed.github === 'https://github.com') {
          parsed.github = 'https://github.com/Livingsan';
        }
        if (!parsed.linkedin || parsed.linkedin === 'https://linkedin.com' || parsed.linkedin.includes('linkedin.com/in/rlivingsan22/')) {
          parsed.linkedin = 'https://www.linkedin.com/in/rlivingsan22/';
        }
        if (!parsed.twitter || parsed.twitter.includes('twitter.com') || parsed.twitter.trim() === 'https://livingsan.github.io/') {
          parsed.twitter = 'https://livingsan.github.io/';
        }
        if (parsed.socialHandle && parsed.socialHandle.includes('reallygreatsite')) {
          parsed.socialHandle = '';
        }
        // Replace outdated or empty default photo paths with the current public image.
        if (
          !parsed.avatarUrl ||
          parsed.avatarUrl === '/assets/aistudio/your-profile.png' ||
          (typeof parsed.avatarUrl === 'string' && parsed.avatarUrl.includes('portfolio_avatar'))
        ) {
          parsed.avatarUrl = defaultData.avatarUrl;
        }
        const updated = { ...defaultData, ...parsed, avatarUrl: parsed.avatarUrl || defaultData.avatarUrl };
        localStorage.setItem('portfolio_profile', JSON.stringify(updated));
        return updated;
      } catch (e) {
        return defaultData;
      }
    }
    return defaultData;
  });

  // Save profile edits to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio_profile', JSON.stringify(profile));
  }, [profile]);

  // Modal controls
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Theme state with localStorage persistence (defaults to 'dark' to preserve current design)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'dark';
  });

  // Apply theme to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    } else {
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Subtle smooth theme toggle handler
  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transitioning');
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 280);
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalActiveScreenshotIndex, setModalActiveScreenshotIndex] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState<{
    project: Project;
    activeImgIndex: number;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<ProjectFilterId>('all');
  const [projectDeviceMode, setProjectDeviceMode] = useState<'duo' | 'phone'>('duo');
  const [skillCategoryFilter, setSkillCategoryFilter] = useState<SkillCategoryId>('full-stack');
  const skillHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const projectHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeSkillCategory = skillCategories.find(category => category.id === skillCategoryFilter) ?? skillCategories[0];
  const activeProjectCategory = projectCategories.find(category => category.id === activeTab) ?? projectCategories[0];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateCaseStudyScreenshot = (offset: -1 | 1) => {
    setModalActiveScreenshotIndex(currentIndex =>
      getWrappedScreenshotIndex(selectedProject?.screenshots, currentIndex, offset)
    );
  };

  const navigateFullscreenScreenshot = (offset: -1 | 1) => {
    setActiveScreenshot(current => {
      if (!current) return current;
      return {
        ...current,
        activeImgIndex: getWrappedScreenshotIndex(
          current.project.screenshots,
          current.activeImgIndex,
          offset
        ),
      };
    });
  };

  // Keep keyboard navigation scoped to the open case study, so page controls and
  // form fields continue to receive their usual arrow-key behavior.
  useEffect(() => {
    if (!selectedProject || activeScreenshot || selectedProject.screenshots.length < 2) return;

    const handleCaseStudyKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, select, [contenteditable="true"]')) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateCaseStudyScreenshot(-1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateCaseStudyScreenshot(1);
      }
    };

    window.addEventListener('keydown', handleCaseStudyKeyDown);
    return () => window.removeEventListener('keydown', handleCaseStudyKeyDown);
  }, [selectedProject, activeScreenshot]);

  useEffect(() => {
    if (!activeScreenshot || activeScreenshot.project.screenshots.length < 2) return;

    const handleFullscreenKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches('input, textarea, select, [contenteditable="true"]')) return;

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateFullscreenScreenshot(-1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateFullscreenScreenshot(1);
      }
    };

    window.addEventListener('keydown', handleFullscreenKeyDown);
    return () => window.removeEventListener('keydown', handleFullscreenKeyDown);
  }, [activeScreenshot]);

  const cancelSkillHover = () => {
    if (skillHoverTimeout.current !== null) {
      clearTimeout(skillHoverTimeout.current);
      skillHoverTimeout.current = null;
    }
  };

  const activateSkillCategory = (categoryId: SkillCategoryId) => {
    cancelSkillHover();
    setSkillCategoryFilter(current => current === categoryId ? current : categoryId);
  };

  const cancelProjectHover = () => {
    if (projectHoverTimeout.current !== null) {
      clearTimeout(projectHoverTimeout.current);
      projectHoverTimeout.current = null;
    }
  };

  const activateProjectCategory = (categoryId: ProjectFilterId) => {
    cancelProjectHover();
    setActiveTab(current => current === categoryId ? current : categoryId);
  };

  useEffect(() => () => {
    if (skillHoverTimeout.current !== null) clearTimeout(skillHoverTimeout.current);
    if (projectHoverTimeout.current !== null) clearTimeout(projectHoverTimeout.current);
  }, []);

  // Form states
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Copy email handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Form submit handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  // Projects data categorized according to user specifications
  const projectsData: Project[] = [
    {
      id: 'p1',
      title: 'Liv TaskFlow —AI Powered Task Management System',
      subtitle: 'A full-stack task management platform combining project workflows, local AI assistance, and automated development workflows.',
      categories: ['desktop', 'fullstack', 'ai_ml', 'devops'],
      description: 'Cross-platform task and project management platform featuring AI-powered task prioritization, interactive Kanban boards, Docker containerization, and GitHub Actions CI/CD.',
      overview: 'Liv TaskFlow is a full-stack task and project management system designed to help users organize tasks, monitor progress, and manage project workflows. It combines task tracking and Kanban-based organization with local AI assistance for task breakdown and priority recommendations.',
      longDescription: 'A full-stack task and project management application designed to organize tasks, monitor project progress, and improve team productivity. The system features an interactive Kanban board, task filtering, tags, subtasks, project progress tracking, and deadline notifications. It also integrates a locally running Ollama Mistral model to assist with task breakdowns and priority recommendations. Secure JWT authentication and role-based access control support separate user and administrator workflows.',
      image: taskflowDashboardImg,
      displayUrl: 'taskflow.app/workspace',
      screenshots: [
        {
          url: taskflowDashboardImg,
          tabLabel: 'Dashboard',
          title: 'Picture 1 — Workspace Dashboard & Task Telemetry',
          caption: 'Enterprise task overview with real-time status counters, priority breakdowns, overdue alerts, and productivity metrics.'
        },
        {
          url: taskflowAdminImg,
          tabLabel: 'Admin Governance',
          title: 'Picture 2 — Admin Governance & User Account Management',
          caption: 'Administrative control panel managing system users, security roles (ROLE_ADMIN, ROLE_USER), project governance, and global platform telemetry.'
        },
        {
          url: taskflowKanbanImg,
          tabLabel: 'Kanban Board',
          title: 'Picture 3 — Interactive Kanban Board & Task Pipeline',
          caption: 'Agile workflow board supporting drag-and-drop progression across In Progress, In Review, and Completed stages with subtask tracking.'
        },
        {
          url: taskflowProjectsImg,
          tabLabel: 'Projects Grid',
          title: 'Picture 4 — Workspace Projects Portfolio & Milestones',
          caption: 'Multi-project management hub tracking active enterprise initiatives, team member allocation, progress velocity, and delivery deadlines.'
        }
      ],
      tags: ['React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Docker', 'GitHub Actions', 'Ollama AI'],
      keyFeatures: [
        { title: 'Task management', description: 'Create, update, organize, and track tasks with subtasks and deadline alerts.' },
        { title: 'Project management', description: 'Manage projects, set milestones, and monitor overall team progress.' },
        { title: 'Kanban board', description: 'Organize tasks by status and filter tasks using multi-criteria criteria.' },
        { title: 'AI assistance', description: 'Generate task breakdowns and priority recommendations using a local Ollama model.' },
        { title: 'Authentication and authorization', description: 'JWT-based authentication with user and administrator roles.' },
        { title: 'Administration', description: 'Manage user accounts, enforce security, and oversee all organizational projects.' },
        { title: 'Development workflow', description: 'Docker containerization and automated GitHub Actions CI/CD pipelines.' }
      ],
      techStackBreakdown: [
        { category: 'Frontend', technologies: 'React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion' },
        { category: 'Backend and database', technologies: 'Node.js · Express.js · MongoDB · Mongoose · JWT · bcryptjs' },
        { category: 'AI and DevOps', technologies: 'Ollama Mistral · Docker · GitHub Actions' }
      ],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com/Livingsan/Task-management.git', 

      featured: true,
      metrics: 'Desktop & Web AI TaskFlow'
    },
    {
      id: 'p2',
      title: 'LIXNLEE E-Commerce Platform',
      subtitle: 'LIXNLEE PHP E-Commerce Shopping Platform with Coupon Discounts & Admin Dashboard',
      categories: ['fullstack'],
      description: 'A full-stack e-commerce web application developed using PHP and MySQL, featuring product browsing, shopping cart management, wishlist functionality, and secure checkout workflows.',
      overview: 'A full-stack e-commerce web application developed using PHP and MySQL, featuring a complete online shopping experience with product browsing, shopping cart management, wishlist functionality, and secure checkout workflows. The system supports coupon discounts, district-based delivery charges, category-based tax calculations, order placement and tracking, and customer account management. It also includes an administrative dashboard for managing products, orders, users, inventory, coupons, and returns.',
      longDescription: 'A full-stack e-commerce web application developed using PHP and MySQL, featuring a complete online shopping experience with product browsing, shopping cart management, wishlist functionality, and secure checkout workflows. The system supports coupon discounts, district-based delivery charges, category-based tax calculations, order placement and tracking, and customer account management. It also includes an administrative dashboard for managing products, orders, users, inventory, coupons, and returns.',
      image: lixnleeHeroImg,
      displayUrl: 'lixnlee.store/shop',
      screenshots: [
        {
          url: lixnleeHeroImg,
          tabLabel: 'Storefront',
          title: 'Picture 1 — Storefront & Interactive Hero Experience',
          caption: 'Clean, modern storefront hero banner with curated lifestyle selections, navigation, and immediate call-to-actions.'
        },
        {
          url: lixnleeProductDetailImg,
          tabLabel: 'Product Detail',
          title: 'Picture 2 — Product Details & Instant Purchase',
          caption: 'Interactive product view with dynamic pricing (RS 2,000.00), size and color variant selectors, and direct cart actions.'
        },
        {
          url: lixnleeCatalogImg,
          tabLabel: 'Hot Deals Catalog',
          title: 'Picture 3 — Deals & Multi-Category Catalog Showcase',
          caption: 'Category product showcase featuring promotional tags (Hot Deal, Free Shipping), customer ratings, and responsive item cards.'
        },
        {
          url: lixnleeAdminImg,
          tabLabel: 'Admin Panel',
          title: 'Picture 4 — Administrative Dashboard & Revenue Analytics',
          caption: 'Comprehensive back-office panel tracking gross revenue (Rs163,995.00), registered users, active offers, and visual order status breakdowns.'
        }
      ],
      tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'XAMPP', 'Apache'],
      keyFeatures: [
        { title: 'Online Shopping Experience', description: 'Intuitive product browsing, detailed views, and wishlist saves.' },
        { title: 'Shopping Cart Management', description: 'Dynamic cart calculations, quantity adjustment, and persistent states.' },
        { title: 'Discounts & Calculations', description: 'Coupon code validation, district-based delivery, and category-based tax.' },
        { title: 'Order Placement & Tracking', description: 'Multi-step checkout pipeline, order status updates, and digital invoices.' },
        { title: 'Customer Account Management', description: 'Profile customization, order histories, and address book maintenance.' },
        { title: 'Administrative Control', description: 'Dashboard to manage products, orders, users, inventory, coupons, and returns.' }
      ],
      techStackBreakdown: [
        { category: 'Frontend', technologies: 'HTML5 · CSS3 · JavaScript · Responsive Design' },
        { category: 'Backend and database', technologies: 'PHP · MySQL · Apache Server · XAMPP' }
      ],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com/Livingsan/-LIXN-LEE-E-Commerce-Platform.git',
      featured: true,
      metrics: 'Full-Stack PHP E-Commerce'
    },
    {
      id: 'p3',
      title: 'LIVPos — AI Powered Point of Sale & Inventory Management System',
      subtitle: 'LIVPos — Intelligent Retail Checkout & Multi-Branch Stock Control with Local Mistral 7B AI',
      categories: ['fullstack', 'ai_ml'],
      description: 'A full-stack point-of-sale and inventory management application designed to streamline retail checkout, stock control, and business operations with local Ollama AI demand forecasting.',
      overview: 'A full-stack point-of-sale and inventory management application designed to streamline retail checkout, stock control, and business operations. The system supports barcode-based product searches, checkout for individual and weight-based products, automated tax and discount calculations, digital receipts, multi-branch inventory management, stock transfers, customer loyalty points, and financial reporting. It also features a locally hosted AI demand forecasting engine powered by Ollama and Mistral to analyze historical sales and recommend product reorders, while keeping business data within the local environment.',
      longDescription: 'A full-stack point-of-sale and inventory management application designed to streamline retail checkout, stock control, and business operations. The system supports barcode-based product searches, checkout for individual and weight-based products, automated tax and discount calculations, digital receipts, multi-branch inventory management, stock transfers, customer loyalty points, and financial reporting. It also features a locally hosted AI demand forecasting engine powered by Ollama and Mistral to analyze historical sales and recommend product reorders, while keeping business data within the local environment.',
      image: livposDashboardImg,
      displayUrl: 'livpos.app/dashboard',
      screenshots: [
        {
          url: livposDashboardImg,
          tabLabel: 'Dashboard',
          title: 'Picture 1 — Dashboard Analytics & Store Telemetry',
          caption: 'Real-time supermarket store summary with daily revenue (Rs 4,120.00), sales counters, 7-day revenue trend charts, and top-selling products.'
        },
        {
          url: livposFinancialsImg,
          tabLabel: 'Accounting & Financials',
          title: 'Picture 2 — Accounting, Financial Records & P&L',
          caption: 'Store financial ledger tracking total sales income (Rs 8,450.00), operating expenses, net profit, and itemized expense records.'
        },
        {
          url: livposCheckoutImg,
          tabLabel: 'Point of Sale',
          title: 'Picture 3 — POS Checkout Terminal & Fast Billing',
          caption: 'Barcode scan and product search terminal with item cards, live stock levels, cart drawer, and complete sale cash settlement.'
        },
        {
          url: livposInventoryImg,
          tabLabel: 'Inventory Management',
          title: 'Picture 4 — Inventory & Multi-Product Control',
          caption: 'Comprehensive catalog table managing product barcodes, categories, retail pricing, live stock indicators, and category creation.'
        }
      ],
      tags: ['React 18', 'TypeScript', 'Java 21', 'Spring Boot', 'Spring Security', 'MongoDB', 'Maven', 'JWT', 'Ollama Mistral 7B'],
      keyFeatures: [
        { title: 'Barcode-Based Checkout', description: 'Fast searches, individual item sales, weight-based pricing, and digital receipts.' },
        { title: 'Automated Financials', description: 'Automated sales tax, promotional discounts, and payment reconciliations.' },
        { title: 'Multi-Branch Inventory', description: 'Stock control across locations, automated reorders, and inter-branch transfers.' },
        { title: 'Customer Loyalty Points', description: 'Track customer profiles, issue reward points, and redeem on checkout.' },
        { title: 'Local AI Demand Forecasting', description: 'On-device Ollama Mistral 7B analyzes past sales to predict product replenishment.' },
        { title: 'Security & Reporting', description: 'Spring Security with JWT authentication and comprehensive financial reporting.' }
      ],
      techStackBreakdown: [
        { category: 'Frontend', technologies: 'React 18 · TypeScript · Vite · Tailwind CSS' },
        { category: 'Backend and database', technologies: 'Java 21 · Spring Boot · Spring Security · MongoDB · Maven · JWT' },
        { category: 'AI and Forecasting', technologies: 'Ollama Mistral 7B (On-Device Private Inference)' }
      ],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com/Livingsan/Liv-pos-system.git',
      featured: true,
      metrics: 'Spring Boot & Local AI POS'
    },
    {
      id: 'p4',
      title: 'LivCare — AI Powered Doctor Appointment Booking System',
      subtitle: 'Full-Stack Healthcare Web Application for Doctor Discovery & Scheduling',
      categories: ['fullstack', 'ai_ml'],
      description: 'A full-stack healthcare web application that simplifies doctor discovery and appointment scheduling with role-based dashboards for patients, doctors, and administrators.',
      overview: 'A full-stack healthcare web application that simplifies doctor discovery and appointment scheduling. Patients can browse doctors by specialization, review their experience and consultation fees, book appointments, and track appointment history and status. Dedicated doctor dashboards support appointment approval, rejection, and completion, while the administrator dashboard provides system-wide oversight and user and appointment management. The application includes JWT-based authentication, password hashing, role-based dashboards, and a responsive interface for desktop, tablet, and mobile devices.',
      longDescription: 'A full-stack healthcare web application that simplifies doctor discovery and appointment scheduling. Patients can browse doctors by specialization, review their experience and consultation fees, book appointments, and track appointment history and status. Dedicated doctor dashboards support appointment approval, rejection, and completion, while the administrator dashboard provides system-wide oversight and user and appointment management. The application includes JWT-based authentication, password hashing, role-based dashboards, and a responsive interface for desktop, tablet, and mobile devices.',
      image: livcareHomeImg,
      displayUrl: 'livcare.app/doctors',
      screenshots: [
        {
          url: livcareHomeImg,
          tabLabel: 'Home Portal',
          title: 'Home Portal — Doctor Appointment Booking Hero',
          caption: 'Patient landing portal featuring quick doctor search, instant appointment scheduling, and trusted care journey.'
        },
        {
          url: livcareAdminImg,
          tabLabel: 'Admin Panel',
          title: 'Admin Panel — System-Wide Management & Analytics',
          caption: 'Comprehensive administrator overview tracking revenue, registered patients and doctors, and real-time appointment statuses.'
        },
        {
          url: livcareDoctorProfileImg,
          tabLabel: 'Doctor Profile',
          title: 'Doctor Profile & Medical Specialty Details',
          caption: 'Detailed doctor credentials, cardiology specialization, consultation fees, and appointment scheduling.'
        },
        {
          url: livcareBookingConfirmedImg,
          tabLabel: 'Booking Confirmed',
          title: 'Appointment Booking Confirmation & Receipt',
          caption: 'Verified booking summary displaying scheduled consultation date, time, physician assignment, and fee receipt.'
        }
      ],
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Mongoose', 'JWT', 'bcryptjs', 'Axios', 'React Router'],
      keyFeatures: [
        { title: 'Doctor Discovery', description: 'Browse doctors by medical specialization, experience, and consultation fees.' },
        { title: 'Appointment Booking', description: 'Select available time slots, submit bookings, and track status live.' },
        { title: 'Doctor Dashboard', description: 'Review patient appointments, approve or reject visits, and mark completed.' },
        { title: 'Administrator Oversight', description: 'System-wide control over registered doctors, patients, and platform analytics.' },
        { title: 'Security Architecture', description: 'JWT-based stateless authentication with secure bcryptjs password hashing.' },
        { title: 'Responsive Experience', description: 'Seamlessly optimized responsive layout for desktop, tablet, and mobile.' }
      ],
      techStackBreakdown: [
        { category: 'Frontend', technologies: 'React.js · Axios · React Router · Responsive UI' },
        { category: 'Backend and database', technologies: 'MongoDB · Express.js · Node.js · Mongoose · JWT · bcryptjs' }
      ],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com/Livingsan/livCare-booking-system.git',
      featured: true,
      metrics: 'Healthcare & Scheduling'
    },
    {
      id: 'p5',
      title: 'LIV Edu — AI-Powered Learning Management System',
      subtitle: 'Integrated Digital Learning Environment with Local RAG & Document AI',
      categories: ['ai_ml', 'fullstack'],
      description: 'A full-stack AI-powered learning platform featuring local RAG-based document Q&A, automated quiz generation agents, and course progress tracking for students and lecturers.',
      overview: 'A full-stack AI-powered learning platform designed to support students, lecturers, and administrators through an integrated digital learning environment. Students can enroll in courses, access lessons and learning materials, interact with an AI tutor, generate quizzes, summarize PDF documents, participate in discussion forums, and track study progress. Lecturers can manage courses, lessons, learning resources, and discussions, while administrators oversee platform users. The system uses a locally hosted language model and retrieval-augmented generation (RAG) to support AI-assisted learning and document-based question answering.',
      longDescription: 'A full-stack AI-powered learning platform designed to support students, lecturers, and administrators through an integrated digital learning environment. Students can enroll in courses, access lessons and learning materials, interact with an AI tutor, generate quizzes, summarize PDF documents, participate in discussion forums, and track study progress. Lecturers can manage courses, lessons, learning resources, and discussions, while administrators oversee platform users. The system uses a locally hosted language model and retrieval-augmented generation (RAG) to support AI-assisted learning and document-based question answering.',
      image: livEduAnalyticsImg,
      displayUrl: 'livedu.app/dashboard',
      screenshots: [
        {
          url: livEduAnalyticsImg,
          tabLabel: 'Learning Analytics',
          title: 'Learning Analytics & Academic Performance Dashboard',
          caption: 'Comprehensive study telemetry tracking total study hours, weekly study trend graphs, enrolled courses, and comparative quiz performance benchmarks.'
        },
        {
          url: livEduCoursesImg,
          tabLabel: 'Courses Catalog',
          title: 'Courses & Curriculum Exploration Portal',
          caption: 'Interactive catalog for discovering, filtering, and enrolling in courses across Software Engineering, Machine Learning, and C++.'
        },
        {
          url: livEduRagImg,
          tabLabel: 'RAG Assistant',
          title: 'RAG Smart Assistant — Document-Grounded Q&A',
          caption: 'Document intelligence powered by ChromaDB vector chunks and local Llama 3.2, generating contextual answers directly from study files.'
        },
        {
          url: livEduTutorImg,
          tabLabel: 'AI Tutor Chat',
          title: 'AI Academic Tutor — Contextual Concept & Code Explanations',
          caption: 'Interactive multi-turn academic tutor supporting subject domain filtering, step-by-step reasoning, and formatted syntax-highlighted code guidance.'
        },
        {
          url: livEduImg,
          tabLabel: 'Dashboard',
          title: 'Student Dashboard & AI Tools Hub',
          caption: 'Live student learning dashboard featuring quick access to AI Tutor Chat, AI Quiz generator, Note Summarizer, and RAG Assistant.'
        }
      ],
      tags: ['React 18', 'Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'Uvicorn', 'MongoDB', 'Motor', 'Ollama', 'Llama 3.2', 'ChromaDB', 'RAG', 'JWT'],
      keyFeatures: [
        { title: 'Course Enrollment & Materials', description: 'Enroll in courses, access rich lessons, and download learning resources.' },
        { title: 'Local RAG Document Q&A', description: 'Summarize PDFs and ask document-grounded questions with ChromaDB and Llama 3.2.' },
        { title: 'AI Quiz Generation', description: 'Automatically generate practice quizzes directly from uploaded lecture documents.' },
        { title: 'Discussion Forums', description: 'Participate in course discussions and collaborate with peers and lecturers.' },
        { title: 'Lecturer Course Studio', description: 'Create and organize courses, publish lessons, and manage discussions.' },
        { title: 'Study Progress Analytics', description: 'Track study velocity, completion rates, and learning milestones.' }
      ],
      techStackBreakdown: [
        { category: 'Frontend', technologies: 'React 18 · Vite · Tailwind CSS' },
        { category: 'Backend and database', technologies: 'Python · FastAPI · Uvicorn · MongoDB · Motor · JWT' },
        { category: 'AI and RAG', technologies: 'Ollama · Llama 3.2 · ChromaDB · RAG Architecture' }
      ],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com/Livingsan/Liv-Edu-Learning-System.git',
      featured: true,
      metrics: 'RAG & Agentic AI'
    },
    {
      id: 'p6',
      title: 'AI Fitness Coach — Personalized Fitness Planning System',
      subtitle: 'Personalized Workout & Nutrition Planning Powered by On-Device AI',
      categories: ['ai_ml', 'fullstack'],
      description: 'A full-stack AI-powered fitness application that provides personalized workout planning, meal recommendations, and fitness progress tracking using locally hosted AI models.',
      overview: 'A full-stack AI-powered fitness application that provides personalized workout planning, meal recommendations, and fitness progress tracking using locally hosted AI models. Users can create fitness profiles, set goals, view AI-generated seven-day workout plans, receive daily meal plans with macronutrient information, and interact with an AI fitness coach. The application also provides weight-tracking charts, progress analysis, personalized recommendations, and safety filtering for injury-related queries. By running AI models locally through Ollama, the system reduces reliance on paid cloud AI services.',
      longDescription: 'A full-stack AI-powered fitness application that provides personalized workout planning, meal recommendations, and fitness progress tracking using locally hosted AI models. Users can create fitness profiles, set goals, view AI-generated seven-day workout plans, receive daily meal plans with macronutrient information, and interact with an AI fitness coach. The application also provides weight-tracking charts, progress analysis, personalized recommendations, and safety filtering for injury-related queries. By running AI models locally through Ollama, the system reduces reliance on paid cloud AI services.',
      image: fitnessAiDashboardImg,
      displayUrl: 'fitnessai.app/dashboard',
      screenshots: [
        {
          url: fitnessAiDashboardImg,
          tabLabel: 'Dashboard',
          title: 'Picture 1 — Member Dashboard & Activity Telemetry',
          caption: 'Personalized wellness profile with fitness goal tracking (Fat Loss, BMI 24.7), activity logs, and quick AI actions.'
        },
        {
          url: fitnessAiDietImg,
          tabLabel: 'Diet Planner',
          title: 'Picture 2 — AI Diet Planner & Nutritional Breakdown',
          caption: 'Automated macronutrient meal schedules (Breakfast, Snacks, Lunch, Dinner) calculated for target weight and daily calorie goals.'
        },
        {
          url: fitnessAiChatImg,
          tabLabel: 'AI Fitness Chat',
          title: 'Picture 3 — Conversational AI Fitness Coach',
          caption: 'Interactive real-time fitness coach powered by local Ollama models with safety filtering and customized advice.'
        },
        {
          url: fitnessAiWorkoutImg,
          tabLabel: 'Workout Planner',
          title: 'Picture 4 — AI Weekly Workout Routine Generator',
          caption: 'Dynamic 7-day workout plans generated for user goals with targeted exercise splits, rest days, and intensity pacing.'
        }
      ],
      tags: ['React 18', 'Vite', 'Tailwind CSS', 'Python', 'Flask', 'MongoDB', 'PyMongo', 'Ollama', 'Framer Motion', 'Recharts', 'Axios'],
      keyFeatures: [
        { title: 'Fitness Profiling & Goals', description: 'Create health profiles, establish fitness targets, and log physical metrics.' },
        { title: '7-Day Workout Plans', description: 'Receive dynamic AI-generated routines tailored to goals and available equipment.' },
        { title: 'Daily Macronutrient Plans', description: 'Automated meal guides with balanced calories, protein, carbs, and fats.' },
        { title: 'Conversational AI Coach', description: 'Ask workout questions, receive technique guidance, and stay accountable.' },
        { title: 'Progress & Weight Tracking', description: 'Visual charts powered by Recharts to analyze weight and fitness velocity.' },
        { title: 'Injury Safety Filtering', description: 'Safety filtering detects injury concerns to suggest safe, modified exercises.' }
      ],
      techStackBreakdown: [
        { category: 'Frontend', technologies: 'React 18 · Vite · Tailwind CSS · Framer Motion · Recharts · Axios' },
        { category: 'Backend and database', technologies: 'Python · Flask · MongoDB · PyMongo' },
        { category: 'AI and Inference', technologies: 'Ollama Local Models · Safety Screening' }
      ],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com/Livingsan/AI-Fitness-System.git',
      featured: true,
      metrics: 'AI Fitness & Health'
    },
    {
      id: 'p7',
      title: 'LIV Hotel — Hotel Management System',
      subtitle: 'Role-Based Desktop & Web Hotel Management System with SQLite & Django',
      categories: ['desktop', 'fullstack'],
      description: 'A role-based hotel management application built with Python, Tkinter, and SQLite featuring customer reservations, package price calculation, admin dashboard, and Django web access.',
      overview: 'A role-based hotel management application built with Python, Tkinter, and SQLite, featuring customer registration, login, package browsing, reservation management, and automatic booking price calculation based on selected packages and guest counts. The desktop application includes an administrative dashboard for managing staff, packages, reservations, and booking statuses, while customers can manage their own reservations and preferences. Additional features include secure password hashing, generated record IDs, reservation ownership checks, CSV reservation exports, and a companion Django web project for browser-based access.',
      longDescription: 'A role-based hotel management application built with Python, Tkinter, and SQLite, featuring customer registration, login, package browsing, reservation management, and automatic booking price calculation based on selected packages and guest counts. The desktop application includes an administrative dashboard for managing staff, packages, reservations, and booking statuses, while customers can manage their own reservations and preferences. Additional features include secure password hashing, generated record IDs, reservation ownership checks, CSV reservation exports, and a companion Django web project for browser-based access.',
      image: livhotelGuestPortalImg,
      displayUrl: 'livhotel.app/guest',
      screenshots: [
        {
          url: livhotelGuestPortalImg,
          tabLabel: 'Guest Portal',
          title: 'Picture 1 — Guest Portal & Booking Navigation Hub',
          caption: 'Dedicated guest dashboard providing direct access to vacation packages, reservation workflows, personal settings, and authentication.'
        },
        {
          url: livhotelReservationsImg,
          tabLabel: 'Reservations',
          title: 'Picture 2 — Reservation Management & Automated Billing',
          caption: 'Interactive booking manager with automated reservation ID generation, package selection (Luxury Suite), dynamic head-count cost calculation, and instant booking summaries.'
        },
        {
          url: livhotelPackagesImg,
          tabLabel: 'Package Management',
          title: 'Picture 3 — Hotel Package Catalog & Tier Administration',
          caption: 'Administrative catalog managing suite rates (Rs. 5,000/person), meal inclusions (Breakfast & Dinner), descriptions, and multi-tier package offerings.'
        },
        {
          url: livhotelStaffImg,
          tabLabel: 'Staff Management',
          title: 'Picture 4 — Staff Directory & Human Resource Management',
          caption: 'Administrative human resources console featuring staff employee records, departmental allocations (kitchen, maintenance), salary calculation, and photo ID management.'
        }
      ],
      tags: ['Python', 'Tkinter', 'SQLite', 'Django', 'PBKDF2-HMAC-SHA256'],
      keyFeatures: [
        { title: 'Customer Registration & Login', description: 'Secure customer authentication with PBKDF2-HMAC-SHA256 password hashing.' },
        { title: 'Package & Booking Selection', description: 'Browse packages, pick dates, and calculate prices automatically by guest count.' },
        { title: 'Administrative Dashboard', description: 'Manage hotel staff, room packages, bookings, and reservation statuses.' },
        { title: 'Reservation Ownership Checks', description: 'Generated unique IDs with strict verification to protect reservation records.' },
        { title: 'CSV Report Exports', description: 'Export reservation histories and financial records into CSV spreadsheets.' },
        { title: 'Companion Django Web Project', description: 'Companion web portal offering browser-based reservation and room viewing.' }
      ],
      techStackBreakdown: [
        { category: 'Desktop Application', technologies: 'Python · Tkinter GUI' },
        { category: 'Web Companion', technologies: 'Django · HTML5 · CSS3' },
        { category: 'Database and Security', technologies: 'SQLite · PBKDF2-HMAC-SHA256 · CSV Data Utilities' }
      ],
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com/Livingsan/LIV-Hotel-Desktop-System.git',
      featured: true,
      metrics: 'Desktop & Web Hotel ERP'
    },
    {
      id: 'p8',
      title: 'Fitness App — UI/UX Design in Figma',
      subtitle: 'High-Fidelity Mobile Design System & Interactive Prototypes',
      categories: ['ui_ux'],
      description: 'High-fidelity mobile and web UI/UX design system crafted in Figma, complete with interactive prototypes, comprehensive design tokens, dark luxury aesthetic, and accessibility standards.',
      overview: 'A high-fidelity mobile and web UI/UX design system crafted in Figma, complete with interactive prototypes, comprehensive design tokens, dark luxury aesthetic, and accessibility standards. Includes 40+ responsive screen wireframes, custom design tokens, typographic hierarchy, micro-interaction states, dark-mode color balance, and WCAG AAA compliant accessibility specifications.',
      longDescription: 'A high-fidelity mobile and web UI/UX design system crafted in Figma, complete with interactive prototypes, comprehensive design tokens, dark luxury aesthetic, and accessibility standards. Includes 40+ responsive screen wireframes, custom design tokens, typographic hierarchy, micro-interaction states, dark-mode color balance, and WCAG AAA compliant accessibility specifications.',
      image: figmaFitnessDashboardImg,
      displayUrl: 'figma.com/proto/fitness-app',
      screenshots: [
        {
          url: figmaFitnessDashboardImg,
          tabLabel: 'Dashboard UI',
          title: 'Picture 1 — Mobile Fitness Dashboard & Activity UI',
          caption: 'High-fidelity mobile wellness dashboard featuring personalized greeting, BMI health index pie chart (20.1 Normal), quick module links, real-time heart rate telemetry (78 BPM), and floating action navigation.'
        },
        {
          url: figmaMealPlannerImg,
          tabLabel: 'Meal Planner',
          title: 'Picture 2 — Nutrition Analytics & Daily Meal Scheduler UI',
          caption: 'Interactive nutritional analytics screen with weekly nutrient spline graphs (Calories, Fibre, Sugar, Fats), daily meal schedule cards (Salmon Nigiri, Lowfat Milk), and dietary discovery.'
        },
        {
          url: figmaSleepTrackerImg,
          tabLabel: 'Sleep Tracker',
          title: 'Picture 3 — Circadian Sleep Tracker & Schedule UI',
          caption: 'Comprehensive sleep architecture interface with weekly duration trend wave charts, 8h 20m last night sleep metrics, circadian schedule alarms (Bedtime 09:00pm), and toggle controls.'
        },
        {
          url: figmaProgressPhotoImg,
          tabLabel: 'Progress Photo',
          title: 'Picture 4 — Visual Transformation Timeline & Photo Comparison UI',
          caption: 'Body composition progress journal featuring monthly photo reminder banners, side-by-side comparison modal triggers, and chronological photo transformation gallery.'
        }
      ],
      tags: ['Figma', 'UI/UX Design', 'Design Systems', 'Interactive Prototyping', 'WCAG AAA'],
      keyFeatures: [
        { title: 'Atomic Design System', description: 'Modular UI components, auto-layout variants, and state variations.' },
        { title: 'Dark Theme Optimization', description: 'Calibrated luxury dark palette with high-contrast accent highlights.' },
        { title: 'Interactive Prototypes', description: 'Full user flow testing, animated bottom-sheets, and responsive screens.' },
        { title: 'WCAG AAA Accessibility', description: 'Contrast-tested typography, clear spatial scale, and touch-target padding.' }
      ],
      techStackBreakdown: [
        { category: 'Design Suite', technologies: 'Figma · FigJam · Auto Layout 5.0 · Interactive Variants' },
        { category: 'Design Architecture', technologies: 'Atomic Design · Design Tokens · WCAG AAA Standards' }
      ],
      demoUrl: 'https://www.figma.com/proto/Mxu0dVmDT2AClkeK26g9FS/FitnestX-Mobile-App?node-id=426-141&starting-point-node-id=426%3A141&t=JWFc6ipdDG2DWmws-1',
      githubUrl: 'https://www.figma.com/proto/Mxu0dVmDT2AClkeK26g9FS/FitnestX-Mobile-App?node-id=426-141&starting-point-node-id=426%3A141&t=JbfC1tftLJJAd3wQ-1',
      featured: true,
      metrics: 'Figma UI/UX Design'
    }
  ];

  // Filtered projects
  const filteredProjects = projectsData.filter(p => {
    if (activeTab === 'all') return true;
    return p.categories.includes(activeTab);
  });
  const hasFilteredMobileImages = filteredProjects.some(project => Boolean(project.mobileImage));

  // Education timeline
  const educationList: Education[] = [
    {
      id: 'e1',
      degree: 'BIT Hons specialized software engineering',
      institution: 'ESU UNI',
      period: '2022 — 2026',
      description: 'Specializing in software engineering, full-stack systems, databases, cloud, and AI/LLM applications.',
      achievements: ['Software Engineering Specialization', 'Full-Stack Web & AI Focus', 'Data Structures & System Design']
    },
    {
      id: 'e2',
      degree: 'High School Diploma (Commerce Stream)',
      institution: 'D. S. Senanayake College',
      period: '2013 — 2020',
      description: 'Secondary education and G.C.E. Advanced Level in Commerce.',
      achievements: ['Commerce Stream', 'Information Technology & Business Studies', 'Extracurricular Activities']
    }
  ];

  // Experience timeline
  const experienceList: Experience[] = [
    {
      id: 'exp1',
      role: 'Lead Senior Frontend Architect',
      company: 'Aether Digital Studio',
      period: '2022 — Present',
      description: 'Spearheading design system engineering and high-traffic web applications for global enterprise clients.',
      skills: ['React 19', 'TypeScript', 'Tailwind', 'Performance Optimization', 'Team Leadership']
    },
    {
      id: 'exp2',
      role: 'UI/UX Engineer & Developer',
      company: 'Creative Minimalist Labs',
      period: '2020 — 2022',
      description: 'Designed and implemented luxury web brand experiences, custom animation suites, and client portals.',
      skills: ['Figma', 'JavaScript', 'CSS Grid', 'Micro-interactions', 'Client Relations']
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-body relative selection:bg-[var(--accent-primary)] selection:text-white transition-colors duration-200">
      
      {/* ================= HEADER / TOP NAV BAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-header)] backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-200">
        <div className="max-[239px]:px-2 w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Top Left Branding */}
          <div className="min-w-0 flex items-center space-x-3 text-xs sm:text-sm font-medium">
            <a href="#hero" className="min-w-0 [overflow-wrap:anywhere] font-['Unbounded'] font-black text-sm sm:text-base tracking-wider text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors uppercase">
              {profile.firstName || 'RAJENDRAN'} <span className="text-[var(--accent-primary)]">{profile.lastName || 'LIVINGSAN'}</span>
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold text-[var(--text-secondary)]">
            <a href="#hero" className={`transition-colors ${activeSection === 'hero' ? 'text-[var(--accent-primary)]' : 'hover:text-[var(--accent-primary)]'}`}>Home</a>
            <a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-[var(--accent-primary)]' : 'hover:text-[var(--accent-primary)]'}`}>About</a>
            <a href="#skills" className={`transition-colors ${activeSection === 'skills' ? 'text-[var(--accent-primary)]' : 'hover:text-[var(--accent-primary)]'}`}>Skills</a>
            <a href="#projects" className={`transition-colors ${activeSection === 'projects' ? 'text-[var(--accent-primary)]' : 'hover:text-[var(--accent-primary)]'}`}>Projects</a>
            <a href="#certifications" className={`transition-colors ${activeSection === 'certifications' ? 'text-[var(--accent-primary)]' : 'hover:text-[var(--accent-primary)]'}`}>Certifications</a>
            <a href="#education" className={`transition-colors ${activeSection === 'education' ? 'text-[var(--accent-primary)]' : 'hover:text-[var(--accent-primary)]'}`}>Education</a>
            <a href="#contact" className={`transition-colors ${activeSection === 'contact' ? 'text-[var(--accent-primary)]' : 'hover:text-[var(--accent-primary)]'}`}>Contact</a>
          </nav>

          {/* Top Right Controls - Social Links & Theme Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer group"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-primary)] -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              )}
            </button>

            <a 
              href={profile.github || "https://github.com/Livingsan"} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="max-[359px]:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent-primary)] flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href={profile.linkedin ? (profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`) : "https://www.linkedin.com/in/rlivingsan22/"} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="max-[359px]:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent-primary)] flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href={profile.websiteUrl ? (profile.websiteUrl.startsWith('http') ? profile.websiteUrl : `https://${profile.websiteUrl}`) : "https://livingsan.github.io/"} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Portfolio Website"
              title="Portfolio Website"
              className="max-[359px]:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent-primary)] flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] px-6 py-4 space-y-3 text-sm shadow-xl">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${activeSection === 'hero' ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'}`}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${activeSection === 'about' ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'}`}>About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${activeSection === 'skills' ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'}`}>Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${activeSection === 'projects' ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'}`}>Projects</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${activeSection === 'certifications' ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'}`}>Certifications</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${activeSection === 'education' ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'}`}>Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={`block font-medium ${activeSection === 'contact' ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'}`}>Contact</a>

            <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={profile.github || "https://github.com/Livingsan"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  className="p-2 rounded-lg bg-[var(--bg-tag)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedin ? (profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`) : "https://www.linkedin.com/in/rlivingsan22/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  className="p-2 rounded-lg bg-[var(--bg-tag)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.websiteUrl ? (profile.websiteUrl.startsWith('http') ? profile.websiteUrl : `https://${profile.websiteUrl}`) : "https://livingsan.github.io/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio Website"
                  title="Portfolio Website"
                  className="p-2 rounded-lg bg-[var(--bg-tag)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
              <button
                onClick={toggleTheme}
                className="px-3 py-1.5 rounded-lg bg-[var(--bg-tag)] text-xs font-medium text-[var(--text-primary)] flex items-center gap-2 border border-[var(--border-color)] cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                <span>{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION (MATCHING IMAGE LAYOUT & SYSTEM PALETTE) ================= */}
      <section id="hero" className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between min-h-[calc(100svh-4rem)] relative overflow-hidden">
        
        {/* Subtle Ambient Atmosphere Glow (Warm aura for light theme, deep crimson for dark) */}
        <div className="absolute top-1/6 right-[-5%] w-[560px] h-[560px] bg-[radial-gradient(ellipse_at_center,var(--accent-primary)_0%,transparent_70%)] opacity-[0.06] dark:opacity-[0.08] blur-[100px] pointer-events-none rounded-full"></div>
        <div className="absolute top-1/3 left-[-10%] w-[420px] h-[420px] bg-[radial-gradient(ellipse_at_center,var(--border-strong)_0%,transparent_70%)] opacity-[0.25] dark:opacity-0 blur-[90px] pointer-events-none rounded-full"></div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-color)] py-3 text-xs font-mono tracking-wider text-gray-400">
          <span>Software Engineering &amp; AI Systems</span>
          <span className="text-right">Colombo onsite &amp; Remote</span>
        </div>

        {/* Main Hero Body Grid (Left: Copy & CTAs, Right: Portrait/Visual) */}
        <div className="my-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-8 xl:gap-x-10 lg:gap-y-8 items-center lg:items-start">
          <div className="min-w-0 lg:col-span-7">
            <h1 className="flex min-w-0 flex-col leading-[0.93] uppercase select-none">
              <span className="block max-w-full whitespace-nowrap text-[var(--hero-name-first)] font-['Syncopate'] font-bold text-[clamp(30px,6.5vw,82px)] leading-tight tracking-tighter transition-colors">
                {profile.firstName || 'RAJENDRAN'}
              </span>
              <span className="block max-w-full [overflow-wrap:anywhere] text-[var(--hero-name-last)] font-['Unbounded'] font-black text-[clamp(30px,6.5vw,82px)] leading-tight tracking-tighter drop-shadow-sm transition-colors">
                {profile.lastName || 'LIVINGSAN'}
              </span>
            </h1>
          </div>
          
          {/* Left Column (Main Name Title, Specialization Tag, Bio, Buttons) */}
          <div className="lg:col-span-7 min-w-0 space-y-6 sm:space-y-7 relative z-10">
            
            {/* Specialization / Roles */}
            <div className="hero-role-entry flex min-w-0 items-center gap-2.5 pt-1">
              <span className="shrink-0 font-mono text-base font-bold text-[var(--accent-primary)] sm:text-lg" aria-hidden="true">&gt;_</span>
              <span
                className="hero-typewriter"
                aria-label="Software engineer, AI & LLM Developer, Full-Stack Developer"
              >
                {prefersReducedMotion ? (
                  <span className="hero-typewriter-copy">Software engineer</span>
                ) : (
                  <>
                    <span className="hero-typewriter-copy" aria-hidden="true">{displayedTitle}</span>
                    <span className="hero-typewriter-cursor" aria-hidden="true" />
                  </>
                )}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-['Unbounded'] font-bold text-gray-400 leading-snug tracking-normal [text-wrap:balance] [overflow-wrap:anywhere]">
              I build full-stack web apps and privacy-first AI tools.
            </h2>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                "React & Express",
                "Java & Spring Boot",
                "Docker & CI/CD",
                "Python & FastAPI",
                "MongoDB & SQL",
                "Ollama & RAG & LangChain",
              ].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-sm font-mono font-medium rounded-md bg-[var(--bg-tag)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-border)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-card)] transition-all shadow-2xs"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Primary Download Resume Button */}
              <a 
                href="/RAJENDRAN LIVINGSAN.pdf"
                download="RAJENDRAN-LIVINGSAN-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-semibold text-xs sm:text-sm tracking-wide rounded-xl shadow-md shadow-[var(--accent-primary)]/20 hover:shadow-lg hover:shadow-[var(--accent-primary)]/30 transition-all duration-200 active:scale-[0.98] border border-[var(--accent-primary)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Secondary View Projects Button */}
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[var(--bg-tag)] text-[var(--text-primary)] border border-[var(--border-strong)] hover:border-[var(--accent-border)] font-medium text-xs sm:text-sm tracking-wide rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
              >
                <Layers className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              {/* Tertiary Contact Link */}
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent hover:bg-[var(--bg-tag)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-strong)] font-medium text-xs sm:text-sm rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
              >
                <span>Contact</span>
              </a>

              {/* Social Quick Action Buttons in Home Section */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-2 sm:border-l sm:border-[var(--border-strong)]">
                <a
                  href={profile.github || "https://github.com/Livingsan"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent-primary)] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={profile.linkedin ? (profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`) : "https://www.linkedin.com/in/rlivingsan22/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent-primary)] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={profile.websiteUrl ? (profile.websiteUrl.startsWith('http') ? profile.websiteUrl : `https://${profile.websiteUrl}`) : "https://livingsan.github.io/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio Website"
                  title="Portfolio Website"
                  className="w-11 h-11 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white hover:bg-[var(--accent-primary)] flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column (Developer Workstation Photo / Image Frame) */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:self-start relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-card)] shadow-lg shadow-stone-900/[0.05] dark:shadow-black/50 group flex items-center justify-center p-2.5">
              {profile.avatarUrl ? (
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src={profile.avatarUrl} 
                    alt="RAJENDRAN LIVINGSAN Portrait" 
                    className="w-full h-full object-cover object-[center_22%] grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-80 z-10"></div>
                </div>
              ) : (
                <div className="w-full h-full rounded-xl border border-[var(--border-color)] bg-gradient-to-b from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--bg-tag)] relative flex flex-col items-center justify-center p-8 overflow-hidden select-none">
                  {/* Subtle architectural corner crosses */}
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-mono text-[var(--accent-primary)]/40 font-bold select-none">+</span>
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-[var(--accent-primary)]/40 font-bold select-none">+</span>
                  <span className="absolute bottom-16 left-2.5 text-[10px] font-mono text-[var(--accent-primary)]/40 font-bold select-none">+</span>
                  <span className="absolute bottom-16 right-2.5 text-[10px] font-mono text-[var(--accent-primary)]/40 font-bold select-none">+</span>

                  {/* Dotted texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(var(--decorative-dots)_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-[var(--decorative-dots-opacity)] pointer-events-none"></div>

                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-primary)] mb-3 shadow-sm group-hover:border-[var(--accent-border)] group-hover:scale-105 transition-all duration-300">
                    <User className="w-12 h-12 stroke-[1.5]" />
                  </div>

                  <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent-border)] text-[var(--accent-primary)] font-mono text-[10px] font-bold tracking-wider uppercase mb-2 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                    <span>PHOTO SPEC READY</span>
                  </div>

                  <span className="relative z-10 font-['Unbounded'] font-bold text-sm tracking-wider text-[var(--text-primary)] uppercase">
                    Photo Placeholder
                  </span>
                  <span className="relative z-10 text-[11px] font-mono text-[var(--text-secondary)] mt-1 max-w-[220px]">
                    Ready for your custom headshot
                  </span>
                </div>
              )}

              {/* Corner Live Status Tag */}
              <div className="absolute bottom-5 left-5 right-5 z-20 p-3 bg-[var(--bg-card)]/95 backdrop-blur-md rounded-xl border border-[var(--border-color)] flex items-center justify-center text-xs shadow-md">
                <span className="text-xs font-mono text-[var(--text-secondary)]">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ================= INTRO / ABOUT ME SECTION ================= */}
      <section id="about" className="py-20 bg-[var(--bg-alt)] border-y border-[var(--border-color)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)] mb-8 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
            <span className="text-[11px] uppercase tracking-widest text-[var(--accent-primary)] font-bold font-mono">01 · INTRODUCTION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* User Profile Image */}
            <div className="lg:col-span-5 relative group flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-card)] aspect-square shadow-lg shadow-stone-900/[0.05] dark:shadow-black/50 group flex items-center justify-center p-2.5 lg:translate-y-2">
                {profile.avatarUrl ? (
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <img 
                      src={profile.avatarUrl} 
                      alt="RAJENDRAN LIVINGSAN Profile"
                      className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-60"></div>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-xl border border-[var(--border-color)] bg-gradient-to-b from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--bg-tag)] relative flex flex-col items-center justify-center p-8 overflow-hidden select-none">
                    {/* Subtle architectural corner crosses */}
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono text-[var(--accent-primary)]/40 font-bold select-none">+</span>
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-[var(--accent-primary)]/40 font-bold select-none">+</span>
                    <span className="absolute bottom-16 left-2.5 text-[10px] font-mono text-[var(--accent-primary)]/40 font-bold select-none">+</span>
                    <span className="absolute bottom-16 right-2.5 text-[10px] font-mono text-[var(--accent-primary)]/40 font-bold select-none">+</span>

                    {/* Dotted texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(var(--decorative-dots)_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-[var(--decorative-dots-opacity)] pointer-events-none"></div>

                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-primary)] mb-3 shadow-sm group-hover:border-[var(--accent-border)] group-hover:scale-105 transition-all duration-300">
                      <User className="w-12 h-12 stroke-[1.5]" />
                    </div>

                    <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent-border)] text-[var(--accent-primary)] font-mono text-[10px] font-bold tracking-wider uppercase mb-2 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                      <span>PROFILE READY</span>
                    </div>

                    <span className="relative z-10 font-['Unbounded'] font-bold text-sm tracking-wider text-[var(--text-primary)] uppercase">
                      Photo Placeholder
                    </span>
                    <span className="relative z-10 text-[11px] font-mono text-[var(--text-secondary)] mt-1 max-w-[220px]">
                      Ready for your custom image
                    </span>
                  </div>
                )}
                
                {/* Image Tag Overlay (Bottom Left) */}
                <div className="absolute bottom-5 left-5 right-5 p-3 bg-[var(--bg-card)]/95 backdrop-blur-md rounded-xl border border-[var(--border-color)] text-xs z-20 shadow-md">
                  <div className="max-[239px]:flex-wrap flex items-center justify-center">
                    <span className="text-[var(--text-primary)] font-bold font-mono text-xs sm:text-sm tracking-wider">{profile.signatureName || 'RAJENDRAN LIVINGSAN'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Intro Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] leading-tight [overflow-wrap:anywhere]">
                Building full-stack web applications and AI-driven software solutions.
              </h2>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Final-year Software Engineering student passionate about developing end-to-end web applications and integrating local AI architecture. Skilled in building responsive interfaces and robust backends—from Spring Boot POS engines to RAG-powered learning platforms. Ready to bring clean code and practical problem-solving to a software engineering team.
              </p>

              {/* Stat Boxes */}
              <div className="max-[239px]:grid-cols-1 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[var(--border-color)]">
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-primary)]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-[var(--accent-primary)]">8+</div>
                  <div className="text-xs text-[var(--text-primary)] mt-1 font-semibold">Full-Stack Projects</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">Enterprise &amp; AI Apps</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-primary)]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">20+</div>
                  <div className="text-xs text-[var(--text-primary)] mt-1 font-semibold">Core Tech Stack</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">React, Node, Spring, Py</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-primary)]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">100%</div>
                  <div className="text-xs text-[var(--text-primary)] mt-1 font-semibold">Local AI Integrated</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">Ollama, RAG, LLMs</div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-border)] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-primary)]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-[var(--accent-primary)]">2026</div>
                  <div className="text-xs text-[var(--text-primary)] mt-1 font-semibold">Graduation Year</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5 font-mono">BIT Hons Specialized Software Engineering</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="#contact"
                  className="px-6 py-3.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs uppercase tracking-wider transition-all rounded-xl shadow-md shadow-[var(--accent-primary)]/20 active:scale-95 cursor-pointer"
                >
                  GET IN TOUCH
                </a>
                <a 
                  href="#projects"
                  className="px-6 py-3.5 bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] text-[var(--text-primary)] font-bold text-xs uppercase tracking-wider transition-all rounded-xl shadow-sm active:scale-95 cursor-pointer"
                >
                  EXPLORE WORKS
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SKILLS MATRIX SECTION ================= */}
      <section id="skills" className="py-20 bg-[var(--bg-main)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[2px] bg-[var(--accent-primary)]"></span>
              <span className="text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold font-mono">02 · TECHNICAL EXPERTISE</span>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] [overflow-wrap:anywhere]">
                Capabilities &amp; Skillset
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 max-w-xl">
                A practical toolkit built through full-stack, AI, desktop, and product-design projects.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Skill categories"
              onPointerLeave={cancelSkillHover}
              className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 p-1.5 mb-6 bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-xl shadow-xs"
            >
              {skillCategories.map(category => {
                const isActive = skillCategoryFilter === category.id;
                return (
                  <button
                    key={category.id}
                    id={`skill-tab-${category.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="skill-category-panel"
                    tabIndex={isActive ? 0 : -1}
                    onPointerEnter={event => {
                      cancelSkillHover();
                      if (event.pointerType === 'touch' || isActive) return;
                      skillHoverTimeout.current = setTimeout(() => {
                        skillHoverTimeout.current = null;
                        setSkillCategoryFilter(current => current === category.id ? current : category.id);
                      }, 120);
                    }}
                    onPointerLeave={cancelSkillHover}
                    onFocus={() => activateSkillCategory(category.id)}
                    onClick={() => activateSkillCategory(category.id)}
                    onKeyDown={event => {
                      const currentIndex = skillCategories.findIndex(item => item.id === category.id);
                      let nextIndex: number | undefined;
                      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % skillCategories.length;
                      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + skillCategories.length) % skillCategories.length;
                      if (nextIndex !== undefined) {
                        event.preventDefault();
                        const nextCategory = skillCategories[nextIndex];
                        activateSkillCategory(nextCategory.id);
                        document.getElementById(`skill-tab-${nextCategory.id}`)?.focus();
                      }
                    }}
                    className={`relative min-w-0 rounded-lg px-2 py-2.5 text-[11px] sm:text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[var(--text-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg bg-[var(--accent-primary)] shadow-xs"
                        transition={prefersReducedMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10 block [overflow-wrap:anywhere]">{category.label}</span>
                  </button>
                );
              })}
            </div>

            <div
              id="skill-category-panel"
              role="tabpanel"
              aria-labelledby={`skill-tab-${activeSkillCategory.id}`}
              tabIndex={0}
              className="focus-visible:rounded-xl"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">{activeSkillCategory.label}</h3>
                <span className="text-[10px] sm:text-xs font-mono text-[var(--text-muted)]">
                  {activeSkillCategory.skills.length} skills
                </span>
              </div>

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeSkillCategory.id}
                  initial={prefersReducedMotion ? false : 'hidden'}
                  animate="visible"
                  exit={prefersReducedMotion ? undefined : 'exit'}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: prefersReducedMotion ? { duration: 0 } : { staggerChildren: 0.05 },
                    },
                    exit: { opacity: 0, transition: { duration: 0.12 } },
                  }}
                  layout={!prefersReducedMotion}
                  transition={{
                    layout: {
                      duration: prefersReducedMotion ? 0 : 0.24,
                      ease: 'easeOut',
                    },
                  }}
                  className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
                >
                  {activeSkillCategory.skills.map(skill => (
                    <motion.div
                      key={skill.name}
                      variants={{
                        hidden: prefersReducedMotion ? {} : { opacity: 0, y: 15, scale: 0.98 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: prefersReducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] },
                        },
                        exit: prefersReducedMotion ? {} : { opacity: 0, y: -10, transition: { duration: 0.16 } },
                      }}
                      whileHover={prefersReducedMotion ? undefined : {
                        y: -3,
                        scale: 1.015,
                        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                      }}
                      className="skill-card group relative flex min-h-[76px] min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-3.5 py-3 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-[var(--border-skill-hover)] hover:shadow-[var(--shadow-skill-hover)] focus-within:border-[var(--border-skill-hover)] focus-within:shadow-[var(--shadow-skill-hover)] motion-reduce:transform-none"
                    >
                      <span className="pointer-events-none absolute inset-0 bg-[var(--accent-subtle)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-tag)] text-[var(--text-secondary)] transition-colors duration-200 group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent-primary)]">
                        {skill.logoType ? (
                          <span className="transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                            <SkillLogo type={skill.logoType} />
                          </span>
                        ) : (
                          <span aria-hidden="true" className="font-mono text-xs font-bold text-[var(--accent-primary)]">
                            {skill.name.split(/[\s&(/-]+/).filter(Boolean).slice(0, 2).map(word => word[0]).join('').toUpperCase()}
                          </span>
                        )}
                      </span>
                      <span className="relative z-10 min-w-0 text-sm font-semibold leading-snug text-[var(--text-primary)] [overflow-wrap:anywhere] transition-colors group-hover:text-[var(--accent-primary)]">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS SHOWCASE SECTION ================= */}
      <section id="projects" className="py-20 bg-[var(--bg-alt)] border-y border-[var(--border-color)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[2px] bg-[var(--accent-primary)]"></span>
              <span className="text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold font-mono">03 · SELECTED WORKS</span>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)]">
                Featured Projects &amp; Case Studies
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2">
                A selection of applications, design systems, and software engineering projects.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Project categories"
              onPointerLeave={cancelProjectHover}
              className="flex w-full flex-nowrap gap-1.5 overflow-x-auto p-1.5 bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-xl shadow-xs"
            >
              {projectCategories.map(category => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    id={`project-tab-${category.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="project-category-panel"
                    tabIndex={isActive ? 0 : -1}
                    onPointerEnter={event => {
                      cancelProjectHover();
                      if (event.pointerType === 'touch' || isActive) return;
                      projectHoverTimeout.current = setTimeout(() => {
                        projectHoverTimeout.current = null;
                        setActiveTab(current => current === category.id ? current : category.id);
                      }, 120);
                    }}
                    onPointerLeave={cancelProjectHover}
                    onFocus={() => activateProjectCategory(category.id)}
                    onClick={() => activateProjectCategory(category.id)}
                    onKeyDown={event => {
                      const currentIndex = projectCategories.findIndex(item => item.id === category.id);
                      let nextIndex: number | undefined;
                      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % projectCategories.length;
                      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + projectCategories.length) % projectCategories.length;
                      if (nextIndex !== undefined) {
                        event.preventDefault();
                        const nextCategory = projectCategories[nextIndex];
                        activateProjectCategory(nextCategory.id);
                        document.getElementById(`project-tab-${nextCategory.id}`)?.focus();
                      }
                    }}
                    className={`relative min-w-max shrink-0 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors duration-200 cursor-pointer lg:min-w-0 lg:flex-1 ${
                      isActive
                        ? 'text-[var(--text-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeProjectTab"
                        className="absolute inset-0 rounded-lg bg-[var(--accent-primary)] shadow-xs"
                        transition={prefersReducedMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10 block whitespace-nowrap">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div
            id="project-category-panel"
            role="tabpanel"
            aria-labelledby={`project-tab-${activeTab}`}
            tabIndex={0}
            className="focus-visible:rounded-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center justify-between gap-3 min-w-36">
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">{activeProjectCategory.label}</h3>
                <span className="text-[10px] sm:text-xs font-mono text-[var(--text-muted)]">
                  {filteredProjects.length} projects
                </span>
              </div>

              {hasFilteredMobileImages && (
                <div className="flex items-center gap-1 p-1 bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-xl shadow-xs text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setProjectDeviceMode('duo')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                      projectDeviceMode === 'duo'
                        ? 'bg-[var(--accent-primary)] text-white font-bold shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tag)]'
                    }`}
                    title="Desktop & Phone Screen (as in design reference)"
                  >
                    <Layout className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">Desktop + Phone</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectDeviceMode('phone')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                      projectDeviceMode === 'phone'
                        ? 'bg-[var(--accent-primary)] text-white font-bold shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tag)]'
                    }`}
                    title="Only Phone Screen view"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">Only Phone</span>
                  </button>
                </div>
              )}
            </div>

            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={activeTab}
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' }}
                layout={!prefersReducedMotion}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 15, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden group group/card bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl flex flex-col justify-between hover:border-[var(--accent-border)] transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[0_14px_34px_rgba(200,29,37,0.14)] hover:-translate-y-1"
                  >
                {/* Red hairline accent on card hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <div>
                  {/* Studio Presentation Stage for the Project Image */}
                  <div className={`@container relative p-5 pr-16 sm:p-6 sm:pr-16 bg-gradient-to-br from-[var(--bg-alt)] via-[var(--bg-card)] to-[var(--bg-alt)] border-b border-[var(--border-color)] flex items-center justify-center overflow-visible ${projectDeviceMode === 'phone' ? 'min-h-[420px]' : ''}`}>
                    
                    {/* Desktop Browser / App Window Mockup Container (Shown in Duo mode) */}
                    {(projectDeviceMode === 'duo' || !project.mobileImage) && (
                      <div 
                        onClick={() => {
                          setSelectedProject(project);
                          setModalActiveScreenshotIndex(0);
                        }}
                        className="relative w-full aspect-video rounded-lg overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-card)] ring-1 ring-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.22)] group/preview cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[var(--accent-primary)]/60 flex flex-col"
                        title="Click to view Desktop Case Study"
                      >
                        {/* Browser Window Chrome Top Bar */}
                        <div className="h-5 px-2 bg-[var(--bg-card)] border-b border-[var(--border-color)] flex items-center justify-between gap-2 shrink-0 select-none">
                          {/* Traffic light window controls */}
                          <div className="flex items-center space-x-1 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]/80 inline-block"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]/80 inline-block"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]/80 inline-block"></span>
                          </div>

                          {/* URL Bar Capsule */}
                          <div className="flex items-center justify-center gap-1 px-2 py-0.5 rounded bg-[var(--bg-tag)] border border-[var(--border-color)] text-[7px] font-mono text-[var(--text-secondary)] min-w-0 w-[58%] truncate">
                            <span className="text-[var(--accent-primary)] font-bold">●</span>
                            <span className="truncate">{project.displayUrl}</span>
                          </div>

                          {/* Gallery Counter */}
                          <div className="flex items-center gap-1 text-[7px] font-mono font-bold text-[var(--text-muted)] shrink-0">
                            <span>1/{project.screenshots?.length || 1}</span>
                          </div>
                        </div>

                        {/* Viewport Frame with Screenshot */}
                        <div className="relative flex-1 min-h-0 overflow-hidden bg-white dark:bg-[var(--bg-card-subtle)]">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover/preview:scale-[1.02] transition-transform duration-500" 
                          />

                          {/* Interactive Hover Inspect Hint */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <span className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] text-xs font-mono font-bold flex items-center gap-1.5 shadow-xl border border-[var(--border-strong)] transform translate-y-1 group-hover/preview:translate-y-0 transition-transform">
                              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                              <span>Open Case Study</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mobileImage && (
                      <IphoneMockup
                        project={project}
                        mode={projectDeviceMode}
                        onOpenScreenshot={() => setActiveScreenshot({ project, activeImgIndex: 0 })}
                      />
                    )}

                  </div>

                  {/* Structural Spec Banner separating Image from Info */}
                  <div className="px-6 py-2.5 bg-[var(--bg-tag)] border-b border-[var(--border-color)] flex items-center justify-between text-[11px] font-mono select-none">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                      <span className="uppercase tracking-widest text-[var(--text-primary)] font-bold text-[10px]">
                        PROJECT SPECIFICATION &amp; STACK
                      </span>
                    </div>
                    <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-wider font-semibold">
                      REF #{project.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 sm:p-7 space-y-4 bg-[var(--bg-card)]">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 bg-[var(--bg-tag)] text-[11px] text-[var(--text-secondary)] rounded-md border border-[var(--border-color)] font-mono font-semibold hover:border-[var(--accent-border)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug [overflow-wrap:anywhere]">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                      <ul className="grid gap-2 pt-1">
                        {project.keyFeatures.slice(0, 2).map((feature) => (
                          <li key={feature.title} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[var(--accent-primary)]" />
                            <span>
                              <span className="font-semibold text-[var(--text-primary)]">{feature.title}</span>
                              <span> — {feature.description}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {project.note && (
                      <p className="text-[11px] text-[var(--text-muted)] italic border-l-2 border-[var(--accent-primary)] pl-2.5 py-0.5 bg-[var(--bg-tag)]/50 rounded-r-md">
                        {project.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="max-[280px]:px-3 max-[280px]:justify-start px-6 pb-5 pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-color)] bg-[var(--bg-card)] rounded-b-2xl">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setModalActiveScreenshotIndex(0);
                    }}
                    className="max-[280px]:w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white text-xs font-bold shadow-sm shadow-[var(--accent-subtle)] transition-all cursor-pointer"
                  >
                    <span>View Case Study</span> <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="max-[280px]:w-full max-[280px]:flex-wrap flex items-center gap-2 text-[var(--text-secondary)]">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-tag)] border border-[var(--border-strong)] hover:border-[var(--accent-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-semibold transition-colors" title="GitHub Code">
                      <Github className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>
                    <button 
                      onClick={() => setActiveScreenshot({ project, activeImgIndex: 0 })} 
                      className="cursor-pointer inline-flex items-center gap-2 text-xs text-[var(--text-secondary)] px-3 py-2.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-tag)] border border-[var(--border-strong)] hover:border-[var(--accent-border)] hover:text-[var(--text-primary)] font-semibold transition-all" 
                      title="View System Screenshots"
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Screenshots</span>
                    </button>
                  </div>
                </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS & LEARNING SECTION ================= */}
      <section id="certifications" className="scroll-mt-20 py-20 bg-[var(--bg-main)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 flex items-center space-x-3">
              <span className="h-[2px] w-8 bg-[var(--accent-primary)]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
                04 · CONTINUOUS LEARNING
              </span>
            </div>
            <h2 className="mb-8 text-3xl font-display font-bold text-[var(--text-primary)] sm:text-4xl">
              Certifications &amp; Learning
            </h2>
            <CertificationCarousel items={certifications} prefersReducedMotion={prefersReducedMotion} />
          </motion.div>
        </div>
      </section>

      {/* ================= EDUCATION & ACADEMIC JOURNEY SECTION ================= */}
      <section id="education" className="py-20 bg-[var(--bg-main)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[var(--accent-primary)]"></span>
            <span className="text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold font-mono">05 · ACADEMIC JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] mb-12">
            Education &amp; Academic Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Academic Journey */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-2 text-lg font-display font-bold text-[var(--text-primary)]">
                <GraduationCap className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>Academic Journey</span>
              </div>

              <div className="p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl space-y-5 relative overflow-hidden group hover:border-[var(--accent-border)] transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]">
                {/* Top hairline accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/5 rounded-bl-full pointer-events-none"></div>
                
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[var(--accent-subtle)] text-[var(--accent-primary)] border border-[var(--accent-border)] mb-2 uppercase">
                      Current Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] leading-tight">
                      Bachelor of Information Technology Honours
                    </h3>
                    <p className="text-xs text-[var(--accent-primary)] font-mono font-semibold mt-1">
                      Specialization: BIT Hons Specialized Software Engineering
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--bg-tag)] text-[var(--text-primary)] border border-[var(--border-strong)] font-semibold shadow-2xs">
                    2022 – 2026
                  </span>
                </div>

                <div className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider font-semibold flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                  <span>ESU UNI COLOMBO</span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                  Final-year undergraduate specializing in Software Engineering, with a focus on full-stack development, artificial intelligence, databases, cloud computing, and software engineering practices.
                </p>

                <div className="pt-3 border-t border-[var(--border-color)]">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] mb-2.5 uppercase tracking-wider font-semibold">Academic Focus Areas</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Software Engineering', 'Full-Stack Development', 'AI & LLM', 'Database Systems', 'Cloud Computing'].map((tag, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-[var(--bg-tag)] text-[var(--text-secondary)] rounded-md border border-[var(--border-color)] font-mono font-medium hover:border-[var(--accent-border)] hover:text-[var(--text-primary)] transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* High School Diploma Card */}
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl space-y-3 relative overflow-hidden group hover:border-[var(--accent-border)] transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[var(--bg-tag)] text-[var(--text-secondary)] border border-[var(--border-strong)] mb-2 uppercase">
                      High school diploma
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[var(--text-primary)] leading-tight">
                      D. S. Senanayake College Colombo
                    </h3>
                    <p className="text-xs text-[var(--accent-primary)] font-mono font-semibold mt-1">
                      Stream: Commerce
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--bg-tag)] text-[var(--text-primary)] border border-[var(--border-strong)] font-semibold shadow-2xs">
                    2013 – 2020
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Academic Focus */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-2 text-lg font-display font-bold text-[var(--text-primary)]">
                <BookOpen className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>Academic Focus</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: 'Software Engineering',
                    description: 'Full-stack application development, software architecture, REST APIs, authentication and system design.'
                  },
                  {
                    title: 'Artificial Intelligence',
                    description: 'Generative AI, LLM applications, RAG pipelines, local LLMs and agentic AI workflows.'
                  },
                  {
                    title: 'Database Systems',
                    description: 'MongoDB, MySQL, database design, advanced database concepts and data management.'
                  },
                  {
                    title: 'Cloud & DevOps',
                    description: 'Docker, Docker Compose, CI/CD and GitHub Actions.'
                  },
                  {
                    title: 'Data & Analytics',
                    description: 'Data Science, Python, pandas, scikit-learn and data visualization.'
                  }
                ].map((focus, idx) => (
                  <div key={idx} className="p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl flex items-start space-x-3.5 hover:border-[var(--accent-border)] transition-all group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent-primary)] flex-shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(217,31,43,0.35)]"></div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {focus.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {focus.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-20 bg-[var(--bg-alt)] border-t border-[var(--border-color)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[var(--accent-primary)]"></span>
            <span className="text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold font-mono">06 · LET'S CONNECT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column (Text & Contact Cards) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)]">
                  Get In Touch
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                  Looking for a Software Engineering Intern, Full-Stack Developer, or technical collaborator? Feel free to reach out for internship opportunities or technical inquiries.
                </p>
              </div>

              <div className="space-y-4">
                {/* Contact Card 1 (Email) */}
                <div className="p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl flex items-center justify-between shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--accent-border)] transition-all group">
                  <div className="flex min-w-0 items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent-primary)] border border-[var(--accent-border)] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono font-semibold">EMAIL ADDRESS</div>
                      <div className="min-w-0 [overflow-wrap:anywhere] text-xs sm:text-sm font-mono text-[var(--text-primary)] font-medium">{profile.contactEmail || 'rlivingsan@gmail.com'}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 p-2 bg-[var(--bg-tag)] hover:bg-[var(--accent-primary)] text-[var(--text-primary)] hover:text-white rounded-lg border border-[var(--border-strong)] hover:border-[var(--accent-primary)] transition-colors cursor-pointer shadow-2xs"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Contact Card 2 (Base Location) */}
                <div className="p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl flex items-center space-x-3 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--accent-border)] transition-all group">
                  <div className="p-2.5 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent-primary)] border border-[var(--accent-border)] group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono font-semibold">BASE LOCATION</div>
                    <div className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">{profile.location || 'Colombo, Sri Lanka'}</div>
                  </div>
                </div>

                {/* Contact Card 3 (Contact Number) */}
                <div className="p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl flex items-center space-x-3 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--accent-border)] transition-all group">
                  <div className="p-2.5 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent-primary)] border border-[var(--accent-border)] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono font-semibold">CONTACT NUMBER</div>
                    <div className="text-xs sm:text-sm font-mono text-[var(--text-primary)] font-medium">{profile.contactPhone || '0743113022'}</div>
                  </div>
                </div>
              </div>

              {/* Social Connections Bar */}
              <div className="pt-4 border-t border-[var(--border-color)]">
                <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3 font-mono font-semibold">Social Connections</div>
                <div className="flex items-center space-x-3">
                  <a 
                    href={profile.github || 'https://github.com/Livingsan'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-[var(--bg-card)] hover:bg-[var(--accent-primary)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] rounded-xl text-[var(--text-primary)] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-xs" 
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={profile.linkedin ? (profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`) : 'https://www.linkedin.com/in/rlivingsan22/'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-[var(--bg-card)] hover:bg-[var(--accent-primary)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] rounded-xl text-[var(--text-primary)] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-xs" 
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={profile.websiteUrl ? (profile.websiteUrl.startsWith('http') ? profile.websiteUrl : `https://${profile.websiteUrl}`) : 'https://livingsan.github.io/'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-[var(--bg-card)] hover:bg-[var(--accent-primary)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] rounded-xl text-[var(--text-primary)] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-xs" 
                    title="Portfolio Website"
                    aria-label="Portfolio Website"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (Interactive Contact Form) */}
            <div className="relative overflow-hidden lg:col-span-7 bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] shadow-[var(--shadow-card)]">
              {/* Top hairline accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--accent-primary)]"></div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[var(--accent-subtle)] text-[var(--accent-primary)] flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">Message Dispatched</h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">Thank you for reaching out! I will respond to your inquiry shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[var(--text-primary)] font-medium">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        placeholder="e.g., Rajendran Livingsan"
                        className="w-full px-4 py-3 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] shadow-2xs transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-[var(--text-primary)] font-medium">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        placeholder="e.g., rlivingsan@gmail.com"
                        className="w-full px-4 py-3 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] shadow-2xs transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[var(--text-primary)] font-medium">Subject</label>
                    <input 
                      type="text" 
                      value={formState.subject}
                      onChange={e => setFormState({...formState, subject: e.target.value})}
                      placeholder="Internship Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] shadow-2xs transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[var(--text-primary)] font-medium">Message Details *</label>
                    <textarea 
                      required
                      rows={5}
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      placeholder="Hi! I'd like to discuss an internship role or software engineering project..."
                      className="w-full px-4 py-3 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded-xl text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] shadow-2xs transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md shadow-[var(--accent-primary)]/20 flex items-center justify-center gap-2.5 rounded-xl active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> SEND MESSAGE
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)] bg-[var(--bg-main)] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Copyright */}
          <div className="text-[var(--text-secondary)] font-mono text-xs sm:text-sm">
            © 2026 Rajendran Livingsan. All rights reserved.
          </div>

          {/* Center: Location Tag with pulse indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>📍 Colombo, Sri Lanka</span>
          </div>

          {/* Right: Back to Top smooth scroll button */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] text-xs font-semibold rounded-lg transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              <span>Back to Top</span>
              <span className="text-[var(--accent-primary)] font-bold">↑</span>
            </button>
          </div>

        </div>
      </footer>

      {/* ================= CASE STUDY DEDICATED MODAL / PAGE PREVIEW ================= */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-[var(--bg-overlay)] backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[var(--bg-modal)] border border-[var(--border-strong)] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 relative space-y-7 shadow-2xl text-[var(--text-primary)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button & Badge */}
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-md bg-[var(--accent-subtle)] text-[var(--accent-primary)] border border-[var(--accent-border)] font-mono text-[11px] font-semibold tracking-wider uppercase">
                  CASE STUDY PREVIEW
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
                  {selectedProject.metrics}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-[var(--bg-tag)] hover:bg-[var(--bg-alt)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
                title="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Header: Title and Subtitle */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[var(--text-primary)] leading-tight">
                {selectedProject.title}
              </h1>
              {selectedProject.subtitle && (
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                  {selectedProject.subtitle}
                </p>
              )}
            </div>

            {/* Tech Tags Row */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-[var(--bg-tag)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] rounded-md shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Action Buttons (GitHub Source & Screenshots) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] border border-[var(--border-strong)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] rounded-lg text-xs font-medium flex items-center gap-2 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>

              <button
                onClick={() => setActiveScreenshot({ project: selectedProject, activeImgIndex: modalActiveScreenshotIndex })}
                className="px-4 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-[var(--accent-subtle)] cursor-pointer"
              >
                <ImageIcon className="w-4 h-4" />
                <span>Screenshots ({selectedProject.screenshots?.length || 1})</span>
              </button>
            </div>

            {/* Note callout if present */}
            {selectedProject.note && (
              <div className="p-3.5 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)] text-xs text-[var(--text-secondary)] flex items-start gap-2.5">
                <span className="text-[var(--accent-primary)] font-bold">ℹ</span>
                <span>{selectedProject.note}</span>
              </div>
            )}

            {/* Section: Project Screenshots with Tabs */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
                <h3 className="text-base sm:text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Project Screenshots</span>
                </h3>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  Click tab or image to enlarge
                </span>
              </div>

              {/* Tabs for switching screenshots */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.screenshots?.map((shot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setModalActiveScreenshotIndex(idx)}
                    className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                      modalActiveScreenshotIndex === idx
                        ? 'bg-[var(--accent-primary)] text-white font-semibold shadow-md shadow-[var(--accent-subtle)]'
                        : 'bg-[var(--bg-tag)] text-[var(--text-secondary)] hover:bg-[var(--bg-alt)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                    }`}
                  >
                    {shot.tabLabel || shot.title.split('—')[0].trim()}
                  </button>
                ))}
              </div>

              {/* Active Screenshot Display */}
              {selectedProject.screenshots?.[modalActiveScreenshotIndex] && (
                <div 
                  onClick={() => setActiveScreenshot({ project: selectedProject, activeImgIndex: modalActiveScreenshotIndex })}
                  className="group/img relative rounded-xl overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-modal-viewer)] cursor-pointer shadow-xl focus-within:ring-2 focus-within:ring-[var(--accent-primary)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg-modal)]"
                  title="Click to view high-resolution fullscreen screenshot"
                >
                  <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.img
                        key={selectedProject.screenshots[modalActiveScreenshotIndex].url}
                        src={selectedProject.screenshots[modalActiveScreenshotIndex].url}
                        alt={selectedProject.screenshots[modalActiveScreenshotIndex].title}
                        initial={{ opacity: 0.25 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-[1.02] transition-transform duration-500"
                      />
                    </AnimatePresence>
                    <div className="pointer-events-none absolute inset-0 bg-black/15 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold">
                      <Maximize2 className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span>Enlarge Screenshot</span>
                    </div>

                    {selectedProject.screenshots.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            navigateCaseStudyScreenshot(-1);
                          }}
                          aria-label="Previous project screenshot"
                          title="Previous project screenshot"
                          className="absolute left-3 sm:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-2 text-white shadow-lg opacity-100 transition-all hover:bg-[var(--accent-primary)] hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] sm:opacity-0 sm:group-hover/img:opacity-100 sm:group-focus-within/img:opacity-100"
                        >
                          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            navigateCaseStudyScreenshot(1);
                          }}
                          aria-label="Next project screenshot"
                          title="Next project screenshot"
                          className="absolute right-3 sm:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-2 text-white shadow-lg opacity-100 transition-all hover:bg-[var(--accent-primary)] hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] sm:opacity-0 sm:group-hover/img:opacity-100 sm:group-focus-within/img:opacity-100"
                        >
                          <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </>
                    )}

                    <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] font-mono font-semibold text-white shadow-sm">
                      {modalActiveScreenshotIndex + 1} / {selectedProject.screenshots.length}
                    </span>
                  </div>
                  
                  <div className="p-3.5 bg-[var(--bg-card)] border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div>
                      <div className="text-xs font-bold text-[var(--text-primary)]">
                        {selectedProject.screenshots[modalActiveScreenshotIndex].title}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
                        {selectedProject.screenshots[modalActiveScreenshotIndex].caption}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--accent-primary)] self-start sm:self-center bg-[var(--accent-subtle)] px-2 py-0.5 rounded border border-[var(--accent-border)] font-semibold">
                      Picture {modalActiveScreenshotIndex + 1} of {selectedProject.screenshots.length}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Section 1: Project Overview */}
            <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
              <h2 className="text-lg sm:text-xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
                <span className="text-[var(--accent-primary)] font-mono text-base">01.</span>
                <span>Project Overview</span>
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {selectedProject.overview || selectedProject.longDescription}
              </p>
            </div>

            {/* Section 2: Key Features */}
            {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
                <h2 className="text-lg sm:text-xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[var(--accent-primary)] font-mono text-base">02.</span>
                  <span>Key Features</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-lg bg-[var(--bg-card-panel)] border border-[var(--border-color)] space-y-1 hover:border-[var(--accent-border)] transition-colors shadow-sm"
                    >
                      <div className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] flex-shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] pl-5 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: Tech Stack Breakdown */}
            {selectedProject.techStackBreakdown && selectedProject.techStackBreakdown.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
                <h2 className="text-lg sm:text-xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[var(--accent-primary)] font-mono text-base">03.</span>
                  <span>Tech Stack Breakdown</span>
                </h2>
                <div className="space-y-2 pt-1">
                  {selectedProject.techStackBreakdown.map((row, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-lg bg-[var(--bg-card-panel)] border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs shadow-sm"
                    >
                      <span className="font-mono font-semibold text-[var(--accent-primary)] min-w-[160px]">
                        {row.category}
                      </span>
                      <span className="text-[var(--text-secondary)] font-mono text-[11px] sm:text-xs">
                        {row.technologies}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Modal Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-[var(--border-color)]">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-[var(--bg-tag)] hover:bg-[var(--bg-alt)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg text-xs font-mono transition-colors cursor-pointer"
              >
                ← Back to Projects
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-[var(--bg-card)] hover:bg-[var(--bg-alt)] border border-[var(--border-strong)] text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent-primary)] rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Source</span>
                </a>
                <button
                  onClick={() => setActiveScreenshot({ project: selectedProject, activeImgIndex: modalActiveScreenshotIndex })}
                  className="px-5 py-2.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-xs font-semibold text-white rounded-lg flex items-center gap-2 transition-all shadow-md shadow-[var(--accent-subtle)] active:scale-95 cursor-pointer"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Screenshots</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= DEDICATED SYSTEM SCREENSHOT VIEWER MODAL ================= */}
      {activeScreenshot && (
        <div 
          className="fixed inset-0 z-50 bg-[var(--bg-overlay)] backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveScreenshot(null)}
        >
          <div 
            className="bg-[var(--bg-modal)] border border-[var(--border-strong)] rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col relative shadow-2xl text-[var(--text-primary)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Window Controls & Project Title */}
            <div className="px-4 sm:px-6 py-3.5 bg-[var(--bg-card)] border-b border-[var(--border-color)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-[var(--accent-primary)]"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-[var(--text-muted)] pl-2 border-l border-[var(--border-color)]">
                  <span className="text-[var(--accent-primary)] font-semibold">{activeScreenshot.project.title}</span>
                  <span className="text-[var(--text-muted)]">/</span>
                  <span>System Screenshot Preview</span>
                </div>
              </div>

              {/* Picture Tabs */}
              <div className="flex items-center space-x-1.5 flex-wrap">
                {activeScreenshot.project.screenshots?.map((shot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenshot({ ...activeScreenshot, activeImgIndex: idx })}
                    className={`px-3 py-1 text-xs font-mono rounded-md transition-all cursor-pointer ${
                      activeScreenshot.activeImgIndex === idx
                        ? 'bg-[var(--accent-primary)] text-white font-semibold shadow'
                        : 'bg-[var(--bg-tag)] text-[var(--text-secondary)] hover:bg-[var(--bg-alt)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                    }`}
                    title={shot.tabLabel ? `${shot.tabLabel} — ${shot.title}` : shot.title}
                  >
                    Picture {idx + 1}
                  </button>
                ))}

                <button
                  onClick={() => setActiveScreenshot(null)}
                  className="p-1.5 ml-2 rounded-lg bg-[var(--bg-tag)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-alt)] transition-colors cursor-pointer"
                  title="Close Screenshot"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Screenshot Image Display */}
            <div className="group/viewer relative flex-1 bg-[var(--bg-modal-viewer)] overflow-auto flex items-center justify-center p-3 sm:p-5 max-h-[70vh]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={activeScreenshot.project.screenshots?.[activeScreenshot.activeImgIndex]?.url || activeScreenshot.project.image}
                  src={activeScreenshot.project.screenshots?.[activeScreenshot.activeImgIndex]?.url || activeScreenshot.project.image}
                  alt={activeScreenshot.project.screenshots?.[activeScreenshot.activeImgIndex]?.title || activeScreenshot.project.title}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="w-full h-auto max-h-[66vh] object-contain rounded-xl border border-[var(--border-color)] shadow-2xl"
                />
              </AnimatePresence>

              {activeScreenshot.project.screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => navigateFullscreenScreenshot(-1)}
                    aria-label="Previous project screenshot"
                    title="Previous project screenshot"
                    className="absolute left-3 sm:left-5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 p-2.5 text-white shadow-lg opacity-100 transition-all hover:bg-[var(--accent-primary)] hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] sm:opacity-0 sm:group-hover/viewer:opacity-100 sm:group-focus-within/viewer:opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateFullscreenScreenshot(1)}
                    aria-label="Next project screenshot"
                    title="Next project screenshot"
                    className="absolute right-3 sm:right-5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 p-2.5 text-white shadow-lg opacity-100 transition-all hover:bg-[var(--accent-primary)] hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] sm:opacity-0 sm:group-hover/viewer:opacity-100 sm:group-focus-within/viewer:opacity-100"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}

              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] font-mono font-semibold text-white shadow-sm">
                {activeScreenshot.activeImgIndex + 1} / {activeScreenshot.project.screenshots.length || 1}
              </span>
            </div>

            {/* Bottom Caption & Action Bar */}
            <div className="px-4 sm:px-6 py-4 bg-[var(--bg-card)] border-t border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-[var(--text-primary)] text-sm sm:text-base">
                    {activeScreenshot.project.screenshots?.[activeScreenshot.activeImgIndex]?.title || `${activeScreenshot.project.title} Screenshot`}
                  </span>
                  <span className="px-2 py-0.5 bg-[var(--accent-subtle)] border border-[var(--accent-border)] text-[var(--accent-primary)] rounded font-mono text-[10px] font-semibold">
                    {activeScreenshot.project.metrics}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  {activeScreenshot.project.screenshots?.[activeScreenshot.activeImgIndex]?.caption || activeScreenshot.project.description}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <a
                  href={activeScreenshot.project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 bg-[var(--bg-tag)] hover:bg-[var(--bg-alt)] border border-[var(--border-color)] text-[var(--text-primary)] rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <button
                  onClick={() => setActiveScreenshot(null)}
                  className="px-4 py-1.5 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white rounded text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDIT / CUSTOMIZER MODAL ================= */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--bg-overlay)] backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[var(--bg-modal)] border border-[var(--border-strong)] rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative space-y-5 text-[var(--text-primary)] shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
              <div className="flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-[var(--accent-primary)]" />
                <h3 className="text-base font-display font-bold text-[var(--text-primary)]">Edit Portfolio Details</h3>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1.5 rounded-full bg-[var(--bg-tag)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[var(--text-secondary)]">
              Customize the name, specialization title, email, bio, and statistics displayed across the portfolio.
            </p>

            <div className="space-y-4 text-xs">
              
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[var(--text-secondary)] font-medium">First Name (Display)</label>
                  <input 
                    type="text"
                    value={profile.firstName || ''}
                    onChange={e => setProfile({...profile, firstName: e.target.value})}
                    className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[var(--text-secondary)] font-medium">Last Name (Accent)</label>
                  <input 
                    type="text"
                    value={profile.lastName || ''}
                    onChange={e => setProfile({...profile, lastName: e.target.value})}
                    className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">Specialization Title (&gt;_ Tagline)</label>
                <input 
                  type="text"
                  value={profile.title}
                  onChange={e => setProfile({...profile, title: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              {/* Profile Image URL / Path */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">Profile Image URL (leave empty for placeholder frame)</label>
                <input 
                  type="text"
                  placeholder="https://example.com/my-photo.jpg or image path"
                  value={profile.avatarUrl || ''}
                  onChange={e => setProfile({...profile, avatarUrl: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              {/* Contact Email */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">Contact Email Button Text</label>
                <input 
                  type="text"
                  value={profile.contactEmail}
                  onChange={e => setProfile({...profile, contactEmail: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              {/* Hero Bio */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">Hero Section Bio Paragraph</label>
                <textarea 
                  rows={3}
                  value={profile.bio}
                  onChange={e => setProfile({...profile, bio: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] resize-none"
                />
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">Location</label>
                <input 
                  type="text"
                  value={profile.location}
                  onChange={e => setProfile({...profile, location: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              {/* Contact Phone */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">Contact Phone Number</label>
                <input 
                  type="text"
                  value={profile.contactPhone || ''}
                  onChange={e => setProfile({...profile, contactPhone: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              {/* Website URL */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">Portfolio / Website URL</label>
                <input 
                  type="text"
                  value={profile.websiteUrl || ''}
                  onChange={e => setProfile({...profile, websiteUrl: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              {/* GitHub URL */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">GitHub Profile URL</label>
                <input 
                  type="text"
                  value={profile.github || ''}
                  onChange={e => setProfile({...profile, github: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              {/* LinkedIn URL */}
              <div className="space-y-1">
                <label className="text-[var(--text-secondary)] font-medium">LinkedIn Profile URL</label>
                <input 
                  type="text"
                  value={profile.linkedin || ''}
                  onChange={e => setProfile({...profile, linkedin: e.target.value})}
                  className="w-full px-3 py-2 bg-[var(--bg-input)] border border-[var(--border-strong)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

            </div>

            <div className="flex justify-between items-center pt-3 border-t border-[var(--border-color)]">
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem('portfolio_profile');
                  window.location.reload();
                }}
                className="px-3 py-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
              >
                Reset to Defaults
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-xs font-semibold text-white rounded cursor-pointer transition-colors"
              >
                Done & Save
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
