import { FC } from "react";
import { useState } from "react";
import SingleForm from "./submit";

const Example: FC<{
    source?: string;
    answer: string;
    children: JSX.Element
}> = ({ source, answer, children }) => {
    return (
        <div className="m-auto p-3 space-y-3 rounded-lg bg-red-100 ">
            <div className="text-center text-3xl">
                <b>Example</b>
            </div>
            <b>{source === undefined ? null  : "(" + source + ")"}</b>
            <p>
                {children}
            </p>
            <SingleForm answer={answer}/>
        </div>
    );
}

export default Example;