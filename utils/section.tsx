import { FC } from "react";

const Section: FC<{
    number: string;
    section: string;
}> = ({number, section }) => {
    return (
        <div className="w-full">
            <div className="text-xl3">
                <b>{number + ": " + section}</b>
            </div>
            <hr className = "h-1 bg-gradient-to-r from-red-800"/>
        </div>
    );
}

export default Section;