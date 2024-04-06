"use client"
import QuizTemplate from "@/components/Quiz/QuizTemplate";
import { questions } from "../quizData";
import { useState } from "react";

export default function Quiz({params}) {

      const [qs, setQs] = useState(questions)
      if(isNaN(params.qPage)){
        return(
          <div>You are on the wrong page!</div>
        )
      }
      return(
        <>
        <div>
            {params.qPage}
            <QuizTemplate type="multi"/>
        </div>
        </>
      )
}