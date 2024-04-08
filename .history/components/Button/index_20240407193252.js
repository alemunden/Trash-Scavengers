import styles from './Button.module.css'

export default function Button({buttonText, bgColor, borderColor}) {
    return(
        <>
            <button className={styles.button} style={{backgroundColor: bgColor, borderBottom: borderColor}}>
                {buttonText}
            </button>
        </>
    )
}