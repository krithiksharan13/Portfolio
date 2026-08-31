export interface AwardImage {
  src: string;
  alt: string;
}

export interface Award {
  title: string;
  /** Short placement / recognition tag, e.g. "Winner", "Top 5". */
  placement?: string;
  issuer: string;
  date: string;
  associatedWith?: string;
  description?: string;
  images?: AwardImage[];
}

// Newest first.
export const awards: Award[] = [
  {
    title: "SharkNinja JailbreakEDU AI Hackathon",
    placement: "Top 5",
    issuer: "SharkNinja",
    date: "Jun 2026",
    associatedWith: "University of Leeds",
    description:
      "Participated in the SharkNinja JailbreakEDU AI Hackathon, collaborating with a multidisciplinary team to develop an AI-driven solution for a real-world business challenge. Recognised among the top-performing teams through iterative problem-solving, mentorship, and final pitching.",
    images: [],
  },
  {
    title: "Special Recognition Award",
    placement: "Special Recognition",
    issuer: "Leeds University Union",
    date: "May 2026",
    associatedWith: "Leeds University Union",
    images: [],
  },
  {
    title: "AI in the Box Hackathon",
    placement: "Top 10 Finalist",
    issuer: "Leeds Artificial Intelligence Society",
    date: "May 2026",
    associatedWith: "University of Leeds",
    images: [],
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
