export default function Score({coinsNumber}) {
    const changeCoins = (e) => {
        coinsNumber(e.target.value);
    };
    return(
        <>
            <p>awesome: {changeCoins}</p>
        </>
    )
}