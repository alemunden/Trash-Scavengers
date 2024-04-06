"use client"
import QuizTemplate from "@/components/Quiz/QuizTemplate";
import { questions } from "../quizData";
import { useState } from "react";

export default function Quiz({params}) {

      const [qs, setQs] = useState(questions)

      return(
        <>
        <div>
            {params.qPage}
            <QuizTemplate type="multi"/>
        </div>
        </>
      )
}