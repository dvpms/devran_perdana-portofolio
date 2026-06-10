import ResumeContent from "./ResumeContent";

export const metadata = {
  title: "Resume",
  description: "Lihat resume lengkap dan riwayat pekerjaan Devran Perdana Malik.",
  openGraph: {
    title: "Resume | Devran Perdana Malik",
    description: "Lihat resume lengkap dan riwayat pekerjaan Devran Perdana Malik.",
    url: "https://devranperdana.my.id/resume",
  }
};

export default function ResumePage() {
  return <ResumeContent />;
}
