import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dataModul = [
  {
    id: 1,
    title: "Pengenalan HTML",
    content: `HTML (HyperText Markup Language) adalah bahasa dasar untuk membuat struktur halaman website. 
    Dengan HTML, kamu bisa menampilkan teks, gambar, video, dan berbagai elemen lainnya di web.`,
  },
  {
    id: 2,
    title: "CSS Dasar",
    content: `CSS (Cascading Style Sheets) digunakan untuk mempercantik tampilan HTML. Kamu bisa mengatur warna, ukuran, posisi, dan animasi.`,
  },
  {
    id: 3,
    title: "JavaScript Pemula",
    content: `JavaScript adalah bahasa pemrograman yang membuat halaman web menjadi interaktif. Kamu bisa membuat form, popup, dan banyak interaksi lainnya.`,
  },
];

const ModulDetail = () => {
  const { id } = useParams();
  const [modul, setModul] = useState(null);

  useEffect(() => {
    const found = dataModul.find((item) => item.id === parseInt(id));
    setModul(found);
  }, [id]);

  if (!modul) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>Modul tidak ditemukan 😢</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">{modul.title}</h1>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
        {modul.content}
      </p>

      <div className="mt-10">
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Tandai Selesai ✅
        </button>
      </div>
        <Link to={`/quiz/${id}`} className="text-blue-600 underline ml-4">
            Coba Quiz ➜
        </Link>
    </div>
  );
};

export default ModulDetail;
