export default function Score({coins}) {
    const changeCoins = (e) => {
        coinsNumber(e.target.value);
    };
    return(
        <>
            <p>awesome: {changeCoins}</p>
        </>
    )
}