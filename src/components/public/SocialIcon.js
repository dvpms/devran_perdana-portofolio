import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const socialIcons = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Instagram: FiInstagram,
};

export default function SocialIcon({ label }) {
  const Icon = socialIcons[label];

  if (!Icon) {
    return null;
  }

  return <Icon className="h-4 w-4" aria-hidden="true" />;
}

