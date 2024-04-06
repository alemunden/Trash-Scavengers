"use client"
import QuizTemplate from "@/components/Quiz/QuizTemplate";
import { questions } from "../quizData";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Quiz({params}) {

      const r = useRouter();

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
           {/*params.qPage*/}
            <QuizTemplate
            type={qs[curPage].type}
            qText={qs[curPage].qText}
            choices={qs[curPage].choices}
            />

            <button onClick={()=>__dirname.at.push(`/quiz/${curPage-1}`)}>Prev</button>
            <button onClick={()=>__dirname.at.push(`/quiz/${curPage+1}`)}>Next</button>
        </div>
        </>
      )
}