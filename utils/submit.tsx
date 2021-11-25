import { FC } from "react";
import { useState } from "react";


const SingleForm: FC<{
    answer: string;
}> = ({ answer }) => {
    //CAN'T MODIFY DIRECTLY
    const [input, setInput] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (event) => {
        setSubmit(true);
    }

    function Response() {
        if (!submit) {
            return null;
        } else {
            if (input == answer) {
                return (
                    <div>
                        <p>Congratulations, your answer is correct!</p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <p>Sorry, your answer is incorect.</p>
                    </div>
                );
            }
        }
    }
    function submission() {
        setSubmit(true);
    }
    
    return (
        <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Answer
                </label>
                <input
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <button
                    className="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 text-white text-sm lg:text-base"
                    onClick={() => { submission() }}
                >
                    Submit
                </button>
            </form>
            <Response />
        </div>);

};

export default SingleForm;