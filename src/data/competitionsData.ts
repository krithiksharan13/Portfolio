import memoirWinner from '@/assets/competitions/memoir-winner.jpg';
import memoirCertificate from '@/assets/competitions/memoir-certificate.jpg';
import memoirWorking from '@/assets/competitions/memoir-working.jpg';
import memoirGroup from '@/assets/competitions/memoir-group.jpg';

export interface Competition {
  title: string;
  position: string;
  issuer: string;
  date: string;
  summary: string;
  details: string[];
  highlights: string[];
  closingNote: string;
  images: { src: string; alt: string }[];
}

export const competitions: Competition[] = [
  {
    title: 'Innovate, Validate, Pitch! Mini Business Bootcamp (Tech & Innovation)',
    position: '🥇 1st Place',
    issuer: 'Spark, Discover Enterprise – University of Leeds',
    date: 'Feb 2026',
    summary:
      'Awarded First Place in a competitive pitch-off as part of a half-day enterprise bootcamp for students in the Faculty of Engineering and Physical Sciences.',
    details: [
      'Co-developed and pitched Memoir\', an innovative wedding-related business concept, progressing from idea generation to validation and final presentation within four hours.',
      'The pitch was evaluated by James Chandler, entrepreneur and Leeds graduate, based on creativity, commercial awareness, feasibility, and persuasion.',
    ],
    highlights: [
      'Strong value proposition and market understanding',
      'Clear business model articulation',
      'Persuasive delivery and teamwork under time pressure',
      'Practical application of entrepreneurial frameworks',
    ],
    closingNote:
      'This experience strengthened my skills in enterprise thinking, rapid validation, structured pitching, and collaborative problem-solving.',
    images: [
      { src: memoirWinner, alt: 'Receiving the 1st place certificate' },
      { src: memoirCertificate, alt: 'Certificate of Achievement - Team Memoir' },
      { src: memoirWorking, alt: 'Working on the business model canvas' },
      { src: memoirGroup, alt: 'Group photo with all participants' },
    ],
  },
];
