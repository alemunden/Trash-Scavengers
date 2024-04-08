import styles from '@/styles/QuizTutorial.module.css'
import Image from 'next/image'

export default function QuizTutorial() {
    return(
        <>
            <div>
                <Image src={'/scrappy.svg'} width={175} height={175} alt='A vector cartoon drawing of a raccoon head.'/>
                <h1>Welcome to the Game!</h1>
            </div>
            <div>
                <h2>Answer questions right:<br/>advance + gain currency!</h2>
                <div>
                    <Image src={'/fishbonegreyleft.svg'} width={53} height={53} alt='A vector drawing of a fish skeleton.'/>
                    <Image src={'/sqaurescorrect.svg'} width={109} height={96} alt='Four red squares displayed in rows of two. The top-right square is green instead of red.'/>
                    <Image arc={'/fishboneblackright.svg'} width={53} height={53}/>
                </div>
            </div>
        </>
    )
}