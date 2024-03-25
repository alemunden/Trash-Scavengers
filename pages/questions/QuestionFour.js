import { useState } from "react";
import AnswerFour from "./AnswerFour";

export default function QuestionFour() {
    const [data, setData] = useState();

    const questionToAnswer = () => {
        setData("Wrong Answer!")
    }

    return(
        <>
            <AnswerFour questionToAnswer={data}/>
            <button onClick={() => questionToAnswer()}>Paper</button>
        </>
    )
}