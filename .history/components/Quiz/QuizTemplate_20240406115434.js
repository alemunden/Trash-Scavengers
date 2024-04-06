

export default function QuizTemplate(
    type="multi"
){
    return(
        <>
        <div>
            {type === "multi" && <input type="radio"/>}
        </div>
        </>
    )
}
