import { useEffect, useState } from "react";
import MCQQuestion from "../../../models/MCQQuestion";

export default function StudentMCQ(props) {
  useEffect(() => {
    init();
  }, []);

  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [status, setStatus] = useState([]);
  const [marks, setMarks] = useState();

  const init = async () => {
    fetch(props.mcq.file_url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        // Handle the parsed JSON data
        const data = jsonData.questions.map(
          (q) =>
            new MCQQuestion({
              question: q.question,
              options: q.options,
              answer: q.answer,
            })
        );
        let stat = [];
        for(let i = 0; i < data.length; ++i) {
            stat.push(-1);
        }
        setQuestions(data);
        setStatus(stat);
        setResponses(new Array(data.length).fill(null));
      })
      .catch((error) => {
        // Handle errors
        alert("Error fetching JSON:", error);
      });
  };

  const handleOptionChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleDone = () => {
    if (responses.includes(null)) {
      alert("Please answer all questions!");
      return;
    }

    // Evaluate responses
    let reval = [];
    let score = 0;
    for (let i = 0; i < responses.length; ++i) {
        if (responses[i] + 1 === questions[i].answer) {reval.push(1); score++;}
        else reval.push(0);
    }

    setStatus(reval);
    setMarks(score);


    // You can perform further actions here based on the evaluation
  };

  return (
    <div className="rounded-md bg-light-theme w-full h-full flex justify-center items-center">
      <h2 className="text-5xl font-bold font-inter pt-10 w-full top-0 pl-10 pb-10 bg-dark-theme z-20 text-white fixed">
        Add Assignment
      </h2>
      <div
        className="fixed bottom-10 right-10 flex justify-center items-center bg-dark-theme text-white text-2xl p-2 rounded-full w-[5.2rem] h-[5.2rem] hover:opacity-75 hover:cursor-pointer"
        onClick={handleDone}
      >
        Done
      </div>
      <div className="flex flex-col w-full pt-36 items-center space-y-10">
        <div className="text-5xl">{props.mcq.title} MCQ 
          <div className="text-xl w-full text-center p-5">
            Maximum Marks: {questions.length}
          </div>
          {marks !== null ? <div className="text-xl w-full text-center p-2">
            You scored: {marks}
          </div> : <></>}
        </div>
        {questions.map((q, index) => (
          <div key={index} className="w-[50%]">
            <div className={`w-full h-full border-[2.5px] ${status.length === 0 || status[index] === -1 ? "border-black" : status[index] === 0 ? "border-red-500" : "border-green-500"} rounded-2xl p-5 flex flex-col items-center`}>
              <div className="text-2xl">{q.question}</div>
              <div className="mt-5 grid-cols-2 grid justify-between w-full">
                {q.options.map((option, optionIndex) => (
                  <label key={optionIndex} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`mcq-option-${index}`}
                      value={optionIndex}
                      className="form-radio text-indigo-600 h-5 w-5"
                      onChange={() => handleOptionChange(index, optionIndex)}
                    />
                    <span className="text-lg">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[13%]"></div>
    </div>
  );
}
