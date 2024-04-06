"use client"
import QuizTemplate from "@/components/Quiz/QuizTemplate";
import { questions } from "../quizData";
import { useEffect, useState } from "react";

export default function Quiz({params}) {

      const [qs, setQs] = useState(questions)

      useEffect(() => {
        if(params.qPage && !isNaN(params.qPage)){
          
        }
      }, [params])

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