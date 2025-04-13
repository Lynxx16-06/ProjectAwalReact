import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import quizData from "../data/quiz";

const Quiz = () => {
  const { modulId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const quiz = quizData[modulId];
    if (quiz) {
      setQuestions(quiz);
    }
  }, [modulId]);

  useEffect(() => {
    if (showResult) {
      const savedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
      const newScore = {
        modulId,
        score,
        total: questions.length,
      };

      const updatedScores = [
        ...savedScores.filter((s) => s.modulId !== modulId),
        newScore,
      ];
      localStorage.setItem("quizScores", JSON.stringify(updatedScores));
    }
  }, [showResult, score, modulId, questions.length]);

  const handleAnswer = (option) => setSelected(option);

  const handleNext = () => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  if (!questions.length) {
    return (
      <div className="p-10 text-center text-gray-500">
        Quiz belum tersedia.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        Quiz Modul {modulId}
      </h2>
      {showResult ? (
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold mb-2">
            Skor kamu: {score} / {questions.length}
          </h3>
          <p className="text-gray-600">Mantap! 👏</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-medium mb-4">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`block w-full text-left px-4 py-2 rounded-lg border ${
                  selected === option
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={!selected}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            {currentQuestion + 1 < questions.length
              ? "Selanjutnya"
              : "Lihat Hasil"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
