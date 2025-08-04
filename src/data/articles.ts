export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  type: "Web Article" | "Research Paper" | "Tutorial" | "Case Study" | "Technical Guide" | "Blog Post";
  category: string;
  url: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    title: "Rebuilding a Classic Puzzle Game with Amazon Q CLI",
    excerpt: "How AI Prompting Transformed My Nostalgic Doctor Mario Clone into a Modern Prototype",
    date: "2025-06-30",
    type: "Web Article",
    category: "Amazon Q CLI",
    url: "https://medium.com/@ferdy.atmaja308/rebuilding-a-classic-puzzle-game-with-amazon-q-cli-6bde6e273bcc"
  },
  {
    id: 2,
    title: "Membangkitkan Bakat Data Science : Menemukan Potensi Anda melalui Program Studi Independen yang Menggebrak di Data Science Academy",
    excerpt: "Mengembangkan karir di bidang Data Science melalui program pembelajaran independen yang inovatif dan praktis.",
    date: "2023-07-08",
    type: "Web Article",
    category: "Data Science",
    url: "https://mediabangsa.co.id/membangkitkan-bakat-data-science-menemukan-potensi-anda-melalui-program-studi-independen-yang-menggebrak-di-data-science-academy/"
  },
  {
    id: 3,
    title: "Analisis Sentimen Berbasi Aspek Pada Sistem Layanan Pengaduan Masyarakat Di Kota Surabaya Menggunakan Metode Latent Dirichlet Allocation dan Naive Bayes",
    excerpt: "Implementasi machine learning untuk menganalisis sentimen masyarakat terhadap layanan publik menggunakan teknik topic modeling dan klasifikasi.",
    date: "2025-02-01",
    type: "Research Paper",
    category: "Machine Learning And Topic Modeling",
    url: "https://ejournal.itn.ac.id/index.php/jati/article/view/12438/6900"
  }
];

// Export articles sorted by date (newest first)
export const articles = articlesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());