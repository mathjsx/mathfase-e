import { FC } from "react";
import { useState } from "react";
var Latex = require('react-latex');

const SingleForm: FC<{
    answer: string;
}> = ({answer }) => {
    //CAN'T MODIFY DIRECTLY
    const [input, setInput] = useState("");
    const [submit, setSubmit] = useState(false);

    function Response() {
        if (!submit) {
            return null;
        } else {
            if (input == answer) {
                return (
                    <div className="text-green-700">
                        <p>Congratulations, your answer is correct!</p>
                    </div>
                );
            } else {
                return (
                    <div className="text-red-500">
                        <p>Sorry, your answer is incorect.</p>
                    </div>
                );
            }
        }
    }

    return (
        <div className="m-auto">
            <form className="px-8 pt-6 pb-8 space-y-3">
                <label htmlFor="answer" className="block text-gray-700 text-lg font-bold mb-2">
                    Answer
                </label>
                <input
                    type="text"
                    id ="answer"
                    value={input}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus-border-blue-500 focus-ring-blue-500"
                    onChange={(event) => {setInput(event.target.value); setSubmit(false);}}
                />
                <button
                    className="w-full py-2 rounded overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-outline bg-blue-400 text-white text-sm font-bold lg:text-base"
                    type = "button"
                    onClick={(event) => {setSubmit(true); event.preventDefault();}}
                >
                    Submit
                </button>                
            </form>
            <div className="text-center">
                <Response />
            </div>
        </div>);

};

export default SingleForm;