import {
  Logo
 } from "../images/logos";
 import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";
 
 export const RESUME_DATA = {
   name: "Swapnendu Banerjee",
   initials: "SB",
   location: "Kolkata, India",
   locationLink: "https://www.google.com/maps/place/Kolkata",
   about:
     "Backend Developer with expertise in JavaScript, TypeScript, and various web frameworks.",
   summary: (
     <>
       Backend Developer currently working as a Software Development Intern at PGAGI CONSULTANCY.
       Proficient in ReactJS, NextJS, NodeJS, ExpressJS, and various database technologies.
       Passionate about building scalable web applications and contributing to innovative projects.
     </>
   ),
   avatarUrl: "https://i.postimg.cc/NF1xNzGx/20241006-124542.jpg", // This is kept as is since there's no avatar in the CV
   personalWebsiteUrl: "https://www.swapnendu.me/",
   contact: {
     email: "swaps.b003@gmail.com",
     tel: "+918345952856",
     social: [
       {
         name: "GitHub",
         url: "https://github.com/Swapnendu003",
         icon: GitHubIcon,
       },
       {
         name: "LinkedIn",
         url: "https://linkedin.com/in/swapnendu-banerjee-36ba06219",
         icon: LinkedInIcon,
       },
       // Keeping the X/Twitter icon but no X profile was mentioned in the CV
     ],
   },
   education: [
     {
       school: "RCC Institute of Information Technology",
       degree: "Bachelor of Technology in Computer Science and Engineering",
       start: "2021",
       end: "2026",
     },
   ],
   work: [
     {
       company: "PGAGI CONSULTANCY",
       link: "#",
       badges: ["Remote", "React", "TypeScript", "Node.js"],
       title: "Software Development Intern",
       logo: Logo,
       start: "August 2024",
       end: "Present",
       description: (
         <>
           Working on multiple projects as a software development intern. 
           <ul className="list-inside list-disc">
             <li>
               Developed multiple frontend pages for Toingg SAAS, an AI-powered calling platform enabling users to launch campaigns and 
               hire talent using AI. Integrated and handled multiple FastAPI calls.
             </li>
             <li>
               Led end-to-end API integration and implemented Context API for Upsell, enhancing state management in the web 
               application.
             </li>
             <li>
               Revamped the company&apos;s main website, improving UI/UX and developing a robust Content Management System (CMS)
               that allows seamless content addition, updates, and deletion.
             </li>
             <li>
               Designed and developed the landing page for Toingg SAAS using Next.js and SCSS, incorporating Aceternity UI and React 
               Bits for a polished look.
             </li>
             <li>
               Contributed to Say Yes, a wedding planning platform, implementing the free trial flow using Ipify, requiring users to sign up 
               and subscribe post-trial.
             </li>
           </ul>
         </>
       ),
     }
   ],
   skills: [
     "JavaScript",
     "TypeScript",
     "Java",
     "Python",
     "C",
     "ReactJS",
     "NextJS",
     "NodeJS",
     "ExpressJS",
     "Tailwind CSS",
     "MongoDB",
     "MySQL",
     "PostgreSQL",
     "Azure SQL",
     "Mongoose",
     "Prisma"
   ],
   projects: [
     {
       title: "RCCIIT Exam Portal Backend",
       techStack: ["Express.js", "MySQL", "PM2", "Nginx"],
       description:
         "Contributed to the backend development of an exam portal for college students to fill exam fees, with admin panel for tracking and Razorpay integration.",
       logo: Logo,
       link: {
         label: "RCCIIT Exam Portal",
         href: "#",
       },
     },
     {
       title: "Wedera",
       techStack: ["NextJS", "DaisyUI", "Tailwind", "Firebase"],
       description:
         "Wedding platform where users can log in, choose and book photographers or makeover artists. Handled both frontend and backend development.",
       logo: Logo,
       link: {
         label: "Wedera",
         href: "#",
       },
     },
     {
       title: "MedAid Disha",
       techStack: ["ReactJS", "Material UI", "ExpressJS", "NodeJS"],
       description:
         "Web-based chatbot for mood analysis with consultant support via Twilio. Available in 102 languages using Azure Translator. Powered by GEMINI for responses.",
       logo: Logo,
       link: {
         label: "MedAid Disha",
         href: "#",
       },
     },
     {
       title: "Prepify",
       techStack: ["NextJS", "TypeScript", "DaisyUI", "ExpressJS", "Fireworks AI"],
       description:
         "Platform with in-depth articles based on user interests, featuring Prepia, a 3D AI teacher, and job interview preparation tool with scoring based on expressions.",
       logo: Logo,
       link: {
         label: "Prepify",
         href: "#",
       },
     },
     {
       title: "Department of CSE Faculty Dashboard",
       techStack: ["NodeJS", "MongoDB", "ExpressJS", "REST API", "JWT"],
       description:
         "Dashboard for CSE department faculties to submit research works, with admin features for record management, user administration, and automated reminders.",
       logo: Logo,
       link: {
         label: "Faculty Dashboard",
         href: "#",
       },
     }
   ],
   awards: [
     "Co-founder and Public Relations and Outreach Head of NoobCode community",
     "Awarded for best solution to 'Enhance rural Bengal's access to high-quality medical care'",
     "Winner of Mind's Eye, a B-plan competition at TECHTRIX (RCCIIT) for 'Maidopedia'",
     "Microsoft Learn Student Ambassador (Beta Level)",
     "Top 10 team in Hack4Bengal 3.0",
     "1st Runners Up in LaunchX event at E-summit of Jadavpur University"
   ]
 } as const;