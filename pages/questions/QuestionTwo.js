import { useState } from "react";
import AnswerTwo from "./AnswerTwo";

export default function QuestionTwo() {
    const [data, setData] = useState();

    const questionToAnswer = () => {
        setData("Wrong Answer!")
    }

    return(
        <>
            <AnswerTwo questionToAnswer={data}/>
            <button onClick={() => questionToAnswer()}>Aluminum Cans</button>
        </>
    )
}