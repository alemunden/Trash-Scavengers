

export default function QuizTemplate(
    type="multi"
){
    return(
        <>
        <div>
            {type === "text" && <input type="text" placeholder="write your text here"/>}
        </div>
        </>
    )
}
