

export default function QuizTemplate(
    type="multi",
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
