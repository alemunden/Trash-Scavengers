

export default function QuizTemplate(
    type="text",
    qText="Nothing..."
){
    return(
        <>
        <div>
            {type === "multi" && <input type="radio"/>}
        </div>
        </>
    )
}
