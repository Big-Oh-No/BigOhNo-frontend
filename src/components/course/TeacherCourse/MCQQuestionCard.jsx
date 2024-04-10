// MCQQuestionCard component for displaying a multiple-choice question
export default function MCQQuestionCard(props) {
    return (
        <div className="w-full h-full border-[2.5px] border-black rounded-2xl p-5 flex flex-col items-center">
            {/* Displaying the question */}
            <div className="text-2xl pt-5">{props.data.question}</div>
            {/* Displaying options */}
            <div className="mt-5 grid-cols-2 grid justify-between w-full">
                {props.data.options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                        {/* Radio button for option selection */}
                        <input type="radio" name="mcq-option" value={option} className="form-radio text-indigo-600 h-5 w-5" />
                        <span className="text-lg">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
