import { useState } from "react";
import MCQQuestionCard from "./MCQQuestionCard";
import MCQQuestion from "../../../models/MCQQuestion";

// MCQAdd component for adding multiple-choice questions to an assignment
export default function MCQAdd(props) {
  // State variables for question details, assignment, deadline, and grade
  const [question, setQuestion] = useState([]);
  const [deadline, setDeadline] = useState();
  const [grade, setGrade] = useState();
  const [assignment, setAssignment] = useState("");
  const [title, setTitle] = useState("");
  const [correctOption, setCorrectOption] = useState(1);
  const [options, setOptions] = useState(["", "", "", ""]);

  // Function to submit the MCQ assignment
  const submitMCQ = async () => {
    // Checking if at least one question is added
    if (assignment.length == 0) {
      alert("Please add at least one question!");
      return;
    }

    // Creating JSON data for the questions
    const jsonData = {
      "questions": question.map(mcq => ({
        "question": mcq.question,
        "options": mcq.options,
        "answer": mcq.answer
      }))
    };

    // Creating a JSON blob
    const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: "application/json" });
    const data = JSON.parse(localStorage.getItem("AuthCookie"));

    try {
      const d = new FormData();
      d.append("email", data["email"]);
      d.append("password", data["password"]);
      d.append("course_id", props.data.meta.id);
      d.append("title", assignment);
      d.append("deadline", deadline);
      d.append("total_grade", grade);
      d.append('assignment_file', jsonBlob, `${assignment}${question.length}.json`);

      const response = await fetch(`${process.env.REACT_APP_BACKEND}/course/assignment`, {
        method: "POST",
        body: d,
      });

      if (response.status === 201) {
        window.location.reload();
      } else {
        const res = await response.json();
        alert(res.detail);
      }
    } catch (error) {
      alert("Unexpected Error Occurred!");
      console.error("Error:", error);
    }
  }

  // Function to handle option changes
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  // Function to add a new MCQ question
  const handleAddMCQ = () => {
    // Validating input fields
    if (
      title.trim() === "" ||
      options[0].trim() === "" ||
      options[1].trim() === "" ||
      options[2].trim() === "" ||
      options[3].trim() === ""
    ) {
      alert("Please enter all details");
      return;
    }

    // Creating a new MCQQuestion object and updating state variables
    const new_question = new MCQQuestion({
      question: title,
      options: options,
      answer: correctOption,
    });
    setQuestion([...question, new_question]);
    setTitle("");
    setCorrectOption(1);
    setOptions(["", "", "", ""]);
  };

  // Rendering the MCQAdd component
  return (
    <div className="w-full h-screen flex flex-col p-10 items-center overflow-scroll">
      <div className="w-2/3 h-full flex flex-col items-center space-y-5">
        <div className="flex flex-row space-x-5 items-center">
          <label className="w-72 text-2xl">MCQ Title</label>
          <input
            type="text"
            className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
            value={assignment}
            onChange={(e) => setAssignment(e.target.value)}
            required
          />
          <div className="p-2 text-white bg-black hover:cursor-pointer text-2xl rounded-xl" onClick={submitMCQ}>Submit</div>
        </div>
        <div className="flex flex-row space-x-5">
          <div className="w-[50%]">
            <label className="block font-semibold text-xl">Deadline (PST)</label>
            <input
              className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
              type="datetime-local"
              id="deadline"
              name="deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
          </div>
          <div className="w-[50%]">
            <div className="w-[40%]">
              <label className="block font-semibold text-xl w-72">Max Grade</label>
              <input
                className="px-5 w-full focus:outline-none bg-light-theme border-[0.075rem] border-black h-14 text-lg rounded-xl"
                type="number"
                id="grade"
                name="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full space-x-5">
          <div className="w-[20%]">
            <div className="w-full max-w-md mx-auto p-5 border-[2.5px] border-black rounded-xl">
              <input
                type="text"
                placeholder="Question Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <div className="mb-4">
                <label className="block mb-2">Correct Option Number</label>
                <select
                  value={correctOption}
                  onChange={(e) => setCorrectOption(parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  {options.map((option, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Options</label>
                {options.map((option, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="w-full mb-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                ))}
              </div>
              <button
                onClick={handleAddMCQ}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Add MCQ
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[80%] space-y-2">
            {question.map((e, index) => (
              <div key={index} className="w-full">
                {/* Rendering MCQQuestionCard for each question */}
                <MCQQuestionCard data={e} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
