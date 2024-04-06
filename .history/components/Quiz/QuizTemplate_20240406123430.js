

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
                <div key={`choices_${i}`}>
                    <label>o</label>
                    <input type="radio" value={o}/>
                </div>
            ))
            }
        </div>
        </>
    )
}
