import { FC } from "react";

const Solution: FC<{
    name?: string;
    children: JSX.Element
}> = ({name, children }) => {
    return (
        <div className="m-auto p-3 space-y-3 rounded-lg bg-purple-100 ">
            <div className="text-center text-xl">
                <b>Solution {name === undefined ? null  : "(" + name + ")"}</b>
            </div>
            <p>
                {children}
            </p>
        </div>
    );
}

export default Solution;