import QuizTemplate from "@/components/Quiz/QuizTemplate";

export default function Quiz({params}) {
      return(
        <>
        <div>
            [params.qpage]
            <QuizTemplate type="multi"/>
        </div>
        </>
      )
}