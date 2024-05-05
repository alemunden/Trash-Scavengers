export default function Score({coins, display}) {
    return(
        <>
            <p style={{display: display}}>awesome: {coins.score}</p>
        </>
    )
}