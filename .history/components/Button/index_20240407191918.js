import styles from './Button.module.css'

export default function Button({buttonText, props}) {
    return(
        <>
            <button style={{backgroundColor: color}}>
                {buttonText}
            </button>
        </>
    )
}