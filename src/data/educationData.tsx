
import { Badge } from '@/components/ui/badge';
import React from 'react';

const ssnCourses = {
  core: [
    'Problem Solving and Programming in Python',
    'Database Management Systems and Applications',
    'Advanced Data Structures',
    'Artificial Intelligence Concepts and Algorithms',
    'Big Data Engineering',
    'Machine Learning Fundamentals',
  ],
  electives: [
    'Fundamentals of Digital Image Processing',
    'Real Time Embedded Systems',
    'Reactive Programming',
    'Introduction to Deep Learning',
    'Programming in Java',
    'Professional Ethics',
  ]
};

const ssnActivities = [
    'PROCODE IT - Design and Marketing Head (2021-2022)',
    'Invente Tech Fest Video Editor',
    'Instincts 2019 Organizing Volunteer',
    'College Volleyball Reserve Team (2018-2019)',
    'Participated and helped in organizing Workshops, Seminars, Entrepreneurship Drives',
    'Youth Red Cross 2018-2020 – Blood Donation Camps, Village Workshops (Cleaning, Teaching rural Kids)',
];

const seniorSecondaryActivities = [
  'House Captain | 12th Grade',
  'Overall School Champion | 12th Grade',
  'International English Olympiad | 12th Grade | International Rank: 134',
  'International Mathematics Olympiad | 12th Grade | State Rank: 24',
  'International Science Olympiad | 12th Grade | State Rank: 54',
  'Sports Captain | 11th Grade',
  'School U-19 Football Team Captain | 11th Grade',
  'School U-19 Basketball Team Captain | 11th Grade',
  'U-19 South Zonal Football Champions | 11th Grade',
  'International English Olympiad | 11th Grade | State Rank: 29',
  'Played the lead role in the English drama during the school day program for 4 consecutive years',
  'Master of ceremony in many events like sports day, Teacher’s day',
  'Organized events like Teachers day, Assembly Presentations, etc.',
];

const secondaryActivities = [
  '10th Grade English Club President📚',
  'Under 16 South Zonal Football Champion & Team Captain⚽🏆',
  'Second Place in Ad-Mad at the Sahodaya cultural competition (South Tamil Nadu Zonals). Overall Champions of the Year 2015.',
  '9th Grade Environmental Club Secretary🌿',
  'Under 16 South Zonal Football Runners-Up 🥈',
  'Recognized with numerous awards in district-level quiz, essay writing, extempore, elocution, and skit competitions🏅📝🗣️',
  'Participated in many Conferences and Workshops on Mathematics in the State and National Level.',
  'Participated in the “Raising A Mathematician Program” during the year 2015-2016.',
];

export const educationData = [
  {
    institution: 'The University of Leeds',
    location: 'Leeds, England',
    degree: 'Master of Science in Data Science and Analytics',
    duration: 'September 2025 - Present',
    grade: 'In Progress',
    content: (
      <>
        <h4 className="font-semibold mb-2 text-foreground">Core Modules:</h4>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {['Data Science', 'Learning Skills through Case Studies', 'Dissertation in Data Science and Analytics'].map(course => <Badge key={course} variant="secondary" className="text-sm font-normal">{course}</Badge>)}
          </div>
        </div>
        <h4 className="font-semibold mb-2 text-foreground">Elective Modules:</h4>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {['Machine Learning', 'Programming for Data Science', 'Big Data and Consumer Analytics', 'Statistical Learning', 'Statistical Theory and Methods', 'Business Analytics and Decision Science'].map(course => <Badge key={course} variant="secondary" className="text-sm font-normal">{course}</Badge>)}
          </div>
        </div>
      </>
    ),
  },
  {
    institution: 'SSN College of Engineering',
    location: 'Chennai, Tamil Nadu',
    degree: 'Bachelor of Technology in Information Technology',
    duration: '2018 - 2022',
    grade: 'GPA: 8.2',
    content: (
      <>
        <h4 className="font-semibold mb-2 text-foreground">Relevant Coursework:</h4>
        <div className="mb-4">
          <h5 className="font-medium text-foreground/90 mb-2">Core</h5>
          <div className="flex flex-wrap gap-2">
            {ssnCourses.core.map(course => <Badge key={course} variant="secondary" className="text-sm font-normal">{course}</Badge>)}
          </div>
        </div>
        <div className="mb-4">
          <h5 className="font-medium text-foreground/90 mb-2">Electives</h5>
          <div className="flex flex-wrap gap-2">
            {ssnCourses.electives.map(course => <Badge key={course} variant="secondary" className="text-sm font-normal">{course}</Badge>)}
          </div>
        </div>
        <h4 className="font-semibold my-2 text-foreground">Activities and Societies:</h4>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          {ssnActivities.map((activity, i) => <li key={i}>{activity}</li>)}
        </ul>
      </>
    ),
  },
  {
    institution: 'Pushpalatha Vidya Mandir',
    location: 'Tirunelveli, Tamil Nadu',
    degree: 'Senior Secondary Education (CBSE)',
    duration: 'Grades 11 & 12',
    grade: 'Grade: 95.4%',
    content: (
      <>
        <h4 className="font-semibold mb-2 text-foreground">Activities and Achievements:</h4>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          {seniorSecondaryActivities.map((activity, i) => <li key={i}>{activity}</li>)}
        </ul>
      </>
    ),
  },
  {
    institution: 'Pushpalatha Vidya Mandir',
    location: 'Tirunelveli, Tamil Nadu',
    degree: 'Secondary Level of Education (CBSE)',
    duration: 'Grades 9 & 10',
    grade: 'CGPA: 10',
    content: (
      <>
        <h4 className="font-semibold mb-2 text-foreground">Activities and Achievements:</h4>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          {secondaryActivities.map((activity, i) => <li key={i}>{activity}</li>)}
        </ul>
      </>
    ),
  }
];
