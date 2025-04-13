import React from "react";
import { Link } from "react-router-dom";
import { Book, Video, HelpCircle } from "lucide-react";

const features = [
  {
    icon: <Book className="w-8 h-8 text-indigo-600" />,
    title: "Modul Interaktif",
    desc: "Belajar dengan materi terstruktur & mudah dipahami.",
  },
  {
    icon: <Video className="w-8 h-8 text-indigo-600" />,
    title: "Video Pembelajaran",
    desc: "Visualisasi materi lewat video menarik.",
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-indigo-600" />,
    title: "Quiz & Latihan",
    desc: "Uji kemampuanmu secara langsung setelah belajar.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-48">
      {/* Hero */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Selamat Datang di <span className="text-indigo-600">BelajarYuk!</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Platform belajar online interaktif yang bikin belajar jadi seru & efektif.
        </p>
        <Link
          to="/modul"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
        >
          Mulai Belajar
        </Link>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {features.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 BelajarYuk. Dibuat dengan semangat belajar 🚀
      </footer>
    </div>
  );
};

export default HomePage;
