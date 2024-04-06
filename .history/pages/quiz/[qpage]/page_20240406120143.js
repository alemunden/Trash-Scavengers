"use client"
import QuizTemplate from "@/components/Quiz/QuizTemplate";
import { questions } from "../quizData";

export default function Quiz({params}) {
      return(
        <>
        <div>
            {params.qPage}
            <QuizTemplate type="multi"/>
        </div>
        </>
      )
}