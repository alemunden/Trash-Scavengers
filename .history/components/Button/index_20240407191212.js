import styles from './Button.module.css'

export default function Button({buttonText}) {
    return(
        <>
            <button style={{backgroundColor: {backgroundColor}}}>
                {buttonText}
            </button>
        </>
    )
}