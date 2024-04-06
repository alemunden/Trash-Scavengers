

export default function QuizTemplate(
    type="text",
    qText="Nothing..."
){
    return(
        <>
        <div>
            {qText}
            {type === "multi" && <input type="radio"/>}
        </div>
        </>
    )
}
