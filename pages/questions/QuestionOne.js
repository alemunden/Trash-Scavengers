import { useState } from "react";
import AnswerOne from "./AnswerOne";

export default function QuestionOne() {
    const [data, setData] = useState();

    const questionToAnswer = () => {
        setData("Correct Answer!")
    }

    let points = 0

    return(
        <>
            <AnswerOne questionToAnswer={data}/>
            <button onClick={() => questionToAnswer()}>Plastic Bags</button>
        </>
    )
}