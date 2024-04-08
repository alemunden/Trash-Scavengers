import styles from './Button.module.css'

export default function Button({buttonText, color}) {
    return(
        <>
            <button style={{backgroundColor: props.color}}>
                {buttonText}
            </button>
        </>
    )
}