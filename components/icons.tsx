import {
  IconArrowBarToUp,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconBriefcase2,
  IconFileCertificate,
  IconLanguage,
  IconLink,
  IconMail,
  IconMinimize,
  IconPerspective,
  IconPhoneCall,
  IconSchool,
  IconSmartHome,
  IconSourceCode,
  IconWorld,
  TablerIconsProps,
} from '@tabler/icons-react';

const Icons = {
  Language: IconLanguage,
  Facebook: IconBrandFacebook,
  Phone: IconPhoneCall,
  Mail: IconMail,
  Instagram: IconBrandInstagram,
  Twitter: IconBrandX,
  Youtube: IconBrandYoutube,
  Minimize: IconMinimize,
  Certificate: IconFileCertificate,
  Work: IconBriefcase2,
  Perspective: IconPerspective,
  SourceCode: IconSourceCode,
  Education: IconSchool,
  Home: IconSmartHome,
  ArrowTop:IconArrowBarToUp,
  LinkedIn: (props: TablerIconsProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-linkedin"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Github: IconBrandGithub,
  Link: IconLink,
  World: IconWorld,
};

export default Icons;
export type IconType = keyof typeof Icons;
