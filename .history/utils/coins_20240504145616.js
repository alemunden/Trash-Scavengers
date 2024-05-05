import { useState } from "react";

export function useCoins(initialValue) {
    const [coins, setCoins] = useState(initialValue || 15)

    const buy = () => setCoins((x) => x - 5)

    return {
        coins,
        buy,
        setCoins
    }
}
