import { ArrowRightIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
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
  ArrowTop: IconArrowBarToUp,
  ArrowRight: ArrowRightIcon,
  LinkedIn: LinkedInLogoIcon,
  Github: IconBrandGithub,
  Link: IconLink,
  World: IconWorld,
};

export default Icons;
export type IconType = keyof typeof Icons;
