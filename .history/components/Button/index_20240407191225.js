import styles from './Button.module.css'

export default function Button({buttonText, backgroundColor}) {
    return(
        <>
            <button style={{backgroundColor: {bgColor}}}>
                {buttonText}
            </button>
        </>
    )
}