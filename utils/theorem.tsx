import { FC } from "react";

const Theorem: FC<{
    name?: string;
    children: JSX.Element
}> = ({name, children }) => {
    return (
        <div className="m-auto p-3 space-y-3 rounded-lg bg-green-100 ">
            <div className="text-center text-xl">
                <b>Theorem {name === undefined ? null  : "(" + name + ")"}</b>
            </div>
            <p>
                {children}
            </p>
        </div>
    );
}

export default Theorem;