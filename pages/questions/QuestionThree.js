import { useState } from "react";
import AnswerThree from "./AnswerThree";

export default function QuestionThree() {
    const [data, setData] = useState();

    const questionToAnswer = () => {
        setData("Wrong Answer!")
    }

    return(
        <>
            <AnswerThree questionToAnswer={data}/>
            <button onClick={() => questionToAnswer()}>Glass</button>
        </>
    )
}