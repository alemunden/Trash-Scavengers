import { useRouter } from "next/router";

export default function QuizTwo() {
    const router = useRouter();
    const {points} = router.query;

    return(
        <>
            {points}
        </>
    )
}