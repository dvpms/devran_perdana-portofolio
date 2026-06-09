export const profile = {
  name: "Devran Perdana Malik",
  role: "Full Stack Developer",
  title: "Devran Perdana Malik | Full Stack Developer",
  email: "devranmalik82@gmail.com",
  phone: "6289666000506",
  location: "Tangerang, Indonesia",
  portrait: "/portrait.png",
  heading: "Membangun Sistem untuk Mengatasi Masalah Bisnis",
  subheading: "Full Stack Developer yang fokus membangun sistem digital untuk membantu bisnis bekerja lebih efisien.", 
  tagline:
    "Build with Intent, Real Impact",
  // focus:
  //   "Saat ini sedang mendalami arsitektur Event-Driven menggunakan Kafka untuk optimasi microservices, dan terbuka untuk peluang kerja sebagai Senior Full Stack Developer.",
  socials: [
    { label: "GitHub", href: "https://github.com/dvpms" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/devranperdanamalik/" },
    { label: "Instagram", href: "https://instagram.com/devran_perdana" },
  ],
};

export const en_profile = {
  name: "Devran Perdana Malik",
  role: "Full Stack Developer",
  title: "Devran Perdana Malik | Full Stack Developer",
  email: "devranmalik82@gmail.com",
  phone: "6289666000506",
  location: "Tangerang, Indonesia",
  portrait: "/portrait.png",
  heading: "Building Systems that Solve Business Problems",
  subheading: "Full Stack Developer focused on building digital systems that help businesses work more efficiently.",
  tagline:
    "Built with intent. Real impact",
  // focus:
  //   "Saat ini sedang mendalami arsitektur Event-Driven menggunakan Kafka untuk optimasi microservices, dan terbuka untuk peluang kerja sebagai Senior Full Stack Developer.",
  socials: [
    { label: "GitHub", href: "https://github.com/dvpms" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/devranperdanamalik/" },
    { label: "Instagram", href: "https://instagram.com/devran_perdana" },
  ],
};

export function getLocalizedProfile(locale) {
  return locale === "en" ? en_profile : profile;
}
