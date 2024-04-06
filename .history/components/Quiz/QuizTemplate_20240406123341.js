

export default function QuizTemplate(
    type="text",
    qText="Nothing..."
){
    return(
        <>
        <div>
            {qText}
            {type === "multi" &&
            choices.length > 0 &&
            choices.map((o, i)=>(
                <div key={i}>
                    <input type="radio" value={o}/>
                </div>
            ))
            }
        </div>
        </>
    )
}
