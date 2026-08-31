import linkedinLogo from '@/assets/logos/linkedin-learning.png';
import udemyLogo from '@/assets/logos/udemy.webp';
import nptelLogo from '@/assets/logos/nptel.webp';
import forageLogo from '@/assets/logos/forage.png';
import ssnLogo from '@/assets/logos/ssn.png';
import { certificateCategoriesInfo } from './certificatesList';

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url?: string;
  logo: string;
}

export interface CertificateCategory {
  name: string;
  emoji: string;
  certificates: Certificate[];
}

const logoByIssuer: Record<string, string> = {
  'LinkedIn Learning': linkedinLogo,
  'Udemy': udemyLogo,
  'NPTEL': nptelLogo,
  'Forage': forageLogo,
  'SSN College of Engineering': ssnLogo,
};

export const certificateCategories: CertificateCategory[] = certificateCategoriesInfo.map(
  (category) => ({
    ...category,
    certificates: category.certificates.map((certificate) => ({
      ...certificate,
      logo: logoByIssuer[certificate.issuer] ?? linkedinLogo,
    })),
  })
);
