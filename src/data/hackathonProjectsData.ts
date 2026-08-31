import sharkninjaTeam from '@/assets/hackathon/sharkninja-team.webp';
import sharkninjaCohort from '@/assets/hackathon/sharkninja-cohort.webp';
import aiInTheBoxCertificate from '@/assets/hackathon/ai-in-the-box-certificate.webp';

export interface HackathonProjectImage {
  src: string;
  alt: string;
}

export interface HackathonProjectSection {
  heading: string;
  items: string[];
}

export interface HackathonProject {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  isWinner?: boolean;
  position?: string;
  tools?: string[];
  sections?: HackathonProjectSection[];
  people?: { heading: string; names: string[] };
  images?: HackathonProjectImage[];
}

export const hackathonProjects: HackathonProject[] = [
  {
    title: 'SharkNinja JailbreakEDU AI Hackathon',
    description:
      'Collaborated with a multidisciplinary team to develop an AI-driven solution for a real-world business challenge set by SharkNinja. Recognised among the top-performing teams through iterative problem-solving, mentorship, and final pitching. Associated with the University of Leeds.',
    position: 'Top 5',
    images: [
      { src: sharkninjaTeam, alt: "Krithik's team with their certificates at the SharkNinja JailbreakEDU showcase" },
      { src: sharkninjaCohort, alt: 'The full SharkNinja JailbreakEDU AI Hackathon cohort' },
    ],
  },
  {
    title: 'AI in the Box Hackathon',
    description:
      'Built "Brow-Code?" with Team WASD - a unified development environment that merges an AI-powered C++ learning playground with a real-time multiplayer JavaScript battle arena, all running in-browser on BrowserPod. Reached the Top 10 finalist round.',
    position: 'Top 10 Finalist',
    githubUrl: 'https://github.com/krithiksharan13/Brow-Code',
    liveUrl: 'https://brow-code.vercel.app',
    tools: [
      'Vite',
      'React',
      'Google Gemini 2.5 Flash',
      'BrowserPod',
      'JSCPP',
      'WebSockets',
      'Node.js',
    ],
    sections: [
      {
        heading: 'Learn - AI C++ playground',
        items: [
          'AI code generation: describe a problem in plain English and Gemini writes the C++.',
          'Instant in-browser execution via BrowserPod and JSCPP - no local toolchain.',
          'Algorithm visualiser: steps through complex logic as a sequence of readable states.',
          'AI debugger: identifies the error line, explains the cause, and proposes a fix.',
        ],
      },
      {
        heading: 'Game - multiplayer JS battle arena',
        items: [
          'Multiplayer rooms: create a room, share the link, and battle head-to-head.',
          'Algorithmic JavaScript puzzles - solve faster than your opponent to win rounds.',
          'Sandboxed execution in an isolated Node.js VM for safe judging.',
        ],
      },
      {
        heading: 'The brief',
        items: [
          'AI in the Box Hackathon 2026 at Helix, University of Leeds (2-3 May), run by the Leeds AI Society with Leaning Technologies.',
          'Rule #1: every project must run on BrowserPod - an in-browser WebAssembly compute sandbox.',
          'Judged on creativity, technical sophistication, impact, and design/UX.',
        ],
      },
    ],
    people: {
      heading: 'Team WASD',
      names: [
        'Krithik Sharan Suresh Alagianayagi',
        'Uday Kiran Reddy Mule',
        'Haritej Karimisetti',
        'Asjad Moiz Khan',
      ],
    },
    images: [
      { src: aiInTheBoxCertificate, alt: 'AI in the Box Hackathon certificate of participation' },
    ],
  },
  {
    title: 'CheerpJ 2025',
    description:
      'This is a submission of CheerPJ Hackathon 2025. This project is a fully interactive GameBoy-style web console built using only HTML, CSS, and vanilla JavaScript. It is capable of running Java .jar games directly inside the browser using CheerpJ 3.0, without requiring any local Java installation. The UI simulates the classic handheld console, including a power button, LED indicator, startup animation, cartridge loading, and fully functional A/B, D-Pad, Start, and Select buttons. The project also includes a built-in game loader for .jar files.',
    githubUrl: 'https://github.com/krithiksharan13/CheerPJ-2025',
    liveUrl: 'https://cheer-pj-2025.vercel.app/',
    isWinner: true,
  },
  {
    title: 'AETHRA GLOBAL IDEATHON 2025: VoiceCity',
    description:
      'VoiceCity is our submission for the Aethra Global Ideathon 2025, a project dedicated to reimagining urban accessibility through community-driven data and AI-powered technology. We came in the finalist panels amidst 250+ submissions.',
    githubUrl: 'https://github.com/krithiksharan13/AETHRA-GLOBAL-IDEATHON-2025',
    liveUrl: 'https://aethra-global-ideathon-2025.onrender.com/',
    isWinner: true,
  },
  {
    title: "Spooky Maze - Escape the Alchemist's Study",
    description:
      'Our submission to the Horror Hacks Hackathon - A beginner friendly hackathon centered all about Halloween! Spooky Maze is an AI-powered, web-based, point-and-click puzzle horror game. We challenged ourselves to create a heart-pounding psychological experience using minimal design and eerie ambiance, all within a browser. The game tests a simple question: Can logic survive panic?',
    githubUrl: 'https://github.com/krithiksharan13/Horror-Hacks-Hackathon-2025',
    liveUrl: 'https://horror-hacks-hackathon-2025.onrender.com/',
    position: 'Honorable Mention',
  },
  {
    title: 'Polyglot Harmony AI Bot',
    description:
      'Our submission to the Hack4Unity Hackathon - A beginner friendly hackathon centered around creating an app or software that will create more unity between people! We came in 5th amidst 90+ Submissions. Polyglot Harmony AI Bot was created to help people communicate naturally, in their own voice, without linguistic friction. A tool that understands how we speak - not how a textbook expects us to.',
    githubUrl: 'https://github.com/krithiksharan13/Hack4Unity-Polyglot-Harmony-AI-Bot',
    liveUrl: 'https://polyglot-harmony-ai-bot.onrender.com/',
    position: '5th',
  },
  {
    title: 'DevOne Hack',
    description:
      'This project was built and submitted as part of the DevOne Hack hackathon. This repository was created to push the project to GitHub for the hackathon submission. This repository contains the code and assets for my personal portfolio website, built to showcase my skills, experience, and projects.',
    githubUrl: 'https://github.com/krithiksharan13/Portfolio',
    liveUrl: 'https://krithik-sharan.vercel.app/',
  },
];
