export default function Score({coins}) {
    const changeCoins = (e) => {
        coins(e.target.value);
    };
    return(
        <>
            <p>awesome: {changeCoins}</p>
        </>
    )
}