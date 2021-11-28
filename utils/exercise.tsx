import { FC } from "react";
import { useState } from "react";
import SingleForm from "./submit";

const Exercise: FC<{
    source?: string;
    answer: string;
    children: JSX.Element
}> = ({ source, answer, children }) => {
    return (
        <div className="m-auto p-3 space-y-3 rounded-lg bg-red-200 ">
            <div className="text-center text-3xl">
                <b>Exercise</b>
            </div>
            <b>{source === undefined ? null  : "(" + source + ")"}</b>
            <p>
                {children}
            </p>
            <SingleForm answer={answer}/>
        </div>
    );
}

export default Exercise;