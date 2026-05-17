export const certifications = [
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect - Associate",
    type: "Sertifikasi",
    issuer: "Amazon Web Services",
    year: "2025",
    image: "https://picsum.photos/seed/aws/800/600",
    description:
      "Sertifikasi ini memvalidasi kemampuan teknis dalam merancang arsitektur cloud terdistribusi yang aman, scalable, dan cost-efficient di ekosistem AWS.",
    skills: ["Cloud Architecture", "AWS EC2", "Amazon S3", "VPC", "IAM"],
  },
  {
    id: "gcp-pca",
    title: "Google Cloud Professional Cloud Architect",
    type: "Sertifikasi",
    issuer: "Google Cloud",
    year: "2024",
    image: "https://picsum.photos/seed/gcp/800/600",
    description:
      "Validasi keahlian tingkat lanjut dalam merancang, membangun, dan mengelola solusi bisnis yang dinamis, aman, dan scalable menggunakan teknologi Google Cloud.",
    skills: ["System Design", "GKE", "BigQuery", "Cloud Run", "Security"],
  },
  {
    id: "cka-k8s",
    title: "Certified Kubernetes Administrator (CKA)",
    type: "Sertifikasi",
    issuer: "Cloud Native Computing Foundation",
    year: "2024",
    image: "https://picsum.photos/seed/cka/800/600",
    description:
      "Membuktikan kemampuan administrasi, troubleshooting, dan setup cluster Kubernetes standar produksi dari awal tanpa tools otomatisasi pihak ketiga.",
    skills: ["Kubernetes", "Container Orchestration", "Networking", "Troubleshooting"],
  },
  {
    id: "terraform-assoc",
    title: "HashiCorp Certified: Terraform Associate",
    type: "Sertifikasi",
    issuer: "HashiCorp",
    year: "2023",
    image: "https://picsum.photos/seed/terraform/800/600",
    description:
      "Sertifikasi fundamental untuk Infrastructure as Code (IaC) menggunakan Terraform, meliputi konsep state management, modul, dan integrasi cloud provider.",
    skills: ["Infrastructure as Code", "Terraform", "State Management", "HCL"],
  },
  {
    id: "mongodb-dev",
    title: "MongoDB Certified Developer Associate",
    type: "Sertifikasi",
    issuer: "MongoDB",
    year: "2023",
    image: "https://picsum.photos/seed/mongodb/800/600",
    description:
      "Menguji pemahaman mendalam tentang data modeling, query optimization, dan indexing pada database NoSQL MongoDB untuk aplikasi berkinerja tinggi.",
    skills: ["NoSQL", "Data Modeling", "Aggregation Pipeline", "Query Optimization"],
  },
  {
    id: "backend-bootcamp",
    title: "Backend Engineering Bootcamp (Intensive)",
    type: "Pelatihan",
    issuer: "Hacktiv8",
    year: "2024",
    image: "https://picsum.photos/seed/hacktiv8/800/600",
    description:
      "Program intensif 16 minggu dengan fokus pada pengembangan sistem backend modern, optimasi struktur database, dan pipeline deployment terotomatisasi.",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "microservices-masterclass",
    title: "Microservices Architecture & Patterns",
    type: "Pelatihan",
    issuer: "Udemy (Tech Lead)",
    year: "2023",
    image: "https://picsum.photos/seed/microservices/800/600",
    description:
      "Mempelajari pola komunikasi antar service (sync vs async), saga pattern untuk transaksi terdistribusi, dan implementasi API Gateway.",
    skills: ["Microservices", "Event-Driven", "RabbitMQ", "API Gateway"],
  },
  {
    id: "adv-distributed-sys",
    title: "Advanced Distributed Systems",
    type: "Pelatihan",
    issuer: "Coursera",
    year: "2023",
    image: "https://picsum.photos/seed/distributed/800/600",
    description:
      "Membahas konsep teoretis dan praktis sistem terdistribusi, termasuk konsensus (Raft/Paxos), replikasi data, dan strategi sharding.",
    skills: ["System Design", "Consensus Algorithms", "Sharding", "CAP Theorem"],
  },
  {
    id: "go-enterprise",
    title: "Go Programming for Enterprise",
    type: "Pelatihan",
    issuer: "GopherCon Workshop",
    year: "2022",
    image: "https://picsum.photos/seed/golang/800/600",
    description:
      "Workshop mendalam tentang penerapan Golang untuk aplikasi skala enterprise, mencakup best practices concurrency, memory management, dan dependency injection.",
    skills: ["Golang", "Concurrency", "Goroutines", "Clean Architecture"],
  },
  {
    id: "sre-fundamentals",
    title: "SRE & Observability Fundamentals",
    type: "Pelatihan",
    issuer: "Datadog Academy",
    year: "2022",
    image: "https://picsum.photos/seed/sre/800/600",
    description:
      "Praktik Site Reliability Engineering, setup monitoring (SLI, SLO, SLA), dan teknik tracing untuk men-debug bottleneck pada aplikasi.",
    skills: ["SRE", "Observability", "Datadog", "Prometheus", "Grafana"],
  },
];

export function getCertificationById(certificationId) {
  return certifications.find((certification) => certification.id === certificationId);
}

export function getCertificationsByType(type) {
  return certifications.filter((certification) => certification.type === type);
}

