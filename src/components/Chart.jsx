import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from "recharts";

const ScoreChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("quizScores")) || [];
    const mapped = stored.map((item) => ({
      name: `Modul ${item.modulId}`,
      skor: (item.score / item.total) * 100,
    }));
    setData(mapped);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Grafik Skor Quiz</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Modul" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis domain={[0, 100]}>
            <Label angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }}>
              Skor (%)
            </Label>
          </YAxis>
          <Tooltip />
          <Bar dataKey="skor" fill="#4f46e5" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreChart;
