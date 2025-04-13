import React from "react";
import { Link } from "react-router-dom";

const dataModul = [
  {
    id: 1,
    title: "Pengenalan HTML",
    desc: "Belajar dasar-dasar struktur HTML dan tag penting.",
  },
  {
    id: 2,
    title: "CSS Dasar",
    desc: "Pelajari cara mempercantik tampilan website menggunakan CSS.",
  },
  {
    id: 3,
    title: "JavaScript Pemula",
    desc: "Mulai memahami dasar JS untuk interaktivitas halaman web.",
  },
];


const dataModulBackend = [
    {
        id: 1,
        title: "Python",
        desc: "Mulai memahami dasar JS untuk interaktivitas halaman web.",
      },
      {
        id: 2,
        title: "PHP",
        desc: "Mulai memahami dasar JS untuk interaktivitas halaman web.",
      },
      {
        id: 3,
        title: "Node.js",
        desc: "Mulai memahami dasar JS untuk interaktivitas halaman web.",
      },
]

const dataModulFrameWork = [
    {
        id: 1,
        title: "Vue",
        desc: "Mulai memahami dasar JS untuk interaktivitas halaman web.",
      },
      {
        id: 2,
        title: "React",
        desc: "Mulai memahami dasar JS untuk interaktivitas halaman web.",
      },
      {
        id: 3,
        title: "Angular",
        desc: "Mulai memahami dasar JS untuk interaktivitas halaman web.",
      },
]

const ModulPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 pt-40">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          📚 Daftar Modul Pembelajaran
        </h2>
        <h1 className="py-5 font-bold text-3xl">Dasar Pembuatan Website</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {dataModul.map((modul) => (
              <div
              key={modul.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {modul.title}
              </h3>
              <p className="text-gray-600 mb-4">{modul.desc}</p>
              <Link
                to={`/modul/${modul.id}`}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                Buka Modul
              </Link>
            </div>
          ))}
        </div>
        <h1 className="py-5 font-bold text-3xl">Backend</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {dataModulBackend.map((modul) => (
            <div
              key={modul.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {modul.title}
              </h3>
              <p className="text-gray-600 mb-4">{modul.desc}</p>
              <Link
                to={`/modul/${modul.id}`}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Buka Modul
              </Link>
            </div>
          ))}
        </div>
        <h1 className="py-5 font-bold text-3xl">Frontend</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {dataModul.map((modul) => (
              <div
              key={modul.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {modul.title}
              </h3>
              <p className="text-gray-600 mb-4">{modul.desc}</p>
              <Link
                to={`/modul/${modul.id}`}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                Buka Modul
              </Link>
            </div>
          ))}
        </div>
        <h1 className="py-5 font-bold text-3xl">Framework</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {dataModulFrameWork.map((modul) => (
              <div
              key={modul.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {modul.title}
              </h3>
              <p className="text-gray-600 mb-4">{modul.desc}</p>
              <Link
                to={`/modul/${modul.id}`}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                Buka Modul
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModulPage;
