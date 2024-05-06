export default function Score({display, result}) {
    return(
        <>
            <p style={{display: display}}>awesome:<span>{result.score}</span></p>
        </>
    )
}