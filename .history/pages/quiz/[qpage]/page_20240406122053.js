"use client"
import QuizTemplate from "@/components/Quiz/QuizTemplate";
import { questions } from "../quizData";
import { useEffect, useState } from "react";

export default function Quiz({params}) {

      const [qs, setQs] = useState(questions);
      const [curPage, setCurPage] = useState(0);

      useEffect(() => {
        if(params.qPage && !isNaN(params.qPage)){
          setCurPage(Number(params.qPage));
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
            <QuizTemplate type={qs[curPage].type}/>
        </div>
        </>
      )
}