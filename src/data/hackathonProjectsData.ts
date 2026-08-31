
export interface HackathonProject {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  isWinner?: boolean;
  position?: string;
}

export const hackathonProjects: HackathonProject[] = [
  {
    title: 'CheerpJ 2025',
    description: 'This is a submission of CheerPJ Hackathon 2025. This project is a fully interactive GameBoy-style web console built using only HTML, CSS, and vanilla JavaScript. It is capable of running Java .jar games directly inside the browser using CheerpJ 3.0, without requiring any local Java installation. The UI simulates the classic handheld console, including a power button, LED indicator, startup animation, cartridge loading, and fully functional A/B, D-Pad, Start, and Select buttons. The project also includes a built-in game loader for .jar files.',
    githubUrl: 'https://github.com/krithiksharan13/CheerPJ-2025',
    liveUrl: 'https://cheer-pj-2025.vercel.app/',
    isWinner: true,
  },
  {
    title: 'AETHRA GLOBAL IDEATHON 2025: VoiceCity',
    description: 'VoiceCity is our submission for the Aethra Global Ideathon 2025, a project dedicated to reimagining urban accessibility through community-driven data and AI-powered technology. We came in the finalist panels amidst 250+ submissions.',
    githubUrl: 'https://github.com/krithiksharan13/AETHRA-GLOBAL-IDEATHON-2025',
    liveUrl: 'https://aethra-global-ideathon-2025.onrender.com/',
    isWinner: true,
  },
  {
    title: "Spooky Maze—Escape the Alchemist's Study",
    description: 'Our submission to the Horror Hacks Hackathon - A beginner friendly hackathon centered all about Halloween! Spooky Maze is an AI-powered, web-based, point-and-click puzzle horror game. We challenged ourselves to create a heart-pounding psychological experience using minimal design and eerie ambiance, all within a browser. The game tests a simple question: Can logic survive panic?',
    githubUrl: 'https://github.com/krithiksharan13/Horror-Hacks-Hackathon-2025',
    liveUrl: 'https://horror-hacks-hackathon-2025.onrender.com/',
    position: 'Honorable Mention',
  },
  {
    title: 'Polyglot Harmony AI Bot',
    description: 'Our submission to the Hack4Unity Hackathon - A beginner friendly hackathon centered around creating an app or software that will create more unity between people! We came in 5th amidst 90+ Submissions. Polyglot Harmony AI Bot was created to help people communicate naturally, in their own voice, without linguistic friction. A tool that understands how we speak — not how a textbook expects us to.',
    githubUrl: 'https://github.com/krithiksharan13/Hack4Unity-Polyglot-Harmony-AI-Bot',
    liveUrl: 'https://polyglot-harmony-ai-bot.onrender.com/',
    position: '5th',
  },
  {
    title: 'DevOne Hack',
    description: 'This project was built and submitted as part of the DevOne Hack hackathon. This repository was created to push the project to GitHub for the hackathon submission. This repository contains the code and assets for my personal portfolio website, built to showcase my skills, experience, and projects.',
    githubUrl: 'https://github.com/krithiksharan13/krithik-sharan-portfolio-website',
    liveUrl: 'https://krithik-sharan-portfolio-website.lovable.app/',
  },
];
