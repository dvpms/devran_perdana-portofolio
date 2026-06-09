import { notFound } from "next/navigation";
import { certifications, getCertificationById } from "@/data/certifications";
import CertDetailContent from "./CertDetailContent";

export function generateStaticParams() {
  return certifications.map((certification) => ({ id: certification.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const certification = getCertificationById(id);

  if (!certification) {
    return { title: "Credential Not Found - Devran Perdana Malik | Full Stack Developer" };
  }

  return {
    title: `${certification.title} - Devran Perdana Malik | Full Stack Developer`,
    description: certification.description,
  };
}

export default async function CertificationDetailPage({ params }) {
  const { id } = await params;
  const certification = getCertificationById(id);

  if (!certification) {
    notFound();
  }

  return <CertDetailContent certificationId={id} />;
}
