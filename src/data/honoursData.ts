import specialRecognitionAward from "@/assets/honours/special-recognition-award.webp";
import schoolRepCelebration from "@/assets/honours/school-rep-celebration.webp";
import epsFacultyOfficerCertificate from "@/assets/honours/eps-faculty-officer-certificate.webp";

export interface HonourImage {
  src: string;
  alt: string;
}

export interface Honour {
  title: string;
  /** Short placement / recognition tag, e.g. "Winner". */
  placement?: string;
  issuer: string;
  date: string;
  associatedWith?: string;
  description?: string;
  images?: HonourImage[];
}

// Newest first.
export const honours: Honour[] = [
  {
    title: "Special Recognition Award",
    placement: "Special Recognition",
    issuer: "Leeds University Union",
    date: "May 2026",
    associatedWith: "University of Leeds",
    description:
      "Nominated by fellow colleagues who work towards improving the student experience at the University of Leeds.",
    images: [
      { src: specialRecognitionAward, alt: "Krithik receiving the Special Recognition Award 2026 at the LUU School Rep Celebration" },
      { src: schoolRepCelebration, alt: "Faculty Officers and School Reps at the LUU School Rep Celebration" },
      { src: epsFacultyOfficerCertificate, alt: "Krithik's EPS Faculty Officer certificate, presented at the same celebration" },
    ],
  },
  {
    title: "Academic Rep of the Year (Faculty of EPS)",
    placement: "Winner",
    issuer: "University of Leeds",
    date: "Apr 2026",
    associatedWith: "University of Leeds",
    description:
      "Awarded for outstanding contribution to student representation, following nomination by 10+ students and staff members. Recognised for consistently engaging with peers and university stakeholders, effectively advocating student perspectives, and driving meaningful academic improvements that enhanced the overall learning experience.",
    images: [],
  },
];
