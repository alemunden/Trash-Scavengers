import styles from './Button.module.css'

export default function Button({buttonText, bgColor}) {
    return(
        <>
            <button style={{backgroundColor: props.color}}>
                {buttonText}
            </button>
        </>
    )
}